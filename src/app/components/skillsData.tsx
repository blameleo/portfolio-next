//@ts-nocheck
"use client";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa6";
import { SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export const skills = [
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
    title: "Next/React js",
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
  {
    title: "MongoDB",
    description: <SiMongodb size={80} className=" text-yellow-500" />,
    link: "https://microsoft.com",
  },
];
