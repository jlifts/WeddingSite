import React, { useState, useRef } from 'react';

import { useDB } from '../hooks/useDB';

const CountModal = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const nameRef = useRef(null);
  const numberRef = useRef(null);
  const { rsvp, increment } = useDB();

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      await rsvp(nameRef.current.value, numberRef.current.value);
      await increment(numberRef.current.value);
    } catch {
      setError('Server failed to check RSVP');
    }
    setLoading(false);
    closeModal();
  }

  return (
    <>
      <button onClick={openModal} className='flex justify-center'>
        Manual Update
      </button>
      {open ? (
        <form onSubmit={handleSubmit}>
          <div className='flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-transparent'>
            <div className='flex flex-col p-12 bg-white shadow-md hover:shodow-lg rounded-2xl relative font-items'>
              <div className='flex items-center justify-between '>
                {error && (
                  <div
                    className='bg-red-100 border-l-4 border-red-500 text-red-700 p-3'
                    role='alert'
                  >
                    <p className='font-bold font-items'>Error</p>
                    <p>{error}</p>
                  </div>
                )}
                <div className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-16 h-16 rounded-2xl p-3 border border-gray-800 text-blue-400 bg-gray-900'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    ></path>
                  </svg>
                  <div className='flex flex-col ml-3'>
                    <div className='font-medium leading-none text-black cursor-default'>
                      Update Guest List
                    </div>

                    <p className='text-sm text-gray-500 leading-none mt-1 cursor-default'>
                      WARNING: This updates the guest list directly
                    </p>
                    <div className='mt-6 space-y-6'>
                      <div className='relative border-b-2 focus-within:border-primaryAccent '>
                        <input
                          type='text'
                          name='names'
                          id='names'
                          placeholder=' '
                          ref={nameRef}
                          autoComplete='off'
                          className='block w-full appearance-none focus:outline-none bg-transparent'
                        />
                        <label
                          htmlFor='names'
                          className='absolute top-0 z-1 duration-300 origin-0 cursor-text'
                        >
                          Name(s)
                        </label>
                      </div>
                      <div className='relative border-b-2 focus-within:border-primaryAccent'>
                        <input
                          type='text'
                          id='number'
                          name='number'
                          placeholder=' '
                          ref={numberRef}
                          autoComplete='off'
                          className='block w-full appearance-none focus:outline-none bg-transparent'
                        />
                        <label
                          htmlFor='number'
                          className='absolute top-0 z-1 duration-300 origin-0 cursor-text'
                        >
                          Number Of Attendees
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className='flex-no-shrink absolute top-0 right-0 px-5 ml-4 border-none py-2 text-sm hover:scale-150 font-medium tracking-wider  text-black '
                >
                  X
                </button>
                <button
                  type='submit'
                  className='flex-no-shrink px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider'
                  disabled={loading}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        ''
      )}
    </>
  );
};

export default CountModal;
