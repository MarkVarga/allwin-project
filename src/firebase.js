// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZOMr7jrsL6V_nn9sAvjPKVnnKTaTYMh0",
  authDomain: "allwin-project.firebaseapp.com",
  projectId: "allwin-project",
  storageBucket: "allwin-project.appspot.com",
  messagingSenderId: "840707790173",
  appId: "1:840707790173:web:12c144898cd48237a784b4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
