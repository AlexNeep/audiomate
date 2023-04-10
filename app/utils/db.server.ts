import { firestore } from "firebase-admin";
import { db } from "~/services/db.server";
import { NEW_PROFILE_TOKENS, SUBSCRIBED_USER_MESSAGES } from "./payment";
import { UserProfile } from "./types";

const usersRef = db.collection("users");

export async function getAllUsers() {
  const snapshot = await usersRef.get();
  const users: any[] = [];

  snapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });

  return users;
}

export async function getUserProfile(uid: string) {
  const doc = await usersRef.doc(uid).get();

  if (!doc.exists) return null;

  return doc.data() as UserProfile | undefined;
}

export async function getUserProfileByCustomerNumber(
  customerNumber: string
): Promise<UserProfile> {
  const docs = await usersRef
    .limit(1)
    .where("customer_number", "==", customerNumber)
    .get();

  let doc: UserProfile[] = [];

  docs.forEach((currenctDoc) => {
    doc.push(currenctDoc.data() as UserProfile);
  });

  return doc[0];
}

export async function createNewProfile(
  email: string,
  uid: string,
  marketing_emails: boolean,
  referrer: string
) {
  const writeResult = await usersRef.doc(uid).set(
    {
      created_at: firestore.Timestamp.now(),
      tokens: NEW_PROFILE_TOKENS,
      messages:
        email === ""
          ? SUBSCRIBED_USER_MESSAGES.guest
          : SUBSCRIBED_USER_MESSAGES.free,
      email,
      uid,
      marketing_emails,
      referrer,
    },
    { merge: true }
  );

  if (!writeResult) throw Error("failed to create user profile");

  return;
}

export async function updateUserProfile(
  uid: string,
  newUserProfileData: {
    email?: string;
    customer_number?: string;
    marketing_emails?: boolean;
  }
) {
  usersRef.doc(uid).set(newUserProfileData, { merge: true });
}
