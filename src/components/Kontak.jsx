import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, FaWhatsapp } from "@fortawesome/react-fontawesome";
const Kontak = () => {
  return (
    <div id="kontak" className="w-full h-[720px] text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className=" text-xl tracking-widest mb-10 text-white underline underline-offset-8">Get Contact With Us!</p>
          <h1 className="py-4 text-[#e4d7b6] text-5xl font-mono">BOOK NOW</h1>
          <h1 className="py-4 text-[#e4d7b6] text-3xl font-mono">Contact Us Immediatly!</h1>
          <p className="py-4 text-white max-w-[70%] mb-6 m-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem voluptates illo ducimus unde velit dolores dolore numquam deserunt, ipsam suscipit. Incidunt nisi repellat nobis blanditiis ducimus, sunt praesentium quaerat
            aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos laudantium officiis ipsam excepturi maxime voluptatem in cupiditate debitis impedit? Quod enim itaque recusandae sit odit accusantium dolorum laborum dicta
            nobis?
          </p>
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

export default Kontak;
