import { fetch, json, redirect } from "@remix-run/node";
import Stripe from "stripe";
import { getUserProfileByCustomerNumber, updateUserProfile } from "./db.server";
import { Plan } from "./payment";
import { Uid } from "./types";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(STRIPE_SECRET_KEY);

const priceTiers = {
  production: {
    pro: "price_1MviGoC9ECRjg1oUav6jNY5n",
    accelerated: "price_1MviHLC9ECRjg1oUDjYg9ZOU",
    ultimate: "price_1MviHgC9ECRjg1oUgi3q7fzB",
  },
  test: {
    pro: "price_1MviPgC9ECRjg1oUdTiq3h7K",
    accelerated: "price_1MviPgC9ECRjg1oUdTiq3h7K",
    ultimate: "price_1MviPgC9ECRjg1oUdTiq3h7K",
  },
};

export function getPriceTierId(
  nodeEnv: "development" | "production" | "test",
  plan: Plan
) {
  if (nodeEnv === "production") {
    return priceTiers.production[plan];
  }

  return priceTiers.test[plan];
}

export async function createCheckout(
  priceId: string,
  origin: string,
  uid: Uid,
  trial: boolean
) {
  if (!STRIPE_SECRET_KEY) throw Error();

  try {
    const session = await stripe.checkout.sessions.create({
      billing_address_collection: "auto",
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "subscription",
      allow_promotion_codes: true,
      success_url: `https://audiomate.me/payment/success`,
      cancel_url: `https://audiomate.me/payment/failure`,
      subscription_data: {
        trial_period_days: trial ? 7 : undefined,
        metadata: { client_reference_id: uid },
      },
    });

    return redirect(session.url);
  } catch (err) {
    console.log(err);

    return json({ error: "Something went wrong" });
  }
}

export async function retrieveSubscription(subscriptionId: string) {
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  return subscription;
}

export async function handlePaymentIntentSucceeded(
  paymentIntent: Stripe.PaymentIntent
) {
  const customerNumber = paymentIntent.customer;
  if (!customerNumber) throw Error("Customer account not created");

  return;
}

export async function handleInvoicePaid(invoiceData: any) {
  const subscription = await retrieveSubscription(invoiceData.subscription);

  const customerNumber = invoiceData.customer;
  const uid = subscription.metadata.client_reference_id;

  const plan: Plan = Plan.pro; //fixed for now

  return await addPlantoUser(uid, plan, customerNumber);
}

async function addPlantoUser(uid: Uid, plan: Plan, customerNumber: string) {
  const res = await fetch(`https://api.clerk.com/v1/users/${uid}/metadata`, {
    method: "patch",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
    },
    body: JSON.stringify({
      private_metadata: {
        plan,
        customerNumber,
      },
    }),
  });
}
