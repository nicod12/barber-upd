import React from 'react'

const Gallery = () => {
  return (
    <section className="py-16 md:py-32 px-4 md:px-0">
      <h2 className="text-center text-[3rem] font-bold uppercase m-5 lg:m-10 junigardenSerif">Galería</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-5 md:px-12">

        <div className="border-2 lg:h-[25rem] border-black p-2 shadow-black shadow-sm hover:scale-105 transition-transform duration-300">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNnUQjardW9leFbS-CvEIJJKnQyJ8GzUkcw&s"
            alt="corte"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="border-2 lg:h-[25rem] border-black p-2 shadow-black shadow-sm hover:scale-105 transition-transform duration-300">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZmUGA_A51TCiQnSBswIsWtitRfmuTR3c8A&s"
            alt="corte"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="border-2 lg:h-[25rem] border-black p-2 shadow-black shadow-sm hover:scale-105 transition-transform duration-300">
          <img
            src="https://i.pinimg.com/550x/06/27/d2/0627d215a31498fe0879f60f59a59199.jpg"
            alt="corte"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  )
}

export default Gallery
