import React from "react";
import {
  FaGithub,
  FaEnvelopeOpenText,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaRegFileAlt,
} from "react-icons/fa";
import ProfilePicTwo from "../assets/images/about/ProfilePicTwo.jpg";

const HomeCard = () => {
  return (
    <div>
      <div className="w-full mb-6 lg:mb-0  mx-auto   relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 ">
        <img
          src={ProfilePicTwo}
          className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto  rounded-[20px] -mt-[140px]"
          alt=""
        />
        {/* Social card */}
        <div className="pt-[100px] pb-8">
          <h1 className="mt-6 mb-1 text-5xl font-semibold  dark:text-white">
            Timothy Dean
          </h1>
          <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]  ">
          Software Developer
          </h3>

          {/* Social Links */}

          <div className="flex justify-center space-x-3">
            {/* facebook link add here */}
          
            {/* Github link add here */}
            <a
              href="https://github.com/timdean27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#e14a84] ">
                <FaGithub />
              </span>
            </a>
            {/* linkedin link add here */}
            {/* linkedin link add here */}
            <a
              href="https://www.linkedin.com/in/timothy-p-dean/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#0072b1]">
                <FaLinkedinIn />
              </span>
            </a>
            <a
              href="https://docs.google.com/document/d/1MS_K-Ead2jcw-TG3Yg9GPnyi-aac15e1-FOI5Uer5jY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#0072b1]">
                <FaRegFileAlt  />
              </span>
            </a>
          </div>

          {/* personal information */}
          <div className="p-7 rounded-2xl mt-7  bg-[#F3F6F6] dark:bg-[#1D1D1D]">

            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
              <span className="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                <FaEnvelopeOpenText />
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Email
                </p>
                <p className="dark:text-white">timdean29@gmail.com</p>
              </div>
            </div>
            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
              <span className="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                <FaMapMarkerAlt />
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Location
                </p>
                <p className="dark:text-white">East Northport, New York, United States</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeCard;
