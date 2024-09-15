import React from "react";
import reactlogo from "../../assets/images/ReactLogo.png";

function Aboutme() {
  return (
    <div class="w-100 h-auto  flex flex-wrap flex-col items-center pt-11">
      <div class="w-full h-24 flex flex-wrap flex-col text-center items-center">
        <h3 class="text-white text-2xl font-bold mt-5">About me</h3>
        <div class="w-44 h-1 border-b-4 border-blue-500 mb-9"></div>
      </div>

      <div class="px-7">
        <p class="text-white text-lg px-8 ">
          I'm Beda Praksh Sahu, a B.Tech graduate from Vignan Institute of
          Technology and Management, class of 2023. With a solid background in
          web development, I've focused on becoming a proficient MERN stack
          developer over the past 7-8 months. My journey has been fueled by a
          passion for creating dynamic and efficient web applications using
          MongoDB, Express.js, React, and Node.js. <br /> Throughout my experience,
          I’ve tackled various challenges and developed a range of projects that
          highlight my skills in both frontend and backend development. From
          building interactive user interfaces with React to implementing
          server-side solutions with Node.js, I am dedicated to crafting
          solutions that are both innovative and user-centric. <br/> I am currently
          looking for opportunities to further expand my expertise and
          contribute to exciting projects. If you’re interested in collaborating
          or learning more about my work, feel free to explore my portfolio and
          get in touch.
        </p>
      </div>

      <div class="w-100 h-auto">
        <div class="w-full h-24 flex flex-col text-center items-center">
          <div class="text-2xl text-white font-bold mt-7">Skills</div>
          <div class="w-36 h-1 border-b-4 border-blue-500 mb-9"></div>
        </div>

        <div class="w-[100%]  text-white h-auto md:flex grid grid-cols-2 justify-center items-center   px-12 gap-4 md:px-28 py-5">
          <div className=" relative border-2 group  border-blue-700  md:h-56 md:w-48 w-32 h-40   items-start rounded-lg  hover:shadow-card-shadow hover:scale-105 transition-all duration-200">
            <div className="h-full w-full group-hover:blur-sm bg-react-logo  bg-center bg-contain bg-no-repeat"></div>
            <div className=" w-full h-full  px-3 py-1 absolute top-0">
              <h1 className="font-bold text-xs sm:text-base text-[#8ecae6]">
                React.js
              </h1>
              <div className="text-center sm:text-sm flex flex-col  justify-center items-center font-semibold mt-7 md:mt-9 group-hover:opacity-100 opacity-0 transition-all duration-300  w-full ">
                <h2>Hooks</h2>
                <h2>Props</h2>
                <h2>API Handle</h2>
              </div>
            </div>
          </div>
          <div className=" relative border-2 group  border-blue-700  md:h-56 md:w-48 w-32 h-40   items-start rounded-lg  hover:shadow-card-shadow hover:scale-105 transition-all duration-200">
            <div className="h-full w-full group-hover:blur-sm bg-Node-Logo  bg-center bg-contain bg-no-repeat"></div>
            <div className=" w-full h-full  px-3 py-1 absolute top-0">
              <h1 className="font-bold text-[#29a105]">Node.js</h1>
              <div className="text-center text-xs sm:text-sm text-white font-semibold mt-5 md:mt-9 group-hover:opacity-100 opacity-0 transition-all duration-300  w-full ">
                <h2>Middleware</h2>
                <h2>API Endpoints</h2>
                <h2>JWT Authentication</h2>
              </div>
            </div>
          </div>

          <div className=" relative border-2 group  border-blue-700  md:h-56 md:w-48 w-32 h-40 flex   items-center justify-center rounded-lg  hover:shadow-card-shadow hover:scale-105 transition-all duration-200">
            <div className="h-[75%] w-[75%]  group-hover:blur-sm bg-Express-Logo  bg-center bg-contain bg-no-repeat"></div>
            <div className=" w-full h-full  px-3 py-1 absolute top-0 text-yellow-400">
              <h1 className="font-bold">Express.js</h1>
              <div className="text-center sm:text-sm text-black font-semibold mt-5 md:mt-12 group-hover:opacity-100 opacity-0 transition-all duration-300  w-full ">
                <h2>Creating Server</h2>
                <h2>Routes</h2>
              </div>
            </div>
          </div>

          <div className=" relative border-2 group  border-blue-700  md:h-56 md:w-48 w-32 h-40 flex   items-center justify-center rounded-lg  hover:shadow-card-shadow hover:scale-105 transition-all duration-200">
            <div className="h-[75%] w-[75%]  group-hover:blur-sm bg-Mongo-Logo  bg-center bg-contain bg-no-repeat"></div>
            <div className=" w-full h-full  px-3 py-1 absolute top-0 text-[#06d6a0]">
              <h1 className="font-bold">Mango DB</h1>
              <div className="text-center sm:text-sm font-semibold mt-5 md:mt-12 group-hover:opacity-100 opacity-0 transition-all duration-300  w-full ">
                <h2>Creating Server</h2>
                <h2>Routes</h2>
              </div>
            </div>
          </div>

          <div className=" relative border-2 group   border-blue-700  md:h-56 md:w-48 w-32 h-40 flex   items-center justify-center rounded-lg  hover:shadow-card-shadow hover:scale-105 transition-all duration-200">
            <div className="h-[75%] w-[75%]  group-hover:blur-sm bg-Java-Logo  bg-center bg-contain bg-no-repeat"></div>
            <div className=" w-full h-full  px-3 py-1 absolute top-0 text-orange-500">
              <h1 className="font-bold">Java</h1>
              <div className="text-center sm:text-sm font-semibold mt-7 md:mt-12 group-hover:opacity-100 opacity-0 transition-all duration-300  w-full ">
                <h2>OOPS</h2>
                <h2>DSA</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
