"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Section from "./Section";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Education from "./sections/Education";

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = [
  { id: "hero", label: "سینا امیرجانی", content: <Hero /> },
  { id: "about", label: "درباره من", content: <About /> },
  { id: "education", label: "تحصیلات", content: <Education /> },
  { id: "skills", label: "مهارت ها", content: <Skills /> },
  { id: "portfolio", label: "نمونه کار", content: <Projects /> },
  { id: "contact", label: "تماس با من", content: <Contact /> },
];

export default function App() {
  const containerRef = useRef(null);
  const panelRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);

  const addPanelRef = (element) => {
    if (element && !panelRefs.current.includes(element)) {
      panelRefs.current.push(element);
    }
  };

  useLayoutEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      const panels = panelRefs.current;

      ScrollTrigger.matchMedia({
        "(min-width: 800px)": () => {
          panels.forEach((panel, i) => {
            ScrollTrigger.create({
              trigger: panel,
              start: "top top",
              pin: true,
              pinSpacing: false,
              end: () => (i === panels.length - 1 ? "+=0" : "bottom top"),

              onEnter: () => setActiveIndex(i),
              onEnterBack: () => setActiveIndex(i),
            });

            if (i < panels.length - 1) {
              gsap.to(panel, {
                scale: 0.92,
                opacity: 0.35,
                ease: "none",

                scrollTrigger: {
                  trigger: panels[i + 1],
                  start: "top bottom",
                  end: "top top",
                  scrub: true,
                },
              });
            }
          });
        },

        "(max-width: 799px)": () => {
          panels.forEach((panel, i) => {
            ScrollTrigger.create({
              trigger: panel,
              start: "top top",
              pin: true,
              pinSpacing: false,
              end: () => (i === panels.length - 1 ? "+=0" : "bottom top"),

              onEnter: () => setActiveIndex(i),
              onEnterBack: () => setActiveIndex(i),
            });
          });
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();

      gsap.ticker.remove(tickerCallback);

      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar sections={SECTIONS} activeIndex={activeIndex} />

      <main ref={containerRef} className="relative">
        {SECTIONS.map((section, index) => (
          <Section
            key={section.id}
            id={section.id}
            ref={addPanelRef}
            label={section.label}
            index={index}
          >
            {section.content}
          </Section>
        ))}
      </main>
    </>
  );
}
