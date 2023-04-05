import { DynamicScenario, Mode, UserProfile } from "./types";

export const getRandomIndexOfArray = (array: any[]): number =>
  Math.max(Math.round(Math.random() * array.length) - 1, 0);

export function getTokenCost(tokens: number, model: string) {
  if (model === "text-curie-001") return Math.round(tokens * 0.1);

  return tokens;
}

export function removePunctuationFromStringArray(string: string[]) {
  return string.map((word) =>
    word.replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g, "")
  );
}

export function removePunctuationFromString(string: string) {
  return string.replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g, "");
}

export const DAYS_PER_MONTH = 30;

export function isPremium(user?: UserProfile | null) {
  return Boolean(user && user.customer_number);
}

export function isGuest(user?: UserProfile | null) {
  if (!user?.email || user.email === "") return true;
  return false;
}

export function isBetaTester(user?: UserProfile | null) {
  return Boolean(user && user.beta_tester);
}

export function hasGuidedScenario(scenario: DynamicScenario) {
  return Boolean(scenario.description);
}
export function hasFreeRoamScenario(scenario: DynamicScenario) {
  return Boolean(scenario.free_roam);
}

export function hasMode(scenario: DynamicScenario, mode: Mode) {
  if (mode === "guided") return hasGuidedScenario(scenario);

  if (mode === "free-roam") return hasFreeRoamScenario(scenario);
}

export enum GEMS_REWARDS {
  MESSAGE = 2,
  SCENARIO = 5,
  NEW_SCENARIO = 10,
}

export function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
