import React from 'react';

import joinVideo from '../assets/video/video_hero.mp4';

const JoinVideo = () => {
  return (
    <section className="relative z-10   lg:mt-30 flex justify-center items-center mb-20">
        {/*<div className="test-fullhd text-8xl text-black opacity-0 md:opacity-100 z-50 ">
            <p>You can see mee only on fullHD </p>
        </div>
        <div className="test-2k  text-8xl text-black opacity-0 2xl:opacity-100 z-50  ">
            <p>You can see mee only on 2k </p>
        </div>*/}
      <div className="video-container  p-[80px] bg-gray-200 rounded-3xl">
        <video
          className="relative lg:w-full  p-15 h-250 object-cover rounded-3xl overflow-visible "
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