import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
        label: "Digital Marketing",
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
        label: "Branding",
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
            title: "E-commerce Websites & Solutions",
            description: "Online stores & payment gateways.",
            icon: <HiOutlineShoppingCart className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Showcase / Business Websites",
            description: "Professional business presence.",
            icon: <HiOutlineBuildingOffice className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Portfolio Websites",
            description: "Showcase your work beautifully.",
            icon: <HiOutlinePaintBrush className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Blog & News Websites",
            description: "Publish articles & updates.",
            icon: <HiOutlineNewspaper className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Educational Websites & e-Learning Portals",
            description: "Interactive learning platforms.",
            icon: <HiOutlineAcademicCap className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Membership & Subscription-Based Websites",
            description: "Recurring memberships & access.",
            icon: <HiOutlineKey className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Event Management Websites",
            description: "Plan, manage & promote events.",
            icon: <HiOutlineTicket className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Nonprofit & Charity Websites",
            description: "Support social causes online.",
            icon: <HiOutlineFolderOpen className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Job Board Websites",
            description: "List jobs & find candidates.",
            icon: <HiOutlineUser className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Directory & Listing Websites",
            description: "Organized searchable listings.",
            icon: <HiOutlineDocumentText className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Booking & Reservation Websites",
            description: "Book hotels, tables & services.",
            icon: <HiOutlineCalendar className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Custom Web Applications",
            description: "Tailor-made business solutions.",
            icon: <HiOutlineCog className="text-black" />,
            to: "/technology/WebService",
          },
        ],
      },
      {
        label: "System Development",
        items: [
          {
            title: "Management Web Applications (HRM, CRM, etc.)",
            description: "Streamline internal processes.",
            icon: <HiOutlineFolderOpen className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Learning Management Systems (LMS)",
            description: "Online education platforms.",
            icon: <HiOutlineAcademicCap className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "ERP Systems",
            description: "Integrate business operations.",
            icon: <HiOutlineCog className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "POS Systems",
            description: "Retail & sales solutions.",
            icon: <HiOutlineShoppingCart className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Inventory & Warehouse Management Systems",
            description: "Track & manage inventory.",
            icon: <HiOutlineFolderOpen className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Hospital & Clinic Management Systems",
            description: "Healthcare management tools.",
            icon: <HiOutlineBuildingLibrary className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "School / University Management Systems",
            description: "Organize academic operations.",
            icon: <HiOutlineBuildingLibrary className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Custom Business Automation Solutions",
            description: "Automate workflows & tasks.",
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
            description: "Optimized mobile experiences.",
            icon: <HiOutlineDevicePhoneMobile className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Cross-Platform Mobile Apps",
            description: "Flutter & React Native builds.",
            icon: <HiOutlineDevicePhoneMobile className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "E-commerce Mobile Apps",
            description: "Mobile shopping apps.",
            icon: <HiOutlineShoppingCart className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Educational & LMS Mobile Apps",
            description: "Learning on-the-go.",
            icon: <HiOutlineAcademicCap className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Event & Ticketing Apps",
            description: "Manage & sell tickets easily.",
            icon: <HiOutlineTicket className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Delivery & Logistics Apps",
            description: "Track & manage deliveries.",
            icon: <HiOutlineTruck className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Travel & Tourism Apps",
            description: "Guides, bookings & more.",
            icon: <HiOutlinePaperAirplane className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Financial & Fintech Apps",
            description: "Banking & payment solutions.",
            icon: <HiOutlineCurrencyDollar className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Social Networking & Community Apps",
            description: "Connect & engage users.",
            icon: <HiOutlineChartBar className="text-black" />,
            to: "/technology/WebService",
          },
        ],
      },
      {
        label: "Search Engine Optimization (SEO)",
        items: [
          {
            title: "On-Page SEO",
            description: "Optimize page structure & tags.",
            icon: <HiOutlineDocumentText className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Off-Page SEO",
            description: "Backlinks & domain authority.",
            icon: <HiOutlineLink className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Technical SEO",
            description: "Improve crawlability & speed.",
            icon: <HiOutlineCog className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Local SEO",
            description: "Reach customers nearby.",
            icon: <HiOutlineMapPin className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "E-commerce SEO",
            description: "Boost online store visibility.",
            icon: <HiOutlineShoppingCart className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Content SEO & Optimization",
            description: "Rank better with optimized content.",
            icon: <HiOutlinePencil className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Mobile SEO",
            description: "Optimize for smartphones & tablets.",
            icon: <HiOutlineDevicePhoneMobile className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "SEO Audits & Reporting",
            description: "Comprehensive SEO checks.",
            icon: <HiOutlineChartBar className="text-black" />,
            to: "/technology/WebService",
          },
          {
            title: "Keyword Research & Strategy",
            description: "Find the right keywords.",
            icon: <HiOutlineUser className="text-black" />,
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
        label: "UI/UX",
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
        label: "Brand Identity",
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

  return (
    <header className="bg-transparent rounded-[20px] lg:h-20 font-['Roboto'] text-white select-none relative z-[9999] flex justify-center items-center">
      {/* Dropdown */}
      {dropdownOpen &&
        navItems.find((item) => item.label === dropdownOpen)?.submenu && (
          <div
            ref={dropdownRef}
            className="hidden lg:flex absolute top-22 left-0 w-full h-[550px] bg-white text-black px-12 py-10 shadow-2xl z-[999] transition-opacity duration-200 rounded-[20px] overflow-hidden"
            onMouseEnter={() => handleMouseEnter(dropdownOpen)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Sidebar */}
            <aside className="w-64 pr-10 border-r flex flex-col justify-start h-full space-y-6">
              {/* Header */}
              <div>
                <h2 className="text-xl font-semibold text-black mb-4 ">
                  {navItems.find((i) => i.label === dropdownOpen)?.intro?.title}
                </h2>
                <p className="text-xs mb-6 text-left font-light">
                  {
                    navItems.find((i) => i.label === dropdownOpen)?.intro
                      ?.description
                  }
                </p>

                {/* Menu Items */}
                <ul className="space-y-2">
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
                <button className="mt-3 bg-[#02EC97] text-[#191818] text-[18px] font-medium rounded-full py-[10px] hover:bg-[#02EC97]/80 hover:text-[#191818]/80 transition cursor-pointer">
                  Contact Us
                </button>
              </div>
            </aside>

            {/* Right Content */}
            <main className="flex-1 pl-10">
              <div className="flex items-start justify-start mb-6">
                <NavLink
                  to={
                    navItems.find((i) => i.label === dropdownOpen)
                      ?.customLink ||
                    navItems.find((i) => i.label === dropdownOpen)?.to ||
                    "/"
                  }
                  className="text-2xl font-semibold text-black flex items-start hover:text-primary transition"
                >
                  {dropdownOpen} <span className="ml-5">→</span>
                </NavLink>
              </div>

              <p className="text-black/80 mb-6 mt-[-20px] text-left">
                Click here to explore our {dropdownOpen.toLowerCase()} solutions
                and capabilities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 justify-start text-left">
                {(selectedSubItem
                  ? selectedSubItem.items
                  : navItems
                      .find((i) => i.label === dropdownOpen)
                      ?.submenu?.flatMap((c) => c.items)
                )?.map((item, idx) => (
                  <NavLink
                    key={idx}
                    to={item.to}
                    className="flex items-start space-x-3 p-3 hover:bg-black/5 rounded transition text-left"
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

                  return (
                    <li key={label} className="border-b border-white/10 pb-4">
                      {/* Main Nav Item */}
                      <div className="flex flex-col">
                        <NavLink
                          to={customLink || to}
                          onClick={() => {
                            if (!submenu) setMobileOpen(false);
                          }}
                          className={`text-lg font-medium flex items-center justify-between ${
                            active ? "text-[#02EC97]" : "text-white"
                          }`}
                        >
                          {label}
                          {submenu && (
                            <button
                              onClick={() =>
                                setSelectedSubItem(
                                  selectedSubItem?.parent === label
                                    ? null
                                    : { ...submenu[0], parent: label }
                                )
                              }
                              className="p-2"
                            >
                              <MdKeyboardArrowRight
                                className={`text-xl transition-transform ${
                                  selectedSubItem?.parent === label
                                    ? "rotate-90"
                                    : "rotate-0"
                                }`}
                              />
                            </button>
                          )}
                        </NavLink>

                        {/* Submenu Items */}
                        {submenu && selectedSubItem?.parent === label && (
                          <div className="mt-4 pl-4 space-y-4">
                            {submenu.map((category) => (
                              <div
                                key={category.label}
                                className="border-l border-white/20 pl-4"
                              >
                                <h3 className="text-white/80 font-medium mb-2">
                                  {category.label}
                                </h3>
                                <ul className="space-y-3">
                                  {category.items.map((item) => {
                                    const itemPath = item.to
                                      .replace(/\/+$/, "")
                                      .toLowerCase();
                                    const itemActive =
                                      pathNow === itemPath ||
                                      pathNow.startsWith(itemPath + "/");

                                    return (
                                      <li key={item.title}>
                                        <NavLink
                                          to={item.to}
                                          onClick={() => setMobileOpen(false)}
                                          className={`flex items-start space-x-2 ${
                                            itemActive
                                              ? "text-[#02EC97]"
                                              : "text-white/70"
                                          }`}
                                        >
                                          <span className="mt-1">
                                            {item.icon}
                                          </span>
                                          <div>
                                            <p className="text-sm">
                                              {item.title}
                                            </p>
                                            <p className="text-xs text-white/50">
                                              {item.description}
                                            </p>
                                          </div>
                                        </NavLink>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile CTA Button */}
              <div className="mt-10 pt-6 border-t border-white/20">
                <NavLink
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-5 py-3 rounded-[30px] text-white font-medium"
                  style={{ background: gradient }}
                >
                  Connect with us
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
