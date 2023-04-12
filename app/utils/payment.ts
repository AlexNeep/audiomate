import { DAYS_PER_MONTH } from ".";

export const NEW_PROFILE_TOKENS = 20000;

export enum Plan {
  pro = "pro",
  accelerated = "accelerated",
  ultimate = "ultimate",
}

export enum Prices {
  pro = 6.99,
  accelerated = 8.99,
  ultimate = 9.99,
}

export const SUBSCRIBED_USER_MESSAGES = {
  guest: 25,
  free: 50,
  pro: 1000,
  accelerated: 3000,
  ultimate: 10000,
};

export const SUBSCRIBED_USER_TOKENS = {
  pro: 100000,
  accelerated: 200000,
  ultimate: 500000,
};

export const plans = [
  {
    id: "pro",
    title: "Pro",
    price: Prices.pro,
    features: [
      `Max output length 500 words`,
      "Max voice inputs length 30 seconds",
      "Version history",
    ],
    not_features: [
      // "Unlimited speaking practice",
      // "Vocabulary tracking",
      // "Immerse yourself in ultra-realistic audio",
    ],
    // most_popular: true,
  },
  {
    id: "accelerated",
    title: "Accelerated",
    price: Prices.accelerated,
    features: [
      `Max output length 750 words`,
      "Max voice inputs length 30 seconds",
      "Version history",
    ],
    coming_soon: true,
  },
  {
    id: "ultimate",
    title: "Ultimate",
    price: Prices.ultimate,
    features: [
      `Max output length 2000 words`,
      "Max voice inputs length 60 seconds",
      "Version history",
    ],
    coming_soon: true,
  },
];

export function getEstimatedConversations(tokens: number) {
  const AVERAGE_TOKENS_PER_SCENARIO = 1000;

  const expectedConversations = tokens / AVERAGE_TOKENS_PER_SCENARIO;

  return Math.round(expectedConversations);
}

export function getEstimatedConversationsPerDay(tokens: number) {
  const expectedConversations =
    getEstimatedConversations(tokens) / DAYS_PER_MONTH;
  return expectedConversations.toFixed(1);
}
