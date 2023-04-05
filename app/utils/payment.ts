import { DAYS_PER_MONTH } from ".";

export const NEW_PROFILE_TOKENS = 20000;

export enum Plan {
  pro = "pro",
  accelerated = "accelerated",
  ultimate = "ultimate",
}

export enum Prices {
  pro = 6.99,
  accelerated = 14.99,
  ultimate = 29.99,
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

export const freePlan = {
  id: "free",
  title: "Free",
  price: 0,
  features: [`10 daily AI-powered messages`, "Limited translations"],
  not_features: [
    "Vocabulary tracking",
    "Unlimited message corrections",
    "Unlimited speaking practice",
    "Unlimited listening practice",
    "Immerse yourself in ultra-realistic audio",
    "Get word definitions",
  ],
};

export const plans = [
  {
    id: "pro",
    title: "Pro",
    price: Prices.pro,
    features: [
      `30 daily AI-powered messages`,
      "Unlimited translations",
      "Get word definitions",
      "Unlimited message corrections",
      "Unlimited listening practice",
    ],
    not_features: [
      "Unlimited speaking practice",
      "Vocabulary tracking",
      "Immerse yourself in ultra-realistic audio",
    ],
  },
  {
    id: "accelerated",
    title: "Accelerated",
    price: Prices.accelerated,
    features: [
      `100 daily AI-powered messages`,
      "Unlimited translations",
      "Vocabulary tracking",
      "Get word definitions",
      "Unlimited message corrections",
      "Unlimited speaking practice",
      "Unlimited listening practice",
      "Immerse yourself in ultra-realistic audio",
    ],
    most_popular: true,
  },
  {
    id: "ultimate",
    title: "Ultimate",
    price: Prices.ultimate,
    features: [
      `Unlimited AI-powered messages`,
      "Unlimited translations",
      "Vocabulary tracking",
      "Get word definitions",
      "Unlimited message corrections",
      "Unlimited speaking practice",
      "Unlimited listening practice",
      "Immerse yourself in ultra-realistic audio",
    ],
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
