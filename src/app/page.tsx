"use client";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import RecherchePharmacie from "@/components/RecherchePharmacie";
import Services from "@/components/Services";
import { useEffect, useRef } from "react";

const Page = () => {
  const sections: Record<"home" | "services" | "contact" | "about", React.RefObject<HTMLDivElement | null>> = {
    home: useRef<HTMLDivElement | null>(null),
    services: useRef<HTMLDivElement | null>(null),
    contact: useRef<HTMLDivElement | null>(null),
    about: useRef<HTMLDivElement | null>(null),
  };

  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash.slice(1) as keyof typeof sections;
      const section = sections[hash]?.current;
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    };

    scrollToSection();
    window.addEventListener("hashchange", scrollToSection);
    return () => window.removeEventListener("hashchange", scrollToSection);
  }, []);

  return (
    <div className="mt-20">
      <div ref={sections.home} id="home">
        <RecherchePharmacie />
      </div>
      <div ref={sections.services} id="services" className="py-20 mt-10">
        <Services />
      </div>
      <div ref={sections.contact} id="contact">
        <Contact />
      </div>
      <div ref={sections.about} id="about">
        <AboutUs />
      </div>
    </div>
  );
};

export default Page;
