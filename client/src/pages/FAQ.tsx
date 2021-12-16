/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import reqs from '../api/req';
import { trackPromise } from 'react-promise-tracker';
import { Nav, Accordian, Footer } from '../components';

const FAQ: React.FC = () => {
  const [faqs, setFaqs] = useState<Array<any> | null>([]);

  async function fetchFaqs() {
    const data = await axios.get(reqs.fetchFaqs);
    return data.data;
  }

  useEffect(() => {
    trackPromise(fetchFaqs()).then(setFaqs);
  }, []);

  // console.log(faqs);

  return (
    <>
      <Nav />
      <section className="font-body flex flex-col  h-screen">
        <div className="flex justify-center text-4xl my-12 cursor-default">
          FAQ
        </div>
        {faqs
          ? faqs.map(({ question, answer, id }) => (
              <Accordian title={question} id={id}>
                {answer}
              </Accordian>
            ))
          : null}
      </section>
      <Footer />
    </>
  );
};

export default FAQ;
