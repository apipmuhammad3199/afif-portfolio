import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMPCIaVYsQ4GPxoK00E11-SA-CGcLuDgU",
  authDomain: "apip-potfolio.firebaseapp.com",
  databaseURL: "https://apip-potfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "apip-potfolio",
  storageBucket: "apip-potfolio.firebasestorage.app",
  messagingSenderId: "92821830328",
  appId: "1:92821830328:web:bdf0a568612a6d9499124d"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
