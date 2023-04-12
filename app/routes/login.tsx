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
import Header from "~/components/Header";
import { SignIn } from "@clerk/remix";

export const meta: MetaFunction = () => {
  return {
    title: "AudioMate | Login",
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

const Login = () => {
  return (
    <div className="mx-auto flex flex-col gap-6 ">
      <Header />
      <div className="mx-auto flex flex-col items-center justify-center gap-4 lg:w-1/2">
        <SignIn afterSignInUrl={"/app"} afterSignUpUrl={"/pricing"} />
      </div>
    </div>
  );
};

export default Login;
