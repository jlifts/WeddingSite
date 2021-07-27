/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { useDB } from '../hooks/useDB';
import { INVITE } from '../key';

const RSVP = () => {
  const { rsvp, increment } = useDB();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const nameRef = useRef(null);
  const numberRef = useRef(null);
  const codeRef = useRef(null);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (nameRef.current.value === '') {
      return setError('Please Provide Name');
    }
    if (numberRef.current.value === '') {
      return setError('Please Provide Number of Attendees in Your Party');
    }
    if (codeRef.current.value === '') {
      return setError('Please Invite Code');
    }
    if (codeRef.current.value !== INVITE) {
      return setError(`Sorry ${codeRef.current.value} is not valid`);
    }
    try {
      setLoading(true);
      setError('');
      await rsvp(nameRef.current.value, numberRef.current.value);
      await increment(numberRef.current.value);
      history.push('/thankyou');
    } catch {
      setError('Server failed to check RSVP');
    }
    setLoading(false);
  }

  //TODO: Change Firebase Rules for security

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Nav />
      <section className='flex items-center justify-center container-fluid overflow-none w-screen h-screen font-body bg-bg2 -mb-8'>
        <img
          src='img/example3.png'
          alt='corner piece'
          className='absolute top-10 right-0 transform rotate-180 z-0'
          height={200}
          width={200}
        />
        <div className='flex justify-center flex-col items-center content-center sm:m-4 z-20'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col mx-auto space-y-14 rsvp'
          >
            <h2 className='flex justify-center text-4xl font-bold'>RSVP</h2>
            {error && (
              <div
                className='bg-red-100 border-l-4 border-red-500 text-red-700 p-3'
                role='alert'
              >
                <p className='font-bold font-items'>Error</p>
                <p>{error}</p>
              </div>
            )}
            <div className='relative border-b-2 focus-within:border-primaryAccent'>
              {/* Previously border-blue-500 */}
              <input
                type='text'
                name='names'
                id='names'
                autoComplete='off'
                placeholder=' '
                className='block w-full appearance-none focus:outline-none bg-transparent'
                ref={nameRef}
                required={true}
              />
              <label
                htmlFor='names'
                className='absolute top-0 z-1 duration-300 origin-0 cursor-text'
              >
                Name(s)
              </label>
            </div>
            <div className='relative border-b-2 focus-within:border-primaryAccent'>
              {/* Previously border-blue-500 */}
              <input
                type='text'
                name='number'
                id='number'
                autoComplete='off'
                placeholder=' '
                className='block w-full appearance-none focus:outline-none bg-transparent'
                ref={numberRef}
                required={true}
              />
              <label
                htmlFor='number'
                className='absolute top-0 z-1 duration-300 origin-0 cursor-text'
              >
                Number Of Attendees Or 0 If Not Attending
              </label>
            </div>
            <div className='relative border-b-2 focus-within:border-primaryAccent'>
              <input
                type='text'
                name='code'
                id='code'
                autoComplete='off'
                placeholder=' '
                className='block w-full appearance-none focus:outline-none bg-transparent'
                ref={codeRef}
                required={true}
              />
              <label
                htmlFor='code'
                className='absolute top-0 z-1 duration-300 origin-0 cursor-text'
              >
                Invite Code
              </label>
            </div>
            <button
              disabled={loading}
              type='submit'
              className='w-full px-3 py-4 text-white bg-secondary rounded-md hover:bg-secondaryAccent focus:bg-secondaryAccent focus:outline-none font-items'
            >
              RSVP
            </button>
          </form>
        </div>
        <img
          src='img/example3.png'
          alt='corner piece'
          className='invisible sm:visible absolute -bottom-3 left-0 z-0'
          height={200}
          width={200}
        />
      </section>
      <Footer />
    </motion.main>
  );
};

export default RSVP;
