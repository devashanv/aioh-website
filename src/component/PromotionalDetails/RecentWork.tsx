import { useEffect, useRef, useState } from "react";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { LiaHandPointRightSolid } from "react-icons/lia";
import { ImCheckmark2 } from "react-icons/im";

import img1 from "../../assets/img/recentWork/Musswanna Pop up.webp";
import img2 from "../../assets/img/recentWork/Suisse rebranding video pop up.webp";
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
  strategyIntro?: string;
  strategy?: string[];
  executionIntro?: string;
  execution?: string[];
  resultsIntro?: string;
  results?: string[];
  takeawayIntro?: string;
  takeaway?: string[];
  solutionsIntro?: string;
};

const projects: Project[] = [
  {
    title: "Muswenna Tea Factory",
    description: "Rebranding a 25-Year Legacy into a Modern Premium Brand",
    image: img1,
    link: "#",
    description2:
      "Muswenna Tea, a premium Sri Lankan tea brand with a proud 25-year legacy, approached us for a complete rebranding project. The scope included creating a new brand identity, product packaging, company profile, and website redesign. The challenge was to craft a brand that not only stood out in crowded retail shelves but also carried the heritage and authenticity of Sri Lankan tea while appealing to international markets.",
    challengesIntro: "Muswenna Tea faced several branding challenges:",
    challenges: [
      "No existing brand guidelines or voice to guide the creative process.",
      "The 25-year history and heritage were not reflected in the existing branding.",
      "Needed to balance local authenticity with global premium appeal.",
      "Tight delivery timelines while ensuring creativity and quality.",
    ],
    strategyIntro: "Our Approach",
    strategy: [
      "Step 1 - Understanding the Brand – Immersed ourselves in Muswenna’s story, values, and market positioning. Identified opportunities to highlight authentic heritage and premium quality.",
      "Step 2 - Concept Development – Developed design concepts that combined elegant modern aesthetics with Sri Lankan cultural roots. Ensured concepts were versatile enough for domestic and international audiences.",
      "Step 3 - Visual Direction – Created mood boards and complete brand guidelines to establish a consistent identity. Defined a visual language balancing sophistication with approachability.",
      "Step 4 - Design Execution – Crafted product labels with clean layouts, elegant typography, and rich visuals that represented Muswenna’s premium essence. Redesigned the company profile and website to align with the refreshed identity.",
      "Step 5 - Collaboration & Finalization – Worked closely with the Muswenna team throughout the process for alignment. Delivered final designs that were shelf-ready and export-ready.",
    ],
    resultsIntro:
      "Despite the tight schedule, the rebranding project was a major success:",
    results: [
      "Won gold award in food exhibition in China.",
      "Strengthened shelf visibility, making Muswenna Tea stand out in competitive retail spaces.",
      "Established a modern, premium, and culturally rooted identity appealing to both local and international markets.",
      "Delivered a full brand guideline that now serves as the foundation for all future marketing efforts.",
    ],
    takeawayIntro: "The Impact",
    takeaway: [
      "The Muswenna Tea rebrand transformed the brand from an underrepresented legacy into a modern premium identity that speaks to global consumers.By blending heritage storytelling with contemporary design, Muswenna Tea is now well-positioned to expand its presence in both Sri Lankan and international markets.",
    ],
  },
  {
    title: "Hotel Suisse",
    description:
      "Blending Heritage with Modern Identity Through Rebranding campaign",
    image: img2,
    link: "#",
    description2:
      "Hotel Suisse, one of Kandy’s most iconic heritage landmarks, wanted to reposition itself with a modern yet timeless brand identity. To achieve this, we developed a rebranding Campaign that followed the journey of a “Swiss lady” exploring Kandy’s cultural treasures before arriving at Hotel Suisse. Her journey symbolized the hotel’s unique essence - a seamless blend of heritage, elegance, and modern sophistication.",
    strategyIntro: "Our Approach",
    strategy: [
      "Step 1 – Concept Development – Designed a narrative that connected Kandy’s rich cultural heritage with Hotel Suisse’s timeless charm. Created an emotional storyline resonating with both local audiences and international travelers.",
      "Step 2 – Casting & Brand Protection – Carefully selected the lead actress to ensure credibility and cultural sensitivity. Maintained brand integrity by balancing sophistication with respect for heritage.",
      "Step 3 – Production & AI Integration – Shot across Kandy’s scenic and cultural landmarks, showcasing heritage and luxury. Used AI-enhanced visuals to add modern flair while retaining authenticity.",
      "Step 4 – Editing & Post-Production – Employed cinematic editing, color grading, and sound design for a polished finish. Built an emotionally engaging flow that culminated in the rebranded Hotel Suisse reveal.",
    ],
    takeawayIntro: "The Impact",
    takeaway: [
      "The rebranding video became more than a promotional asset — it redefined Hotel Suisse’s brand perception.By intertwining cultural storytelling with modern digital enhancements, the hotel now stands as an elegant, renewed icon of Kandy that appeals to both heritage-seekers and contemporary travelers.",
    ],
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
          come together to drive meaningful results for our clients.{" "}
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

                  {/* Our Approach */}
                  {popupData.solutions && (
                    <>
                      <h3 className="text-lg md:text-2xl leading-6 md:leading-7 lg:leading-8 font-semibold mt-10 mb-4">
                        Our Approaches
                      </h3>
                      {popupData.solutionsIntro && (
                        <p className="text-base md:text-lg font-light mb-2">
                          {popupData.solutionsIntro}
                        </p>
                      )}
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
                    </>
                  )}

                  {/* Strategy */}
                  {popupData.strategy && (
                    <>
                      <h3 className="text-lg md:text-2xl leading-6 md:leading-7 lg:leading-8 font-semibold mt-10 mb-4 ">
                        Our Approaches
                      </h3>
                      {/* {popupData.strategyIntro && (
                        <p className="text-base md:text-lg font-light mb-2">
                          {popupData.strategyIntro}
                        </p>
                      )} */}
                      <ol className="text-base md:text-lg font-light space-y-2 list-none list-inside text-justify">
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
                      <ul className="text-base md:text-lg font-light space-y-2">
                        {popupData.execution.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <LiaHandPointRightSolid
                              style={{ width: "16px", height: "16px" }}
                              className="text-white mt-1.5 shrink-0"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Results */}
                  {popupData.results && (
                    <>
                      <h3 className="text-lg md:text-2xl leading-6 md:leading-7 lg:leading-8 font-semibold mt-10 mb-4">
                        The Outcomes
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
                    </>
                  )}

                  {/* Takeaway */}
                  {popupData.takeaway && (
                    <>
                      <h3 className="text-lg md:text-2xl leading-6 md:leading-7 lg:leading-8 font-semibold mt-10 mb-4">
                        The Impacts
                      </h3>
                      {/* {popupData.takeawayIntro && (
                        <p className="text-base md:text-lg font-light mb-2">
                          {popupData.takeawayIntro}
                        </p>
                      )} */}
                      <ul className="text-base md:text-lg font-light space-y-2">
                        {popupData.takeaway.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-justify"
                          >
                            {/* <LiaHandPointRightSolid
                              style={{ width: "16px", height: "16px" }}
                              className="text-white mt-1.5 shrink-0"
                            /> */}
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
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
