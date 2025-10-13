import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import ArrowIcon from "../../assets/img/icons/arrow.svg";

import EhelepolaCS from "../../assets/caseStudies/ehelepola-cs.jpg";
import QueensCS from "../../assets/caseStudies/queens-cs.webp";
import RegencyCS from "../../assets/caseStudies/regency-cs.webp";
import WinchesterCS from "../../assets/caseStudies/winchester-cs.webp";
import WincraftCS from "../../assets/caseStudies/wincraft-cs.webp";
import UnknownCS from "../../assets/caseStudies/04.webp";

import { IoClose } from "react-icons/io5";
import { LiaHandPointRightSolid } from "react-icons/lia";
import { ImCheckmark2 } from "react-icons/im";

// case study popup images
import dumy from "../../assets/img/recentWork/dumy.jpg";
import tech_rw6 from "../../assets/img/recentWork/tech-rw6.png";

type popupData = {
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

const SuccessStoriesNew = () => {
  const slides: Array<{
    title: string;
    client: string;
    description: string;
    challenges: string[];
    image: string;
    stats: {
      growth: { value: number; label: string };
      revenue: { value: number; label: string };
    };
    popupData?: popupData;
  }> = [
    {
      title:
        "Developed museum website showcasing Kandyan heritage, boosting visibility globally.",
      client: "- Sri Dalada Maligawa -",
      description: "",
      challenges: [
        "Simplifying a complicated design process",
        "Giving consumers a seamless digital experience when designing their car",
        "Real time experience of designing your car",
        "A comprehensive back-end platform that allowed real time updates",
      ],
      image: EhelepolaCS,
      // Left side content for this slide
      stats: {
        growth: {
          value: 156,
          label: "Increase Business Growth",
        },
        revenue: {
          value: 125,
          label: "Increase Total Revenue",
        },
      },
      popupData: {
        title: "Ehelepola Walawwa Website",
        description:
          "The official website for the Ehelepola Walawwa Wax Museum in Kandy, Sri Lanka.",
        image: dumy,
        link: "https://ehelepolawalawwa.lk/",
        description2:
          "Ehelepola Walawwa is the official web presence for the Ehelepola Walawwa Wax Museum, a recently opened cultural heritage museum in Kandy, Sri Lanka, located in the historic Ehelepola Walawwa. The website promotes the museum, presents its exhibits, shares its historical significance, and provides clear information for visitors, both local and international. With a design focused on authenticity and accessibility, the platform highlights Kandyan history while introducing the unique wax museum experience to wider audiences.",
        challenges: [
          "Communicating the deep historical and cultural background of the Ehelepola Walawwa in an engaging manner was complex.",
          "Introducing the waxworks museum concept to an audience familiar with traditional heritage sites required careful positioning.",
          "Clearly presenting exhibition details like opening hours, location, tickets, and visitor supplies was essential.",
          "Ensuring the website conveyed authority and authenticity, particularly due to academic involvement in costumes and fashion reconstruction, was critical.",
          "Making the interface accessible and informative for both local and international visitors needed thoughtful design.",
        ],
        solutions: [
          "Created a homepage that highlights the wax museum’s mission, the museum opening announcement, and the significance of Ehelepola Walawwa within Kandyan history.",
          "Included detailed content about the exhibits, particularly the reconstructed royal garments and Kandyan era costumes.",
          "Provided practical visitor information: map, location, opening date, what to expect, and photographs of the wax museum and its wax figures.",
          "Showcased the academic and craft process behind the exhibits to build credibility.",
          "Ensured visuals (photographs, galleries) and promotional content (news about opening) are prominently displayed.",
        ],
      },
    },
    {
      title:
        "Heritage storytelling unlocks 964.3% surge in organic engagement ",
      client: "- Hotel Queens -",
      description: "",
      challenges: [
        "Optimizing delivery routes",
        "Integrating multiple payment options",
        "Real-time order tracking",
        "User-friendly app interface",
      ],
      image: QueensCS,
      // Different left side content for this slide
      stats: {
        growth: {
          value: 142,
          label: "Increase User Engagement",
        },
        revenue: {
          value: 118,
          label: "Increase Order Volume",
        },
      },
      popupData: {
        title: "Queens Hotel Kandy",
        description:
          "Heritage storytelling unlocks 964.3% surge in organic engagement",
        image: dumy,
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
    },
    {
      title:
        "Built responsive website for Regency Travel House, boosting engagement and trust.",
      client: "- Regency Travel House  -",
      description: "",
      challenges: [
        "Optimizing delivery routes",
        "Integrating multiple payment options",
        "Real-time order tracking",
        "User-friendly app interface",
      ],
      image: RegencyCS,
      // Different left side content for this slide
      stats: {
        growth: {
          value: 142,
          label: "Increase User Engagement",
        },
        revenue: {
          value: 118,
          label: "Increase Order Volume",
        },
      },
      popupData: {
        title: "Regency Travel House Website",
        description:
          "A professional travel and tourism platform for Regency Travel House.",
        image: dumy,
        link: "https://regency.knowmo.me/",
        description2:
          "Regency Travel House is a professional travel and tourism service provider in Sri Lanka, offering a wide range of holiday packages, cultural tours, hotel bookings, transport services, and customized travel itineraries. The website serves as a digital platform for both local and international travelers to explore packages, make inquiries, and learn about Regency’s services in a modern and user-friendly format.",
        challenges: [
          "Presenting a diverse range of travel packages in a structured and easily navigable format was difficult.",
          "Building brand trust to position Regency as a professional and reliable travel partner in a competitive market required strategic focus.",
          "Providing transparent service details, including package highlights, itineraries, and on-demand pricing, posed information clarity challenges.",
          "Delivering a mobile-friendly experience for international travelers accessing the site abroad was essential yet challenging.",
          "Offering quick and accessible contact options for customer inquiries and bookings needed careful implementation.",
        ],
        solutions: [
          "Developed a clean and visually engaging homepage highlighting Regency’s identity, featured packages, and core services.",
          "Integrated detailed package descriptions with itineraries, inclusions, and high-quality destination images.",
          "Designed a responsive layout for smooth access across desktops, tablets, and smartphones.",
          "Added clear call-to-action (CTA) buttons like 'Send Inquiry' to simplify customer engagement.",
          "Ensured fast loading speed and minimal clutter to enhance the overall browsing experience.",
          "Laid groundwork for future features such as direct booking integration, multi-language support, and online payment gateways.",
        ],
      },
    },
    {
      title:
        "Designed corporate website for Winchester Global, enhancing accessibility and presence",
      client: "- Winchester Global  -",
      description: "",
      challenges: [
        "Optimizing delivery routes",
        "Integrating multiple payment options",
        "Real-time order tracking",
        "User-friendly app interface",
      ],
      image: WinchesterCS,
      // Different left side content for this slide
      stats: {
        growth: {
          value: 142,
          label: "Increase User Engagement",
        },
        revenue: {
          value: 118,
          label: "Increase Order Volume",
        },
      },
      popupData: {
        title: "Winchester Global",
        description:
          "A corporate platform showcasing global logistics and consultancy services.",
        image: tech_rw6,
        link: "https://winchesterglobal.com",
        description2:
          "This website is presented as the digital front for Winchester Global, a company offering global logistics, trade, or consultancy services. The platform presumably showcases service offerings, industry sectors, and contact capability via a clean, corporate design aiming to be accessible across devices. ",
        challenges: [
          "Lack of a clear and integrated digital footprint to explain global services hindered communication.",
          "Unclear scope of service offerings like warehousing, shipping, and trade consulting caused confusion.",
          "Absence of trust signals such as client testimonials, certifications, and case studies limited credibility.",
          "Difficulty in providing clear channels for business clients to capture inquiries and leads.",
          "Branding and positioning gaps affected competitiveness in the international services market.",
        ],
        solutions: [
          "Designed a professional, responsive homepage that introduces Winchester global services and industry focus.",
          "Developed distinct sections to explain key offerings trade facilitation, logistics solutions, corporate support, etc.",
          "Integrated contact or inquiry forms to facilitate B2B engagement.",
          "Highlighted certifications, partnerships, or organizational affiliations to build credibility.",
          "Improved SEO with concise messaging and structured content to support international visibility.",
        ],
      },
    },
    {
      title: "Selling Out Emirates Aviation Collectibles with a 1043% ROI ",
      client: "- Wincraft -",
      description: "",
      challenges: [
        "Optimizing delivery routes",
        "Integrating multiple payment options",
        "Real-time order tracking",
        "User-friendly app interface",
      ],
      image: WincraftCS,
      // Different left side content for this slide
      stats: {
        growth: {
          value: 142,
          label: "Increase User Engagement",
        },
        revenue: {
          value: 118,
          label: "Increase Order Volume",
        },
      },
      popupData: {
        title: "Emirates Aviation Collectibles",
        description:
          "Selling Out Emirates Aviation Collectibles with a 1043% ROI",
        image: dumy,
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
    },
    {
      title: "Cutting Cost per Lead by 78% with Smarter Targeting ",
      client: "- UK Education Consultancy -",
      description: "",
      challenges: [
        "Optimizing delivery routes",
        "Integrating multiple payment options",
        "Real-time order tracking",
        "User-friendly app interface",
      ],
      image: UnknownCS,
      // Different left side content for this slide
      stats: {
        growth: {
          value: 142,
          label: "Increase User Engagement",
        },
        revenue: {
          value: 118,
          label: "Increase Order Volume",
        },
      },
      popupData: {
        title: "UK Education Consultancy",
        description: "Cutting Cost per Lead by 78% with Smarter Targeting",
        image: dumy,
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
    },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handlePrev = () => {
    setDirection("left");
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("right");
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slide = slides[current];

  // Popup state management
  const [popupData, setPopupData] = useState<popupData | null>(null);

  // Stop body scroll when popup is open
  useEffect(() => {
    if (popupData) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [popupData]);

  return (
    <>
      {/* desktop version */}
      <section className="relative w-full mx-auto h-full hidden lg:block">
        {/* top content */}
        <div className="absolute w-1/4 text-black text-left top-5 left-5 transform flex flex-col gap-2 z-10 p-2">
          <h1 className="text-[32px] md:text-[48px] lg:text-[52px] font-medium mb-3">
            Some of, <br />
            our Works
          </h1>
          <p className="text-[18px] pr-10 font-light mb-6 ">
            Showcasing impactful digital solutions that drive real business
            results.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute md:bottom-10 left-5 lg:right-16 bottom-0 lg:bottom-8 flex gap-2 z-10 p-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 bg-[#01213A] text-white rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition cursor-pointer"
          >
            <img src={ArrowIcon} alt="Previous" className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition cursor-pointer"
          >
            <img
              src={ArrowIcon}
              alt="Next"
              className="w-5 h-5 transform scale-x-[-1]"
            />
          </button>
        </div>

        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={current}
            initial={{ x: direction === "right" ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === "right" ? -300 : 300, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 35,
            }}
            className="absolute top-0 left-0 w-full h-full flex flex-col justify-between"
          >
            {/* image */}
            <img
              src={slide.image}
              alt=""
              className="h-full w-full object-cover rounded-2xl"
            />

            {/* middle content */}
            <div className="absolute w-1/3 text-white top-1/2 right-5 lg:right-16 transform -translate-y-1/2 flex flex-col gap-2 z-10 p-2">
              <p className="text-[32px]  lg:text-[52px] font-medium text-left leading-15">
                {slide.title}
              </p>

              <p className="text-left leading-8 mt-6">{slide.description}</p>

              <Link to="">
                <p
                  onClick={() =>
                    slide.popupData && setPopupData(slide.popupData)
                  }
                  className="text-sm text-white hover:text-white/80  text-left mt-10 underline "
                >
                  Read the full Case study
                </p>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* mobile version */}
      <section className="relative lg:hidden block w-full mx-auto h-3/4">
        {/* Navigation Buttons */}
        <div className="absolute md:bottom-10 left-5 lg:right-16 bottom-0 lg:bottom-8 flex gap-2 z-10 p-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 bg-[#01213A] text-white rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition cursor-pointer"
          >
            <img src={ArrowIcon} alt="Previous" className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition cursor-pointer"
          >
            <img
              src={ArrowIcon}
              alt="Next"
              className="w-5 h-5 transform scale-x-[-1]"
            />
          </button>
        </div>

        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={current}
            initial={{ x: direction === "right" ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === "right" ? -300 : 300, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 35,
            }}
            className="absolute top-0 left-0 w-full h-full flex flex-col justify-between"
          >
            {/* image */}
            <img
              src={slide.image}
              alt=""
              className="h-full w-full object-cover rounded-2xl"
            />

            {/* middle content */}
            <div className="absolute w-2/3 text-white top-1/3 -mt-10 right-5 lg:right-16 transform -translate-y-1/2 flex flex-col gap-2 z-10 p-2">
              <p className="text-[20px] md:text-[32px] lg:text-[52px] font-medium text-left leading-10">
                {slide.title}
              </p>

              <p className="text-right text-white/50 text-xs mt-2">
                {slide.client}
              </p>
            </div>

            <Link to="">
              <p
                onClick={() => slide.popupData && setPopupData(slide.popupData)}
                className="text-sm text-white right-5 text-left bottom-5 underline absolute"
              >
                Read the full Case study
              </p>
            </Link>
          </motion.div>
        </AnimatePresence>
      </section>

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
                  />
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
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SuccessStoriesNew;
