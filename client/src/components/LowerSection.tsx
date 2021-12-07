import React from 'react';
import { motion } from 'framer-motion';
import { IntersectionObserver } from '../helpers/IntersectionContext';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const LowerSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <section className="h-full bg-prop-image bg-top bg-cover h-50 sm:bg-fixed overflow-hidden">
      <div className="h-full sm:w-1/2 flex flex-col justify-center float-right bg-white bg-opacity-70 font-body">
        <IntersectionObserver>
          <motion.div
            className="mx-5 sm:mx-0"
            variants={container}
            transition={{ duration: 0.4 }}
            initial="hidden"
            animate="show"
          >
            <motion.h4
              variants={item}
              className="sm:mx-16 sm:ml-32 flex flex-col uppercase font-bold"
            >
              <motion.span className="text-2xl sm:text-6xl mt-1">
                Paradise Made
              </motion.span>
              <motion.span className="text-2xl sm:text-6xl mt-1">
                Into A Dream
              </motion.span>
            </motion.h4>
            <motion.div className="flex flex-col justify-center text-lg sm:mx-32 my-3">
              <motion.p variants={item} className="space-y-2">
                <p>
                  "Josh and I met while in high school in Union City, where Josh
                  pretended he wanted help with math before asking me to a movie
                  and milkshakes in May 2015. Luckily, our relationship survived
                  the points afterward when he actually did ask for help with
                  Calculus.
                </p>
                <p>
                  After high school, Josh went to college first in Harrisburg,
                  then in Pittsburgh, while I went to school near home. In
                  between CrossFit sessions (Josh) and overly long essays (me),
                  we talked on the phone as often as possible and squeezed in
                  weekends and holidays together. After graduating, Josh moved
                  to Charlotte, North Carolina for work.
                </p>
                <p>
                  We’ve also been lucky enough to fit some traveling together
                  into our long-distance relationship. Some of our favorite
                  memories include beach days near Myrtle Beach, whale watching
                  in Cape Cod, hiking in the Finger Lakes, and exploring castles
                  in Scotland. Of course, nothing quite tops our beach hike in
                  Hawaii!
                </p>
                <p>
                  Our favorite place, though, is anywhere we can be together,
                  and our next step is starting our married life in Erie, PA. We
                  are so blessed to be able to celebrate starting that adventure
                  with our friends and family!"
                </p>
              </motion.p>
              <motion.p variants={item}> ~ Olivia</motion.p>
              <motion.p className="mt-6" variants={item}>
                "The perfect moment we will always remember happened on a mile
                hike out to Makalawena Beach. We had the beach almost all to
                ourselves, only to be surronded by palm trees, black volcanic
                rock, auqua blue water, and white powder sand. On this beach
                walk I could not stop feeling for the ring in my pocket, just to
                make sure I still had it, and on this walk I fell to my knee and
                asked her to spend forever with me."
              </motion.p>
              <motion.p variants={item}> ~ Josh</motion.p>
            </motion.div>
          </motion.div>
        </IntersectionObserver>
      </div>
    </section>
  );
};

export default LowerSection;
