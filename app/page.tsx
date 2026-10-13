import About from "@/components/About";
import Contact from "@/components/Contact";

import Hero from "@/components/Hero";
import Learning from "@/components/Learning";

import Skills from "@/components/Skills";
import Tools from "@/components/Tools";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Tools />
  
      <Learning />
 
      <Contact />
    </>
  );
}
