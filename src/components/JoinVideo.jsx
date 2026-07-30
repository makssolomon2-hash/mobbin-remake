import React from 'react';
import joinVideo from '../assets/video/video_hero.mp4';

const JoinVideo = () => {
  return (
    <section className="relative px-5  2k:-top-110 z-10  lg:mt-60 flex justify-center items-center  mb-20">

      <div className="video-container  bg-none   bg-[#171717]/5   xl:-mt-50  rounded-3xl">
        <video
          className="relative p-24 pb-0 lap:h-180   2k:h-250 object-cover xl:shadow-lg rounded-3xl "
          autoPlay
          muted
          loop
          playsInline
        >

          <source src={joinVideo} type="video/mp4" className="relative p-200 w-[50%] h-300 object-cover rounded-3xl overflow-visible " />
        </video>
      </div>
    </section>
  )
}

export default JoinVideo