import { useUser } from "@clerk/remix";
import { createClerkClient } from "@clerk/remix/api.server";
import { getAuth } from "@clerk/remix/ssr.server";
import { ActionFunction, json, MetaFunction, redirect } from "@remix-run/node";
import { Form, useActionData, useFetcher, useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import Button from "~/components/core/Buttons";

import ErrorMessage from "~/components/core/ErrorMessage";
import Header from "~/components/Header";
import BulletPoint from "~/components/landing-page/SubBulletPoint";
import LoginModal from "~/components/Modals/LoginModal";
import { Plan, plans } from "~/utils/payment";
import { createCheckout, getPriceTierId } from "~/utils/payment.server";

export const meta: MetaFunction = () => {
  return {
    title: "AudioMate | Pricing",
  };
};

export const action: ActionFunction = async (args) => {
  const request = args.request;

  try {
    const { userId } = await getAuth(args);
    if (!userId) {
      return redirect("/login");
    }

    const user = await createClerkClient({
      secretKey: process.env.CLERK_SECRET_KEY,
    }).users.getUser(userId);

    if (user?.publicMetadata.plan) return redirect("/app");

    const formData = await request.formData();
    const plan = formData.get("plan") as Plan | null;

    if (!userId) {
      const url = new URL(request.url);
      const searchParams = new URLSearchParams(url.searchParams);

      if (!searchParams.get("login")) searchParams.append("login", "true");
      if (plan) searchParams.append("plan", plan);

      const newUrl = url.origin + url.pathname + "?" + searchParams.toString();
      return redirect(newUrl);
    }

    if (!plan) throw Error("Something went wrong with pricing data");

    const priceId = getPriceTierId(process.env.NODE_ENV, plan);
    const trial = false;
    return await createCheckout(priceId, userId, trial);
  } catch (e: any) {
    if ((e as Error).message === "Not logged in")
      return json({ error: e?.message }, { status: 401 });

    return json({ error: e?.message }, { status: 500 });
  }
};

const Payment = () => {
  const { user } = useUser();
  const actionData = useActionData();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const fetcher = useFetcher();

  useEffect(() => {
    const login = query.get("login");
    const removeParams = () => {
      let newUrl = window.location.pathname;
      const params = new URLSearchParams(window.location.search);
      params.delete("login");
      params.delete("plan");
      if (params.toString()) newUrl += "?" + params.toString();
      window.history.pushState({ path: newUrl }, "", newUrl);
    };

    if (user && plan && login) {
      setShowLoginModal(false);
      removeParams();
      fetcher.submit({ plan }, { action: "/pricing", method: "post" });
      return;
    }

    if (login) setShowLoginModal(true);
  }, [location]);

  const plan = query.get("plan");

  return (
    <div>
      <Header />

      <div className="mb-10 ">
        <h1 className="mb-10 text-center text-3xl font-bold text-blue-800">
          {/* Start becoming fluent today */}
        </h1>

        {actionData?.error && <ErrorMessage error={actionData?.error} />}

        <Form
          method="post"
          className="mx-auto flex flex-col items-center justify-center gap-10 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
            {plans.map((plan) => (
              <HeroPaymentSection
                key={plan.id}
                title={plan.title}
                id={plan.id}
                price={plan.price}
                features={plan.features}
                notFeatures={plan.not_features}
                // mostPopular={plan.most_popular}
                comingSoon={plan.coming_soon}
              />
            ))}
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-xl font-bold text-blue-800">Our features</h4>

            {/* <MainFeatureBulletPoints /> */}

            <div>
              <Button type="submit" name="plan" value={plans[0].id}>
                Buy now
              </Button>
            </div>
          </div>
        </Form>

        {showLoginModal && (
          <LoginModal
            open={showLoginModal}
            onClose={() => setShowLoginModal(false)}
            redirect={location.pathname + location.search}
          />
        )}
      </div>
    </div>
  );
};

const HeroPaymentSection = ({
  title,
  id,
  price,
  features,
  notFeatures,
  mostPopular,
  comingSoon,
}: {
  title: string;
  id: string;
  price: number;
  features: string[];
  mostPopular?: boolean;
  notFeatures?: string[];
  comingSoon?: boolean;
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-16 rounded-md bg-slate-100 p-6 shadow-lg">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold text-blue-800">{title} Plan</h2>
          <h3 className="flex items-center justify-center gap-1 text-lg font-semibold text-blue-800">
            £{price}
            {mostPopular ? (
              <span className="font-semibold text-purple-600">
                (most popular)
              </span>
            ) : (
              ""
            )}
            {comingSoon ? (
              <span className="font-semibold text-gray-600">(Coming soon)</span>
            ) : (
              ""
            )}
          </h3>
        </div>

        <div className="flex flex-col gap-2">
          <>
            {features.map((feature, index) => (
              <BulletPoint bold={index === 0} key={feature} point={feature} />
            ))}
          </>
          {notFeatures &&
            notFeatures.map((feature) => (
              <BulletPoint key={feature} point={feature} excluded />
            ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Button type="submit" name="plan" value={id}>
          Buy now
        </Button>
      </div>
    </div>
  );
};

export default Payment;
