/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
// import { motion } from 'framer-motion';

const ProgressBar = ({ image, setImage }) => {
  const { progress, url } = useStorage(image);

  useEffect(() => {
    if (url) {
      setImage(null);
    }
  }, [url, setImage]);

  return (
    <div
      className='bg-grey-400 border-l-4 border-pink-500 text-pink-700 p-3 absolute bottom-0'
      role='alert'
    >
      <p className='font-bold truncate'>{image.name}</p>
      <div class='shadow w-full bg-grey-light'></div>
      <div
        className='bg-pink-200 text-xs leading-none py-1 text-center text-white'
        style={{ width: progress + '%' }}
      />
    </div>
  );
};

export default ProgressBar;
