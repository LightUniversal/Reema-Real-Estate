import React, { useEffect, useState } from "react";
import {  FaHome, FaPhone, FaInfoCircle, FaSignOutAlt,  } from  "react-icons/fa";

const Footer = () => {
    const [val, setval] = useState("")

   

  const year = new Date().getFullYear();
  return (
    <div className=" footer relative bg-black top-16 w-full z-10 p-10">
      <div className="flex justify-between md:flex-nowrap flex-wrap gap-4  text-white">
        <div className="company">
          <h2 className="text-3xl font-bold my-3">
            Reema<span className="text-slate-400 ">-Estate</span>
          </h2>
          <p className=" my-3 ">Reema Properties and Accommodation Agent
           <br />
          </p>
          <a
            href="mailto:reemainvestmentsandtechnologies@gmail.com"
            className=" text-blue-500 font-medium border border-slate-900 p-2 mt-1 shadow-lg rounded-sm block text-sm break-words"
          >
            Email Us
          </a>
        </div>
        <div className="company">
          <h2 className="text-3xl font-bold my-3">Links</h2>
          <ul className=" flex flex-col gap-4">
            <li>
              <a href="/" className=" flex items-center gap-2">Home <FaHome className=" text-slate-600 relative -top-0.5" /></a>
            </li>
            <li>
              <a href="#about" className=" flex items-center gap-2">About <FaInfoCircle className=" text-slate-600 relative -top-0.5" /></a>
            </li>
            <li>
              <a href="#properties">
                Properties
              </a>
            </li>
          </ul>
        </div>
        <div className="company">
          <h2 className="text-3xl font-bold mt-3">
            Contact-<span className="text-slate-400 ">Us</span>
          </h2>
          <p className="my-3 text-sm text-slate-200">
          Real Estate consultant || management of properties || Land agent & housing agent || Entrepreneur || Investor
            <br />
            For more details, call
            <br />
            <a href="tel:+2347058032078" className=" text-blue-500 font-medium border border-slate-900 p-2 mt-1 shadow-lg rounded-sm inline-block text-sm">ReemaEstate-Service</a>
          </p>
        </div>
      </div>
      <div className="copy text-center text-slate-300 text-sm border-t mt-2 pt-3 border-slate-800">Copyright &copy; ReemaEstate {year}</div>

    </div>
  );
};

export default Footer;
