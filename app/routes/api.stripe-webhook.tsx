import { ActionFunction, json } from "@remix-run/node";
import { Stripe } from "stripe";
import {
  handleInvoicePaid,
  handlePaymentIntentSucceeded,
} from "~/utils/payment.server";

export const action: ActionFunction = async ({ request }) => {
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  let event: Stripe.Event | null = null;

  const payload = await request.text();

  if (endpointSecret) {
    const signature = request.headers.get("stripe-signature");

    try {
      event = await stripe.webhooks.constructEvent(
        payload,
        signature,
        endpointSecret
      );
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(`⚠️  Webhook signature verification failed.`, err.message);

        return json({}, { status: 400 });
      }

      return json({}, 500);
    }
  }

  switch (event?.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object;
      await handlePaymentIntentSucceeded(paymentIntent as Stripe.PaymentIntent);

      break;

    case "invoice.paid":
      const invoiceData = event.data.object as any;
      await handleInvoicePaid(invoiceData);

      break;
    default:
      console.log(`Unhandled event type ${event?.type}.`);
  }

  return json({});
};
