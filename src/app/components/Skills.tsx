//@ts-nocheck
"use client";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { projects, skills } from "./skillsData";

export function Skills() {
  return (
    <div id="skills" className="max-w-5xl mx-auto px-8 bg-">
      <h1 className="text-4xl font-semibold  text-white text-center pt-10">
        <span className="text-4xl md:text-[6rem] font-bold my-1 leading-none">
          Skills
        </span>
      </h1>
      <HoverEffect items={skills} />
    </div>
  );
}
