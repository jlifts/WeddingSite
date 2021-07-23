import React from 'react';

const LowerSection = () => {
  return (
    <section className='h-screen bg-prop-image bg-left bg-cover h-50 bg-fixed'>
      <div className='h-screen w-1/2 flex flex-col justify-center float-right bg-white bg-opacity-70 font-body'>
        <h3 className='mx-16 flex flex-col uppercase'>
          <span className='text-6xl mt-1'>Paradise Made</span>
          <span className='text-6xl mt-1'>Into A Dream</span>
        </h3>
        <div className='flex flex-col justify-center text-lg mx-32 my-3'>
          <p>
            "The perfect moment we will always remember happened on a mile hike
            out to Makalawena Beach. We had the beach almost all to ourselves,
            only to be surronded by palm trees, black volcanic rock, auqua blue
            water, and white powder sand. On this beach walk I could not stop
            feeling for the ring in my pocket, just to make sure I still had it,
            and on this walk I fell to my knee and asked her to spend forever
            with me."
          </p>
          <p> ~ Josh</p>
          <p className='mt-6'>""</p>
          <p> ~ Olivia</p>
        </div>
      </div>
    </section>
  );
};

export default LowerSection;