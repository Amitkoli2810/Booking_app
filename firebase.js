import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBge4Z2OPd88e879cUmOyffUVQKEaU7JXg",
  authDomain: "booking-project-3d2ab.firebaseapp.com",
  projectId: "booking-project-3d2ab",
  storageBucket: "booking-project-3d2ab.appspot.com",
  messagingSenderId: "863735097440",
  appId: "1:863735097440:web:2960a1d44eed39cb50bb05",
  measurementId: "G-C0VX3ZKC3S"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

const db = getFirestore()

export {auth,db};