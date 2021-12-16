/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Footer, ImageGrid, ImageModal, Nav } from '../components';

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
