import React from "react";
import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" px-6 sm:px-10 lg:px-[165px] bg-black text-white pb-10">
      <div className=" sm:flex items-center justify-between ">
        <div className="sm:flex items-center">
          <h1 className="  relative z-20 text-center text-[24px] sm:text-[32px] py-5 font-black font-test">
            leonardAdjei
          </h1>
          <FaLaptopCode className="hidden sm:block text-3xl ml-2 text-primary-green" />
        </div>

        <div className=" flex w-[174px]  mx-auto sm:mx-0 sm:w-40 text-xl relative z-20 sm:justify-between justify-around   ">
          <Link href="https://github.com/blameleo " target="_blank">
            <SiGithub />
          </Link>

          <Link
            href="https://www.linkedin.com/in/leonard-adjei-3a07427b/"
            target="_blank"
          >
            <SiLinkedin />
          </Link>

          <Link
            href="mailto:leonardgre@gmail.com?subject=subject&cc=cc@example.com"
            target="_blank"
          >
            <SiGmail />
          </Link>

          <Link href="https://wa.me/233572564119" target="_blank">
            <SiWhatsapp />
          </Link>
        </div>
      </div>
    </div>
  );
}