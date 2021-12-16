/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { trackPromise } from 'react-promise-tracker';

import axios from '../../api/axios';
import req from '../../api/req';
import LoadingIndicator from './Loader';

const ImageGrid = ({ setSelectedImg }) => {
  const [docs, setDocs] = useState();

  // Firestore + Axios

  async function fetchData() {
    const data = await axios.get(req.fetchPhoto);
    return data.data;
  }

  useEffect(() => {
    trackPromise(fetchData()).then(setDocs);
  }, []);

  return (
    <section className="font-body flex flex-col w-screen min-h-screen">
      <h3 className="text-lg sm:text-5xl my-12 flex justify-center">
        Moments We Will Never Forget
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-4 mx-12 before:box-inherit after:box-inherit">
        {/* masonry class is messing with delete */}
        {docs ? (
          docs.map((doc) => (
            <>
              <motion.div
                className="p-1 my-6"
                key={doc.id}
                layout
                whileHover={{ opacity: 1 }}
                s
                onClick={() => setSelectedImg(doc.url)}
                //Throw away keys
                key={Math.random().toString(36).substr(2, 9)}
              >
                <motion.img
                  src={doc.url}
                  className=" rounded-md cursor-pointer"
                  alt="uploaded pic"
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: 1 }}
                  // transition={{ delay: 0.4 }}
                  height={250}
                  width={250}
                />
              </motion.div>
            </>
          ))
        ) : (
          <div className="font-body flex items-center h-screen">
            <LoadingIndicator />
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGrid;
