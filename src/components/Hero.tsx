import React from "react";

const Hero = () => {

  return (
    <section className="relative h-screen">
      <img src="./assets/bg-barber.webp" alt="barber-bg" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gray-950 opacity-80"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-[2.5rem] md:text-[4rem] uppercase mb-5 text-center junigardenSerif  ">
          Tu Look <span className="font-bold">Barber</span>
        </h1>
        <a href="#form">
          <button
            type="button"
            className="bg-[#C99E10] text-white font-bold uppercase px-4 py-2 border border-white rounded transition duration-300 ease-in-out hover:bg-[#A9810D] hover:scale-105"

          >
            Reservar Turno
          </button>

        </a>

      </div>
    </section>
  )
}

export default Hero;
