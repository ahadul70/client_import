// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAae64KJ7qSF9WIC_EQAuqHezxY9HC5pHA",
  authDomain: "assignment-9-c42cc.firebaseapp.com",
  projectId: "assignment-9-c42cc",
  storageBucket: "assignment-9-c42cc.appspot.com",
  messagingSenderId: "733257952765",
  appId: "1:733257952765:web:a39e7322ff62ef2176fd94",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
