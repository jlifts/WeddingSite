import React from 'react';
import Routes from './routes/Routes';
// import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './utils/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      {/* <AnimatePresence exitBeforeEnter initial={false}> */}
      <Routes />
      {/* </AnimatePresence> */}
    </AuthProvider>
  );
};

export default App;
