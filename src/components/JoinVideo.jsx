import React from 'react';
import HeroBackground from './ui/HeroBackground';

import joinVideo from '../assets/video/video_hero.mp4';

const JoinVideo = () => {
  return (
    <section className="relative  z-10 -mt-60 flex justify-center items-center mb-20">
      
      <div className="video-container  p-[80px] bg-gray-200 rounded-3xl">
        <video
          className="w-full h-[995px] object-cover rounded-3xl"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={joinVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

export default JoinVideo