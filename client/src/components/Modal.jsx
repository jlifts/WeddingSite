/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-undef */
// Inspired by aji
import React, { useState } from 'react';

import { useAuth } from '../utils/AuthContext';
import { storage } from '../utils/firebase';

//TODO: Finish Loading Bar

const Modal = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [fileProgress, setFileProgress] = useState(0);
  const { currentUser } = useAuth();

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  function handleChange(e) {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const upload = storage.ref(`${image.name}`).put(image);
    upload.on(
      'state_changed',
      (snapshot) => {
        const progress = snapshot.bytesTransferred / snapshot.totalBytes;
        setFileProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    // uploadPicture(image);
    closeModal();
  }

  return (
    <>
      <button
        onClick={openModal}
        className='flex px-4 py-3 bg-primary justify-center hover:bg-primaryAccent w-40 rounded'
      >
        Upload Photo
      </button>
      {open ? (
        <form onSubmit={handleSubmit}>
          <div className='flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-transparent'>
            <div className='flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl relative font-items'>
              <div className='flex items-center justify-between '>
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
                      Upload Photo ?
                    </div>

                    <p className='text-sm text-gray-500 leading-none mt-1 cursor-default'>
                      This will upload the photo you select to the home page's
                      photo section
                    </p>
                    <p className='text-sm text-gray-500 leading-none mt-1 cursor-default'>
                      Just Drag and Drop or Click Here!
                    </p>
                    <input
                      multiple={true}
                      onChange={handleChange}
                      type='file'
                      name='image'
                      className='my-4'
                    />
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
                  className='flex-no-shrink bg-green-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-500 text-white rounded-full'
                >
                  Upload
                </button>
              </div>
            </div>
            {/* <div
              className='bg-grey-200 border-l-4 border-blue-500 text-blue-700 p-3'
              role='alert'
              key={image.id}
            >
              <p className='font-bold truncate'>{image.name}</p>
              <div class='shadow w-full bg-grey-light'>
                <progress
                  class='bg-blue text-xs leading-none py-1 text-center text-white'
                  now={fileProgress * 100}
                  label={` ${Math.round(fileProgress * 100)}%`}
                />
              </div>
            </div> */}
          </div>
        </form>
      ) : (
        ''
      )}
    </>
  );
};

export default Modal;
