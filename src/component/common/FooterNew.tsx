import { Link } from "react-router-dom";

// import bgImage from "../../assets/img/aioh-footer.webp";
// import topSvg from "../../assets/img/logo/allinone.svg";
import FacebookIcon from "../../assets/contact/facebook.svg";
import InstagramIcon from "../../assets/contact/instagram.svg";
import GoogleIcon from "../../assets/contact/google.svg";
// import AIOHLogo from "../../assets/img/logo/AIOH.png";
// import SendIcon from "../../assets/img/logo/Send.svg";

// Complete Footer data structure with ALL services from navItems
const footerSections = [
  {
    title: "Marketing",
    sections: [
      {
        label: "Digital Strategy",
        items: [
          {
            title: "Brand Positioning",
            to: "/marketing/digital-strategy",
          },
          {
            title: "Market Research",
            to: "/marketing/digital-strategy",
          },
          {
            title: "Competitor Analysis",
            to: "/marketing/digital-strategy",
          },
          {
            title: "Customer Analysis",
            to: "/marketing/digital-strategy",
          },
          {
            title: "Digital Marketing Strategy Creation",
            to: "/marketing/digital-strategy",
          },
          {
            title: "Social Media Strategy Creation",
            to: "/marketing/digital-strategy",
          },
          {
            title: "Brand Guidelines",
            to: "/marketing/digital-strategy",
          },
          {
            title: "Brand Repositioning Strategies",
            to: "/marketing/digital-strategy",
          },
        ],
      },
      {
        label: "Social Media Advertising",
        items: [
          {
            title: "Audience Analysis",
            to: "/marketing/social-media-advertising",
          },
          {
            title: "Product/Service Analysis",
            to: "/marketing/social-media-advertising",
          },
          {
            title: "A/B Testing & Scaling",
            to: "/marketing/social-media-advertising",
          },
          {
            title: "Digital Campaign Setup & Monitoring",
            to: "/marketing/social-media-advertising",
          },
          {
            title: "Retargeting Campaigns",
            to: "/marketing/social-media-advertising",
          },
          {
            title: "Brand Awareness Campaigns",
            to: "/marketing/social-media-advertising",
          },
          {
            title: "Lead/Sales Generating Campaigns",
            to: "/marketing/social-media-advertising",
          },
          {
            title: "Engagement Campaigns",
            to: "/marketing/social-media-advertising",
          },
          {
            title: "Marketing Funnel Creation & Optimization",
            to: "/marketing/social-media-advertising",
          },
        ],
      },
      {
        label: "Social Media Management",
        items: [
          {
            title: "Content Strategy",
            to: "/marketing/social-media-management",
          },
          {
            title: "Social Media Page Management",
            to: "/marketing/social-media-management",
          },
          {
            title: "SM Page Setup & Optimization",
            to: "/marketing/social-media-management",
          },
          {
            title: "Analytics & Reporting",
            to: "/marketing/social-media-management",
          },
          {
            title: "Hashtag Strategy",
            to: "/marketing/social-media-management",
          },
          {
            title: "Creative Marketing",
            to: "/marketing/social-media-management",
          },
        ],
      },
      {
        label: "Lead Generation & CRO",
        items: [
          {
            title: "A/B Testing",
            to: "/marketing/lead-generation-&-conversion-rate-optimization",
          },
          {
            title: "Campaign Scaling",
            to: "/marketing/lead-generation-&-conversion-rate-optimization",
          },
          {
            title: "Campaign Audit & Setup",
            to: "/marketing/lead-generation-&-conversion-rate-optimization",
          },
          {
            title: "Sales Funnel Creation & Optimization",
            to: "/marketing/lead-generation-&-conversion-rate-optimization",
          },
          {
            title: "Landing Page Optimization",
            to: "/marketing/lead-generation-&-conversion-rate-optimization",
          },
          {
            title: "Sales Funnel Automation",
            to: "/marketing/lead-generation-&-conversion-rate-optimization",
          },
          {
            title: "Conversion Rate and ROAS Optimizations",
            to: "/marketing/lead-generation-&-conversion-rate-optimization",
          },
          {
            title: "Campaign Data Analysis",
            to: "/marketing/lead-generation-&-conversion-rate-optimization",
          },
        ],
      },
      {
        label: "Search Engine Optimization",
        items: [
          {
            title: "On-Page SEO",
            to: "/marketing/search-engine-optimization",
          },
          {
            title: "Off-Page SEO",
            to: "/marketing/search-engine-optimization",
          },
          {
            title: "Technical SEO",
            to: "/marketing/search-engine-optimization",
          },
          {
            title: "Local SEO",
            to: "/marketing/search-engine-optimization",
          },
          {
            title: "E-commerce SEO",
            to: "/marketing/search-engine-optimization",
          },
          {
            title: "Content SEO & Optimization",
            to: "/marketing/search-engine-optimization",
          },
          {
            title: "Mobile SEO",
            to: "/marketing/search-engine-optimization",
          },
          {
            title: "SEO Audits & Reporting",
            to: "/marketing/search-engine-optimization",
          },
          {
            title: "Keyword Research & Strategy",
            to: "/marketing/search-engine-optimization",
          },
        ],
      },
      {
        label: "Pay-Per-Click Marketing",
        items: [
          {
            title: "Google Ads management",
            to: "/marketing/pay-per-click-marketing",
          },
          {
            title: "Social media advertising",
            to: "/marketing/pay-per-click-marketing",
          },
          {
            title: "Remarketing campaigns",
            to: "/marketing/pay-per-click-marketing",
          },
          {
            title: "Keyword research & targeting",
            to: "/marketing/pay-per-click-marketing",
          },
          {
            title: "Campaign performance reporting",
            to: "/marketing/pay-per-click-marketing",
          },
        ],
      },
      {
        label: "Email Marketing",
        items: [
          {
            title: "Email strategy development",
            to: "/marketing/email-marketing",
          },
          {
            title: "List building & segmentation",
            to: "/marketing/email-marketing",
          },
          {
            title: "Campaign design & copywriting",
            to: "/marketing/email-marketing",
          },
          {
            title: "Automation workflows",
            to: "/marketing/email-marketing",
          },
          {
            title: "Analytics & reporting",
            to: "/marketing/email-marketing",
          },
        ],
      },
      {
        label: "Branding",
        items: [
          {
            title: "Market Research",
            to: "/marketing/branding",
          },
          {
            title: "Customer Analysis",
            to: "/marketing/branding",
          },
          {
            title: "Product/Service Analysis",
            to: "/marketing/branding",
          },
          {
            title: "Competitor Analysis",
            to: "/marketing/branding",
          },
          {
            title: "Brand Message/Voice and Promise",
            to: "/marketing/branding",
          },
          {
            title: "Brand Guidelines and Brand Architecture Design",
            to: "/marketing/branding",
          },
          {
            title: "Brand Positioning",
            to: "/marketing/branding",
          },
          {
            title: "Brand Strategy Creation",
            to: "/marketing/branding",
          },
        ],
      },
    ],
  },
  {
    title: "Technology",
    sections: [
      {
        label: "Web Development",
        items: [
          {
            title: "Showcase / Business Websites",
            to: "/technology/WebService",
          },
          {
            title: "Portfolio Websites",
            to: "/technology/WebService",
          },
          {
            title: "Blog & News Websites",
            to: "/technology/WebService",
          },
          {
            title: "Educational Websites & e-Learning Portals",
            to: "/technology/WebService",
          },
          {
            title: "Membership & Subscription-Based Websites",
            to: "/technology/WebService",
          },
          {
            title: "Nonprofit & Charity Websites",
            to: "/technology/WebService",
          },
          {
            title: "Job Board Websites",
            to: "/technology/WebService",
          },
          {
            title: "Directory & Listing Websites",
            to: "/technology/WebService",
          },
        ],
      },
      {
        label: "Web System Development",
        items: [
          {
            title: "Management Web Applications (HRM, CRM, etc.)",
            to: "/technology/SystemService",
          },
          {
            title: "Learning Management Systems (LMS)",
            to: "/technology/SystemService",
          },
          {
            title: "Booking & Reservation Websites",
            to: "/technology/SystemService",
          },
          {
            title: "Custom Web Applications",
            to: "/technology/SystemService",
          },
          {
            title: "Event Management Websites",
            to: "/technology/SystemService",
          },
          {
            title: "E-commerce Websites & Solutions",
            to: "/technology/SystemService",
          },
          {
            title: "Health & Clinic Management Web Applications",
            to: "/technology/SystemService",
          },
        ],
      },
      {
        label: "Standalone System Development",
        items: [
          {
            title: "Enterprise Resource Planning (ERP) Systems",
            to: "/technology/StandaloneSysDevService",
          },
          {
            title: "Point of Sale (POS) Systems",
            to: "/technology/StandaloneSysDevService",
          },
          {
            title: "Inventory & Warehouse Management Systems",
            to: "/technology/StandaloneSysDevService",
          },
          {
            title: "Hospital & Clinic Management Systems",
            to: "/technology/StandaloneSysDevService",
          },
          {
            title: "School / University Management Systems",
            to: "/technology/StandaloneSysDevService",
          },
          {
            title: "Custom Business Automation Solutions",
            to: "/technology/StandaloneSysDevService",
          },
        ],
      },
      {
        label: "Mobile Application Development",
        items: [
          {
            title: "Android & iOS Native Apps",
            to: "/technology/MobileService",
          },
          {
            title: "Cross-Platform Mobile Apps (Flutter, React Native)",
            to: "/technology/MobileService",
          },
          {
            title: "E-commerce Mobile Apps",
            to: "/technology/MobileService",
          },
          {
            title: "Educational & LMS Mobile Apps",
            to: "/technology/MobileService",
          },
          {
            title: "Event & Ticketing Apps",
            to: "/technology/MobileService",
          },
          {
            title: "Delivery & Logistics Apps",
            to: "/technology/MobileService",
          },
          {
            title: "Travel & Tourism Apps",
            to: "/technology/MobileService",
          },
          {
            title: "Financial & Fintech Apps",
            to: "/technology/MobileService",
          },
          {
            title: "Social Networking & Community Apps",
            to: "/technology/MobileService",
          },
          {
            title: "Custom Business Mobile Apps",
            to: "/technology/MobileService",
          },
        ],
      },
      {
        label: "AI Solutions",
        items: [
          {
            title: "AI Chatbots and Virtual Assistants",
            to: "/technology/AIService",
          },
          {
            title: "Custom AI Solutions",
            to: "/technology/AIService",
          },
        ],
      },
      {
        label: "Test Automation Solutions",
        items: [
          {
            title: "Automated Functional Testing",
            to: "/technology/TestAutomationService",
          },
          {
            title: "Regression Testing",
            to: "/technology/TestAutomationService",
          },
          {
            title: "Performance Testing",
            to: "/technology/TestAutomationService",
          },
          {
            title: "CI/CD Support",
            to: "/technology/TestAutomationService",
          },
        ],
      },
    ],
  },
  {
    title: "Design",
    sections: [
      {
        label: "Brand Identity Development",
        items: [
          {
            title: "Logo design",
            to: "/design/brand-identity-development",
          },
          {
            title: "Brand guidelines",
            to: "/design/brand-identity-development",
          },
          {
            title: "Letter heads",
            to: "/design/brand-identity-development",
          },
          {
            title: "Business cards",
            to: "/design/brand-identity-development",
          },
          {
            title: "Company profiles",
            to: "/design/brand-identity-development",
          },
          {
            title: "Banner design",
            to: "/design/brand-identity-development",
          },
          {
            title: "Leaflet design",
            to: "/design/brand-identity-development",
          },
          {
            title: "Brand books",
            to: "/design/brand-identity-development",
          },
        ],
      },
      {
        label: "Package Design",
        items: [
          {
            title: "Product packaging",
            to: "/design/packaging-design",
          },
          {
            title: "Label design",
            to: "/design/packaging-design",
          },
          {
            title: "Box design",
            to: "/design/packaging-design",
          },
          {
            title: "Mockups & prototypes",
            to: "/design/packaging-design",
          },
        ],
      },
      {
        label: "Promotion or POS Material Design",
        items: [
          {
            title: "Flyer designs",
            to: "/design/promotional-material-design",
          },
          {
            title: "Color Grading",
            to: "/design/promotional-material-design",
          },
        ],
      },
      {
        label: "Creative Content",
        items: [
          {
            title: "Graphic design",
            to: "/design/creative-content",
          },
          {
            title: "Social graphics",
            to: "/design/creative-content",
          },
          {
            title: "Infographics",
            to: "/design/creative-content",
          },
          {
            title: "Digital illustrations",
            to: "/design/creative-content",
          },
        ],
      },
      {
        label: "Photography and Videography Productions",
        items: [
          {
            title: "Product photography",
            to: "/design/photography-and-videography",
          },
          {
            title: "Brand videography",
            to: "/design/photography-and-videography",
          },
          {
            title: "Video editing",
            to: "/design/photography-and-videography",
          },
          {
            title: "Motion graphics",
            to: "/design/photography-and-videography",
          },
        ],
      },
      {
        label: "UI/UX Design",
        items: [
          {
            title: "User Research & Analysis",
            to: "/design/ui-ux-design",
          },
          {
            title: "Brand Experience Integration",
            to: "/design/ui-ux-design",
          },
          {
            title: "Wireframing & Prototyping",
            to: "/design/ui-ux-design",
          },
          {
            title: "Visual & Interaction Design",
            to: "/design/ui-ux-design",
          },
          {
            title: "Usability Testing & Optimization",
            to: "/design/ui-ux-design",
          },
        ],
      },
    ],
  },
];

const Footer = () => {
  return (
    <>
      {/* bg-[#01213A] */}
      <footer className="relative md:-mt-20 lg:mt-10 text-white font-light font-['Roboto'] overflow-x-hidden bg-gradient-to-b from-[#01213A] via-[#001627] to-black pt-[400px] lg:pt-72">
        {/* ✅ Main Footer Layout */}
        <div className="relative z-50 w-11/12 mx-auto md:pt-60 pb-10">
          {/* ✅ Row 2 - footerSections (Full Width 6 Columns) */}
          <div className="columns-1 sm:columns-2 lg:columns-6 gap-8 text-left font-light leading-relaxed">
            {footerSections
              .flatMap((section) => section.sections)
              .map((subSection, index) => (
                <div key={index} className="break-inside-avoid mb-6">
                  <h4 className="text-[15px] font-medium mb-2 text-white">
                    {subSection.label}
                  </h4>
                  <ul className="space-y-1.5">
                    {subSection.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          to={item.to}
                          className="text-[#F5F5F5] hover:text-[#02EC97] transition-colors duration-200 text-[12px]"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>

        {/* ✅ Footer Bottom Section with navigation */}
        <div className="relative z-10 w-full">
          <div className="w-11/12 mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm border-t border-[#333]">
            <div className="flex flex-col justify-center md:justify-start text-[#F5F5F5]">
              <h3 className="text-[18px] font-medium mb-3 text-center md:text-left">
                Navigations
              </h3>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link to="/" className="hover:text-[#02EC97] transition">
                  Home
                </Link>
                <Link to="/Aboutus" className="hover:text-[#02EC97] transition">
                  About
                </Link>
                <Link
                  to="/Marketing"
                  className="hover:text-[#02EC97] transition"
                >
                  Marketing
                </Link>
                <Link
                  to="/Technology"
                  className="hover:text-[#02EC97] transition"
                >
                  Technology
                </Link>
                <Link to="/Design" className="hover:text-[#02EC97] transition">
                  Design
                </Link>
                <Link to="/Contact" className="hover:text-[#02EC97] transition">
                  Contact
                </Link>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center md:justify-end">
              <a
                href="https://www.facebook.com/allinoneholdings"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center hover:opacity-80"
              >
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="w-[18px] h-[18px]"
                />
              </a>
              <a
                href="https://www.instagram.com/all_in_one_holdings"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center hover:opacity-80"
              >
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="w-[18px] h-[18px]"
                />
              </a>
              <a
                href="https://g.co/kgs/Cw4rrUZ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center hover:opacity-80"
              >
                <img
                  src={GoogleIcon}
                  alt="Google"
                  className="w-[18px] h-[18px]"
                />
              </a>
            </div>
          </div>

          {/* ✅ Credit Line */}
          <div className="text-xs py-3 bg-black">
            <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2 text-[#F5F5F5]">
              <p className="hover:text-[#02EC97] transition-colors duration-200">
                Copyrights © 2025 All in One IT Solutions. All Rights Reserved
              </p>
              <p className="text-[10px] transition-colors duration-200">
                <a
                  href="/terms"
                  className="hover:text-[#02EC97] cursor-pointer transition-colors duration-200"
                >
                  User Terms & Conditions
                </a>{" "}
                |{" "}
                <a
                  href="/privacy"
                  className="hover:text-[#02EC97] cursor-pointer transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
