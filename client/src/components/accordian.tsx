/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export type FaqProps = {
  title?: string;
  children?: any;
  keys?: number;
};

export function Accordian({ keys, title, children }: FaqProps): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  return (
    <div key={keys} className="w-full px-6 md:px-12 py-3">
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
      </div>
      <div className="border-b border-black" />
      <div
        className={`transition-max-height duration-700 ease-in-out overflow-hidden ${
          expanded ? 'max-h-20' : 'max-h-0'
        }`}
      >
        <p className="font-rale pt-2 cursor-default">{children}</p>
      </div>
    </div>
  );
}
