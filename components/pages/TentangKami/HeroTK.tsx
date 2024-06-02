import React from "react";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import Image from "next/image";

const HeroTK = () => {
  const ImageURL = [
    {
      image: "https://i.ibb.co/BcVJGqT/slidehero1.png"
    }
  ];
  const backgroundImageStyle = {
    backgroundImage: `url(${ImageURL[0].image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="relative px-4 sm:px-6 md:px-8 lg:px-10 h-[300px] sm:h-[400px] bg-white" style={backgroundImageStyle}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container text-center sm:text-start">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-white">Media Nusa Gemilang</h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white">Menyediakan Kebutuhan Pendidikan</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroTK;
