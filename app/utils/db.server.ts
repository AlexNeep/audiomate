import { firestore } from "firebase-admin";
import { Lesson } from "~/routes/lessons/$lessonId";
import { db } from "~/services/db.server";
import { LanguageCode } from "./languages";
import { NEW_PROFILE_TOKENS, SUBSCRIBED_USER_MESSAGES } from "./payment";
import {
  Category,
  DynamicScenario,
  QuizWords,
  ScenarioDescription,
  Uid,
  UserProfile,
} from "./types";

const usersRef = db.collection("users");
const scenarioRef = db.collection("scenarios-dynamic");
const categoriesRef = db.collection("categories");

export async function getUserTokens(uid: string) {
  const userProfile = await getUserProfile(uid);

  if (!userProfile) return null;

  return userProfile.tokens;
}

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
    tokens?: number;
    messages?: number;
    customer_number?: string;
    target_language?: LanguageCode;
    marketing_emails?: boolean;
    last_login?: Date;
    gems?: number | firestore.FieldValue;
    streak?: number;
    completed_scenarios?: string[];
    streak_last_updated?: Date;
    completed_lessons?: UserProfile["completed_lessons"];
    in_progress_lessons?: UserProfile["in_progress_lessons"];
  }
) {
  usersRef.doc(uid).set(newUserProfileData, { merge: true });
}

export function setUserTargetLanguage(uid: Uid, targetLanguage: LanguageCode) {
  return updateUserProfile(uid, { target_language: targetLanguage });
}

export async function getAllScenarios(
  count: number
): Promise<DynamicScenario[]> {
  const snapshot = await scenarioRef
    .limit(count)
    .where("approved", "==", true)
    .get();
  const scenarios: DynamicScenario[] = [];

  snapshot.forEach((doc) => {
    scenarios.push({ id: doc.id, ...doc.data() } as DynamicScenario);
  });

  return scenarios;
}

export async function getScenariosFromCategory(
  categoryId: string,
  count: number
) {
  const snapshot = await scenarioRef
    .limit(count)
    .where("category_ids", "array-contains", categoryId)
    .get();
  const scenarios: DynamicScenario[] = [];

  snapshot.forEach((doc) => {
    scenarios.push({ id: doc.id, ...doc.data() } as DynamicScenario);
  });

  return scenarios;
}

export async function getCategories(count: number) {
  const snapshot = await categoriesRef.limit(count).get();
  const categories: Category[] = [];

  snapshot.forEach((doc) => {
    categories.push({ id: doc.id, ...doc.data() } as Category);
  });

  return categories;
}

export async function getCategory(id: string) {
  const doc = await categoriesRef.doc(id).get();

  if (!doc.exists) return null;

  return { ...doc.data(), id } as Category;
}

export async function getScenario(id: string) {
  const doc = await scenarioRef.doc(id).get();

  if (!doc.exists) return null;

  return doc.data() as DynamicScenario;
}

const DUPLICATE_SCENARIO_ERROR = "Scenario already exists with that id";

export async function addScenario(scenario: DynamicScenario, uid: Uid) {
  const id = scenario.id;
  const userProfile = await getUserProfile(uid);
  const existingScenario = await getScenario(id);

  if (existingScenario) throw Error(DUPLICATE_SCENARIO_ERROR);

  const writeResult = await scenarioRef.doc(id).set({
    ...scenario,
    author_uid: uid,
    author_email: userProfile?.email ?? "",
  });

  if (!writeResult) throw Error("Could not create scenario");
}

export async function updateScenario(
  scenarioId: string,
  quiz_words: QuizWords
) {
  const writeResult = await scenarioRef.doc(scenarioId).update({ quiz_words });

  if (!writeResult) throw Error("Could not update scenario");
}

export async function updateScenarioDescription(
  scenarioId: string,
  description: ScenarioDescription[]
) {
  const writeResult = await scenarioRef.doc(scenarioId).update({ description });

  if (!writeResult) throw Error("Could not update scenario");
}

export function getFirestoreDate(date: firestore.Timestamp) {
  return new firestore.Timestamp(date.seconds, date.nanoseconds).toDate();
}
