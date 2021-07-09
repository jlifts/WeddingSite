/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useRef } from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { useAuth } from '../../utils/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const SignInForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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
            <Link className='text-gray-500 hover:text-black' to='/signup'>
              Sign Up
            </Link>
            <h4 className='cursor-default'>Sign In</h4>
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
              name='email'
              placeholder=' '
              className='block w-full appearance-none focus:outline-none bg-transparent'
              required={true}
              ref={emailRef}
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
              required={true}
              ref={passwordRef}
            />
            <label
              htmlFor='password'
              className='absolute top-0 -z-1 duration-300 origin-0'
            >
              Password
            </label>
            <div className='or text-xs'>
              <Link to='/passwordreset'>Forgot Password?</Link>
            </div>
          </div>
          <button
            disabled={loading}
            type='submit'
            className='w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none'
          >
            Log In
          </button>
          <div className='flex justify-center my-1 or'>or</div>
          <div>
            <GoogleLoginButton className='google'>
              <span className=''>Log In with Google</span>
            </GoogleLoginButton>
          </div>
          <div className='or text-xs'>
            <Link to='/signup'>Need to Make an Account? Sign Up</Link>
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
export default SignInForm;
