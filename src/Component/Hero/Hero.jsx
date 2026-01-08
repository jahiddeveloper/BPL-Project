import React from "react";
import heroImg from "../../assets/banner-main.png";
const Hero = () => {
  return (
    <div className="bg-black container md:mx-auto rounded-3xl">
      <div className="bg-[url('./assets/bg-shadow.png')] bg-cover bg-center mt-6 py-16 rounded-3xl">
        <img className="mx-auto" src={heroImg} alt="Hero Img" />
        <h1 className="text-4xl font-bold text-center mt-6 text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <h3 className="mt-4 text-2xl font-semibold text-gray-400 text-center">
          Beyond Boundaries Beyond Limits
        </h3>
        <div className="flex justify-center items-center mt-6">
          <button className="cursor-pointer justify-items-center bg-[#e7fe29] px-6 py-3 font-bold rounded-xl hover:bg-black hover:text-white hover:transition duration-300">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
