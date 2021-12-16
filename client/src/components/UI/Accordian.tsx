/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faEdit,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import axios from '../../api/axios';
import reqs from '../../api/req';

export type FaqProps = {
  title?: string;
  children?: any;
  keys?: number;
  id: string;
  admin?: boolean;
};

export function Accordian({
  keys,
  title,
  children,
  id,
  admin = false,
}: FaqProps): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  async function handleDelete(id: any) {
    const config = {
      id,
    };
    await axios
      .delete(reqs.deleteFaq, { data: config })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    await window.location.reload();
  }
  // async function handleEdit(id: any) {
  //   const config = {
  //     id,
  //   };
  //   await axios
  //     .delete(reqs.deleteFaq, { data: config })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   await window.location.reload();
  // }

  return (
    <div key={keys} className="w-full px-6 md:px-12 py-3" id={id}>
      <div
        className="flex cursor-pointer w-full"
        onClick={() => setExpanded(!expanded)}
      >
        <p
          className={`flex font-mont uppercase text-lg md:text-xl cursor-default justify-start w-full ${
            expanded
              ? 'text-darkgray font-bold'
              : 'font-normal text-darkgrayAccent'
          }`}
        >
          {title}
        </p>
        <div
          className={`${
            expanded
              ? 'transition transform rotate-180 duration-300 ease pl-4'
              : 'flex justify-end items-center w-full pr-4 animate-bounce'
          }`}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        {admin && (
          <div onClick={() => handleDelete(id)}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        )}
      </div>
      <div className="border-b border-black" />
      <div
        className={`transition-max-height duration-700 ease-in-out overflow-hidden ${
          expanded ? 'max-h-20' : 'max-h-0'
        }`}
      >
        <p className="font-rale pt-2 cursor-default">
          {/* {admin && (
            <div onClick={() => handleEdit(id)}>
              <FontAwesomeIcon icon={faEdit} />
            </div>
          )} */}
          {children}
        </p>
      </div>
    </div>
  );
}
