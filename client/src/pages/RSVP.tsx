import React from 'react';

import Footer from '../components/Footer';
import Nav from '../components/Nav';

const RSVP: React.FC = () => {
  // const [loading, setLoading] = useState(false);

  return (
    <>
      <Nav />
      <section className='flex items-center justify-center container-fluid overflow-none h-screen font-body'>
        <div className='flex justify-center flex-col items-center content-center m-4'>
          <form
            action='post'
            className='flex flex-col mx-auto space-y-14'
            style={{ width: '600px' }}
          >
            <h2 className='flex justify-center text-4xl font-bold'>RSVP</h2>
            <div className='relative border-b-2 focus-within:border-primaryAccent'>
              {/* Previously border-blue-500 */}
              <input
                type='text'
                name='names'
                id='names'
                placeholder=' '
                className='block w-full appearance-none focus:outline-none bg-transparent'
              />
              <label
                htmlFor='names'
                className='absolute top-0 -z-1 duration-300 origin-0'
              >
                Name(s)
              </label>
            </div>
            <div className='relative border-b-2 focus-within:border-primaryAccent'>
              <input
                type='text'
                name='code'
                id='code'
                placeholder=' '
                className='block w-full appearance-none focus:outline-none bg-transparent'
              />
              <label
                htmlFor='code'
                className='absolute top-0 -z-1 duration-300 origin-0'
              >
                Invite Code
              </label>
            </div>
            <button
              // disabled={loading}
              type='submit'
              className='w-full px-3 py-4 text-white bg-secondary rounded-md hover:bg-secondaryAccent focus:bg-secondaryAccent focus:outline-none font-items'
            >
              RSVP
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RSVP;
