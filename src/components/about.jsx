import React from "react";
import BGkanala from "../assets/kanala.jpg";

const About = () => {
  return (
    <div id="about" className="w-full h-screen text-center bg-black">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className=" text-xl tracking-widest text-white underline underline-offset-8">Get Closer With Us!</p>
          <h1 className="py-4 text-[#e4d7b6] text-7xl font-mono">Hi, Welcome to Kanala</h1>
          <h1 className="py-4 text-[#e4d7b6] text-4xl font-mono">Whe treat you like our family</h1>
          <p className="py-4 text-white max-w-[70%] m-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem voluptates illo ducimus unde velit dolores dolore numquam deserunt, ipsam suscipit. Incidunt nisi repellat nobis blanditiis ducimus, sunt praesentium quaerat
            aliquam.
          </p>
          <div className="max-w-[550px] h-auto m-auto shadow-inner  bg-[#e4d7b6] rounded-lg flex items-center justify-center p-1 hover:scale-105 ease-in duration-300">
            <img className="rounded-xl" src={BGkanala} alt="/" width="550" height="550" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
