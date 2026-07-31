import React from 'react';

import logos from "../assets/asset3.png";
import teams from "./ui/teams.png"

const Hero = () => {
  return (
    <section className="relative   w-full h-screen center justify-center text-center align-center overflow-hidden xl:-mt-0 ">
      {/* Everything here sits above the background */}
      <div className="relative z-10 flex  flex-col h-full">
       {/*  <NavBar /> */}
        <section className="relative top-10 h-screen p-5 w-full flex items-center justify-center -z-1">
          <div className="hero-container  2k:-mt-80 w-[950px] text-center justify-center content-center m-10">
            <div className="flex justify-center mb-4">
              <img src={logos} alt="" className="w-25 h-25 mt-0" /> {/* Create LogoCarousel.jsx in ui with GSAP */}
            </div>

            <h1 className=" 2k:text-[6.5rem] xl:text-[5.5rem] sm:text-[3rem]  font-bold text-black mt-10 leading-none ">Discover real-world design inspiration.</h1>
            <p className="2k:text-[1.5rem]  text-center text-xl m-3 text-gray-500">
              Featuring over 1,000 iOS & Web apps, and 200 sites —New content weekly.
            </p>

            <button className="rounded-full  m-5 p-3 px-7  bg-black text-white text-xl font-normal cursor-pointer">Join for free</button>
            <button className="rounded-full p-3 px-7  bg-white text-black border text-xl font-medium cursor-pointer">See our plans →</button>

            <p className="mt-20 text-md font-medium">Trusted by design teams at</p>
            <div className="teams-logos text-center flex items-center justify-center mt-0 ">
              <img src={teams} alt="" className="w-140" ></img>
              <img src={''} alt=""></img>
              <img src={''} alt=""></img>
              <img src={''} alt=""></img>
              <img src={''} alt=""></img>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;