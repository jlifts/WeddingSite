/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useRef } from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { useAuth } from '../../utils/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const SignUpForm = () => {
  const userRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfRef = useRef(null);
  const { signup, googleAuth } = useAuth();
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
        userRef.current.value
      );
      history.push('/party');
    } catch {
      setError('Failed to create account');
    }
    setLoading(false);
  }
  async function handleGoogle() {
    try {
      setLoading(true);
      setError('');
      await googleAuth();
      history.push('/party');
    } catch {
      setError('Failed to create account with Google');
    }
  }

  return (
    <section className='flex align-items-center justify-center container-fluid  min-h-96 overflow-none'>
      <div
        className='flex justify-center flex-col align-items-center m-4'
        style={{ maxWidth: '1000px' }}
      >
        <form
          className='flex flex-col max-w-md mx-auto w-full rounded-lg shadow-xl overflow-hidden p-10 space-y-10'
          onSubmit={handleSubmit}
          style={{ width: '700px' }}
        >
          <div className='flex flex-row justify-evenly text-2xl font-bold'>
            <h4 className='cursor-default'>Sign Up</h4>
            <Link className='text-gray-500 hover:text-black' to='/login'>
              Sign In
            </Link>
          </div>
          {error && (
            <div
              className='bg-red-100 border-l-4 border-red-500 text-red-700 p-3'
              role='alert'
            >
              <p className='font-bold'>Error</p>
              <p>{error}</p>
            </div>
          )}
          <div className='relative border-b-2 focus-within:border-blue-500'>
            <input
              type='text'
              name='username'
              placeholder=' '
              className='block w-full appearance-none focus:outline-none bg-transparent'
              ref={userRef}
              required={true}
            />
            <label
              htmlFor='username'
              className='absolute top-0 -z-1 duration-300 origin-0'
            >
              Name
            </label>
          </div>
          <div className='relative border-b-2 focus-within:border-blue-500'>
            <input
              type='text'
              name='email'
              placeholder=' '
              className='block w-full appearance-none focus:outline-none bg-transparent'
              ref={emailRef}
              required={true}
            />
            <label
              htmlFor='email'
              className='absolute top-0 -z-1 duration-300 origin-0'
            >
              Email
            </label>
          </div>
          <div className='relative border-b-2 focus-within:border-blue-500'>
            <input
              type='password'
              name='password'
              placeholder=' '
              className='block w-full appearance-none focus:outline-none bg-transparent'
              ref={passwordRef}
              required={true}
            />
            <label
              htmlFor='password'
              className='absolute top-0 -z-1 duration-300 origin-0'
            >
              Password
            </label>
          </div>
          <div className='relative border-b-2 focus-within:border-blue-500'>
            <input
              type='password'
              name='password-conf'
              placeholder=' '
              className='block w-full appearance-none focus:outline-none bg-transparent'
              ref={passwordConfRef}
              required={true}
            />
            <label
              htmlFor='password-conf'
              className='absolute top-0 -z-1 duration-300 origin-0'
            >
              Confirm Password
            </label>
          </div>
          <button
            disabled={loading}
            type='submit'
            className='w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none'
          >
            Sign Up
          </button>
          <div className='flex justify-center mt-1 or'>or</div>
          <div>
            <GoogleLoginButton className='google' onClick={handleGoogle}>
              <span className=''>Log in with Google</span>
            </GoogleLoginButton>
          </div>
          <div className='or text-xs'>
            <Link to='/login'>Already Made an Account? Sign In</Link>
          </div>
        </form>
        <div className='flex flex-row align-items-center justify-center mt-2'>
          {'Copyright © '}
          <Link to='/'>Olivia&amp;Josh</Link> {new Date().getFullYear()}
          {'.'}
        </div>
      </div>
    </section>
  );
};
export default SignUpForm;
