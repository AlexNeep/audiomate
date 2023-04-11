import { json, redirect } from "@remix-run/node";
import Stripe from "stripe";
import { getUserProfileByCustomerNumber, updateUserProfile } from "./db.server";
import { Plan, SUBSCRIBED_USER_TOKENS } from "./payment";
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
    pro: "price_1MVt91CcziHGfD7iyQmjA83R",
    accelerated: "price_1MVt9UCcziHGfD7iRCJxZG0r",
    ultimate: "price_1Mr2MZCcziHGfD7iE2efLVPX",
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
      success_url: `${origin}/payment/success`,
      cancel_url: `${origin}/payment/failure`,
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

  const customer = await getUserProfileByCustomerNumber(
    customerNumber as string
  );
  const uid = customer.uid;

  if (!uid) throw Error("Could not add tokens to user account");

  const plan: Plan = Plan.pro; //fixed for now

  return await updateUserProfile(uid, {});
}

export async function handleInvoicePaid(invoiceData: any) {
  const subscription = await retrieveSubscription(invoiceData.subscription);

  const customerNumber = invoiceData.customer;
  const uid = subscription.metadata.client_reference_id;

  return await updateUserProfile(uid, { customer_number: customerNumber });
}
