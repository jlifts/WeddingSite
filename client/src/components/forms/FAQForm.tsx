/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from 'react';
import axios from '../../api/axios';
import reqs from '../../api/req';
import { useAuth } from '../../utils/AuthContext';
import ErrorAlert from '../ErrorAlert';
import LoadingIndicator from '../UI/Loader';

const FAQForm: any = ({ closeModal, pageRefresh }: any) => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const questionRef = useRef<any>(null);
  const answerRef = useRef<any>(null);

  async function postFAQ() {
    const data = {
      answer: answerRef.current.value,
      question: questionRef.current.value,
      publisher: currentUser,
    };
    await axios
      .post(reqs.postFaq, data)
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
      await postFAQ();
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
        <div className="flex flex-col py-12 px-36 bg-white shadow-md hover:shodow-lg rounded-2xl relative font-items">
          <div className="flex flex-col sm:flex-row items-center justify-between w-30vw">
            <ErrorAlert error={error} />
            <div className="flex flex-col space-y-12 sm:flex-row sm:space-y-0 items-center ">
              <div className="flex flex-col ml-3 space-y-2 ">
                <div className="font-medium leading-none text-black cursor-default mb-4">
                  Add a FAQ
                </div>
                <div className="mt-6 space-y-6 w-30vw">
                  <div className="relative border-b-2 focus-within:border-primaryAccent ">
                    <input
                      type="text"
                      name="question"
                      id="question"
                      placeholder=" "
                      ref={questionRef}
                      autoComplete="off"
                      className="block w-full appearance-none focus:outline-none bg-transparent"
                    />
                    <label
                      htmlFor="question"
                      className="absolute top-0 z-1 duration-300 origin-0 cursor-text"
                    >
                      Question
                    </label>
                  </div>
                  <div className="relative border-b-2 focus-within:border-primaryAccent">
                    <textarea
                      id="answer"
                      name="answer"
                      placeholder=" "
                      ref={answerRef}
                      autoComplete="off"
                      className="block w-full appearance-none focus:outline-none bg-transparent resize-none h-24"
                    />
                    <label
                      htmlFor="answer"
                      className="absolute -top-5 z-1 duration-300 origin-0 cursor-text"
                    >
                      Answer
                    </label>
                  </div>
                </div>
                <button
                  aria-label="Update List"
                  type="submit"
                  className="flex-no-shrink bg-primary rounded px-5 ml-4 m-6 sm:m-0 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider"
                  disabled={loading}
                >
                  Add
                </button>
                {loading ? <LoadingIndicator /> : null}
              </div>
            </div>
            <button
              aria-label="Close Modal"
              onClick={closeModal}
              className="flex-no-shrink absolute top-0 right-0 px-5 ml-4 border-none py-2 text-sm hover:scale-150 font-medium tracking-wider  text-black "
            >
              X
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FAQForm;
