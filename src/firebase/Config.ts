import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmwCfQSRBFijbZnrKev3rVQyoU0TDyAHA",
  authDomain: "retoidat.firebaseapp.com",
  projectId: "retoidat",
  storageBucket: "retoidat.appspot.com",
  messagingSenderId: "800862333391",
  appId: "1:800862333391:web:ba679fa8ec2fca33278aba"
};


const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);