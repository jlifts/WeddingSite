/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Footer from '../components/Footer';
import Nav from '../components/Nav';
import ImageGrid from '../components/ImageGrid';
import ImageModal from '../components/ImageModal';
import { GROOM, BRIDE } from '../key';
import { useAuth } from '../utils/AuthContext';

// FEATURE: Allow comments and Likes?

const Photos = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const { currentUser } = useAuth();
  const history = useHistory();

  return (
    <>
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
    </>
  );
};

export default Photos;
