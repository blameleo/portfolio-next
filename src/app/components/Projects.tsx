"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { projects } from "./users";

export function Projects() {
  return (
    <div id="projects" className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={projects}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold  text-white">
              <span className="text-4xl md:text-[6rem] font-bold my-1 leading-none">
                projects
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}
