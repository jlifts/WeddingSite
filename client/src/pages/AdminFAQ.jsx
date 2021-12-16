/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from '../api/axios';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { trackPromise } from 'react-promise-tracker';
import reqs from '../api/req';
import { Accordian, Modal, Footer } from '../components';
import AdminNav from '../components/AdminNav';

const AdminFAQ = () => {
  const [faqs, setFaqs] = useState([]);

  async function fetchFaqs() {
    const data = await axios.get(reqs.fetchFaqs);
    return data.data;
  }

  useEffect(() => {
    trackPromise(fetchFaqs()).then(setFaqs);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="h-screen p-12 bg-bg2 font-body">
        <AdminNav />
        <section className="font-body flex flex-col  h-screen">
          <div className="flex justify-center text-4xl my-12 cursor-default">
            FAQ
          </div>
          <div className="flex justify-start w-full px-6 md:px-12 py-3">
            <Modal
              button_label={'Add FAQ'}
              className="bg-primary hover:bg-primaryAccent w-40 rounded px-4 py-3"
            />
          </div>
          {faqs
            ? faqs.map(({ question, answer, id }) => (
                <Accordian admin={true} title={question} id={id}>
                  {answer}
                </Accordian>
              ))
            : null}
          {/* Two textboxes question then larger answer with add button */}
        </section>
        <Footer />
      </section>
    </motion.main>
  );
};

export default AdminFAQ;
