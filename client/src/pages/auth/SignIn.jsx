/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useRef, useState } from 'react';
import { useAuth } from '../../utils/AuthContext';
import { useHistory } from 'react-router-dom';
import SignInSignUpForm from '../../components/forms/SignInSignUpForm';

const SignInForm = () => {
  const { currentUser } = useAuth();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/party');
    } catch {
      setError('Failed to log in');
    }
    setLoading(false);
  }

  return (
    <>
      {currentUser ? (
        history.push('/party')
      ) : (
        <SignInSignUpForm
          signIn
          onSubmit={handleSubmit}
          error={error}
          loading={loading}
          setLoading={setLoading}
          setError={setError}
          emailRef={emailRef}
          passwordRef={passwordRef}
        />
      )}
    </>
  );
};
export default SignInForm;
