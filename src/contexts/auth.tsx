import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "../firebase";

const authContext: any = createContext({});

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser]: any = useState("");

  const signUp = (email: any, password: any) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email: any, password: any) => {
    return setPersistence(auth, browserLocalPersistence).then(() => {
      localStorage.setItem("token", "");
      return signInWithEmailAndPassword(auth, email, password);
    });
  };

  const googleLogin = () => {
    const googleAuthProvider: any = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  };

  const logOut = () => {
    localStorage.clear();
    localStorage.setItem("token", "");
    setUser("");
    window.location.reload();
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      setUser(currentUser);
      localStorage.setItem("token", currentUser.uid);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <authContext.Provider value={{ signUp, logIn, logOut, googleLogin, user }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(authContext);
};
