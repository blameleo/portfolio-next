//@ts-nocheck
import { IoLogoJavascript } from "react-icons/io";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa6";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export function Skills() {
  return (
    <div id="skills" className="max-w-5xl mx-auto px-8">
      <h1 className="text-4xl font-semibold  text-white text-center pt-10">
        <span className="text-4xl md:text-[6rem] font-bold my-1 leading-none">
          Skills
        </span>
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Html",
    description: <FaHtml5 size={80} className=" text-yellow-500" />,
    link: "",
  },
  {
    title: "Css",
    description: <FaCss3Alt size={80} className=" text-yellow-500" />,
    link: "https://netflix.com",
  },
  {
    title: "Javascript",
    description: <IoLogoJavascript size={80} className=" text-yellow-500" />,
    link: "https://google.com",
  },
  {
    title: "Next js",
    description: <SiNextdotjs size={80} className=" text-yellow-500" />,
    link: "https://meta.com",
  },
  {
    title: "Tailwindcss",
    description: <SiTailwindcss size={80} className=" text-yellow-500" />,
    link: "https://amazon.com",
  },
  {
    title: "Rest & Grpc Api",
    description: <TbApi size={80} className=" text-yellow-500" />,
    link: "https://microsoft.com",
  },
];
