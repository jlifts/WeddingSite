/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { REGISTRY_ADMIN } from '../key';
import { Clock, Modal } from '../components';
import AdminNav from '../components/AdminNav';

const Admin = () => {
  return (
    <>
      <section className="h-screen p-12 bg-bg2 font-body">
        <img
          src="img/example3.png"
          alt="corner piece"
          className="absolute bottom-0 right-0 transform -scale-x-1 z-0 flare"
        />
        <AdminNav />
        <div className="flex mt-12 justify-center flex-col">
          <div>
            <h5 className="flex justify-center text-2xl sm:text-4xl">
              Coutdown to The Kiss
            </h5>
            <div className="text-2xl sm:text-6xl">
              <Clock text="I Love You! You make my dreams come true." />
            </div>
          </div>
          <div className="flex space-x-6 -ml-4 sm:space-x-0 sm:justify-evenly mt-24">
            <Link
              to={{ pathname: REGISTRY_ADMIN }}
              className="flex px-4 py-3 bg-primary justify-center hover:bg-primaryAccent w-40 rounded"
              target="_blank"
            >
              Manage Registry
            </Link>
            <Modal
              button_label={'Upload Image'}
              ImageUpload
              className="bg-primary hover:bg-primaryAccent w-40 rounded px-4 py-3"
            />
            <Link
              to="/rsvplist"
              className="flex px-4 py-3 bg-primary justify-center hover:bg-primaryAccent w-40 rounded"
            >
              Who RSVP'd?
            </Link>
          </div>
        </div>
        <img
          src="img/example3.png"
          alt="corner piece"
          className="absolute bottom-0 sm:-bottom-3 left-0 z-0 flare"
        />
      </section>
    </>
  );
};

export default Admin;
