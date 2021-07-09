/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useRef } from 'react';
import { useAuth } from '../../utils/AuthContext';
import { Link } from 'react-router-dom';

const passwordReset = () => {
  const emailRef = useRef(null);
  const { passwordReset } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage('');
      setError('');
      setLoading(true);
      await passwordReset(emailRef.current.value);
      setMessage('Check your mailbox to reset Password!');
    } catch {
      setError('Failed to reset');
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
            <h4 className='cursor-default'>Reset Password</h4>
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
          {message && (
            <div
              className='bg-red-100 border-l-4 border-red-500 text-red-700 p-3'
              role='alert'
            >
              <p className='font-bold'>Reset!</p>
              <p>{message}</p>
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
          <button
            disabled={loading}
            type='submit'
            className='w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none'
          >
            Reset Password
          </button>
          <Link
            to='/login'
            className='flex justify-center hover:text-blue-400 w-full'
          >
            Login
          </Link>
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
export default passwordReset;
