import React from 'react';
import LaptopNav from './LaptopNav';
import MobileNav from './MobileNav';

const Nav: React.FC = () => {
  return (
    <nav className='bg-secondary sticky top-0 font-items z-50 h-12 w-screen'>
      <LaptopNav />
      <MobileNav />
    </nav>
  );
};

export default Nav;
