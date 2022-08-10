import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDNmiPAC9aJzJ8WfzhWK7AFXrej6zy9XE8",
  authDomain: "d-sastre.firebaseapp.com",
  projectId: "d-sastre",
  storageBucket: "d-sastre.appspot.com",
  messagingSenderId: "876675504336",
  appId: "1:876675504336:web:c2ba89675a596165bd26d5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);