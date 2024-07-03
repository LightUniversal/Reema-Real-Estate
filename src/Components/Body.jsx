import React from "react";
import one from "../assets/imgs/one.jpeg";
import two from "../assets/imgs/two.jpeg";
import homeLand from "../assets/videos/two.mp4";
import downTown from "../assets/videos/one.mp4";

import { useInView } from "react-intersection-observer";
import { FaPhone } from "react-icons/fa";

const Body = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.8, // Trigger animation when 10% of the element is in view
  });
  return (
    <div className=" mb-1 text-white relative mt-3 top-16 ">
      <section
        className={`  hero animate__animated animate__fadeInDown bg-black relative w-full py-32 px-10 flex items-center  flex-col gap-10`}
      >
        <div className=" absolute w-full  cover top-0 z-10"></div>
        <h3 className=" text-4xl  capitalize relative z-20">
          Invest today and enjoy tommorrow
        </h3>
        <p className="relative z-20">
        Welcome to Reema-Estate, where your dream home becomes a reality. Whether you're looking to buy, sell, or rent, our extensive listings ensure you find the perfect property. Let us help you navigate the real estate market with ease and confidence. Explore now and start your journey today!
        </p>
        <div className="flex justify-center">
          <a
            id="#img"
            href="#"
            className="relative animate__animated  z-20 bg-red-800 text-center block text-white rounded-full px-7 py-5 "
          >
            Get Started
          </a>
        </div>
      </section>

      <section
        className={`about text-black animated__animated animate__fadeInDown border-b border-slate-200  my-1   flex flex-wrap md:flex-nowrap gap-10 justify-between `}
      >
        <div className=" w-full md:w-3/4 p-10 pb-3">
          <h2 className=" text-4xl mb-5 border-b pb-3 px-2">
            Navigate Your Real Estate Journey
          </h2>
          <p className=" px-2">
            International airports are the most significant land marks in every
            city in the world. This is why Homland Continental Estate Umueri is
            the best choice land Investment for those who can look into the
            future today.
            <br />
            Umueri is the 4th fastest developing city in Anambra State. It
            boasts of Chinua Achebe International Cargo and passengers Airport
            <div></div>
          </p>
        </div>
        <div
          className="img w-full md:w-4/5  flex gap-3 p-4  rounded-sm   md:flex-nowrap flex-wrap "
          id="img"
        >
          <img src={one} alt="" className="md:w-2/6 w-full rounded-sm" />
          <div className=" text-slate-800 p-5 shadow-lg rounded-lg px-2  text-sm">
            <h2 className=" text-3xl font-bold my-2 px-2">Details</h2>
            <span className=" font-medium inline-block my-1 rounded-md border border-slate-50 p-3 ">
              <span className="font-bold">Promo Price</span> : 5:470M
            </span>{" "}
            <br />
            <span className=" font-medium inline-block my-1 rounded-md border border-slate-50 p-3">
              <span className="font-bold">Plot</span> Size : 500sqm
            </span>{" "}
            <br />
            <span className=" font-medium inline-block my-1 rounded-md border border-slate-50 p-3">
              <span className="font-bold">Title</span> : Registered Survey &
              Deed of Assignment.
            </span>{" "}
            <br />
            <span className=" font-medium shadow-inner inline-block my-1 rounded-md border border-slate-50 p-3">
              <span className="font-bold">Landmarks</span>: Chinua Achebe
              international cargo/persengers airport UMUERI New idea
              construction company UMUERI Capital University UMUERI Orient
              Petroleum Nwafor Orizu college of Education Nsugbe General
              hospital UMUERI
            </span>{" "}
            <br />
            <span className=" font-medium shadow-inner inline-block my-1 rounded-md border border-slate-50 p-3">
              <span className="font-bold">Features</span>: Perimeter fencing
              Secured gate house Good drainage system 24/7 clean water supply
              Good road networks Streets lights
            </span>{" "}
            <br />
            <div className="call_now  my-3">
              <a
                href="tel:+2347058032078"
                className=" bg-green-950 flex items-center w-40 gap-2 rounded-lg px-5 ml-3 text-center py-4 text-white"
              >
                {" "}
                Order Now <FaPhone className=" relative top-0" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="properties" className="about text-black  border-b border-slate-200  my-1 flex-row-reverse   flex flex-wrap md:flex-nowrap gap-10 justify-between">
        <div className=" w-full md:w-3/4 p-10 pb-3">
          <h2 className=" text-4xl mb-5 px-2 border-b pb-5">DownTown Layout</h2>
          <p className=" px-2">
            International airports are the most significant land marks in every
            city in the world. This is why Homland Continental Estate Umueri is
            the best choice land Investment for those who can look into the
            future today.
            <br />
            Umueri is the 4th fastest developing city in Anambra State. It
            boasts of Chinua Achebe International Cargo and passengers Airport
            <div></div>
          </p>
        </div>
        <div
          className="img w-full md:w-4/5  flex gap-3 p-4  rounded-sm   md:flex-nowrap flex-wrap "
          id="img"
        >
          <img src={two} alt="" className="md:w-2/6 w-full rounded-sm" />
          <div className=" text-slate-800 p-5 px-2 shadow-lg  rounded-lg text-sm">
            <h2 className=" text-3xl font-bold my-2 px-2">Details</h2>
            <span className=" font-medium inline-block my-1 rounded-md border border-green-50 p-3 ">
              <span className="font-bold">Promo Price</span> : 5:470M
            </span>{" "}
            <br />
            <span className=" font-medium inline-block my-1 rounded-md border border-green-50 p-3">
              <span className="font-bold">Plot</span> Size : 500sqm
            </span>{" "}
            <br />
            <span className=" font-medium inline-block my-1 rounded-md border border-green-50 p-3">
              <span className="font-bold">Title</span> : Registered Survey &
              Deed of Assignment.
            </span>{" "}
            <br />
            <span className=" font-medium shadow-inner shadow-green-50 inline-block my-1 rounded-md border border-slate-50 p-3">
              <span className="font-bold">Landmarks</span>: Chinua Achebe
              international cargo/persengers airport UMUERI New idea
              construction company UMUERI Capital University UMUERI Orient
              Petroleum Nwafor Orizu college of Education Nsugbe General
              hospital UMUERI
            </span>{" "}
            <br />
            <span className=" font-medium shadow-inner shadow-green-50 inline-block my-1 rounded-md border border-slate-50 p-3">
              <span className="font-bold">Features</span>: Perimeter fencing
              Secured gate house Good drainage system 24/7 clean water supply
              Good road networks Streets lights
            </span>{" "}
            <br />
            <div className="call_now  my-3">
              <a
                href="tel:+2347058032078"
                className=" bg-green-950 flex items-center w-40 gap-2 rounded-lg px-5 ml-3 text-center py-4 text-white"
              >
                {" "}
                Order Now <FaPhone className=" relative top-0" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about p-10" id="about">
        <div className="text-center">
        <h2 className="text-3xl text-black font-bold mb-4">
          Reema<span className="text-slate-400 ">-Estate</span>
        </h2>
        <p className=" text-slate-800 shadow-sm rounded-md p-3">
          Real Estate consultant || management of properties || Land agent &
          housing agent || Entrepreneur || Investor
        </p>
        </div>
        <div className=" flex md:flex-nowrap flex-wrap gap-4 justify-around p-4">
          <div className="homeland md:shadow-sm shadow-lg rounded-lg p-1">
          <video src={downTown} className=" shadow-sm rounded" controls ></video>

            <p className=" justify-between flex gap-2 p-3 md:flex-nowrap flex-wrap">
              <h2 className=" text-black text-md md:text-xl shadow-sm rounded p-3 font-medium my-2">
                DownTown Real-Estate Layout
              </h2>
              <a
                href="tel:+2347058032078"
                className=" text-white inline-block my-2 rounded bg-black p-3 "
              >
                Contact Us
              </a>
            </p>
          </div>
          <div className="homeland md:shadow-sm shadow-lg rounded-lg p-1">
            <video src={homeLand} className=" shadow-sm rounded"  controls></video>
            <p className=" flex justify-between p-3 md:flex-nowrap flex-wrap">
              <h2 className=" text-black text-md md:text-xl  shadow-sm p-3 font-medium my-2">
                HomeLand Real-Estate Layout
              </h2>
              <a
                href="tel:+2347058032078"
                className=" shadow-sm text-white inline-block my-2 rounded bg-black p-3 "
              >
                Contact Us
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className=" bg-black p-10">
      <h2 className=" text-4xl mb-5 text-center border-b pb-3 border-slate-700">
          Let's Go!
        </h2>
        <div className="call_to_action flex justify-around flex-col md:flex-nowrap flex-wrap gap-10 md:flex-row ">
        
        <div className="details">
         Let us help you navigate the real estate market with ease and confidence. Your ideal home is just a click away. Explore now and start your journey today!
        </div>
        <div className="call">
          <a href="tel:+2347058032078" className=" flex gap-2 items-center w-40 bg-blue-800 rounded-md p-3">Call Us Now <FaPhone /></a>
        </div>
      </div>
      </section>
      
    </div>
  );
};

export default Body;
