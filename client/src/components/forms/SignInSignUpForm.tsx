/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { useAuth } from '../../utils/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import ErrorAlert from '../../components/ErrorAlert';

const SignInSignUpForm: any = ({
  signIn,
  onSubmit,
  loading,
  error,
  setLoading,
  setError,
  emailRef,
  passwordRef,
  passwordConfRef,
}: any) => {
  const { googleAuth } = useAuth();
  const history = useHistory();

  async function handleGoogle() {
    try {
      setLoading(true);
      setError('');
      await googleAuth();
      history.push('/party');
    } catch {
      setError('Failed to create account with Google');
    }
  }

  return (
    <section className="flex align-items-center justify-center container-fluid  min-h-96 overflow-none font-body">
      <div
        className="flex justify-center flex-col align-items-center m-4"
        style={{ maxWidth: '1000px' }}
      >
        <form
          className="flex flex-col max-w-md mx-auto w-full rounded-lg shadow-xl overflow-hidden p-10 space-y-10 update"
          onSubmit={onSubmit}
        >
          <div className="flex flex-row justify-evenly text-2xl font-bold">
            {signIn ? (
              <>
                <Link
                  className="text-gray-500 hover:text-black font-items"
                  to="/signup"
                >
                  Sign Up
                </Link>
                <h4 className="cursor-default font-items">Sign In</h4>
              </>
            ) : (
              <>
                <h4 className="cursor-default font-items">Sign Up</h4>
                <Link
                  className="text-gray-500 hover:text-black font-items"
                  to="/login"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
          <ErrorAlert error={error} />
          <div className="relative border-b-2 focus-within:border-blue-500">
            <input
              type="text"
              name="email"
              placeholder=" "
              autoComplete="off"
              className="block w-full appearance-none focus:outline-none bg-transparent"
              required={true}
              ref={emailRef}
            />
            <label
              htmlFor="email"
              className="absolute top-0 -z-1 duration-300 origin-0"
            >
              Email
            </label>
          </div>
          <div className="relative border-b-2 focus-within:border-blue-500">
            <input
              type="password"
              name="password"
              placeholder=" "
              autoComplete="off"
              className="block w-full appearance-none focus:outline-none bg-transparent"
              required={true}
              ref={passwordRef}
            />
            <label
              htmlFor="password"
              className="absolute top-0 -z-1 duration-300 origin-0"
            >
              Password
            </label>
            {signIn && (
              <div className="or text-xs">
                <Link to="/passwordreset">Forgot Password?</Link>
              </div>
            )}
          </div>
          {!signIn && (
            <div className="relative border-b-2 focus-within:border-blue-500">
              <input
                type="password"
                name="password-conf"
                placeholder=" "
                autoComplete="off"
                className="block w-full appearance-none focus:outline-none bg-transparent"
                ref={passwordConfRef}
                required={true}
              />
              <label
                htmlFor="password-conf"
                className="absolute top-0 -z-1 duration-300 origin-0"
              >
                Confirm Password
              </label>
            </div>
          )}

          <button
            aria-label="Log In"
            disabled={loading}
            type="submit"
            className="w-full px-3 py-4 text-white bg-secondary rounded-md hover:bg-secondaryAccent focus:bg-secondaryAccent focus:outline-none font-items"
          >
            {signIn ? 'Log In' : 'Sign Up'}
          </button>
          <div className="flex justify-center my-1 or">or</div>
          <div>
            <GoogleLoginButton
              className="google font-items"
              onClick={handleGoogle}
              aria-label="Log In with Google"
            >
              <span className="text-sm sm:text-xl">Log In with Google</span>
            </GoogleLoginButton>
          </div>
          <div className="or text-xs">
            {signIn ? (
              <Link to="/signup">Need to Make an Account? Sign Up</Link>
            ) : (
              <Link to="/login">Already Made an Account? Sign In</Link>
            )}
          </div>
        </form>
        <div className="flex flex-row align-items-center justify-center mt-2">
          {'Copyright © '}
          <Link to="/">Olivia&amp;Josh</Link> {new Date().getFullYear()}
          {'.'}
        </div>
      </div>
    </section>
  );
};

export default SignInSignUpForm;
