import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA_UumgMogCHVzM0v-eT_b2G3TX9CCFNww",
  authDomain: "pickcel-4b28f.firebaseapp.com",
  projectId: "pickcel-4b28f",
  storageBucket: "pickcel-4b28f.appspot.com",
  messagingSenderId: "657206210894",
  appId: "1:657206210894:web:127bfbe10808cd743cae1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
