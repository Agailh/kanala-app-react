import React from "react";
import BGmakanan from "../assets/makanan1.jpg";

const Main = () => {
  return (
    <div id="home" className="w-full  h-[1220px] p-2 flex items-center justify-center py-16 ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-white underline underline-offset-8">chase the new flavour</p>
          <h2 className="py-4 text-[#e4d7b6] text-5xl font-mono">The Key To Fine Dining</h2>
          <p className="py-2 text-white">only in kanala resto</p>
          <p className="py-2 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt deleniti esse impedit debitis dolores rem sint commodi tempora, nihil, aut mollitia repellendus, laudantium provident minus temporibus laboriosam aliquam ipsam
            facere?
          </p>
          <div>
            <button class="my-2 flex space-x-2 hover:space-x-8 bg-[#e4d7b6] hover:bg-[#ba9945] text-white font-bold py-2 px-4 border border-[#e4d7b6] rounded">Explore Menu</button>
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-inner  bg-[#e4d7b6] rounded-lg flex items-center justify-center p-1 hover:scale-105 ease-in duration-300">
          <img className="rounded-xl" src={BGmakanan} alt="/" width="750" height="750" />
        </div>
      </div>
    </div>
  );
};

export default Main;
