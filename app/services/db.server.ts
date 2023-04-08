import admin, { AppOptions } from "firebase-admin";
import { initializeApp as initializeAdminApp } from "firebase-admin/app";
import { initializeApp } from "firebase/app";

if (!admin.apps.length) {
  const config: AppOptions = {
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  };

  initializeAdminApp(config);
}

const db = admin.firestore();
const adminAuth = admin.auth();

let Firebase: any;

if (!Firebase?.apps?.length) {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "audiomate.firebaseapp.com",
    projectId: "audiomate",
    storageBucket: "audiomate.appspot.com",
    messagingSenderId: "768929423248",
    appId: "1:768929423248:web:8d0f7a3e2617c1ea62dd15",
    measurementId: "G-046G6QMKSH",
  };

  Firebase = initializeApp(firebaseConfig);
}

export { db, adminAuth };
