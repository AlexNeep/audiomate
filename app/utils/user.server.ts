import { UserRecord } from "firebase-admin/lib/auth/user-record";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
} from "firebase/auth";
import { adminAuth } from "../services/db.server";
import { createNewProfile } from "./db.server";
import { sendWelcomeEmail } from "./emails.server";
import { Uid } from "./types";

async function signIn(
  email: string,
  password: string
): Promise<{ res?: any; error?: string }> {
  const auth = getAuth();

  return signInWithEmailAndPassword(auth, email, password)
    .then((res) => ({ res }))
    .catch((error) => {
      if (error?.code === "auth/user-not-found") return { error: "404" };
      if (error?.code === "auth/wrong-password") return { error: "401" };

      return { error: "500" };
    });
}

async function signUp(
  email: string,
  password: string,
  hasSetMarketingEmails: boolean,
  referrer: string
) {
  const auth = getAuth();
  const user = await createUserWithEmailAndPassword(auth, email, password);

  await triggerNewAccountEvents(
    email,
    user.user.uid,
    hasSetMarketingEmails,
    referrer
  );

  return user;
}

export async function triggerNewAccountEvents(
  email: string,
  uid: Uid,
  hasSetMarketingEmails: boolean,
  referrer: string
) {
  await createNewProfile(email, uid, hasSetMarketingEmails, referrer);
  if (email) sendWelcomeEmail(email);
}

async function getSessionToken(idToken: string) {
  const decodedToken = await adminAuth.verifyIdToken(idToken);

  if (decodedToken?.provider_id === "anonymous")
    return createSessionCookie(idToken);

  if (new Date().getTime() / 1000 - decodedToken.auth_time > 5 * 60) {
    throw new Error("Recent sign in required");
  }

  return createSessionCookie(idToken);
}

function createSessionCookie(idToken: string) {
  const twoWeeks = 60 * 60 * 24 * 14 * 1000;
  return adminAuth.createSessionCookie(idToken, { expiresIn: twoWeeks });
}

async function signOutFirebase() {
  await signOut(getAuth());
}

async function getCustomClaims(
  uid: string
): Promise<UserRecord["customClaims"] | undefined> {
  const userRecord = await adminAuth.getUser(uid);

  return userRecord.customClaims;
}

export async function isAdmin(uid: string): Promise<Boolean> {
  const customClaims = await getCustomClaims(uid);

  return customClaims?.admin ?? false;
}

export { signIn, signUp, getSessionToken, signOutFirebase };
