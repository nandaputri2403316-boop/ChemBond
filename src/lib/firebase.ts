import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBVoM6NxPgqKKu-T490DHNlkjylWyCgwzU",
  authDomain: "chembond-8a385.firebaseapp.com",
  projectId: "chembond-8a385",
  storageBucket: "chembond-8a385.firebasestorage.app",
  messagingSenderId: "239955144287",
  appId: "1:239955144287:web:8961ce6b40da498b3075ea",
  measurementId: "G-93RNK71SR4"
};

const app = initializeApp(firebaseConfig);

export const auth = null;
export const db = null;

export default app;

isSupported().then((supported) => {
  if (supported) {
    getAnalytics(app);
  }
});