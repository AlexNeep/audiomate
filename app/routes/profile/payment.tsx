import { LoaderFunction, redirect } from "@remix-run/node";
import { getUserProfile } from "~/utils/db.server";
import { getUserSession } from "~/utils/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const user = await getUserSession(request);
  if (!user) return redirect("/login");

  const userProfile = await getUserProfile(user.uid);

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: userProfile?.customer_number,
    return_url: request.url,
  });

  return redirect(portalSession.url, { status: 303 });
};

const PaymentDashboard = () => {
  return (
    <div>
      <h1>Payment Dashboard</h1>
    </div>
  );
};

export default PaymentDashboard;
