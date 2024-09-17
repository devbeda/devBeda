
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import img1 from "./images/Profilepicture.png";
import resume from "./Dev-BedaResume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";





function Home() {
  return (
    <header className="w-full h-[100%] mb-10">
      <div className="md:flex flex-col  justify-center items-center px-10 w-full h-auto md:pt-32 pt-16 md:items-center">
        <div className="md:flex items-center justify-between">
          <div className="hidden md:flex flex-col  justify-center ">
            <h2 className="text-white text-[150px] font-bold">Hey,</h2>
            <p className="text-white text-[100px] font-semibold">
              Beda Prakash is here
            </p>
          </div>
          <div className="flex justify-center items-end">
            <img
              className="h-[270px] md:h-[350px] rounded-full"
              src={img1}
              alt="profilePicture"
            />
          </div>
        </div>
        <div className="flex justify-center items-center md:hidden">
          <div className="">
            <h2 className="text-white text-[70px] font-bold ml-9">Beda</h2>
            <h3 className="text-white text-[40px] font-bold">Praksh sahu</h3>
          </div>
        </div>
        <div className="flex justify-center mt-24 text-lg  text-white ">
          <h3 className="tracking-[3px] font-semibold sm:tracking-[.50rem]  text-xs sm:text-base text-bold">
            A MERN Stack-Developer
          </h3>
        </div>
      </div>


      <div className="w-full h-auto flex items-center justify-center mt-6 cursor-pointer">
        <div className=" bg-blue-600 px-4 py-2 rounded-3xl text-lg flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faCloudArrowDown} />
          <a href={resume} download="Resume.pdf">
            Resume
          </a>
      </div>
      </div>
    </header>
  );
}

export default Home;


