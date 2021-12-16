/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useRef } from 'react';
import { useAuth } from '../../utils/AuthContext';
import { useHistory } from 'react-router-dom';
import SignInSignUpForm from '../../components/forms/SignInSignUpForm';

const SignUpForm = () => {
  const userRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfRef = useRef(null);
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfRef.current.value) {
      return setError('Passwords do not match');
    }
    if (emailRef.current.value === '') {
      return setError('Please Provide Email');
    }
    try {
      setLoading(true);
      setError('');
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        userRef.current.value,
      );
      history.push('/party');
    } catch {
      setError('Failed to create account');
    }
    setLoading(false);
  }

  return (
    <>
      {currentUser ? (
        history.push('/party')
      ) : (
        <SignInSignUpForm
          onSubmit={handleSubmit}
          error={error}
          loading={loading}
          setLoading={setLoading}
          setError={setError}
          emailRef={emailRef}
          passwordRef={passwordRef}
          passwordConfRef={passwordConfRef}
        />
      )}
    </>
  );
};
export default SignUpForm;
