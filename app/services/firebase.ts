import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqUOhATNBI_6MTCavtjLvCecp1enuSl7g",
  authDomain: "audiomate.firebaseapp.com",
  projectId: "audiomate",
  storageBucket: "audiomate.appspot.com",
  messagingSenderId: "768929423248",
  appId: "1:768929423248:web:8d0f7a3e2617c1ea62dd15",
  measurementId: "G-046G6QMKSH",
};

let app;
try {
  app = getApp();
} catch (e) {
  app = initializeApp(firebaseConfig);
}

const clientAuth = getAuth(app);

export { clientAuth };
