import { useEffect, useState } from "react";
import airbnbLogo from "../../assets/asset 8.png";
import appleTVLogo from "../../assets/asset 1.png";
import dropboxLogo from "../../assets/asset 9.png";
import nikeLogo from "../../assets/asset 6.png";
import openAILogo from "../../assets/asset 12.png";
import twitchLogo from "../../assets/asset 5.png";

const logos = [
  { src: appleTVLogo, name: "Apple TV" },
  { src: openAILogo, name: "OpenAI" },
  { src: twitchLogo, name: "Twitch" },
  { src: nikeLogo, name: "Nike" },
  { src: airbnbLogo, name: "Airbnb" },
  { src: dropboxLogo, name: "Dropbox" },
];

const LogoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % logos.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, []);

  const activeLogo = logos[activeIndex];

  return (
    <div className="logo-carousel" role="group" aria-label="Featured brands">
      <span className="logo-carousel__glow" aria-hidden="true" />
      <div
        key={activeLogo.name}
        className="logo-carousel__tile"
      >
        <img
          className="logo-carousel__image"
          src={activeLogo.src}
          alt={activeLogo.name}
        />
      </div>
    </div>
  );
};

export default LogoCarousel;
