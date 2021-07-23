/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { motion } from 'framer-motion';

import useFirestore from '../hooks/useFirestore';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  return (
    <section className='font-body flex flex-col  w-screen min-h-screen'>
      <h3 className='text-5xl my-12 flex justify-center'>
        Moments We Will Never Forget
      </h3>
      <div className='mx-12 masonry before:box-inherit after:box-inherit'>
        {docs ? (
          docs.map((doc) => (
            <motion.div
              className='p-1 my-6'
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
              s
              onClick={() => setSelectedImg(doc.url)}
            >
              <motion.img
                src={doc.url}
                className=' rounded-md cursor-pointer'
                alt='uploaded pic'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                height={250}
                width={250}
              />
            </motion.div>
          ))
        ) : (
          <section className='font-body flex justify-center items-center h-screen'>
            <div className='text-5xl'>Coming Soon!</div>
          </section>
        )}
      </div>
    </section>
  );
};

export default ImageGrid;
