/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useRef } from 'react';
import { useAuth } from '../../utils/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import ErrorAlert from '../../components/ErrorAlert';

const UpdateProfile = () => {
  const userRef = useRef(null);
  const { updateName } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError('');
      await updateName(userRef.current.value);
      history.goBack();
    } catch {
      setError('Failed to update account');
    }
    setLoading(false);
  }

  return (
    <section className="flex align-items-center justify-center container-fluid  min-h-96 overflow-none font-body">
      <div
        className="flex justify-center flex-col align-items-center m-4"
        style={{ maxWidth: '1000px' }}
      >
        <form
          className="flex flex-col max-w-md mx-auto w-full rounded-lg shadow-xl overflow-hidden p-10 space-y-10 update"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row justify-evenly text-2xl font-bold">
            <h4 className="cursor-default">Update Profile Name</h4>
          </div>
          <ErrorAlert error={error} />
          <div className="relative border-b-2 focus-within:border-blue-500">
            <input
              type="text"
              name="username"
              placeholder=" "
              autoComplete="off"
              className="block w-full appearance-none focus:outline-none bg-transparent"
              ref={userRef}
              required={true}
            />
            <label
              htmlFor="username"
              className="absolute top-0 -z-1 duration-300 origin-0"
            >
              Name
            </label>
          </div>
          <button
            disabled={loading}
            aria-label="Submit Change"
            type="submit"
            className="w-full px-3 py-4 text-white bg-secondary rounded-md hover:bg-secondaryAccent focus:bg-secondaryAccent focus:outline-none font-items"
          >
            Submit Change
          </button>
          <Link to="/passwordreset">Need to Reset Password? Click Me</Link>
        </form>
        <button
          onClick={() => history.goBack()}
          className="px-2 py-3 bg-secondary rounded m-8 text-white hover:bg-secondaryAccent font-items"
        >
          Back to Dashboard
        </button>
      </div>
    </section>
  );
};
export default UpdateProfile;
