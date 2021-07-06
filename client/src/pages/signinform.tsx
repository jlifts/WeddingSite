import React, { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import firebase from '../utils/firebase';
import { API_URL } from '../key';
import api from '../api';

type State = {
  email: string;
  password: string;
};

const initialState = {
  email: '',
  password: '',
};

type User = {
  id: string;
  uuid: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

//Add state of Login/Sign Up

const SignInForm: React.FC = () => {
  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // user signed in
      } else {
        // user not signed in
      }
    });
  }, []);

  const createUser = useCallback(
    async (params: { email: string | null; uuid: string }) => {
      return await api.post<User>(`${API_URL}/api/users`, params);
    },
    []
  );

  const setAPIToken = useCallback(async (fb: firebase.auth.UserCredential) => {
    const idToken = await fb.user?.getIdToken();
    if (!idToken) {
      console.warn('[Firebase error]: idToken is not provided');
      return;
    }
    api.setToken(idToken);
  }, []);

  const handleSignUpWithGoogle = useCallback(async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const currentUser = await firebase.auth().currentUser;

      const res = currentUser
        ? await currentUser.linkWithPopup(provider)
        : await firebase.auth().signInWithPopup(provider);

      await setAPIToken(res);

      if (!currentUser) {
        const firebaseUser = res.user as firebase.User;
        const user = await createUser({
          email: firebaseUser.email,
          uuid: firebaseUser.uid,
        });
        console.log('user: ', user);
      } else {
        // maybe get user through API
      }
    } catch (err) {
      // error handling
      console.error(err);
    }
  }, [createUser, setAPIToken]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setState((s) => ({ ...s, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();

      const { email, password } = state;

      try {
        const res = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);

        await setAPIToken(res);

        const firebaseUser = res.user as firebase.User;
        const user = await createUser({
          email: firebaseUser.email,
          uuid: firebaseUser.uid,
        });
        console.log('user: ', user);
      } catch (e) {
        // error handling
        console.error(e);
      }
    },
    [createUser, setAPIToken, state]
  );

  return (
    <section>
      <a href='/signup'>Sign Up</a>
      <a>Sign In</a>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          value={state.email}
          onChange={handleChange}
          required
        />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          value={state.password}
          onChange={handleChange}
          required
        />
      </form>
      <div>
        <div>
          <button type='submit'>Sign In</button>
        </div>
        <div>or</div>
        <div>
          <GoogleLoginButton className='' onClick={handleSignUpWithGoogle}>
            <span className=''>Log in with Google</span>
          </GoogleLoginButton>
        </div>
        <div>
          <a href='/signup'>Need to Make an Account? Sign Up</a>
        </div>
      </div>
      <div>
        {'Copyright © '}
        <a href='#'>Olivia&amp;Josh</a> {new Date().getFullYear()}
        {'.'}
      </div>
    </section>
  );
};
export default SignInForm;
