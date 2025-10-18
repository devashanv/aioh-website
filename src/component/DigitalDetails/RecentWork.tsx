import { useEffect, useRef, useState } from "react";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { LiaHandPointRightSolid } from "react-icons/lia";
import { ImCheckmark2 } from "react-icons/im";

import img1 from "../../assets/img/recentWork/queens pop up.webp";
import img2 from "../../assets/img/recentWork/pop up wingscraft.webp";
import img3 from "../../assets/img/recentWork/pop up eikone.webp";
import img4 from "../../assets/img/recentWork/dumy.jpg";
import img5 from "../../assets/img/recentWork/pop up walauwa.webp";
import { AnimatePresence, motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  description2?: string;
  challengesIntro?: string;
  challenges?: string[];
  solutions?: string[];
  solutionsList?: string[];
  strategyIntro?: string;
  strategy?: string[];
  executionIntro?: string;
  execution?: string[];
  resultsIntro?: string;
  results?: string[];
  takeawayIntro?: string;
  takeaway?: string[];
  solutionsIntro?: string;
  resultsParagraph?: string;
};

const projects: Project[] = [
  {
    title: "Queens Hotel Kandy",
    description:
      "Heritage storytelling unlocks 964.3% surge in organic engagement",
    image: img1,
    link: "#",
    description2:
      "When Queens Hotel Kandy recognized their digital presence wasn't reflecting their prestigious heritage status, our organic social media strategy transformed underperforming channels into a content powerhouse, delivering 615,910 unique reach and an extraordinary 964% increase in content interactions.",
    challenges: [
      "Minimal organic social media engagement despite premium brand heritage",
      "Disconnected content strategy failing to leverage cultural positioning",
      "Underutilized storytelling potential around property's historical significance",
      "Low community interaction and brand affinity metrics",
    ],
    solutionsIntro:
      "Results demonstrated the power of authentic brand storytelling in the hospitality sector:",
    solutions: [
      "Our content strategists conducted a comprehensive brand audit to understand Queens Hotel's authentic voice and audience expectations. We identified the intersection between heritage storytelling and modern hospitality experiences as the key differentiator.",
      "Through data-driven content planning and audience behavior analysis, we developed a content ecosystem that balanced nostalgic storytelling with contemporary guest experiences. Our creative team produced scroll-stopping visuals that captured both the property's cultural essence and luxury positioning.",
      "The organic first approach focused on community building rather than paid amplification, utilizing engagement psychology and platform algorithm optimization to maximize natural reach.",
    ],
    solutionsList: [
      "615,910 unique organic reach representing 706% growth",
      "364,519 total organic video views with 1,400% increase",
      "15.4M organic photo impressions from heritage and guest experience content",
    ],
  },
  {
    title: "Emirates Aviation Collectibles",
    description: "Selling Out Emirates Aviation Collectibles with a 1043% ROI",
    image: img2,
    link: "#",
    description2:
      "A structured full-funnel Meta strategy transformed niche awareness into 100% sales conversion",
    challengesIntro:
      "A Dubai-based brand specializing in upcycling airplane parts into luxury collectibles, launched an exclusive collection of Emirates A380 aircrafts. The task was simple in theory, sell the stock. But the reality was far more complex:",
    challenges: [
      "No prior audience data for Meta Ads",
      "Highly niche target market: aviation enthusiasts, high-net-worth individuals, and luxury buyers",
      "The need to avoid irrelevant inquiries",
      "Requirement to build trust for a high-ticket purchase in a competitive luxury market",
    ],
    strategyIntro:
      "We designed a three-stage full-funnel approach to identify the right buyers, build credibility, and convert interest into sales.",
    strategy: [
      "Awareness & Trust-Building – Cold campaigns tested multiple audience groups, supported by storytelling creatives that positioned the products as exclusive collectibles. Customer reviews, testimonial-style content, and emotional advertising built trust and credibility. Lead forms helped qualify interest by filtering serious buyers from casual browsers.",
      "Audience Refinement – Continuous testing allowed us to identify engaged, high-intent users who interacted with ads, engaged with content, or expressed curiosity. These segments became our warm audience, the foundation for efficient retargeting.",
      "Conversion & Retargeting – With a warmed audience, we shifted to urgency-driven campaigns optimized for WhatsApp conversions — the preferred communication channel in the UAE. Transparency on pricing, exclusivity messaging, and urgency-based creatives pushed high-intent leads to act quickly.",
    ],
    executionIntro:
      "Over the course of Two months, we tested 30+ creatives and optimized multiple ad sets. Each adjustment was guided by real-time performance data, ensuring that the funnel became sharper with every iteration. By tailoring the strategy to local behavior and leveraging WhatsApp for direct, personal follow-ups, we closed the gap between awareness and purchase.",
    execution: [
      "Continuous optimization of ad sets and creatives based on real-time data",
      "Leveraging WhatsApp as the primary communication channel for high-intent leads",
      "Personal follow-ups to bridge awareness and purchase",
    ],
    resultsIntro: "The campaign delivered results beyond expectations:",
    results: [
      "100% stock sold out within two months",
      "1043% ROI in the second campaign phase",
      "High-quality, qualified leads funneled directly via WhatsApp and calls",
      "Stronger brand awareness in UAE luxury and aviation circles",
      "Audience database established for future product launches",
    ],
    takeawayIntro:
      "This campaign proved that no product is too niche to market successfully, if you design the right funnel.By starting broad, filtering for high intent, building trust, and retargeting with urgency-driven messaging, Wingscraft transformed a niche collectible into a sold-out success story.",
    takeaway: [
      "No product is too niche to market successfully, if you design the right funnel.",
    ],
  },
  {
    title: "UK Education Consultancy",
    description: "Cutting Cost per Lead by 78% with Smarter Targeting",
    image: img3,
    link: "#",
    description2:
      "Data-driven testing and refined ad strategies reduced CPL from $19.90 to $4.38 while hitting the targets",
    challengesIntro:
      "This UK-based education consultancy firm supports student recruitment for two leading universities - the University of Bolton and Anglia Ruskin University. With over 70+ courses on offer and a highly niche audience within specific UK regions, the challenge was clear:",
    challenges: [
      "High cost per lead (CPL) of $25+",
      "Difficulty connecting the right courses with the right audience",
      "Eligibility is 25km radius within London",
      "Strong competition from established industry players",
      "Need to meet strict student registration targets",
    ],
    strategyIntro:
      "To overcome these challenges, our digital team applied a three pronged approach designed to optimize efficiency across the funnel:",
    strategy: [
      "Course Selection Optimization – Analyzed past student data, intake records, Google Analytics, and Google Trends to identify top-demand programs. Narrowed 70+ options down to 7 high-potential courses for focused campaigns.",
      "Audience Refinement – Implemented hyper-local targeting within a 16-mile radius of Manchester and London. Through continuous testing, we uncovered key insights - such as London-based audiences showing higher interest in health-related courses - enabling sharper segmentation.",
      "Ad Angle Testing – To stand out in a competitive landscape, we tested 50+ creatives with different value propositions: career-building opportunities, industry demand, and financial incentives. Iterative testing allowed us to identify the most resonant messaging for each segment.",
    ],
    executionIntro:
      "Over a three-month campaign cycle, we refined targeting and creative angles through continuous A/B testing. Multiple ad sets were adjusted in real time to optimize performance and scale winning combinations of course, audience, and ad angle.",
    execution: [
      "Refined targeting and creative angles continuously over three months",
      "Adjusted ad sets in real time to scale winning combinations of course, audience, and ad angle",
    ],
    resultsIntro:
      "The consultancy achieved a breakthrough in both cost-efficiency and lead quality:",
    results: [
      "78% Reduction in CPL (from $19.90 to $4.38)",
      "Increased 15% Conversion Rate",
      "Target Registrations Achieved",
    ],
    takeaway: [
      "No product is too niche to market successfully, if you design the right funnel.",
    ],
    takeawayIntro:
      "Success came not from a single campaign, but from continuous testing, audience refinement, and creative optimization. By aligning the right course, the right audience, and the right message, we turned a high-cost recruitment challenge into a scalable, cost-effective model.",
  },
  {
    title: "Ekho Ella",
    description: "Driving Organic Growth in the Hills of Ella",
    image: img4,
    link: "#",
    description2:
      "Scenic storytelling and organic strategy delivered a 193% lift in reach",
    challengesIntro:
      "Nestled in Sri Lanka’s scenic hill country, Ekho Ella offers travelers a boutique stays surrounded by natural beauty. However, its digital presence did not reflect this charm. Social media engagement was minimal, reach remained limited, and the property struggled to connect with the right audience.",
    challenges: [],
    strategyIntro:
      "We crafted a content-first approach to highlight Ella’s breathtaking landscapes, hotel amenities, and unique guest experiences. This included:",
    strategy: [
      "A structured content calendar designed for consistency and discoverability",
      "Visual storytelling that resonated with boutique travelers seeking scenic escapes",
      "Short-form videos and high-quality imagery to strengthen authenticity and appeal",
    ],
    executionIntro:
      "By pairing stunning visuals with interactive captions and community-driven engagement, we transformed Ekho Ella’s social channels into an organic growth engine. The focus remained entirely on building organic reach and engagement.",
    execution: [
      "Interactive captions to drive engagement",
      "Stunning visuals showcasing hotel amenities and scenic landscapes",
      "Community-driven content approach",
    ],
    resultsIntro:
      "The impact of this organic-first strategy was immediate and measurable:",
    resultsParagraph:
      "Through authentic storytelling and strategic execution, Ekho Ella was able to amplify its brand presence, attract a wider audience, and position itself as a must-stay boutique destination in Ella.",
    results: [
      "176,500 Organic Reach (+193%)",
      "701,800 Organic Views (+103%)",
      "118,000 3-Second Video Views (+1,000%)",
      "8,700 Organic Interactions (+119%)",
      "270,600 Total Reach (+78%)",
    ],
  },
  {
    title: "Ehelepola Walawwa",
    description: "Shaping the Brand of Sri Lanka’s Largest Cultural Landmark",
    image: img5,
    link: "#",
    description2:
      "AI-powered innovation and unified branding brought a historic destination to life",
    challengesIntro:
      "Ehelepola Walawwa, developed under the Temple of the Tooth Relic in Kandy, is one of Sri Lanka’s most ambitious cultural and commercial projects. The development includes:",
    challenges: [
      "Sri Lanka’s First Wax Museum – immortalizing 35 historic figures",
      "Prison Arcade – a premium shopping destination with 40 outlets",
      "King’s Court Restaurant – a fine-dining experience infused with heritage",
      "Translated cultural heritage into modern brand storytelling",
      "Appealed to both local and international audiences",
      "Created a unified identity while giving each entity (museum, arcade, restaurant) its own distinct voice",
      "Solved the unique creative challenge of designing AI-powered wax figures of personalities with no existing photographs",
      "Register vendors for prison arcade",
    ],
    strategyIntro:
      "We developed a comprehensive branding and digital roadmap designed to blend tradition with technology:",
    strategy: [
      "Brand & Digital Strategy – Positioned Ehelepola Walawwa as both a cultural icon and modern destination, with a digital roadmap focused on visibility, engagement, and tourism appeal.",
      "Creative Design & Visual Identity – Designed logos for the Wax Museum, Prison Arcade, King’s Court, and the Walawwa itself, supported by a consistent visual language across platforms with brand guidelines.",
      "AI-Driven Innovation – Leveraged advanced AI tools to conceptualize lifelike wax figures from limited historic records, pioneering first-of-its-kind innovation in Sri Lanka.",
      "Create Vendor Proposals – Created unique and insightful vendor proposals to attract vendors for Prison Arcade",
    ],
    executionIntro:
      "Our Creative and Brand teams worked hand-in-hand to ensure branding was seamlessly integrated across four diverse entities while maintaining individuality. Visual storytelling, heritage-driven design elements, and AI-powered creativity allowed us to bridge the gap between cultural authenticity and modern relevance.",
    execution: [
      "Integrated branding across four diverse entities while maintaining individuality",
      "Applied visual storytelling and heritage-driven design elements",
      "Implemented AI-powered creativity for wax figure conceptualization",
    ],
    resultsIntro: "The project delivered a transformative impact:",
    results: [
      "30+ Vendors (Well Established Brands) registered for prison arcade for stalls",
      "First-of-its-kind innovation in Sri Lanka with AI-driven wax figure design",
      "Seamless, cohesive branding across four distinct entities",
      "Global positioning appealing to both local visitors and international tourists",
      "A landmark brand identity that embodies heritage, innovation, and tourism appeal",
    ],
    takeaway: [
      "No product is too niche to market successfully, if you design the right funnel.",
    ],
    takeawayIntro:
      "Ehelepola Walawwa now stands not just as a destination, but as a living storytelling experience. By fusing tradition with technology, the project set a new benchmark for cultural branding in Sri Lanka. For our team, being entrusted with this vision was more than a project, it was an honor to shape a brand that preserves history while inspiring the future.",
  },
];

const RecentWork: React.FC = () => {
  // Ref to scroll to card section
  const cardSectionRef = useRef<HTMLDivElement>(null);

  // Popup state management
  const [popupData, setPopupData] = useState<Project | null>(null);

  // Stop body scroll when popup is open
  useEffect(() => {
    if (popupData) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [popupData]);

  // State to manage current page for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Determine screen size
  const [screen, setScreen] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  // Update screen size on resize and set interval for mobile pagination
  useEffect(() => {
    const updateScreen = () => {
      if (window.innerWidth < 640) setScreen("mobile");
      else if (window.innerWidth < 1024) setScreen("tablet");
      else setScreen("desktop");
    };

    updateScreen();
    window.addEventListener("resize", updateScreen);

    let interval: NodeJS.Timeout | null = null;

    // Auto slide on mobile
    if (screen === "mobile") {
      interval = setInterval(() => {
        setCurrentPage((prev) =>
          prev < Math.ceil(projects.length / 4) ? prev + 1 : 1
        );
      }, 8000);
    }

    return () => {
      window.removeEventListener("resize", updateScreen);
      if (interval) clearInterval(interval);
    };
  }, [screen]);

  // Scroll to top of card section when currentPage changes
  useEffect(() => {
    const section = cardSectionRef.current;
    if (!section) return;

    // Skip scroll if auto-slide is active on mobile
    if (screen === "mobile") return;

    // Scroll to the top of the card section
    window.scrollTo({
      top: section.offsetTop - 20,
      behavior: "smooth",
    });
  }, [currentPage]);

  // Calculate pagination based on screen size
  let itemsPerPage = 8;
  if (screen === "mobile") itemsPerPage = 4;
  else if (screen === "tablet") itemsPerPage = 6;

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  // Handle previous page click
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => {
        const newPage = Math.max(prev - 1, 1);
        setTimeout(() => {
          cardSectionRef.current?.scrollIntoView({
            // behavior: "smooth",
            block: "start",
          });
        }, 50);
        return newPage;
      });
    }
  };

  // Handle next page click
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => {
        const newPage = Math.min(prev + 1, totalPages);
        setTimeout(() => {
          cardSectionRef.current?.scrollIntoView({
            // behavior: "smooth",
            block: "start",
          });
        }, 50);
        return newPage;
      });
    }
  };

  return (
    <div className="mx-auto w-11/12">
      {/* sec heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[26px] md:text-3xl lg:text-5xl lg:leading-[62px] font-bold text-center"
        >
          What We've Done
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-11/12 md:w-3/4 lg:w-1/2 mt-4 text-sm lg:text-lg leading-6 md:leading-7 lg:leading-8 font-light text-center"
        >
          Explore our recent projects to see how Marketing, Data & Technology
          come together to drive meaningful results for our clients.
        </motion.p>
      </motion.div>

      {/* card sec */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          ref={cardSectionRef}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-12 pt-8 lg:pt-10"
        >
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => setPopupData(project)}
              className="relative bg-white hover:bg-[#01213A] text-secondary hover:text-white rounded-xl shadow-sm hover:shadow-md transition-transform group hover:scale-[1.015] flex flex-col justify-between h-full cursor-pointer"
            >
              {/* Card Top Content */}
              <div className="items-start p-4 pt-4 sm:pt-6">
                <div className="flex justify-between md:mb-4">
                  <h3 className="font-medium text-sm md:text-lg w-3/4 sm:max-w-4/5">
                    {project.title}
                  </h3>
                  <button className="bg-primary text-secondary w-8 h-8 md:w-9 md:h-9 ml-2 md:ml-1 flex items-center justify-center rounded-full group-hover:scale-110 transition cursor-pointer">
                    <GoArrowUpRight
                      style={{ width: "18px", height: "18px" }}
                      className="text-sm md:text-lg"
                    />
                  </button>
                </div>
                <p className="text-xs md:text-sm font-light md:leading-5 my-2 md:my-1">
                  {project.description}
                </p>
              </div>

              <div className="relative flex items-center justify-center md:mt-4 scale-100 group-hover:scale-105 transition-transform duration-300 ease-out">
                {/* SHAPE back - hover */}
                <div className="hidden group-hover:block absolute -top-3 sm:-top-4.5 w-4/5 h-16 bg-white rounded-[10px] opacity-60 z-0" />

                {/* SHAPE front - hover */}
                <div className="hidden group-hover:block absolute -top-1.5 sm:-top-2.5 w-11/12 h-16 bg-white rounded-[10px] opacity-80 z-10" />

                {/* SHAPE back */}
                <div className="block group-hover:hidden absolute -top-3 sm:-top-4.5 w-4/5 h-16 bg-[#595959] rounded-[10px] opacity-60 z-0" />

                {/* SHAPE front */}
                <div className="block group-hover:hidden absolute -top-1.5 sm:-top-2.5 w-11/12 h-16 bg-[#595959] rounded-[10px] opacity-80 z-10" />

                {/* IMAGE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative w-full h-28 md:h-36 lg:h-44 object-cover rounded-[10px] rounded-b-xl z-20"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 mt-10 lg:mt-16">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`p-2 rounded-full border ${
            currentPage === 1
              ? "bg-ternary/5 text-ternary/50 cursor-not-allowed"
              : "hover:bg-ternary/5 cursor-pointer"
          }`}
        >
          <FiArrowLeft />
        </button>

        <span className="text-sm font-medium text-secondary/80">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full border ${
            currentPage === totalPages
              ? "bg-ternary/5 text-ternary/50 cursor-not-allowed"
              : "hover:bg-ternary/5 cursor-pointer"
          }`}
        >
          <FiArrowRight />
        </button>
      </div>

      {/* Popup menu */}
      <AnimatePresence>
        {popupData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 w-full z-50"
            onClick={() => setPopupData(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: 20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
              className="fixed inset-0 z-10 m-3.5 sm:w-fit h-auto bg-secondary/85 backdrop-blur-lg rounded-[20px] p-6 py-10 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-10 lg:gap-8"
            >
              {/* Close button */}
              <button
                onClick={() => setPopupData(null)}
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
              >
                <IoClose className="w-6 md:w-10 h-auto" />
              </button>

              {/* Left sec - Image */}
              <div className="flex lg:flex-1/2">
                <div className="relative w-full lg:h-4/5 rounded-[20px] overflow-hidden group shadow-lg">
                  <img
                    src={popupData.image}
                    alt={popupData.title}
                    className="w-full h-full object-fill object-top"
                    // className="w-full h-full object-cover object-top"
                  />
                  {/* <div className="absolute flex items-center justify-center bottom-0 left-0 w-full p-2 md:p-4 bg-white/20 backdrop-blur-md rounded-b-[20px] z-0">
                    <button
                      onClick={() => window.open(popupData.link, "_blank")}
                      className="text-secondary flex items-center justify-center gap-1 w-fit px-6 py-2 bg-primary hover:bg-primary/80 rounded-full cursor-pointer"
                    >
                      <span className="text-sm md:text-base font-medium">
                        Explore
                      </span>
                      <GoArrowUpRight
                        style={{ strokeWidth: 1 }}
                        className="text-sm md:text-base"
                      />
                    </button>
                  </div> */}
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex-1 lg:flex-1/2 text-white flex flex-col justify-between text-left overflow-y-scroll mx-4 lg:mx-0 lg:pr-6">
                <div>
                  <h2 className="text-2xl md:text-[32px] leading-[41px] font-semibold mb-4">
                    {popupData.title}
                  </h2>

                  {popupData.description2 && (
                    <p className="text-base md:text-lg font-light leading-6 md:leading-7 lg:leading-8 mb-4 text-justify">
                      {popupData.description2}
                    </p>
                  )}

                  {/* Challenges */}
                  {popupData.challenges && (
                    <>
                      <h3 className="text-lg md:text-2xl leading-6 md:leading-7 lg:leading-8 font-semibold mt-10 mb-4">
                        The Challenges
                      </h3>
                      {popupData.challengesIntro && (
                        <p className="text-base md:text-lg font-light mb-2">
                          {popupData.challengesIntro}
                        </p>
                      )}
                      <ul className="text-base md:text-lg font-light space-y-2">
                        {popupData.challenges.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ImCheckmark2
                              style={{ width: "16px", height: "16px" }}
                              className="text-white mt-1 shrink-0"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Solutions */}
                  {popupData.solutions && (
                    <>
                      <h3 className="text-lg md:text-2xl leading-6 md:leading-7 lg:leading-8 font-semibold mt-10 mb-4">
                        Solutions and Results
                      </h3>

                      <ul className="text-base md:text-lg font-light space-y-2">
                        {popupData.solutions.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <LiaHandPointRightSolid
                              style={{ width: "16px", height: "16px" }}
                              className="text-white mt-1.5 shrink-0"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {popupData.solutionsIntro && (
                        <p className="text-lg md:text-2xl leading-6 md:leading-7 lg:leading-8 font-semibold mt-10 mb-4">
                          {popupData.solutionsIntro}
                        </p>
                      )}
                      {popupData.solutionsList && (
                        <ul className="text-base md:text-lg font-light space-y-2">
                          {popupData.solutionsList.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <LiaHandPointRightSolid
                                style={{ width: "16px", height: "16px" }}
                                className="text-white mt-1.5 shrink-0"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}

                  {/* Strategy */}
                  {popupData.strategy && (
                    <>
                      <h3 className="text-lg md:text-2xl leading-6 md:leading-7 lg:leading-8 font-semibold mt-10 mb-4">
                        The Strategies
                      </h3>
                      {popupData.strategyIntro && (
                        <p className="text-base md:text-lg font-light mb-2">
                          {popupData.strategyIntro}
                        </p>
                      )}
                      <ol className="text-base md:text-lg font-light space-y-2 list-decimal list-inside">
                        {popupData.strategy.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ol>
                    </>
                  )}

                  {/* Execution */}
                  {popupData.execution && (
                    <>
                      <h3 className="text-lg md:text-2xl leading-6 md:leading-7 lg:leading-8 font-semibold mt-10 mb-4">
                        The Execution
                      </h3>
                      {popupData.executionIntro && (
                        <p className="text-base md:text-lg font-light mb-2">
                          {popupData.executionIntro}
                        </p>
                      )}
                      {/* <ul className="text-base md:text-lg font-light space-y-2">
                        {popupData.execution.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <LiaHandPointRightSolid
                              style={{ width: "16px", height: "16px" }}
                              className="text-white mt-1.5 shrink-0"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul> */}
                    </>
                  )}

                  {/* Results */}
                  {popupData.results && (
                    <>
                      <h3 className="text-lg md:text-2xl leading-6 md:leading-7 lg:leading-8 font-semibold mt-10 mb-4">
                        The Results
                      </h3>
                      {popupData.resultsIntro && (
                        <p className="text-base md:text-lg font-light mb-2">
                          {popupData.resultsIntro}
                        </p>
                      )}
                      <ul className="text-base md:text-lg font-light space-y-2">
                        {popupData.results.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <LiaHandPointRightSolid
                              style={{ width: "16px", height: "16px" }}
                              className="text-white mt-1.5 shrink-0"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {popupData.resultsParagraph && (
                        <p className="text-base md:text-lg font-light mt-4">
                          {popupData.resultsParagraph}
                        </p>
                      )}
                    </>
                  )}

                  {/* Takeaway */}
                  {popupData.takeaway && (
                    <>
                      <h3 className="text-lg md:text-2xl leading-6 md:leading-7 lg:leading-8 font-semibold mt-10 mb-4">
                        The Takeaway
                      </h3>
                      {popupData.takeawayIntro && (
                        <p className="text-base md:text-lg font-light mb-2">
                          {popupData.takeawayIntro}
                        </p>
                      )}
                      {/* <ul className="text-base md:text-lg font-light space-y-2">
                        {popupData.takeaway.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <LiaHandPointRightSolid
                              style={{ width: "16px", height: "16px" }}
                              className="text-white mt-1.5 shrink-0"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul> */}
                    </>
                  )}
                </div>

                {/* <div className="mt-6 text-secondary">
                  <button
                    onClick={() => window.open(popupData.link, "_blank")}
                    className="w-fit my-4 px-6 py-4 rounded-full font-medium bg-primary hover:bg-primary/80 flex items-center justify-center gap-2 transition cursor-pointer"
                  >
                    <span className="leading-none lg:mb-0.5">View Project</span>
                    <LuCircleChevronRight
                      style={{ width: "18px", height: "18px" }}
                      className="text-base leading-none"
                    />
                  </button>
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RecentWork;
