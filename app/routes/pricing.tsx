import {
  ActionFunction,
  json,
  LoaderFunction,
  MetaFunction,
  redirect,
} from "@remix-run/node";
import {
  Form,
  Link,
  useActionData,
  useFetcher,
  useLocation,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import Button from "~/components/core/Buttons";

import ErrorMessage from "~/components/core/ErrorMessage";
import MainFeatureBulletPoints from "~/components/landing-page/MainFeaturesBulletPoint";
import BulletPoint from "~/components/landing-page/SubBulletPoint";
import LoginModal from "~/components/Modals/LoginModal";
import { useRootData } from "~/utils/hooks";
import { freePlan, Plan, plans } from "~/utils/payment";
import { createCheckout, getPriceTierId } from "~/utils/payment.server";
import { getUserSession } from "~/utils/session.server";

export const meta: MetaFunction = () => {
  return {
    title: "LanguageMate | Pricing",
  };
};

export const action: ActionFunction = async ({ request }) => {
  try {
    const userToken = await getUserSession(request);
    const formData = await request.formData();
    const plan = formData.get("plan") as Plan | null;

    if (!userToken) {
      const url = new URL(request.url);
      const searchParams = new URLSearchParams(url.searchParams);

      if (!searchParams.get("login")) searchParams.append("login", "true");
      if (plan) searchParams.append("plan", plan);

      const newUrl = url.origin + url.pathname + "?" + searchParams.toString();
      return redirect(newUrl);
    }

    if (!plan) throw Error("Something went wrong with pricing data");

    const priceId = getPriceTierId(process.env.NODE_ENV, plan);
    const origin = request.url;

    return await createCheckout(priceId, origin as string, userToken.uid);
  } catch (e: any) {
    if ((e as Error).message === "Not logged in")
      return json({ error: e?.message }, { status: 401 });

    return json({ error: e?.message }, { status: 500 });
  }
};

const Payment = () => {
  const actionData = useActionData();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const trial = query.get("trial");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const fetcher = useFetcher();
  const user = useRootData()?.user;

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
    <div className="mb-10 ">
      <h1 className="mb-10 text-center text-3xl font-bold text-blue-800">
        Start becoming fluent today
      </h1>

      {actionData?.error && <ErrorMessage error={actionData?.error} />}

      <Form
        method="post"
        className="mx-auto flex flex-col items-center justify-center gap-10 text-center"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
          {!trial && (
            <HeroPaymentSection
              title={freePlan.title}
              id={freePlan.id}
              price={freePlan.price}
              features={freePlan.features}
              notFeatures={freePlan.not_features}
            />
          )}
          {plans.map((plan) => (
            <HeroPaymentSection
              key={plan.id}
              title={plan.title}
              id={plan.id}
              price={plan.price}
              features={plan.features}
              notFeatures={plan.not_features}
              mostPopular={plan.most_popular}
            />
          ))}
        </div>

        <div className="flex flex-col gap-8">
          <h4 className="text-xl font-bold text-blue-800">Our features</h4>

          <MainFeatureBulletPoints />

          <div>
            <Button type="submit" name="plan" value={plans[0].id}>
              Start your 7-day free trial
            </Button>
          </div>
        </div>
      </Form>

      {showLoginModal && (
        <LoginModal
          variant="pricing"
          open={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          redirect={location.pathname + location.search}
        />
      )}
    </div>
  );
};

const ColouredBackground = () => {
  return (
    <div className="absolute -z-10 h-full w-full rounded-md bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 blur-sm" />
  );
};

const HeroPaymentSection = ({
  title,
  id,
  price,
  features,
  notFeatures,
  mostPopular,
}: {
  title: string;
  id: string;
  price: number;
  features: string[];
  mostPopular?: boolean;
  notFeatures?: string[];
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
        {price > 0 ? (
          <Button type="submit" name="plan" value={id}>
            Start your 7-day free trial
          </Button>
        ) : (
          <Link to="/login">
            <Button>Get started</Button>
          </Link>
        )}
      </div>

      <ColouredBackground />
    </div>
  );
};

export default Payment;