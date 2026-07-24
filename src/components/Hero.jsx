import React from 'react';
import HeroBackground from './ui/HeroBackground';
import NavBar from './ui/NavBar';

import logos from "../assets/asset3.png";

import teams from "./ui/teams.png"

const Hero = () => {
  return (
    <section className="relative  -mt-30 w-full h-screen center overflow-hidden">
     

      {/* Everything here sits above the background */}
      <div className="relative z-10 flex flex-col w-full h-full">
       {/*  <NavBar /> */}
        <section className="relative h-screen p-5 w-full flex items-center justify-center -z-1">
          <div className="hero-container w-[950px] text-center m-10">
            <div className="flex justify-center mb-4">
              <img src={logos} alt="" className="w-27 h-27 mt-0" /> {/* Create LogoCarousel.jsx in ui with GSAP */}
            </div>

            <h1 className="text-8xl font-bold text-black mt-10 ">Discover real-world design inspiration.</h1>
            <p className="text-2xl m-3 text-gray-500">
              Featuring over 1,000 iOS & Web apps, and 200 sites —New content weekly.
            </p>

            <button className="rounded-full  m-5 p-3 px-7  bg-blue-500 text-white text-2xl font-medium cursor-pointer">Join for free</button>
            <button className="rounded-full p-3 px-7  bg-white text-black border-1 text-2xl font-medium cursor-pointer">See our plans →</button>

            <p className="mt-10 text-xl font-medium">Trusted by design teams at</p>
            <div className="teams-logos text-center flex items-center justify-center mt-10 ">
              <img src={teams} alt="" ></img>
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