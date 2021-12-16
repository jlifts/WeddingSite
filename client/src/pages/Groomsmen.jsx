/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock } from '../components';
import BridalPartyNav from '../components/BridalPartyNav';
import ErrorAlert from '../components/ErrorAlert';

const Groomsmen = () => {
  const [error, setError] = useState('');
  return (
    <section className="bg-black h-full sm:h-screen p-7 font-items w-screen overflow-none">
      {error && <ErrorAlert error={error} />}
      <BridalPartyNav setError={setError} groomsmen />
      <div className="flex flex-col sm:flex-row mt-12 sm:mt-48 space-y-48 sm:space-y-0">
        <div>
          <h5 className="text-white text-4xl">Important Dates</h5>
          <div>{}</div>
          <div className="mt-24 sm:mt-48">
            <Link to="#" className="text-white text-4xl hover:text-blue-400">
              Men's Warehouse
            </Link>
          </div>
        </div>
        <div className="sm:ml-96">
          <div className="">
            <h5 className="text-white text-lg sm:text-4xl">The Big Day</h5>
            <div className="text-white text-lg sm:text-3xl">
              <Clock text="The Big Day is Here!" />
            </div>
            <div className="sm:mt-24 mt-48">
              <Link to="#" className="text-white text-4xl hover:text-blue-400">
                Bachelor Party &#128526;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Groomsmen;
