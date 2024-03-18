"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function Projects() {
  return (
    <div id="projects" className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
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

export const users = [
  {
    name: " ",
    designation: "Ndc good governance card",
    image: "/projectimage.png",
    badge: "Github",
    link: "https://www.ndcgoodgovernancecard.com",
    github: ""
  },
  {
    name: " ",
    designation: "Freetown rentals",
    image: "/projectimage2.png",
    badge: "Github",
    link: "https://freetownrentals.com/",
    github: "https://github.com/blameleo/fuserentals"
  },
  {
    name: " ",
    designation: "Beehouse job search app",
    image: "/projectimage3.png",
    badge: "Github",
    link: "https://beehouse-app-frontend.vercel.app",
    github: "https://github.com/blameleo/beehouse-app"
  },
  {
    name: " ",
    designation: "Future ocean leaders academy",
    image: "/projectimage4.png",
    badge: "Github",
    link: "https://ghana-ocean-literacy-academy.vercel.app/",
    github: "https://github.com/blameleo/Ghana-Ocean-Literacy-Academy-"
  },
  {
    name: " ",
    designation: "Calendly clone",
    image: "/projectimage5.png",
    badge: "Github",
    link: "https://magnificent-bubblegum-266b76.netlify.app/",
    github: "https://github.com/blameleo/calendly"
  },
  {
    name: " ",
    designation: "Dictionary app",
    image: "/projectimage6.png",
    badge: "Github",
    link: "https://dictionary-app-two-ashy.vercel.app/",
    github: "https://github.com/blameleo/dictionary-app"
  },
  {
    name: " ",
    designation: "Countries app",
    image: "/projectimage7.png",
    badge: "Github",
    link: "https://countries-api-app-sooty.vercel.app/",
    github: "https://github.com/blameleo/countries_api_app"
  },
  {
    name: " ",
    designation: "Devjobs app",
    image: "/projectimage8.png",
    badge: "Github",
    link: "https://devjobsleo.netlify.app/",
    github: "https://github.com/blameleo/devjob-app"
  },
  
];
