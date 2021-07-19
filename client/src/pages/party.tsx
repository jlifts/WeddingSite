import React from 'react';
import { Link } from 'react-router-dom';

const party: React.FC = () => {
  return (
    <div className='flex flex-row justify-evenly items-center h-screen font-body'>
      <Link
        to='/groomsmen'
        className='text-7xl font-bold text-gray-500 hover:text-black uppercase'
      >
        Groomsmen
      </Link>
      <Link
        to='/bridesmaid'
        className='text-7xl font-bold text-gray-500 hover:text-black uppercase'
      >
        Bridesmaids
      </Link>
      <Link
        to='/admin'
        className='text-xl absolute top-2 right-4 font-bold text-gray-500 hover:text-black uppercase'
      >
        Admin
      </Link>
    </div>
  );
};

export default party;
