/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import Footer from '../components/Footer';
import Nav from '../components/Nav';
import ImageGrid from '../components/ImageGrid';
import ImageModal from '../components/ImageModal';
import { useAuth } from '../utils/AuthContext';

// FEATURE: Allow comments and Likes?

const Photos = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const { currentUser } = useAuth();
  const history = useHistory();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {currentUser !== null ? (
        history.push('/photoadmin')
      ) : (
        <>
          <Nav />
          <ImageGrid setSelectedImg={setSelectedImg} />
          {selectedImg && (
            <ImageModal
              selectedImg={selectedImg}
              setSelectedImg={setSelectedImg}
            />
          )}
          <Footer />
        </>
      )}
    </motion.main>
  );
};

export default Photos;
