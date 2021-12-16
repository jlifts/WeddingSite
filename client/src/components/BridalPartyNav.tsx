/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const BridalPartyNav: React.FC = ({ setError, groomsmen }: any) => {
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
    <nav className="flex items-end w-full justify-between">
      <h4
        className={` ${
          groomsmen && 'bg-black text-white'
        } text-2xl sm:text-5xl`}
      >
        Hi {currentUser.displayName}!
      </h4>
      <div className="flex">
        <Link to="/" className={groomsmen && 'text-white'}>
          Home
        </Link>
        <Link to="/profile" className={`${groomsmen && 'text-white'} mx-4`}>
          Profile
        </Link>
        <button
          onClick={handleLogOut}
          className={groomsmen && 'text-white'}
          aria-label="Log Out"
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default BridalPartyNav;
