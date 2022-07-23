

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCeA3tfGHGIYKaXtNQ64UH0K-ZGqKeUsHs",
  authDomain: "amongyyc-ebf99.firebaseapp.com",
  projectId: "amongyyc-ebf99",
  storageBucket: "amongyyc-ebf99.appspot.com",
  messagingSenderId: "983376128809",
  appId: "1:983376128809:web:81900b03b478fd9577e538",
};

// Initialize Firebase and export it as a singleton


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
