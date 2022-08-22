import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="w-full h-[420px] text-center bg-black">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          {/* <p className=" text-xl tracking-widest mb-10 text-white underline underline-offset-8">Get Contact With Us!</p> */}
          <h1 className="py-4 text-[#e4d7b6] text-5xl font-mono">Kanala Resto</h1>
          <h1 className="py-4 text-white text-1xl ">
            Jl.Salatiga dadapayam RT01/RW04 Sidorejo Kidul,Tingkir, 50744, Sidorejo Kidul, <br /> Kec. Tingkir, Kota Salatiga, Jawa Tengah 50741
          </h1>
          <h1 className="py-4 text-[#e4d7b6] text-3xl font-mono">Working Hours</h1>
          <p className="py-4 text-white max-w-[70%] mb-6 m-auto">
            Tuesday-Sunday : <br /> 01:00 PM - 08:00 PM
          </p>
          <p className="py-4 text-white max-w-[70%] mb-6 m-auto">2022 Kanala. All Right Reserved.</p>
          {/* <div className="rounded-full shadow-xl p-6 crusor-pointer hover:scale-110 ease-in duration-300 bg-gray-300 ">
            <a href="https://www.instagram.com/aga_ilham86/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
