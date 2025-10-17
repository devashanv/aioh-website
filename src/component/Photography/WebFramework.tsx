import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* -------------------------------- data -------------------------------- */
const steps = [
  {
    number: "01",
    title: "Understand Your Brand Story",
    description:
      "Before we pick up a camera, we know what story we're telling. What's unique about your business? What do you want customers to feel? Every photo and video serves your brand mission.",
  },
  {
    number: "02",
    title: "Product Photography That Sells",
    description:
      "Beautiful product shots from every angle. Close-ups that show detail, lifestyle photos that show products in use, flat lays that look stunning on social media. Photography that makes customers want to buy.",
  },
  {
    number: "03",
    title: "Lifestyle & Brand Photography",
    description:
      "Photos of your team, your workspace, your process. Real people and real moments that build connection and trust. Customers buy from businesses they feel they know—photography makes that possible.",
  },
  {
    number: "04",
    title: "Professional Video Production",
    description:
      "From concept to final edit—we handle it all. Product videos, testimonial videos, explainer videos, social media videos. Professional quality that keeps viewers watching and drives action.",
  },
  {
    number: "05",
    title: "Video Storytelling That Connects",
    description:
      "We don't just film—we tell stories. Compelling narratives that emotionally connect with your audience. Videos that people watch all the way through and actually remember.",
  },
  {
    number: "06",
    title: "Before & After Content",
    description:
      "Service videos that show transformation. Before & after photography that proves your product or service works. Visual proof that builds confidence and drives conversions.",
  },
  {
    number: "07",
    title: "Behind-The-Scenes Content",
    description:
      "Show customers how you work. Behind-the-scenes videos and photos build authenticity and trust. People connect with real, unpolished moments more than perfect corporate imagery.",
  },
  {
    number: "08",
    title: "Social Media Video Content",
    description:
      "Short-form videos, reels, stories, TikToks. We create video content optimized for every social platform. Engaging, shareable, designed to perform on the algorithm.",
  },
  {
    number: "09",
    title: "Testimonial & Case Study Videos",
    description:
      "Real customers sharing real results. Video testimonials are 10x more powerful than written reviews. We produce professional testimonial videos that build credibility and drive sales.",
  },
  {
    number: "10",
    title: "Event & Live Coverage",
    description:
      "Conference coverage, product launches, grand openings, company events. Professional photography and videography that captures the moment and extends your reach beyond attendees.",
  },
  {
    number: "11",
    title: "Professional Editing & Post-Production",
    description:
      "Color correction, sound design, motion graphics, subtitles. We don't just film—we create polished, professional final products ready for every platform.",
  },
  {
    number: "12",
    title: "Optimized for Every Platform",
    description:
      "YouTube videos, Instagram Reels, TikTok content, website videos, email videos. We optimize every video for where it will actually be seen and watched.",
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
            Here's How We Create Professional Visuals
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
          Here's How We Create Professional Visuals
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
