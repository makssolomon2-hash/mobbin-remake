import React from 'react';
import HeroBackground from './ui/HeroBackground';

const Hero = ({ children }) => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <HeroBackground />
      {children}
    </section>
  );
};

export default Hero;