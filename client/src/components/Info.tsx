import React from 'react';
import { Link } from 'react-router-dom';

const Info: React.FC = () => {
  return (
    <section className='font-body py-8 cursor-default'>
      <div className='grid grid-cols-3 pt-20 place-content-center'>
        <div className='order-first justify-self-center justify-items-center'>
          <h3 className='font-bold text-3xl'>Save The Date</h3>
          <p className='text-2xl'>July, 30th 2022</p>
        </div>
        <img
          src='./img/57-577730_flowers-flores-feathers-watercolor-pastel-watercolor-flower-png.png'
          alt='flower'
        />
        <div className='order-last justify-self-center justify-items-center'>
          <h3 className='font-bold text-3xl'>Where</h3>
          <p className='text-2xl'>Port Farms</p>
          <p className='text-2xl'>Waterford, Pennsylvania</p>
          {/* <p>2055 Stone Quarry Rd</p> */}
        </div>
      </div>
      <Link
        to={{
          pathname: 'https://www.instagram.com/explore/tags/becomingburgess/',
        }}
        target='blank'
        className='flex justify-center mt-4 text-4xl hover:text-primaryAccent'
      >
        #BECOMINGBURGESS
      </Link>
    </section>
  );
};

export default Info;
