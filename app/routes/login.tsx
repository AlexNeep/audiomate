import {
  ActionFunction,
  json,
  LoaderFunction,
  MetaFunction,
  redirect,
} from "@remix-run/node";
import {
  FetcherWithComponents,
  useFetcher,
  useLoaderData,
} from "@remix-run/react";
import { BiLockAlt } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import {
  GoogleAuthProvider,
  signInAnonymously,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import Button from "~/components/core/Buttons";
import Card from "~/components/core/Card";
import ErrorMessage from "~/components/core/ErrorMessage";
import { handleClientAuth, handleLogin, handleSignUp } from "~/models/login";
import { clientAuth } from "~/services/firebase";
import { getUserSession } from "~/utils/session.server";

export const meta: MetaFunction = () => {
  return {
    title: "LanguageMate | Login",
  };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const _action = formData.get("_action");
  if (_action === "reset_password") {
    return json({
      error:
        "Sorry you have forgotten your password! We have not setup password resetting yet. Contact us and we will send you a reset link.",
    });
  }

  const email = formData.get("email") as string;
  const uid = formData.get("uid") as string;
  const token = formData.get("token") as string;
  const password = formData.get("password") as string;
  const redirect = formData.get("redirect") as string;
  const referrer = formData.get("referrer") as string;
  const hasSetMarketingEmails = formData.get("marketing_emails") == "true";

  if (uid && token) {
    return await handleClientAuth(
      email,
      uid,
      token,
      redirect,
      hasSetMarketingEmails,
      referrer
    );
  }

  if (!password) throw Error("Something went wrong- no passowrd");

  if (_action === "login") {
    return await handleLogin(email, password, redirect);
  }

  if (_action === "signup") {
    return await handleSignUp(
      email,
      password,
      redirect,
      hasSetMarketingEmails,
      referrer
    );
  }

  return json({});
};

type LoaderData = {
  user: DecodedIdToken | null;
  redirect: string;
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUserSession(request);
  if (user) return redirect("/scenarios");

  const searchParams = new URL(request.url).searchParams;
  const redirectTo = searchParams.get("redirect") ?? "";

  return json<LoaderData>({ user, redirect: redirectTo });
};

export async function createAccount({
  userCredentials,
  fetcher,
  marketingEmails,
  referrer,
  redirect = "",
}: {
  userCredentials: UserCredential;
  fetcher: FetcherWithComponents<any>;
  marketingEmails: boolean;
  referrer: string;
  redirect?: string;
}) {
  const user = userCredentials.user;
  const token = await user.getIdToken();

  fetcher.submit(
    {
      email: user.email ?? "",
      marketing_emails: `${marketingEmails}`,
      uid: user.uid,
      token,
      redirect,
      referrer,
    },
    { action: "/login", method: "post" }
  );
}

const Login = () => {
  const fetcher = useFetcher();
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [showEmailLogin, setShowEmailLogin] = useState(false);
  const [referrer, setReferrer] = useState<string>("");
  const loaderData = useLoaderData<LoaderData>();

  useEffect(() => {
    setReferrer(document.referrer);
  }, []);

  function signInAsGuest() {
    signInAnonymously(clientAuth)
      .then((userCredentials) =>
        createAccount({
          userCredentials,
          fetcher,
          marketingEmails,
          referrer,
          redirect: loaderData.redirect,
        })
      )
      .catch((e) => console.log(e));
  }

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(clientAuth, provider)
      .then((userCredentials) =>
        createAccount({
          userCredentials,
          fetcher,
          marketingEmails,
          referrer,
          redirect: loaderData.redirect,
        })
      )
      .catch((e) => console.log(e));
  };

  const isDisabled = fetcher.state === "loading";

  return (
    <div className="m-auto flex flex-col gap-6 lg:w-1/2">
      <div className="flex flex-col gap-4">
        <Card width="full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold text-blue-800">
                Accelerate your learning with Google Signup
              </h1>

              <p className="text-slate-500">
                Sign up with Google to start learning immediately, get
                translations & more for free.
              </p>
              <p className="text-slate-500"></p>
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
              <GoogleButton
                disabled={isDisabled}
                label="Continue with Google"
                onClick={handleGoogleLogin}
              />
            </div>
            {fetcher.state === "loading" && (
              <p className="text-center font-bold text-blue-800">
                Getting your account details!
              </p>
            )}
          </div>
        </Card>

        <p className="text-center font-bold">Or</p>

        <Card width="full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center justify-center gap-4">
              <EmailLogin
                disabled={isDisabled}
                showEmailLogin={showEmailLogin}
                setShowEmailLogin={setShowEmailLogin}
                fetcher={fetcher}
                redirect={loaderData.redirect}
              />
              <Button
                disabled={isDisabled}
                variant="transparent"
                onClick={signInAsGuest}
              >
                Continue as guest
              </Button>
            </div>
          </div>
        </Card>

        <img
          src="https://firebasestorage.googleapis.com/v0/b/languagemate2.appspot.com/o/IMG_0059.PNG?alt=media&token=b0426f00-2cc3-471c-9a25-f27ad180d043"
          className="mx-auto mb-10 h-auto w-1/2 max-w-[300px] rounded-md shadow-md"
        />
      </div>
    </div>
  );
};

const EmailLogin = ({
  showEmailLogin,
  setShowEmailLogin,
  fetcher,
  redirect,
  disabled,
}: {
  showEmailLogin: boolean;
  setShowEmailLogin: (show: boolean) => void;
  fetcher: FetcherWithComponents<any>;
  redirect: string;
  disabled: boolean;
}) => {
  return (
    <>
      {!showEmailLogin && (
        <>
          <Button
            disabled={disabled}
            variant="transparent"
            className="cursor-pointer text-sm text-slate-500"
            onClick={() => setShowEmailLogin(true)}
          >
            Login with email and password
          </Button>
        </>
      )}

      {fetcher?.data?.error && (
        <div className="m-auto text-center">
          <ErrorMessage error={fetcher.data.error} />
        </div>
      )}

      {showEmailLogin && (
        <>
          <fetcher.Form method="post" className="lg:w-2/3">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <input name="redirect" hidden readOnly value={redirect} />

                <label className="font-semibold">Email</label>
                <span className="flex w-full items-center gap-2 rounded-md bg-white p-2 font-semibold text-slate-700 shadow-sm placeholder:text-slate-400">
                  <HiOutlineMail size={20} className="stroke-slate-700" />
                  <input
                    className="w-full bg-transparent"
                    type="email"
                    name="email"
                    placeholder="janedoe@gmail.com"
                  />
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold">Password</label>
                <span className="flex w-full items-center gap-2 rounded-md bg-white p-2 font-semibold text-slate-700 shadow-sm placeholder:text-slate-400">
                  <BiLockAlt size={20} className="stroke-slate-700" />
                  <input
                    type="password"
                    name="password"
                    className="w-full bg-transparent"
                    placeholder="password"
                  />
                </span>
              </div>

              <div className="flex flex-col gap-6 lg:flex-row">
                <Button name="_action" value="login" type="submit">
                  Login
                </Button>

                <Button name="_action" value="signup" type="submit">
                  Sign up
                </Button>
              </div>

              <p
                onClick={() =>
                  fetcher.submit(
                    { _action: "reset_password" },
                    { method: "post" }
                  )
                }
              >
                Reset password
              </p>
            </div>
          </fetcher.Form>
        </>
      )}
    </>
  );
};

export default Login;
