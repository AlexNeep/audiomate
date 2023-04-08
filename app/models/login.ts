import { json } from "@remix-run/node";
import { getUserProfile, updateUserProfile } from "~/utils/db.server";

import { createUserSession } from "~/utils/session.server";
import { signIn, signUp, triggerNewAccountEvents } from "~/utils/user.server";
const newSignupRedirectAfterLoginPath = "/app";
const redirectAfterLoginPath = "/app";

export const handleLogin = async (
  email: string,
  password: string,
  redirect: string
) => {
  const { res, error } = await signIn(email, password);

  if (error) return handleLoginError(error);
  if (!res.user) return handleLoginError();

  const token = await res.user.getIdToken();

  return createUserSession(token, redirect || redirectAfterLoginPath);
};

function handleLoginError(errorCode?: string) {
  if (errorCode === "404") return { error: "Please create an account first" };
  if (errorCode === "401") return { error: "Login details are incorrect" };

  return json({ error: "Something went wrong" });
}

export const handleSignUp = async (
  email: string,
  password: string,
  redirect: string,
  hasSetMarketingEmails: boolean,
  referrer: string
) => {
  const { user } = await signUp(
    email,
    password,
    hasSetMarketingEmails,
    referrer
  );
  const token = await user.getIdToken();

  return createUserSession(token, redirect || newSignupRedirectAfterLoginPath);
};

export const handleClientAuth = async (
  email: string,
  uid: string,
  token: string,
  redirect: string,
  hasSetMarketingEmails: boolean,
  referrer: string
) => {
  const existingUser = await getUserProfile(uid);
  let relevantRedirect = redirectAfterLoginPath;

  if (!existingUser) {
    relevantRedirect = newSignupRedirectAfterLoginPath;
    await triggerNewAccountEvents(email, uid, hasSetMarketingEmails, referrer);
  }

  const newSignUpToMarketingEmails =
    existingUser && !existingUser?.marketing_emails && hasSetMarketingEmails;

  if (newSignUpToMarketingEmails) {
    await updateUserProfile(existingUser.uid, {
      marketing_emails: hasSetMarketingEmails,
    });
  }

  return createUserSession(token, redirect || relevantRedirect);
};
