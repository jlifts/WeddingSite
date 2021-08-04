/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useHistory, Link } from 'react-router-dom';

import Footer from '../components/Footer';
import ImageGridAdmin from '../components/ImageGridAdmin';
import ImageModal from '../components/ImageModal';
import { GROOM, BRIDE } from '../key';
import { useAuth } from '../utils/AuthContext';

// FEATURE: Allow comments and Likes?

const PhotosAdmin = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogOut() {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to Logout');
    }
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {currentUser.uid === GROOM ? (
        <>
          <nav className='flex flex-col sm:flex-row items-end w-full justify-between font-body p-6'>
            <h4 className='text-2xl sm:text-5xl'>Hello Groom!</h4>
            <div className='flex'>
              <Link to='/admin' className=''>
                Dashboard
              </Link>
              <Link to='/photoadmin' className='ml-4'>
                Photos
              </Link>
              <Link to='/profile' className='mx-4'>
                Profile
              </Link>
              <button onClick={handleLogOut} className=''>
                Log Out
              </button>
            </div>
          </nav>
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
          <nav className='flex flex-col sm:flex-row items-end w-full justify-between font-body p-6'>
            <h4 className='text-2xl sm:text-5xl'>Hello My Beautiful Bride!</h4>
            <div className='flex'>
              <Link to='/admin' className=''>
                Dashboard
              </Link>
              <Link to='/photoadmin' className='ml-4'>
                Photos
              </Link>
              <Link to='/profile' className='mx-4'>
                Profile
              </Link>
              <button onClick={handleLogOut} className='' aria-label='Log Out'>
                Log Out
              </button>
            </div>
          </nav>
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
        history.push('/photos')
      )}
    </motion.main>
  );
};

export default PhotosAdmin;
