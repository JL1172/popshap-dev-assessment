
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBwsk77mLpkAnYu3reQQOJbf_vVQhwjNEc",
  authDomain: "developer-assignment-baac6.firebaseapp.com",
  projectId: "developer-assignment-baac6",
  storageBucket: "developer-assignment-baac6.firebasestorage.app",
  messagingSenderId: "336805703398",
  appId: "1:336805703398:web:dd58717dc10e91d9dd5527",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
