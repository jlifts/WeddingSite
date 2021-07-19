/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useContext, useState, useEffect } from 'react';
import firebase from 'firebase';
import {
  auth,
  googleProvider,
  db,
  // getCurrentTimestamp,
  timeStamp,
  storage,
} from './firebase';

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

  function uploadPicture() {
    const upload = storage.ref(`images/${image.name}`).put(image);
    upload.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.loog(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
  }

  //TODO: Create Timestamp in db for picture upload and by whom

  function rsvp(name, number) {
    db.collection('guests').doc(name).set({
      name: name,
      attendees: number,
      createdAt: timeStamp,
    });
  }

  function increment(number) {
    const increment = firebase.firestore.FieldValue.increment(number);
    db.collection('guestCount').doc('guestCount').update({
      count: increment,
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
    uploadPicture,
    rsvp,
    increment,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
