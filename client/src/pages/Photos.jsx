/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { motion } from 'framer-motion';

import Footer from '../components/Footer';
import Nav from '../components/Nav';
import ImageGrid from '../components/ImageGrid';
import ImageModal from '../components/ImageModal';

// FEATURE: Allow comments and Likes?

const Photos = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Nav />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <ImageModal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Footer />
    </>
  );
};

export default Photos;
