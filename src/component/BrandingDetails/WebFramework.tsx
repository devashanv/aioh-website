// import React, { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* -------------------------------- data -------------------------------- */
const steps = [
  {
    number: "01",
    title: "Discover What Makes You Different",
    description:
      "We dig deep into what truly sets your business apart. Your unique story, values, strengths, and the real reason customers should care about you—not your competitors.",
  },
  {
    number: "02",
    title: "Define Your Brand Identity",
    description:
      "Who you are, what you stand for, how you sound, and how you make people feel. We create a complete brand personality that resonates with your ideal customers and stays consistent everywhere.",
  },
  {
    number: "03",
    title: "Create Visual Identity That Stands Out",
    description:
      "Logo design, color palettes, typography, and visual style that captures your brand essence. Professional design that makes you look credible, trustworthy, and impossible to ignore.",
  },
  {
    number: "04",
    title: "Craft Your Brand Message",
    description:
      "Clear, compelling messaging that tells your story and speaks directly to customer pain points. We help you articulate your value in a way that makes people say 'yes, this is exactly what I need.'",
  },
  {
    number: "05",
    title: "Build Brand Guidelines for Consistency",
    description:
      "A complete brand playbook so everything—from your website to social media to business cards—looks, sounds, and feels like the same professional company. No more inconsistent, confusing messaging.",
  },
  {
    number: "06",
    title: "Position Against Competitors",
    description:
      "We analyze your market and help you carve out a unique position. Instead of being 'another option,' you become THE obvious choice for a specific type of customer.",
  },
  {
    number: "07",
    title: "Bring Your Brand to Life Everywhere",
    description:
      "We ensure your new brand shows up consistently across your website, social media, marketing materials, packaging, and every customer touchpoint. One powerful, cohesive brand experience.",
  },
];

const WebFramework: React.FC = () => {
  /* ---------- state & refs for mobile view ---------- */
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ---------- observe which card is centered (active dot) ---------- */
  // For observer
  useEffect(() => {
    const sc = scrollRef.current;
    if (!sc) return;

    const cards = sc.querySelectorAll("div.snap-start"); // FIXED
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const idx = Array.from(cards).indexOf(en.target as HTMLElement);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { root: sc, threshold: 0.6 }
    );
    cards.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* ---------- auto-slide every 4 s (pause on user drag) ---------- */
  // For auto-scroll
  useEffect(() => {
    const sc = scrollRef.current;
    if (!sc) return;

    const goNext = () => {
      const next = (activeIndex + 1) % steps.length;
      const card = sc.querySelectorAll("div.snap-start")[next] as HTMLElement;
      if (card) {
        sc.scrollTo({
          top: card.offsetTop - 16, // padding fix
          behavior: "smooth",
        });
      }
    };

    autoRef.current = setInterval(goNext, 2000); // 2s as you wanted

    const stop = () => autoRef.current && clearInterval(autoRef.current);
    const resume = () => {
      stop();
      autoRef.current = setInterval(goNext, 2000);
    };

    sc.addEventListener("pointerdown", stop);
    sc.addEventListener("pointerup", resume);
    sc.addEventListener("pointercancel", resume);

    return () => {
      stop();
      sc.removeEventListener("pointerdown", stop);
      sc.removeEventListener("pointerup", resume);
      sc.removeEventListener("pointercancel", resume);
    };
  }, [activeIndex]);

  // hover state
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <div className="hidden lg:flex w-full flex-col py-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-center text-[26px] lg:text-[48px] font-bold text-white">
            Here's How We Build Your Unforgettable Brand
          </h2>
          <p className="text-center text-[16px] lg:text-[18px] text-white mt-0 font-light mb-12">
            How We Design, Develop, and Deliver Impactful Digital Products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:py-4 gap-6 md:gap-14 mx-auto w-full">
          {steps.map((step, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative transition-all duration-300 rounded-[20px] p-4 ${
                (hoveredIndex === null && i === 0) || hoveredIndex === i
                  ? "bg-gradient-to-r from-[#02EC9770] to-transparent"
                  : ""
              }`}
            >
              <h3 className="text-[18px] xl:text-[24px] font-medium text-white">
                <span className="text-white mr-2 text-[28px] xl:text-[32px] font-medium">
                  {step.number}
                </span>
                {step.title}
              </h3>
              <p className="text-sm xl:text-base font-light text-white/80 mt-1 leading-relaxed text-justify">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tab */}
      <div className="lg:hidden w-full py-12 flex flex-col items-center">
        <h2 className="text-center text-2xl font-medium text-white mb-4">
          Here's How We Build Your Unforgettable Brand
        </h2>
        <p className="text-center text-[16px] lg:text-[18px] text-white mt-0 font-light mb-12">
          How We Design, Develop, and Deliver Impactful Digital Products
        </p>

        <div className="relative flex w-full px-6">
          {/* Vertical Scroll Container */}
          <div
            ref={scrollRef}
            className="h-[600px] md:h-[650px] overflow-y-auto snap-y snap-mandatory space-y-6 pr-3 scroll-hide"
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className="w-full snap-start shrink-0 bg-white/5 backdrop-blur-md rounded-2xl p-6"
              >
                <h3 className="text-white text-3xl font-bold mb-1">
                  {step.number}
                </h3>
                <h4 className="text-white text-lg font-semibold">
                  {step.title}
                </h4>
                <p className="text-white/80 text-sm leading-relaxed mt-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Vertical Dots on the right side */}
          <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-center gap-2 pr-2">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-[#02EC97]" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WebFramework;
