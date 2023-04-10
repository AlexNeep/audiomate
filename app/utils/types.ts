declare global {
  interface Window {
    dataLayer: any;
    fathom: any;
  }
}

import { firestore } from "firebase-admin";

export type Uid = string;

export type UserProfile = {
  email?: string;
  uid: Uid;
  customer_number?: string;
  plan?: string;
  marketing_emails?: boolean;
  last_login?: firestore.Timestamp;
  beta_tester?: boolean;
  referrer?: string;
  created_at?: firestore.Timestamp;
};

export enum Model {
  curie = "text-curie-001",
  davinci = "text-davinci-003",
  chatGPT = "gpt-3.5-turbo",
}

export enum ModelErrors {
  DEFAULT = "Our service is unavailable right now as it is in high demand. We're thrilled to have so many users! Fear not, we're hustling to make some room and get things back up to speed faster than a cheetah on roller skates. In the meantime, hang tight and enjoy some cat videos (we won't judge). Thanks for your patience and for being a part of our community!",
}
