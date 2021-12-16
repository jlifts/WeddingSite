import React, { useRef, useState } from 'react';
import axios from '../../api/axios';
import reqs from '../../api/req';
import ErrorAlert from '../ErrorAlert';

const GuestUpdateForm = ({ pageRefresh, closeModal }: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const nameRef = useRef<any>(null);
  const numberRef = useRef<any>(null);

  async function postGuest() {
    const data = {
      name: nameRef.current.value,
      number: numberRef.current.value,
    };
    await axios
      .post(reqs.postNewGuest, data)
      .then((_req) => {
        // console.log(req);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      await postGuest();
    } catch {
      setError('Server failed to check RSVP');
    }
    setLoading(false);
    closeModal();
    pageRefresh();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-transparent">
        <div className="flex flex-col p-12 bg-white shadow-md hover:shodow-lg rounded-2xl relative font-items">
          <div className="flex flex-col sm:flex-row items-center justify-between ">
            <ErrorAlert error={error} />
            <div className="flex flex-col space-y-12 sm:flex-row sm:space-y-0 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 rounded-2xl p-3 border border-gray-800 text-blue-400 bg-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div className="flex flex-col ml-3">
                <div className="font-medium leading-none text-black cursor-default">
                  Update Guest List
                </div>

                <p className="text-sm text-gray-500 leading-none mt-1 cursor-default">
                  WARNING: This updates the guest list directly
                </p>
                <div className="mt-6 space-y-6">
                  <div className="relative border-b-2 focus-within:border-primaryAccent ">
                    <input
                      type="text"
                      name="names"
                      id="names"
                      placeholder=" "
                      ref={nameRef}
                      autoComplete="off"
                      className="block w-full appearance-none focus:outline-none bg-transparent"
                    />
                    <label
                      htmlFor="names"
                      className="absolute top-0 z-1 duration-300 origin-0 cursor-text"
                    >
                      Name(s)
                    </label>
                  </div>
                  <div className="relative border-b-2 focus-within:border-primaryAccent">
                    <input
                      type="text"
                      id="number"
                      name="number"
                      placeholder=" "
                      ref={numberRef}
                      autoComplete="off"
                      className="block w-full appearance-none focus:outline-none bg-transparent"
                    />
                    <label
                      htmlFor="number"
                      className="absolute top-0 z-1 duration-300 origin-0 cursor-text"
                    >
                      Number Of Attendees
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button
              aria-label="Close Modal"
              onClick={closeModal}
              className="flex-no-shrink absolute top-0 right-0 px-5 ml-4 border-none py-2 text-sm hover:scale-150 font-medium tracking-wider  text-black "
            >
              X
            </button>
            <button
              aria-label="Update List"
              type="submit"
              className="flex-no-shrink px-5 ml-4 m-6 sm:m-0 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider"
              disabled={loading}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default GuestUpdateForm;
