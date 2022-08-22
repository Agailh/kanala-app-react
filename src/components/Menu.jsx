import React from "react";
import PM1 from "../assets/makanan1.jpg";

const Menu = () => {
  return (
    <div id="Menu" className="w-full h-auto ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-white underline underline-offset-8">MENu</p>
        <h2 className="py-4 text-[#e4d7b6] text-5xl font-mono">Our Speciallity</h2>
        <p className="text-sm mb-10 tracking-widest uppercase text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quibusdam aperiam omnis minus excepturi, vel voluptate laborum repellat consequatur, eos sunt? Soluta earum repudiandae modi commodi a, numquam eligendi hic.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl bg-[#e4d7b6] p-4 group hover:bg-gradient-to-r from-[#e4d7b6] to-[#c8ad6a]">
            <img className="rounded-xl group-hover:opacity-10" src={PM1} alt="/" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">Chicken Katsu</h3>
              <p className="pb-4 pt-2 text-white text-center">Fresh Crispy Chicken katsu with our special sauce</p>
              <p className="pb-4 pt-2 text-white text-center">20K</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl bg-[#e4d7b6] p-4 group hover:bg-gradient-to-r from-[#e4d7b6] to-[#c8ad6a]">
            <img className="rounded-xl group-hover:opacity-10" src={PM1} alt="/" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">Chicken Katsu</h3>
              <p className="pb-4 pt-2 text-white text-center">Fresh Crispy Chicken katsu with our special sauce</p>
              <p className="pb-4 pt-2 text-white text-center">20K</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl bg-[#e4d7b6] p-4 group hover:bg-gradient-to-r from-[#e4d7b6] to-[#c8ad6a]">
            <img className="rounded-xl group-hover:opacity-10" src={PM1} alt="/" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">Chicken Katsu</h3>
              <p className="pb-4 pt-2 text-white text-center">Fresh Crispy Chicken katsu with our special sauce</p>
              <p className="pb-4 pt-2 text-white text-center">20K</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl bg-[#e4d7b6] p-4 group hover:bg-gradient-to-r from-[#e4d7b6] to-[#c8ad6a]">
            <img className="rounded-xl group-hover:opacity-10" src={PM1} alt="/" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">Chicken Katsu</h3>
              <p className="pb-4 pt-2 text-white text-center">Fresh Crispy Chicken katsu with our special sauce</p>
              <p className="pb-4 pt-2 text-white text-center">20K</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl bg-[#e4d7b6] p-4 group hover:bg-gradient-to-r from-[#e4d7b6] to-[#c8ad6a]">
            <img className="rounded-xl group-hover:opacity-10" src={PM1} alt="/" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">Chicken Katsu</h3>
              <p className="pb-4 pt-2 text-white text-center">Fresh Crispy Chicken katsu with our special sauce</p>
              <p className="pb-4 pt-2 text-white text-center">20K</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl bg-[#e4d7b6] p-4 group hover:bg-gradient-to-r from-[#e4d7b6] to-[#c8ad6a]">
            <img className="rounded-xl group-hover:opacity-10" src={PM1} alt="/" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">Chicken Katsu</h3>
              <p className="pb-4 pt-2 text-white text-center">Fresh Crispy Chicken katsu with our special sauce</p>
              <p className="pb-4 pt-2 text-white text-center">20K</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
