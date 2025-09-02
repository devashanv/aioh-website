import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/about/AIOH.png";
import arrowIcon from "../../assets/img/logo/arrowright.svg";

type SubmenuCategory = {
  label: string;
  to?: string;
  items: {
    title: string;
    description: string;
    icon: string;
    to: string;
  }[];
};

type NavItem = {
  label: string;
  to: string;
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
    to: "/Marketing",
    intro: {
      title: "Grow your audience",
      description: "Unlock SEO, social, and PPC strategies to scale faster. ",
    },
    submenu: [
      {
        label: "Digital Marketing",
        items: [
          {
            title: "SEO",
            description: "Optimize search rankings.",
            icon: "🔍",
            to: "/marketing/seo",
          },
          {
            title: "Content",
            description: "Create valuable content.",
            icon: "✍️",
            to: "/marketing/content",
          },
          {
            title: "PPC",
            description: "Boost leads with paid ads.",
            icon: "💰",
            to: "/marketing/ppc",
          },
          {
            title: "SEO",
            description: "Optimize search rankings.",
            icon: "🔍",
            to: "/marketing/seo",
          },
          {
            title: "Content",
            description: "Create valuable content.",
            icon: "✍️",
            to: "/marketing/content",
          },
          {
            title: "PPC",
            description: "Boost leads with paid ads.",
            icon: "💰",
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
            icon: "📱",
            to: "/marketing/social",
          },
          {
            title: "Email",
            description: "Convert with campaigns.",
            icon: "📧",
            to: "/marketing/email",
          },
          {
            title: "Influencer",
            description: "Partner with creators.",
            icon: "🤝",
            to: "/marketing/influencer",
          },
        ],
      },
    ],
  },
  {
    label: "Technology",
    to: "/Technology",
    intro: {
      title: "Build smarter products",
      description: "From web apps to AI, accelerate your innovation pipeline. ",
    },
    submenu: [
      {
        label: "Web Development",
        items: [
          {
            title: "E-commerce Websites & Solutions",
            description: "Online stores & payment gateways.",
            icon: "🛒",
            to: "/web/ecommerce",
          },
          {
            title: "Showcase / Business Websites",
            description: "Professional business presence.",
            icon: "🏢",
            to: "/web/business",
          },
          {
            title: "Portfolio Websites",
            description: "Showcase your work beautifully.",
            icon: "🎨",
            to: "/web/portfolio",
          },
          {
            title: "Blog & News Websites",
            description: "Publish articles & updates.",
            icon: "📰",
            to: "/web/blog-news",
          },
          {
            title: "Educational Websites & e-Learning Portals",
            description: "Interactive learning platforms.",
            icon: "📚",
            to: "/web/education",
          },
          {
            title: "Membership & Subscription-Based Websites",
            description: "Recurring memberships & access.",
            icon: "🔑",
            to: "/web/membership",
          },
          {
            title: "Event Management Websites",
            description: "Plan, manage & promote events.",
            icon: "🎟️",
            to: "/web/event",
          },
          {
            title: "Nonprofit & Charity Websites",
            description: "Support social causes online.",
            icon: "🤝",
            to: "/web/nonprofit",
          },
          {
            title: "Job Board Websites",
            description: "List jobs & find candidates.",
            icon: "💼",
            to: "/web/jobs",
          },
          {
            title: "Directory & Listing Websites",
            description: "Organized searchable listings.",
            icon: "📖",
            to: "/web/directory",
          },
          {
            title: "Booking & Reservation Websites",
            description: "Book hotels, tables & services.",
            icon: "📅",
            to: "/web/booking",
          },
          {
            title: "Custom Web Applications",
            description: "Tailor-made business solutions.",
            icon: "⚙️",
            to: "/web/custom-apps",
          },
        ],
      },
      {
        label: "System Development",
        items: [
          {
            title: "Management Web Applications (HRM, CRM, etc.)",
            description: "Streamline internal processes.",
            icon: "🗂️",
            to: "/system/management",
          },
          {
            title: "Learning Management Systems (LMS)",
            description: "Online education platforms.",
            icon: "🎓",
            to: "/system/lms",
          },
          {
            title: "Enterprise Resource Planning (ERP) Systems",
            description: "Integrate business operations.",
            icon: "🏭",
            to: "/system/erp",
          },
          {
            title: "Point of Sale (POS) Systems",
            description: "Retail & sales solutions.",
            icon: "🛍️",
            to: "/system/pos",
          },
          {
            title: "Inventory & Warehouse Management Systems",
            description: "Track & manage inventory.",
            icon: "📦",
            to: "/system/inventory",
          },
          {
            title: "Hospital & Clinic Management Systems",
            description: "Healthcare management tools.",
            icon: "🏥",
            to: "/system/hospital",
          },
          {
            title: "School / University Management Systems",
            description: "Organize academic operations.",
            icon: "🏫",
            to: "/system/school",
          },
          {
            title: "Custom Business Automation Solutions",
            description: "Automate workflows & tasks.",
            icon: "⚡",
            to: "/system/automation",
          },
        ],
      },
      {
        label: "Mobile Application Development",
        items: [
          {
            title: "Android & iOS Native Apps",
            description: "Optimized mobile experiences.",
            icon: "📱",
            to: "/mobile/native",
          },
          {
            title: "Cross-Platform Mobile Apps",
            description: "Flutter & React Native builds.",
            icon: "🔄",
            to: "/mobile/cross-platform",
          },
          {
            title: "E-commerce Mobile Apps",
            description: "Mobile shopping apps.",
            icon: "🛒",
            to: "/mobile/ecommerce",
          },
          {
            title: "Educational & LMS Mobile Apps",
            description: "Learning on-the-go.",
            icon: "🎓",
            to: "/mobile/education",
          },
          {
            title: "Event & Ticketing Apps",
            description: "Manage & sell tickets easily.",
            icon: "🎟️",
            to: "/mobile/event",
          },
          {
            title: "Delivery & Logistics Apps",
            description: "Track & manage deliveries.",
            icon: "🚚",
            to: "/mobile/delivery",
          },
          {
            title: "Travel & Tourism Apps",
            description: "Guides, bookings & more.",
            icon: "✈️",
            to: "/mobile/travel",
          },
          {
            title: "Financial & Fintech Apps",
            description: "Banking & payment solutions.",
            icon: "💳",
            to: "/mobile/fintech",
          },
          {
            title: "Social Networking & Community Apps",
            description: "Connect & engage users.",
            icon: "🌐",
            to: "/mobile/social",
          },
        ],
      },
      {
        label: "Search Engine Optimization (SEO)",
        items: [
          {
            title: "On-Page SEO",
            description: "Optimize page structure & tags.",
            icon: "📝",
            to: "/seo/on-page",
          },
          {
            title: "Off-Page SEO",
            description: "Backlinks & domain authority.",
            icon: "🔗",
            to: "/seo/off-page",
          },
          {
            title: "Technical SEO",
            description: "Improve crawlability & speed.",
            icon: "⚙️",
            to: "/seo/technical",
          },
          {
            title: "Local SEO",
            description: "Reach customers nearby.",
            icon: "📍",
            to: "/seo/local",
          },
          {
            title: "E-commerce SEO",
            description: "Boost online store visibility.",
            icon: "🛒",
            to: "/seo/ecommerce",
          },
          {
            title: "Content SEO & Optimization",
            description: "Rank better with optimized content.",
            icon: "✍️",
            to: "/seo/content",
          },
          {
            title: "Mobile SEO",
            description: "Optimize for smartphones & tablets.",
            icon: "📱",
            to: "/seo/mobile",
          },
          {
            title: "SEO Audits & Reporting",
            description: "Comprehensive SEO checks.",
            icon: "📊",
            to: "/seo/audit",
          },
          {
            title: "Keyword Research & Strategy",
            description: "Find the right keywords.",
            icon: "🔍",
            to: "/seo/keywords",
          },
        ],
      },
    ],
  },
  {
    label: "Design",
    to: "/Design",
    intro: {
      title: "Design that inspires",
      description:
        "Craft user experiences and brand identities that stand out. Design intuitive interfaces, memorable visuals, and cohesive branding that leave a lasting impression on your audience.",
    },
    submenu: [
      {
        label: "UI/UX",
        items: [
          {
            title: "UX Research",
            description: "User-focused design.",
            icon: "🔎",
            to: "/design/ux",
          },
          {
            title: "UI Design",
            description: "Modern interfaces.",
            icon: "🎨",
            to: "/design/ui",
          },
          {
            title: "Prototyping",
            description: "Clickable mockups.",
            icon: "📐",
            to: "/design/prototype",
          },
          {
            title: "SEO",
            description: "Optimize search rankings.",
            icon: "🔍",
            to: "/marketing/seo",
          },
          {
            title: "Content",
            description: "Create valuable content.",
            icon: "✍️",
            to: "/marketing/content",
          },
          {
            title: "PPC",
            description: "Boost leads with paid ads.",
            icon: "💰",
            to: "/marketing/ppc",
          },
        ],
      },
      {
        label: "Brand Identity",
        items: [
          {
            title: "Logos",
            description: "Unique brand marks.",
            icon: "🖌️",
            to: "/design/logo",
          },
          {
            title: "Style Guides",
            description: "Consistent branding.",
            icon: "📘",
            to: "/design/guide",
          },
          {
            title: "Illustrations",
            description: "Custom visuals.",
            icon: "🖼️",
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

  const gradient = "linear-gradient(90deg, #0B385A, #02EC97, #05BBB7)";

  const toggleDropdown = (label: string) => {
    setDropdownOpen(dropdownOpen === label ? null : label);
    setSelectedSubItem(null); // reset when reopening
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(label);

    // auto select first submenu when opening
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
    <header className="bg-[#01213A] rounded-[20px] font-['Roboto'] text-white select-none relative z-[9999]">
      {/* Dropdown */}
      {dropdownOpen &&
        navItems.find((item) => item.label === dropdownOpen)?.submenu && (
          <div
            ref={dropdownRef}
            className="hidden lg:flex absolute top-20 left-0 w-full h-[550px] bg-white text-black px-12 py-10 shadow-2xl z-[999] transition-opacity duration-200 rounded-b-[20px] overflow-hidden"
            onMouseEnter={() => handleMouseEnter(dropdownOpen)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Sidebar */}
            <aside className="w-64 pr-10 border-r flex flex-col justify-items-start h-full ">
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
                <ul className="space-y-3">
                  {navItems
                    .find((i) => i.label === dropdownOpen)
                    ?.submenu?.map((cat) => (
                      <li
                        key={cat.label}
                        onClick={() =>
                          setSelectedSubItem({ ...cat, parent: dropdownOpen })
                        }
                        className={`cursor-pointer hover:text-black/60 transition ${
                          selectedSubItem?.label === cat.label
                            ? "font-semibold text-black"
                            : "text-black"
                        }`}
                      >
                        {cat.label}
                      </li>
                    ))}
                </ul>
              </div>

              {/* Bottom Consultation */}
              <div className="mt-20 text-center flex flex-col">
                <p className="text-[16px] text-black mb-2 font-medium">
                  Need a consultation?
                </p>
                <button
                  onClick={() => {
                    navigate("/consultation", { replace: true });
                    window.location.reload();
                  }}
                  className="px-4 py-2 bg-black text-white font-semibold rounded hover:bg-black/80 transition cursor-pointer w-auto"
                >
                  Contact Us
                </button>
              </div>
            </aside>

            {/* Right Content */}
            <main className="flex-1 pl-10">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold text-black">
                  {dropdownOpen} <span className="ml-5">→</span>
                </h1>
              </div>

              <p className="text-black mb-6 mt-[-20px]">
                Explore our {dropdownOpen.toLowerCase()} solutions and
                capabilities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-2">
                {(selectedSubItem
                  ? selectedSubItem.items
                  : navItems
                      .find((i) => i.label === dropdownOpen)
                      ?.submenu?.flatMap((c) => c.items)
                )?.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-start space-y-1 p-3 transition"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <NavLink
                      to={item.to}
                      className="text-base font-semibold hover:underline"
                    >
                      {item.title}
                    </NavLink>
                    <p className="text-xs leading-snug">{item.description}</p>
                  </div>
                ))}
              </div>
            </main>
          </div>
        )}

      {/* Header main content */}
      <div className="w-11/12 mx-auto flex items-center justify-between h-16 relative">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-10 w-auto" draggable={false} />

        {/* Desktop Nav */}
        <nav className="hidden lg:block text-[18px] font-light w-full">
          <ul ref={navRef} className="flex justify-center space-x-8">
            {navItems.map(({ label, to, submenu }) => {
              const active =
                currentPath === to ||
                submenu?.some((cat) =>
                  cat.items.some((item) => currentPath.startsWith(item.to))
                );

              return (
                <li
                  key={label}
                  className="relative group"
                  onMouseEnter={() => submenu && handleMouseEnter(label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink
                    to={to}
                    className={`flex items-center hover:text-[#02EC97] transition ${
                      active ? "text-[#02EC97]" : "text-white/80"
                    }`}
                  >
                    {label}
                    {submenu && (
                      <img
                        src={arrowIcon}
                        alt="Arrow"
                        className={`ml-1 w-2 transition-transform hover:text-[#02EC97] ${
                          dropdownOpen === label ? "rotate-90" : ""
                        }`}
                      />
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
          className="hidden lg:inline-block px-5 py-1.5 rounded-[30px] text-white whitespace-nowrap"
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
          <div className="fixed inset-0 bg-[#01213A] text-[18px] z-[900] pt-20 px-6">
            <ul className="flex flex-col space-y-6 items-center">
              {navItems.map(({ label, to, submenu }) => (
                <li key={label} className="w-full flex flex-col items-center">
                  <div className="w-full flex justify-center py-2">
                    {submenu ? (
                      <div className="flex items-center gap-2 text-white">
                        <span
                          onClick={() => toggleDropdown(label)}
                          className="cursor-pointer flex items-center"
                        >
                          {label}
                          <img
                            src={arrowIcon}
                            alt="Arrow"
                            className={`w-4 h-4 transition-transform ${
                              dropdownOpen === label ? "rotate-90" : ""
                            } ml-1`}
                          />
                        </span>
                      </div>
                    ) : (
                      <NavLink
                        to={to}
                        onClick={() => setMobileOpen(false)}
                        className={`${
                          currentPath === to ? "text-[#02EC97]" : "text-white"
                        }`}
                      >
                        {label}
                      </NavLink>
                    )}
                  </div>

                  {/* Dropdown for submenu (just category labels, no nested items) */}
                  {submenu && dropdownOpen === label && (
                    <ul className="mt-2 space-y-2 w-full flex flex-col items-center">
                      {submenu.map((cat) => (
                        <li key={cat.label} className="w-full text-center">
                          <span className="block px-4 py-2 text-white">
                            {cat.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              <li className="w-full flex justify-center">
                <NavLink
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block mt-8 px-6 py-3 rounded-[30px] text-white text-center"
                  style={{ background: gradient }}
                >
                  Connect with us
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
