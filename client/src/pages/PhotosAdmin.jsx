/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import React, { useState } from 'react';

import Footer from '../components/Footer';
import Nav from '../components/Nav';
import ImageGridAdmin from '../components/ImageGridAdmin';
import ImageGrid from '../components/ImageGrid';
import ImageModal from '../components/ImageModal';
import { GROOM, BRIDE } from '../key';
import { useAuth } from '../utils/AuthContext';

// FEATURE: Allow comments and Likes?

const PhotosAdmin = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const { currentUser } = useAuth();

  return (
    <>
      {currentUser.uid === GROOM ? (
        <>
          <Nav />
          <ImageGridAdmin setSelectedImg={setSelectedImg} />
          {selectedImg && (
            <ImageModal
              selectedImg={selectedImg}
              setSelectedImg={setSelectedImg}
            />
          )}
          <Footer />
        </>
      ) : currentUser.uid === BRIDE ? (
        <>
          <Nav />
          <ImageGridAdmin setSelectedImg={setSelectedImg} />
          {selectedImg && (
            <ImageModal
              selectedImg={selectedImg}
              setSelectedImg={setSelectedImg}
            />
          )}
          <Footer />
        </>
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
    </>
  );
};

export default PhotosAdmin;
