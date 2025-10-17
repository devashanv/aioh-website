import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* -------------------------------- data -------------------------------- */
const steps = [
  {
    number: "01",
    title: "Understand Your Promotion Goal",
    description:
      "Is it a sale, a new product launch, brand awareness, or driving foot traffic? We design materials that are laser-focused on achieving your specific goal, not just looking decorative.",
  },
  {
    number: "02",
    title: "Create Eye-Catching Designs",
    description:
      "Bold headlines, vibrant colors, compelling imagery—we design materials that grab attention instantly. Your promotional materials will stand out from competitors and make people stop and read.",
  },
  {
    number: "03",
    title: "Write Copy That Converts",
    description:
      "Clear headlines, benefit-focused messaging, strong calls-to-action. We write copy that tells people exactly what you're offering and why they should care right now. No confusion, no wasted space.",
  },
  {
    number: "04",
    title: "Design for Your Medium",
    description:
      "Flyers, posters, banners, shelf talkers, table tents, window displays—each format needs different design thinking. We create materials optimized for where they'll actually be seen and read.",
  },
  {
    number: "05",
    title: "Maintain Brand Consistency",
    description:
      "Your promotional materials look and feel like they come from YOUR brand. Same colors, fonts, tone, and messaging. Consistency builds recognition and trust.",
  },
  {
    number: "06",
    title: "Include Clear Calls-to-Action",
    description:
      "Visit your store, call now, shop online, use this coupon—we make it crystal clear what you want customers to do next. No guessing, no missed opportunities.",
  },
  {
    number: "07",
    title: "Design for Print Quality",
    description:
      "We know print specs, color modes, bleeds, and resolution. Your materials arrive looking as beautiful as the design, not washed out or pixelated. Professional quality every time.",
  },
  {
    number: "08",
    title: "Create Campaign Continuity",
    description:
      "If you're running a bigger campaign, all your materials work together. Website graphics, social media, flyers, signage—everything reinforces the same message and looks cohesive.",
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
            Here's How We Design Materials That Sell
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
          Here's How We Design Materials That Sell
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
