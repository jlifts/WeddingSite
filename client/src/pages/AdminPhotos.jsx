/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Footer, ImageGridAdmin, ImageModal } from '../components';
import AdminNav from '../components/AdminNav';

// FEATURE: Allow comments and Likes?

const PhotosAdmin = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="h-screen p-12 bg-bg2 font-body">
        <AdminNav />
        <ImageGridAdmin setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <ImageModal
            selectedImg={selectedImg}
            setSelectedImg={setSelectedImg}
          />
        )}
        <Footer />
      </section>
      )
    </motion.main>
  );
};

export default PhotosAdmin;
