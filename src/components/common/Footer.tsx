import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";


export default function Footer() {
  return (
    <div className="w-full bottom-0 bg-gray-100 flex flex-col items-center py-5">
      <div className="flex flex-row items-center mb-4">
        <div className="w-9 h-9 bg-gray-400 flex flex-col items-center justify-center rounded-full mx-1 cursor-pointer">
          <FaFacebookF />
        </div>

        <div className="w-9 h-9 bg-gray-400 flex flex-col items-center justify-center rounded-full mx-1 cursor-pointer">
          <FaXTwitter />
        </div>

        <div className="w-9 h-9 bg-gray-400 flex flex-col items-center justify-center rounded-full mx-1 cursor-pointer">
          <IoLogoInstagram />
        </div>

        <div className="w-9 h-9 bg-gray-400 flex flex-col items-center justify-center rounded-full mx-1 cursor-pointer">
          <IoLogoWhatsapp />
        </div>
      </div>

      <p className=' text-gray-800 font-medium'>&copy; Copyright SkySavvy 2024</p>
    </div>
  );
}
