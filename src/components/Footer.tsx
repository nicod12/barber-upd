import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#A1A19D] flex justify-between pl-0 px-5 md:px-12 lg:px-[12rem]  h-auto py-5">
        <div className="flex text-white">
          <div className="mb-4 ml-4 md:ml-0">
            <img src="./assets/logobar.webp" alt="logo" className=" h-32 md:h-56" />
          </div>

        </div>
        <div className="text-black text-center mt-3  text-[1.3rem] lg:text-[2rem]">
          <h2 className="bebas-neue-regular">Nuestras redes:</h2>
          <div>
            <ul className="text-[1.3rem]">
              <li className="flex items-center gap-1">
                <a href="https://www.instagram.com/tulookbarberia2/" className="flex items-center gap-1" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" /></svg>
                  tulookbarberia2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
