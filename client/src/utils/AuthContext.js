/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useContext, useState, useEffect } from 'react';

import { auth, googleProvider } from './firebase';
import axios from '../api/axios';
import reqs from '../api/req';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function signup(email, password, username) {
    return auth.createUserWithEmailAndPassword(email, password).then((res) => {
      res.user.updateProfile({ displayName: username });
    });
  }
  // async function signup(email, password, username) {
  //   const data = {
  //     email: email,
  //     password: password,
  //     handle: username,
  //   };
  //   return axios.post(reqs.postUser, data).then((res) => res.data);
  // }

  function updateName(username) {
    return currentUser.updateProfile({ displayName: username });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  async function googleAuth() {
    return auth.signInWithPopup(googleProvider).then((res) => {
      return res.user;
    });
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword() {
    // eslint-disable-next-line no-undef
    return auth.sendPasswordResetEmail(email);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      // if (user) {
      //   return user;
      // }

      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    updateName,
    resetPassword,
    googleAuth,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
