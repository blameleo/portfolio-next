import Image from "next/image";
import { MacbookScrollDemo } from "./components/Macbook";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-black ">
      <MacbookScrollDemo />
      <Skills/>
      <Projects/>
      <Contact />
    </main>
  );
}
