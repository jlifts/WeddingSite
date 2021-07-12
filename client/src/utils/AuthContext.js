/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useContext, useState, useEffect } from 'react';
import { auth, googleProvider } from './firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password, username) {
    return auth.createUserWithEmailAndPassword(email, password).then((res) => {
      res.user.updateProfile({ displayName: username });
    });
  }

  function updateName(username) {
    return currentUser.updateProfile({ displayName: username });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function googleAuth() {
    return auth.signInWithPopup(googleProvider).then((res) => {
      // eslint-disable-next-line no-undef
      console.log(res);
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
