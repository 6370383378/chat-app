
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVnnZ8Cy2rC3nLHoNKjinr1_Qf9bLc0qc",
  authDomain: "chat-master-fb28f.firebaseapp.com",
  projectId: "chat-master-fb28f",
  storageBucket: "chat-master-fb28f.appspot.com",
  messagingSenderId: "695935464335",
  appId: "1:695935464335:web:2de242c4b1c52ae789d1fa",
  measurementId: "G-DTM99VXWH3",
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;

