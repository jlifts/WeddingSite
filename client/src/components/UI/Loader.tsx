/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

const LoadingIndicator = (): any => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div className="flex justify-center items-center w-full h-screen">
        <Loader type="ThreeDots" color="#8fae93" height="80" width="80" />
      </div>
    )
  );
};

export default LoadingIndicator;
