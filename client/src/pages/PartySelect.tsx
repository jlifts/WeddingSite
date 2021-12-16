import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PartySelect: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col sm:flex-row justify-evenly items-center h-screen font-body"
    >
      <Link
        to="/groomsmen"
        className="text-4xl sm:text-7xl font-bold text-gray-500 hover:text-black uppercase"
      >
        Groomsmen
      </Link>
      <Link
        to="/bridesmaid"
        className="text-4xl sm:text-7xl font-bold text-gray-500 hover:text-black uppercase"
      >
        Bridesmaids
      </Link>
      <Link
        to="/admin"
        className="text-xl absolute top-2 right-4 font-bold text-gray-500 hover:text-black uppercase"
      >
        Admin
      </Link>
    </motion.div>
  );
};

export default PartySelect;
