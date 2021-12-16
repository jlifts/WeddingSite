/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react';
import FAQForm from '../forms/FAQForm';
import GuestUpdateForm from '../forms/GuestUpdateForm';
import ImageUploadForm from '../forms/ImageUploadForm';

//Refcator with useReducers and TSX

const CountModal = ({ button_label, Guest, ImageUpload, className }) => {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  function pageRefresh() {
    window.location.reload();
  }

  const Form = Guest ? (
    <GuestUpdateForm closeModal={closeModal} pageRefresh={pageRefresh} />
  ) : ImageUpload ? (
    <ImageUploadForm closeModal={closeModal} />
  ) : (
    <FAQForm closeModal={closeModal} pageRefresh={pageRefresh} />
  );

  return (
    <>
      <button
        onClick={openModal}
        className={`flex justify-center ${className}`}
        aria-label="Updates"
      >
        {button_label}
      </button>
      {open ? Form : ''}
    </>
  );
};

export default CountModal;
