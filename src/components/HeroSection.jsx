import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full" data-aos="zoom-in-up">
      <div className="absolute top-0 inset-x-0 h-64 flex items-start">
        <div
          className="h-24 w-2/3 bg-linear-to-br from-[#0c7fac] 
      blur-2xl invisible opacity-40"
        ></div>
        <div
          className="h-20 w-3/4 bg-linear-to-r from-[#289eff] 
      opacity-40 blur-2xl"
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;
