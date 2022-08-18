import React from "react";
import BGmakanan from "../assets/makanan1.jpg";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-left bg-white">
      <img src={BGmakanan} alt="bg1" />
      <div className="w-full h-full absolute top-10 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 ">
        <h3 class="text-xl text-white font-bold">Hey, I Am The Big Boss</h3>
        <p class="mt-2 text-sm text-gray-300">Some description text. Some dummy text here. Welcome to KindaCode.com</p>
      </div>
    </div>
  );
};

export default Main;
