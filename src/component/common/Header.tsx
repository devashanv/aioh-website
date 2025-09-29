import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/about/AIOH.png";
import { MdKeyboardArrowRight } from "react-icons/md";

import {
  HiOutlineMagnifyingGlass,
  HiOutlinePencil,
  HiOutlineCurrencyDollar,
  HiOutlineDevicePhoneMobile,
  HiOutlineEnvelope,
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiOutlineBuildingOffice,
  HiOutlinePaintBrush,
  HiOutlineNewspaper,
  HiOutlineAcademicCap,
  HiOutlineKey,
  HiOutlineTicket,
  HiOutlineFolderOpen,
  HiOutlineDocumentText,
  HiOutlineCalendar,
  HiOutlineCog,
  HiOutlineBuildingLibrary,
  HiOutlineTruck,
  HiOutlinePaperAirplane,
  HiOutlineChartBar,
  HiOutlineLink,
  HiOutlinePhoto,
  HiOutlineBookOpen,
  HiOutlineMapPin,
  HiOutlineCheckCircle,
  HiOutlineViewColumns,
  HiOutlineSparkles,
} from "react-icons/hi2";

type SubmenuCategory = {
  label: string;
  to?: string;
  items: {
    title: string;
    description: string;
    icon: React.ReactNode;
    to: string;
  }[];
};

type NavItem = {
  label: string;
  to: string;
  customLink?: string;
  submenu?: SubmenuCategory[];
  intro?: {
    title: string;
    description: string;
  };
};

type SubmenuItem = SubmenuCategory & { parent: string };

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/Aboutus" },
  {
    label: "Marketing",
    to: "/marketing",
    customLink: "/marketing",
    intro: {
      title: "Grow your audience",
      description: "Unlock SEO, social, and PPC strategies to scale faster.",
    },
    submenu: [
      {
        label: "Digital Strategy",
        items: [
          {
            title: "SEO",
            description: "Optimize search rankings.",
            icon: <HiOutlineMagnifyingGlass className="text-black" />,
            to: "/marketing/seo",
          },
          {
            title: "Content",
            description: "Create valuable content.",
            icon: <HiOutlinePencil className="text-black" />,
            to: "/marketing/content",
          },
          {
            title: "PPC",
            description: "Boost leads with paid ads.",
            icon: <HiOutlineCurrencyDollar className="text-black" />,
            to: "/marketing/ppc",
          },
        ],
      },
      {
        label: "Social Media Advertising",
        items: [
          {
            title: "Social Media",
            description: "Engage with audiences.",
            icon: <HiOutlineDevicePhoneMobile className="text-black" />,
            to: "/marketing/social",
          },
          {
            title: "Email",
            description: "Convert with campaigns.",
            icon: <HiOutlineEnvelope className="text-black" />,
            to: "/marketing/email",
          },
          {
            title: "Influencer",
            description: "Partner with creators.",
            icon: <HiOutlineUser className="text-black" />,
            to: "/marketing/influencer",
          },
        ],
      },
      {
        label: "Social Media Management",
        items: [
          {
            title: "SEO",
            description: "Optimize search rankings.",
            icon: <HiOutlineMagnifyingGlass className="text-black" />,
            to: "/marketing/seo",
          },
          {
            title: "Content",
            description: "Create valuable content.",
            icon: <HiOutlinePencil className="text-black" />,
            to: "/marketing/content",
          },
          {
            title: "PPC",
            description: "Boost leads with paid ads.",
            icon: <HiOutlineCurrencyDollar className="text-black" />,
            to: "/marketing/ppc",
          },
        ],
      },
      {
        label: "Conversion Rate Optimization",
        items: [
          {
            title: "Social Media",
            description: "Engage with audiences.",
            icon: <HiOutlineDevicePhoneMobile className="text-black" />,
            to: "/marketing/social",
          },
          {
            title: "Email",
            description: "Convert with campaigns.",
            icon: <HiOutlineEnvelope className="text-black" />,
            to: "/marketing/email",
          },
          {
            title: "Influencer",
            description: "Partner with creators.",
            icon: <HiOutlineUser className="text-black" />,
            to: "/marketing/influencer",
          },
        ],
      },
      {
        label: "Content Marketing",
        items: [
          {
            title: "Social Media",
            description: "Engage with audiences.",
            icon: <HiOutlineDevicePhoneMobile className="text-black" />,
            to: "/marketing/social",
          },
          {
            title: "Email",
            description: "Convert with campaigns.",
            icon: <HiOutlineEnvelope className="text-black" />,
            to: "/marketing/email",
          },
          {
            title: "Influencer",
            description: "Partner with creators.",
            icon: <HiOutlineUser className="text-black" />,
            to: "/marketing/influencer",
          },
        ],
      },
      {
        label: "Search Engine Optimization (SEO)",
        items: [
          {
            title: "On-Page SEO",
            description:
              "Optimize page structure, tags, and content for better rankings.",
            icon: <HiOutlineDocumentText className="text-black" />,
            to: "/marketing/seo/on-page",
          },
          {
            title: "Off-Page SEO",
            description: "Build backlinks and improve domain authority.",
            icon: <HiOutlineLink className="text-black" />,
            to: "/marketing/seo/off-page",
          },
          {
            title: "Technical SEO",
            description: "Enhance site speed, crawlability, and indexing.",
            icon: <HiOutlineCog className="text-black" />,
            to: "/marketing/seo/technical",
          },
          {
            title: "Local SEO",
            description: "Boost visibility in local search and Google Maps.",
            icon: <HiOutlineMapPin className="text-black" />,
            to: "/marketing/seo/local",
          },
          {
            title: "E-commerce SEO",
            description: "Increase traffic and sales for online stores.",
            icon: <HiOutlineShoppingCart className="text-black" />,
            to: "/marketing/seo/ecommerce",
          },
          {
            title: "Content SEO & Optimization",
            description: "Improve content relevance and keyword targeting.",
            icon: <HiOutlinePencil className="text-black" />,
            to: "/marketing/seo/content",
          },
          {
            title: "Mobile SEO",
            description:
              "Optimize for smartphones and tablets for higher mobile rankings.",
            icon: <HiOutlineDevicePhoneMobile className="text-black" />,
            to: "/marketing/seo/mobile",
          },
          {
            title: "SEO Audits & Reporting",
            description:
              "Comprehensive analysis with actionable recommendations.",
            icon: <HiOutlineChartBar className="text-black" />,
            to: "/marketing/seo/audits",
          },
          {
            title: "Keyword Research & Strategy",
            description:
              "Identify high-value keywords to target the right audience.",
            icon: <HiOutlineUser className="text-black" />,
            to: "/marketing/seo/keyword-research",
          },
        ],
      },
    ],
  },
  {
    label: "Technology",
    to: "/technology",
    customLink: "/technology",
    intro: {
      title: "Build smarter products",
      description: "From web apps to AI, accelerate your innovation pipeline.",
    },
    submenu: [
      {
        label: "Web Development",
        items: [
          {
            title: "Showcase / Business Websites",
            description:
              "Professional websites to highlight your business and services.",
            icon: <HiOutlineBuildingOffice className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Portfolio Websites",
            description:
              "Creative platforms to display your work and achievements.",
            icon: <HiOutlinePaintBrush className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Blog & News Websites",
            description:
              "Dynamic platforms for sharing articles, updates, and stories.",
            icon: <HiOutlineNewspaper className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Educational Websites & e-Learning Portals",
            description:
              "Interactive learning platforms with courses and quizzes.",
            icon: <HiOutlineAcademicCap className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Membership & Subscription-Based Websites",
            description:
              "Secure platforms for recurring subscriptions and member access.",
            icon: <HiOutlineKey className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Nonprofit & Charity Websites",
            description:
              "Websites designed to raise awareness and accept donations.",
            icon: <HiOutlineFolderOpen className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Job Board Websites",
            description:
              "Platforms to post job openings and connect candidates.",
            icon: <HiOutlineUser className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Directory & Listing Websites",
            description:
              "Organized directories for businesses, services, or events.",
            icon: <HiOutlineDocumentText className="text-black" />,
            to: "/technology/WebService",
          },
        ],
      },
      {
        label: "Web System Development",
        items: [
          {
            title: "Management Web Applications (HRM, CRM, etc.)",
            description:
              "Web-based tools to streamline and automate business operations.",
            icon: <HiOutlineFolderOpen className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Learning Management Systems (LMS)",
            description:
              "Platforms to create, manage, and track online courses.",
            icon: <HiOutlineAcademicCap className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Booking & Reservation Websites",
            description:
              "Websites for scheduling appointments and managing bookings.",
            icon: <HiOutlineCalendar className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Custom Web Applications",
            description:
              "Tailor-made solutions for unique business requirements.",
            icon: <HiOutlineCog className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Event Management Websites",
            description:
              "Online platforms to promote and manage events efficiently.",
            icon: <HiOutlineTicket className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "E-commerce Websites & Solutions",
            description:
              "Online stores with secure payments and product management.",
            icon: <HiOutlineShoppingCart className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Health & Clinic Management Web Applications",
            description:
              "Web systems for patient records, appointments, and billing.",
            icon: <HiOutlineBuildingLibrary className="text-black" />,
            to: "/technology/WebService",
          },
        ],
      },
      {
        label: "Standalone System Development",
        items: [
          {
            title: "Enterprise Resource Planning (ERP) Systems",
            description:
              "Integrate finance, HR, and operations in one platform.",
            icon: <HiOutlineCog className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Point of Sale (POS) Systems",
            description:
              "Retail solutions for billing, inventory, and sales tracking.",
            icon: <HiOutlineShoppingCart className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Inventory & Warehouse Management Systems",
            description:
              "Track stock levels and manage supply chains effectively.",
            icon: <HiOutlineFolderOpen className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Hospital & Clinic Management Systems",
            description: "Comprehensive systems for healthcare administration.",
            icon: <HiOutlineBuildingLibrary className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "School / University Management Systems",
            description:
              "Manage student data, classes, and academic operations.",
            icon: <HiOutlineBuildingLibrary className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Custom Business Automation Solutions",
            description:
              "Automate tasks to improve efficiency and productivity.",
            icon: <HiOutlineCog className="text-black" />,
            to: "/technology/WebService",
          },
        ],
      },
      {
        label: "Mobile Application Development",
        items: [
          {
            title: "Android & iOS Native Apps",
            description:
              "High-performance apps built for specific mobile platforms.",
            icon: <HiOutlineDevicePhoneMobile className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Cross-Platform Mobile Apps (Flutter, React Native)",
            description:
              "Apps running seamlessly on both Android and iOS devices.",
            icon: <HiOutlineDevicePhoneMobile className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "E-commerce Mobile Apps",
            description:
              "Mobile shopping apps with secure payments and cart features.",
            icon: <HiOutlineShoppingCart className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Educational & LMS Mobile Apps",
            description: "Apps for learning, quizzes, and course management.",
            icon: <HiOutlineAcademicCap className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Event & Ticketing Apps",
            description: "Mobile solutions for event booking and ticket sales.",
            icon: <HiOutlineTicket className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Delivery & Logistics Apps",
            description:
              "Track orders, deliveries, and fleet operations easily.",
            icon: <HiOutlineTruck className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Travel & Tourism Apps",
            description: "Guides, booking tools, and travel planning features.",
            icon: <HiOutlinePaperAirplane className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Financial & Fintech Apps",
            description:
              "Mobile banking, payment, and finance management apps.",
            icon: <HiOutlineCurrencyDollar className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Social Networking & Community Apps",
            description:
              "Platforms for connecting and engaging with communities.",
            icon: <HiOutlineChartBar className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Custom Business Mobile Apps",
            description:
              "Mobile solutions tailored to your unique business needs.",
            icon: <HiOutlineCog className="text-black" />,
            to: "/technology/WebService",
          },
        ],
      },
      {
        label: "AI Solutions",
        items: [
          {
            title: "AI Chatbots and Virtual Assistants",
            description:
              "Intelligent bots for customer support and automation.",
            icon: <HiOutlineUser className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Custom AI Solutions",
            description:
              "AI-powered applications for data analysis and automation.",
            icon: <HiOutlineCog className="text-black" />,
            to: "/technology/WebService",
          },
        ],
      },
      {
        label: "Test Automation Solutions",
        items: [
          {
            title: "Automated Functional Testing",
            description: "Automate repetitive test cases to improve accuracy.",
            icon: <HiOutlineDocumentText className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Regression Testing",
            description:
              "Ensure new updates don’t break existing functionality.",
            icon: <HiOutlineChartBar className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Performance Testing",
            description: "Measure and improve system speed and responsiveness.",
            icon: <HiOutlineChartBar className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "CI/CD Support",
            description:
              "Integrate automated testing with your development pipeline.",
            icon: <HiOutlineCog className="text-black" />,
            to: "/technology/WebService",
          },
        ],
      },
    ],
  },
  {
    label: "Design",
    to: "/design",
    customLink: "/design",
    intro: {
      title: "Design that inspires",
      description:
        "Craft user experiences and brand identities that stand out.",
    },
    submenu: [
      {
        label: "Brand Identity Development",
        items: [
          {
            title: "UX Research",
            description: "User-focused design.",
            icon: <HiOutlineUser className="text-black" />,
            to: "/design/ux",
          },
          {
            title: "UI Design",
            description: "Modern interfaces.",
            icon: <HiOutlinePaintBrush className="text-black" />,
            to: "/design/ui",
          },
          {
            title: "Prototyping",
            description: "Clickable mockups.",
            icon: <HiOutlinePhoto className="text-black" />,
            to: "/design/prototype",
          },
        ],
      },
      {
        label: "Packaging Design",
        items: [
          {
            title: "Logos",
            description: "Unique brand marks.",
            icon: <HiOutlinePaintBrush className="text-black" />,
            to: "/design/logo",
          },
          {
            title: "Style Guides",
            description: "Consistent branding.",
            icon: <HiOutlineBookOpen className="text-black" />,
            to: "/design/guide",
          },
          {
            title: "Illustrations",
            description: "Custom visuals.",
            icon: <HiOutlinePhoto className="text-black" />,
            to: "/design/illustration",
          },
        ],
      },
      {
        label: "Promotional Material Design",
        items: [
          {
            title: "UX Research",
            description: "User-focused design.",
            icon: <HiOutlineUser className="text-black" />,
            to: "/design/ux",
          },
          {
            title: "UI Design",
            description: "Modern interfaces.",
            icon: <HiOutlinePaintBrush className="text-black" />,
            to: "/design/ui",
          },
          {
            title: "Prototyping",
            description: "Clickable mockups.",
            icon: <HiOutlinePhoto className="text-black" />,
            to: "/design/prototype",
          },
        ],
      },
      {
        label: "Creative Content",
        items: [
          {
            title: "Logos",
            description: "Unique brand marks.",
            icon: <HiOutlinePaintBrush className="text-black" />,
            to: "/design/logo",
          },
          {
            title: "Style Guides",
            description: "Consistent branding.",
            icon: <HiOutlineBookOpen className="text-black" />,
            to: "/design/guide",
          },
          {
            title: "Illustrations",
            description: "Custom visuals.",
            icon: <HiOutlinePhoto className="text-black" />,
            to: "/design/illustration",
          },
        ],
      },
      {
        label: "Photography & Videography",
        items: [
          {
            title: "UX Research",
            description: "User-focused design.",
            icon: <HiOutlineUser className="text-black" />,
            to: "/design/ux",
          },
          {
            title: "UI Design",
            description: "Modern interfaces.",
            icon: <HiOutlinePaintBrush className="text-black" />,
            to: "/design/ui",
          },
          {
            title: "Prototyping",
            description: "Clickable mockups.",
            icon: <HiOutlinePhoto className="text-black" />,
            to: "/design/prototype",
          },
        ],
      },
      {
        label: "UI/UX Design",
        items: [
          {
            title: "User Research & Analysis",
            description: "Understand users’ needs.",
            icon: <HiOutlineUser className="text-black" />,
            to: "/uiux/user-research",
          },
          {
            title: "Brand Experience Integration",
            description: "Blend brand into design.",
            icon: <HiOutlineSparkles className="text-black" />,
            to: "/uiux/brand-experience",
          },
          {
            title: "Wireframing & Prototyping",
            description: "Create structure & flow.",
            icon: <HiOutlineViewColumns className="text-black" />,
            to: "/uiux/wireframe-prototype",
          },
          {
            title: "Visual & Interaction Design",
            description: "Craft appealing visuals.",
            icon: <HiOutlinePaintBrush className="text-black" />,
            to: "/uiux/visual-interaction",
          },
          {
            title: "Usability Testing & Optimization",
            description: "Improve user experience.",
            icon: <HiOutlineCheckCircle className="text-black" />,
            to: "/uiux/usability-testing",
          },
        ],
      },
    ],
  },
  { label: "Contact", to: "/contact" },
];

const Header = ({ currentPath }: { currentPath: string }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [selectedSubItem, setSelectedSubItem] = useState<SubmenuItem | null>(
    null
  );

  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const justClickedRef = useRef(false);

  const gradient = "linear-gradient(90deg, #0B385A, #02EC97, #05BBB7)";

  // const toggleDropdown = (label: string) => {
  //   setDropdownOpen(dropdownOpen === label ? null : label);
  //   setSelectedSubItem(null);
  // };

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(label);

    // auto select first submenu
    const firstSub = navItems.find((i) => i.label === label)?.submenu?.[0];
    if (firstSub) {
      setSelectedSubItem({ ...firstSub, parent: label });
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (!dropdownRef.current?.matches(":hover")) setDropdownOpen(null);
    }, 200);
  };

  const closeDropdown = () => {
    setDropdownOpen(null);
    setSelectedSubItem(null);
    justClickedRef.current = false;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(null);
        setSelectedSubItem(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <header className="bg-[#01213A] rounded-[20px] lg:h-20 font-['Roboto'] text-white select-none relative z-[9999] flex justify-center items-center">
      {/* Dropdown */}
      {dropdownOpen &&
        navItems.find((item) => item.label === dropdownOpen)?.submenu && (
          <div
            ref={dropdownRef}
            className="hidden lg:flex absolute top-22 left-0 w-full h-[550px] bg-white text-black px-12 py-10 z-[999] transition-opacity duration-200 rounded-[20px] overflow-hidden"
            onMouseEnter={() => handleMouseEnter(dropdownOpen)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Sidebar */}
            <aside className="w-64 pr-10 border-r flex flex-col justify-start h-full">
              {/* Header */}
              <div>
                <h2 className="text-xl font-semibold text-black mb-4">
                  {navItems.find((i) => i.label === dropdownOpen)?.intro?.title}
                </h2>
                <p className="text-xs mb-6 text-left font-light">
                  {
                    navItems.find((i) => i.label === dropdownOpen)?.intro
                      ?.description
                  }
                </p>

                {/* Scrollable Menu Items */}
                <ul className="space-y-2 max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                  {navItems
                    .find((i) => i.label === dropdownOpen)
                    ?.submenu?.map((cat) => {
                      const isActive = selectedSubItem?.label === cat.label;

                      return (
                        <li key={cat.label}>
                          <button
                            onClick={() =>
                              setSelectedSubItem({
                                ...cat,
                                parent: dropdownOpen,
                              })
                            }
                            className={`w-full text-left px-4 py-2 rounded-lg transition cursor-pointer
                  ${
                    isActive
                      ? "bg-black/10 text-black font-semibold"
                      : "text-black/80 hover:bg-black/10 hover:text-black"
                  }
                  focus:outline-none`}
                          >
                            {cat.label}
                          </button>
                        </li>
                      );
                    })}
                </ul>
              </div>

              {/* Bottom Consultation */}
              <div className="mt-auto text-center flex flex-col">
                <p className="text-[16px] text-black mb-0 font-medium">
                  Need a consultation?
                </p>
                <button
                  onClick={() => {
                    navigate("/consultation", { replace: true });
                    window.location.reload();
                  }}
                  className="mt-3 bg-[#02EC97] text-[#191818] text-[18px] font-medium rounded-full py-[10px] hover:bg-[#02EC97]/80 hover:text-[#191818]/80 transition cursor-pointer"
                >
                  Book Now
                </button>
              </div>
            </aside>

            {/* Right Content */}
            <main className="flex-1 pl-10">
              <div className="flex items-center justify-between mb-6">
                <NavLink
                  to={
                    navItems.find((i) => i.label === dropdownOpen)
                      ?.customLink ||
                    navItems.find((i) => i.label === dropdownOpen)?.to ||
                    "/"
                  }
                  className="text-2xl font-semibold text-black flex items-center hover:text-primary transition"
                >
                  {dropdownOpen} <span className="ml-5">→</span>
                </NavLink>
              </div>

              <p className="text-black/80 mb-6 mt-[-20px]">
                Click here to explore our {dropdownOpen.toLowerCase()} solutions
                and capabilities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
                {(selectedSubItem
                  ? selectedSubItem.items
                  : navItems
                      .find((i) => i.label === dropdownOpen)
                      ?.submenu?.flatMap((c) => c.items)
                )?.map((item, idx) => (
                  <NavLink
                    key={idx}
                    to={item.to}
                    className="flex items-start space-x-3 p-3 hover:bg-black/5 rounded transition"
                  >
                    <div className="text-2xl flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base font-semibold hover:underline">
                        {item.title}
                      </span>
                      <p className="text-xs leading-snug text-black/80">
                        {item.description}
                      </p>
                    </div>
                  </NavLink>
                ))}
              </div>
            </main>
          </div>
        )}

      {/* Header main content */}
      <div className="w-11/12 mx-auto flex items-center justify-between h-16 relative">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-12 w-auto" draggable={false} />

        {/* Desktop Nav */}
        <nav className="hidden lg:block text-[18px] font-light w-full">
          <ul ref={navRef} className="flex justify-center space-x-8">
            {navItems.map(({ label, to, submenu, customLink }) => {
              const basePath =
                (customLink || to).replace(/\/+$/, "").toLowerCase() || "/";
              const pathNow =
                (currentPath || "/").replace(/\/+$/, "").toLowerCase() || "/";

              const active =
                pathNow === basePath ||
                pathNow.startsWith(basePath + "/") ||
                submenu?.some((cat) =>
                  cat.items.some((item) => {
                    const itemPath = item.to.replace(/\/+$/, "").toLowerCase();
                    return (
                      pathNow === itemPath || pathNow.startsWith(itemPath + "/")
                    );
                  })
                );

              return (
                <li
                  key={label}
                  className="relative group"
                  onMouseEnter={() => submenu && handleMouseEnter(label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink
                    to={customLink || to}
                    onClick={closeDropdown}
                    className={`flex items-center hover:text-[#02EC97] transition ${
                      active ? "text-[#02EC97]" : "text-white/80"
                    }`}
                  >
                    {label}
                    {submenu && (
                      <span className="relative flex items-center group">
                        <MdKeyboardArrowRight
                          className={`ml-1 text-[16px] transition-transform duration-300 
                  ${dropdownOpen === label ? "rotate-90" : "rotate-0"} 
                  ${
                    active
                      ? "text-[#02EC97]"
                      : "text-white/80 group-hover:text-[#02EC97]"
                  }`}
                        />
                      </span>
                    )}
                  </NavLink>

                  <span
                    className={`absolute bottom-[-6px] left-1/2 h-[2px] bg-[#02EC97] transition-all transform -translate-x-1/2 ${
                      active ? "w-4" : "w-0"
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <NavLink
          to="/contact"
          className="hidden lg:inline-block px-5 py-3 rounded-[30px] text-white whitespace-nowrap"
          style={{ background: gradient }}
        >
          Connect with us
        </NavLink>

        {/* Hamburger Button */}
        <button
          className="lg:hidden z-[999] w-8 h-8"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <span className="text-white text-[36px] font-light">×</span>
          ) : (
            <div className="space-y-1">
              <div className="h-0.5 w-6 bg-white rounded-sm" />
              <div className="h-0.5 w-6 bg-white rounded-sm" />
              <div className="h-0.5 w-6 bg-white rounded-sm" />
            </div>
          )}
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-[#01213A] z-[9998] lg:hidden pt-20 px-6 overflow-y-auto">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white text-3xl z-[9999]"
              onClick={() => setMobileOpen(false)}
            >
              ×
            </button>

            {/* Mobile Navigation */}
            <nav className="mt-8">
              <ul className="space-y-6">
                {navItems.map(({ label, to, customLink, submenu }) => {
                  const basePath =
                    (customLink || to).replace(/\/+$/, "").toLowerCase() || "/";
                  const pathNow =
                    (currentPath || "/").replace(/\/+$/, "").toLowerCase() ||
                    "/";

                  const active =
                    pathNow === basePath ||
                    pathNow.startsWith(basePath + "/") ||
                    submenu?.some((cat) =>
                      cat.items.some((item) => {
                        const itemPath = item.to
                          .replace(/\/+$/, "")
                          .toLowerCase();
                        return (
                          pathNow === itemPath ||
                          pathNow.startsWith(itemPath + "/")
                        );
                      })
                    );

                  const isOpen = selectedSubItem?.parent === label;

                  return (
                    <li key={label} className="border-b border-white/10 pb-4">
                      {/* Main Nav Item */}
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between w-full">
                          {/* Clickable label */}
                          <NavLink
                            to={to || customLink || "#"}
                            onClick={() => setMobileOpen(false)} // close after navigation
                            className={`flex-1 text-lg font-medium ${
                              active ? "text-[#02EC97]" : "text-white"
                            }`}
                          >
                            {label}
                          </NavLink>

                          {/* Arrow toggle */}
                          {submenu && (
                            <button
                              onClick={() =>
                                setSelectedSubItem(
                                  isOpen ? null : ({ parent: label } as any)
                                )
                              }
                              className="ml-2 flex-shrink-0"
                            >
                              <MdKeyboardArrowRight
                                className={`w-5 h-5 transition-transform ${
                                  isOpen ? "rotate-90" : "rotate-0"
                                } ${active ? "text-[#02EC97]" : "text-white"}`} // <-- change color if active
                              />
                            </button>
                          )}
                        </div>

                        {/* Show only category labels (no inner items) */}
                        {submenu && isOpen && (
                          <div className="mt-3 pl-4 space-y-2">
                            {submenu.map((category) => (
                              <button
                                key={category.label}
                                onClick={() => {
                                  const target = category.items[0]?.to; // navigate to first item of this category
                                  if (target) {
                                    navigate(target);
                                    setMobileOpen(false);
                                  }
                                }}
                                className="block text-left text-white/70 hover:text-[#02EC97] text-sm w-full"
                              >
                                {category.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile CTA Buttons */}
              <div className="mt-10 flex justify-center gap-4">
                <NavLink
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center px-5 py-3 rounded-[30px] text-white font-medium bg-gradient-to-r from-green-500 to-teal-400"
                  style={{ background: gradient }}
                >
                  Contact Us
                </NavLink>

                <NavLink
                  to="/consultation"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center px-5 py-3 rounded-[30px] text-white font-medium bg-gradient-to-r from-green-500 to-teal-400"
                  style={{ background: gradient }}
                >
                  Consultation
                </NavLink>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
