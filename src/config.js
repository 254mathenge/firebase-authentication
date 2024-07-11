/* eslint-disable no-unused-vars */


import { initializeApp } from "firebase/app";

import {getAuth ,GoogleAuthProvider,FacebookAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBOGUAB6SYVaOcVGguJVlWHYbsu5vQSARM",
  authDomain: "fir-auth-fda9f.firebaseapp.com",
  projectId: "fir-auth-fda9f",
  storageBucket: "fir-auth-fda9f.appspot.com",
  messagingSenderId: "672309468629",
  appId: "1:672309468629:web:ec82fd71d31e41ba9b315c",
  measurementId: "G-XKS1QJ98WT"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const providerf = new FacebookAuthProvider();
export { auth, provider ,providerf};