import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  UserCredential,
  User,
} from "firebase/auth";

import { setDoc, doc } from "firebase/firestore";

type UserInfo = User | null;

type currentUserType = {
  setDocs: (email: string, password: string) => void;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  logIn: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
  user: UserInfo | null;
};

const AuthContext = createContext<currentUserType>({} as currentUserType);

type AuthContextProviderType = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const [user, setUser] = useState({} as UserInfo);

  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function setDocs(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "user", email), {
      savedMovies: [],
    });
  }

  function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
      setUser(currentUser)
    );
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ signUp, setDocs, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export function UserAuth() {
  return useContext(AuthContext);
}
