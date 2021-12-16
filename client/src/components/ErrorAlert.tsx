/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const ErrorAlert: any = ({ error }: any) => {
  return (
    <>
      {error ? (
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3"
          role="alert"
        >
          <p className="font-bold font-items">Error</p>
          <p>{error}</p>
        </div>
      ) : null}
    </>
  );
};

export default ErrorAlert;
