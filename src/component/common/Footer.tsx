import { Link } from "react-router-dom";

import bgImage from "../../assets/img/aioh-footer.webp";
import topSvg from "../../assets/img/logo/allinone.svg";
import FacebookIcon from "../../assets/contact/facebook.svg";
import InstagramIcon from "../../assets/contact/instagram.svg";
import GoogleIcon from "../../assets/contact/google.svg";
import AIOHLogo from "../../assets/img/logo/AIOH.png";
import SendIcon from "../../assets/img/logo/Send.svg";
import PhoneIcon from "../../assets/img/logo/Phone.svg";
import LocationIcon from "../../assets/img/logo/Location.svg";
import EmailIcon from "../../assets/img/logo/Email.svg";

const Footer = () => {
  return (
    <>
      {/* ✅ SVG Floating Above Footer - MOVED OUTSIDE THE FOOTER */}
      <div className="relative w-full flex justify-center z-10 md:translate-y-0  lg:-translate-y-40 translate-y-5">
        <img
          src={topSvg}
          alt="AllinOne"
          className="max-w-[100vw] h-auto object-contain"
        />
      </div>

      <footer className="relative md:-mt-20 lg:-mt-75 -mt-5 text-white font-light font-['Roboto'] overflow-x-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center z-0 rounded-[20px]"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-80 rounded-[20px]" />
        </div>

        {/* ✅ Main content */}
        <div className="relative z-10 w-11/12 mx-auto md:pt-60 pt-20 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-0 text-left text-[16px] font-light leading-relaxed ">
            {/* Column 1 → full width on md */}
            <div className="md:col-span-3 lg:col-span-1 lg:w-[430px] text-center md:text-left flex flex-col items-center md:items-start">
              {/* Logo */}
              <div className="mb-3">
                <img
                  src={AIOHLogo}
                  alt="All in One Holdings Logo"
                  className="w-[250px] h-auto"
                />
              </div>

              {/* --- Mobile + Desktop layout (stacked) --- */}
              <div className="block md:hidden lg:block w-full">
                <p className="mb-2 text-[#F5F5F5] text-justify">
                  Empowering startups and businesses with result-driven Digital
                  Marketing and custom-built Software Solutions. Turn your ideas
                  into digital success.
                </p>

                <div className="mt-4 flex items-center justify-center lg:justify-start w-full">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="px-4 py-2 w-full rounded-full border border-[#595959] text-white/60 placeholder-[#595959] focus:outline-none"
                  />
                  <button
                    className="ml-2 w-11 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center cursor-pointer hover:bg-[#02EC97]/90 transition-colors duration-300"
                    aria-label="Subscribe"
                  >
                    <img
                      src={SendIcon}
                      alt="Send"
                      className="w-[18px] h-[18px]"
                    />
                  </button>
                </div>
              </div>

              {/* --- Tablet layout (side by side) --- */}
              <div className="hidden md:flex lg:hidden w-full items-start gap-8">
                <p className="text-[#F5F5F5] text-justify flex-1">
                  Empowering startups and businesses with result-driven Digital
                  Marketing and custom-built Software Solutions. Turn your ideas
                  into digital success.
                </p>

                <div className="flex items-center justify-start w-1/2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="px-4 py-2 w-full rounded-full border border-[#595959] text-white/60 placeholder-[#595959] focus:outline-none"
                  />
                  <button
                    className="ml-2 w-11 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center cursor-pointer hover:bg-[#02EC97]/90 transition-colors duration-300"
                    aria-label="Subscribe"
                  >
                    <img
                      src={SendIcon}
                      alt="Send"
                      className="w-[18px] h-[18px]"
                    />
                  </button>
                </div>
              </div>

              {/* --- Contact Info --- */}
              <div className="mt-6 text-[#F5F5F5] w-full text-left">
                <h3 className="text-[18px] font-medium mb-2">Contact</h3>

                {/* Phone */}
                <p className="text-sm flex items-center gap-2 mb-4 justify-start">
                  <img src={PhoneIcon} alt="Phone" className="w-4 h-4" />
                  +94 81 2121 051
                </p>

                {/* Location */}
                <p className="text-sm flex items-start gap-2 mb-4 justify-start">
                  <img
                    src={LocationIcon}
                    alt="Location"
                    className="w-5 h-5 mt-[2px]"
                  />
                  349/2/1, Katugastota Rd, Kandy, Sri Lanka.
                </p>

                {/* Email */}
                <p className="text-sm flex items-center gap-2 justify-start">
                  <img src={EmailIcon} alt="Email" className="w-4 h-4" />
                  info@allinoneholdings.com
                </p>
              </div>
            </div>

            {/* Show only Mobile */}
            {/* Column 2 */}
            <div className="md:hidden md:ml-0">
              <h3 className="text-[18px] font-medium mb-3">
                Next-Gen Marketing
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/marketing/digital-strategy"
                    className="hover:text-[#02EC97]"
                  >
                    Digital Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/marketing/social-media-management"
                    className="hover:text-[#02EC97]"
                  >
                    Social Media Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/marketing/social-media-advertising"
                    className="hover:text-[#02EC97]"
                  >
                    Social Media Advertising
                  </Link>
                </li>
                <li>
                  <Link
                    to="/design/creative-content"
                    className="hover:text-[#02EC97]"
                  >
                    Creative Content
                  </Link>
                </li>
                <li>
                  <Link
                    to="/design/brand-identity-development"
                    className="hover:text-[#02EC97]"
                  >
                    Brand Identity Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="md:hidden md:ml-0">
              <h3 className="text-[18px] font-medium mb-3">
                Expert IT Solutions
              </h3>
              <ul className="space-y-2 text-[#F5F5F5]">
                <li>
                  <Link
                    to="/design/ui-ux-design"
                    className="hover:text-[#02EC97]"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technology/WebService"
                    className="hover:text-[#02EC97]"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technology/MobileService"
                    className="hover:text-[#02EC97]"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technology/AIService"
                    className="hover:text-[#02EC97]"
                  >
                    AI Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technology/SEOService"
                    className="hover:text-[#02EC97]"
                  >
                    Search Engine Optimization
                  </Link>
                </li>
              </ul>
            </div>

            {/* Show only Desktop + Tablet */}
            {/* Column 2 - Marketing */}
            <div className="md:block hidden lg:ml-40 md:ml-0 lg:w-full lg:mt-21">
              <h3 className="text-[18px] font-medium mb-3">Marketing</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/marketing/digital-strategy"
                    className="hover:text-[#02EC97]"
                  >
                    Digital Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/marketing/social-media-advertising"
                    className="hover:text-[#02EC97]"
                  >
                    Social Media Advertising
                  </Link>
                </li>
                <li>
                  <Link
                    to="/marketing/social-media-management"
                    className="hover:text-[#02EC97]"
                  >
                    Social Media Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/marketing/lead-generation-&-conversion-rate-optimization"
                    className="hover:text-[#02EC97]"
                  >
                    Lead Generation & CRO
                  </Link>
                </li>
                <li>
                  <Link
                    to="/marketing/search-engine-optimization"
                    className="hover:text-[#02EC97]"
                  >
                    Search Engine Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    to="/marketing/pay-per-click-marketing"
                    className="hover:text-[#02EC97]"
                  >
                    Pay-Per-Click Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/marketing/email-marketing"
                    className="hover:text-[#02EC97]"
                  >
                    Email Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/marketing/branding"
                    className="hover:text-[#02EC97]"
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technology/WebService"
                    className="hover:text-[#02EC97]"
                  >
                    Web Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Technology */}
            <div className="md:block hidden lg:ml-40 lg:w-full md:ml-0 lg:mt-21">
              <h3 className="text-[18px] font-medium mb-3">Technology</h3>
              <ul className="space-y-2 text-[#F5F5F5]">
                <li>
                  <Link
                    to="/technology/WebService"
                    className="hover:text-[#02EC97]"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technology/SystemService"
                    className="hover:text-[#02EC97]"
                  >
                    Web System Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technology/StandaloneSysDevService"
                    className="hover:text-[#02EC97]"
                  >
                    Standalone System Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technology/MobileService"
                    className="hover:text-[#02EC97]"
                  >
                    Mobile Application Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technology/AIService"
                    className="hover:text-[#02EC97]"
                  >
                    AI Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technology/TestAutomationService"
                    className="hover:text-[#02EC97]"
                  >
                    Test Automation Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Design */}
            <div className="md:block hidden lg:ml-40 lg:w-full md:ml-0 lg:mt-21">
              <h3 className="text-[18px] font-medium mb-3">Design</h3>
              <ul className="space-y-2 text-[#F5F5F5]">
                <li>
                  <Link
                    to="/design/brand-identity-development"
                    className="hover:text-[#02EC97]"
                  >
                    Brand Identity Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/design/packaging-design"
                    className="hover:text-[#02EC97]"
                  >
                    Package Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/design/promotional-material-design"
                    className="hover:text-[#02EC97]"
                  >
                    Promotion Material Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/design/creative-content"
                    className="hover:text-[#02EC97]"
                  >
                    Creative Content
                  </Link>
                </li>
                <li>
                  <Link
                    to="/design/photography-and-videography"
                    className="hover:text-[#02EC97]"
                  >
                    Photography & Videography
                  </Link>
                </li>
                <li>
                  <Link
                    to="/design/ui-ux-design"
                    className="hover:text-[#02EC97]"
                  >
                    UI/UX Design
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ✅ Footer Bottom Section with social + nav + credit */}
        <div className="relative z-10 w-full">
          <div className="w-11/12 mx-auto py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
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
          <div className="text-xs py-3 bg-[#01050A]">
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
          <div className="relative z-10 w-11/12 mx-auto">
            {/* All footer content */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;





















// OLD CODE


// import { Link } from "react-router-dom";

// import bgImage from "../../assets/img/aioh-footer.webp";
// import topSvg from "../../assets/img/logo/allinone.svg";
// import FacebookIcon from "../../assets/contact/facebook.svg";
// import InstagramIcon from "../../assets/contact/instagram.svg";
// import GoogleIcon from "../../assets/contact/google.svg";
// import AIOHLogo from "../../assets/img/logo/AIOH.png";
// import SendIcon from "../../assets/img/logo/Send.svg";
// import PhoneIcon from "../../assets/img/logo/Phone.svg";
// import LocationIcon from "../../assets/img/logo/Location.svg";
// import EmailIcon from "../../assets/img/logo/Email.svg";

// const Footer = () => {
//   return (
//     <footer className="relative mt-32 text-white font-light font-['Roboto']">
//       {/* ✅ Background image with overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-no-repeat bg-center z-0 rounded-[20px]"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       >
//         <div className="absolute inset-0 bg-black opacity-80 rounded-[20px]" />
//       </div>

//       {/* ✅ Big AllinOne SVG top of footer */}
//       <div className="absolute lg:-top-40 -top-10  w-full flex justify-center z-10">
//         <img src={topSvg} alt="AllinOne" className="w-full h-auto px-4" />
//       </div>

//       {/* ✅ Main content */}
//       <div className="relative z-10 w-11/12 mx-auto md:pt-60 pt-20 pb-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-0 text-left text-[16px] font-light leading-relaxed ">
//           {/* Column 1 → full width on md */}
//           <div className="md:col-span-3 lg:col-span-1 lg:w-[430px] text-center md:text-left flex flex-col items-center md:items-start">
//             {/* Logo */}
//             <div className="mb-3">
//               <img
//                 src={AIOHLogo}
//                 alt="All in One Holdings Logo"
//                 className="w-[250px] h-auto"
//               />
//             </div>

//             {/* --- Mobile + Desktop layout (stacked) --- */}
//             <div className="block md:hidden lg:block w-full">
//               <p className="mb-2 text-[#F5F5F5] text-justify">
//                 Empowering startups and businesses with result-driven Digital
//                 Marketing and custom-built Software Solutions. Turn your ideas
//                 into digital success.
//               </p>

//               <div className="mt-4 flex items-center justify-center lg:justify-start w-full">
//                 <input
//                   type="email"
//                   required
//                   placeholder="Enter your email"
//                   className="px-4 py-2 w-full rounded-full border border-[#595959] text-white/60 placeholder-[#595959] focus:outline-none"
//                 />
//                 <button
//                   className="ml-2 w-11 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center cursor-pointer hover:bg-[#02EC97]/90 transition-colors duration-300"
//                   aria-label="Subscribe"
//                 >
//                   <img
//                     src={SendIcon}
//                     alt="Send"
//                     className="w-[18px] h-[18px]"
//                   />
//                 </button>
//               </div>
//             </div>

//             {/* --- Tablet layout (side by side) --- */}
//             <div className="hidden md:flex lg:hidden w-full items-start gap-8">
//               <p className="text-[#F5F5F5] text-justify flex-1">
//                 Empowering startups and businesses with result-driven Digital
//                 Marketing and custom-built Software Solutions. Turn your ideas
//                 into digital success.
//               </p>

//               <div className="flex items-center justify-start w-1/2">
//                 <input
//                   type="email"
//                   required
//                   placeholder="Enter your email"
//                   className="px-4 py-2 w-full rounded-full border border-[#595959] text-white/60 placeholder-[#595959] focus:outline-none"
//                 />
//                 <button
//                   className="ml-2 w-11 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center cursor-pointer hover:bg-[#02EC97]/90 transition-colors duration-300"
//                   aria-label="Subscribe"
//                 >
//                   <img
//                     src={SendIcon}
//                     alt="Send"
//                     className="w-[18px] h-[18px]"
//                   />
//                 </button>
//               </div>
//             </div>

//             {/* --- Contact Info --- */}
//             <div className="mt-6 text-[#F5F5F5] w-full text-left">
//               <h3 className="text-[18px] font-medium mb-2">Contact</h3>

//               {/* Phone */}
//               <p className="text-sm flex items-center gap-2 mb-4 justify-start">
//                 <img src={PhoneIcon} alt="Phone" className="w-4 h-4" />
//                 +94 81 2121 051
//               </p>

//               {/* Location */}
//               <p className="text-sm flex items-start gap-2 mb-4 justify-start">
//                 <img
//                   src={LocationIcon}
//                   alt="Location"
//                   className="w-5 h-5 mt-[2px]"
//                 />
//                 349/2/1, Katugastota Rd, Kandy, Sri Lanka.
//               </p>

//               {/* Email */}
//               <p className="text-sm flex items-center gap-2 justify-start">
//                 <img src={EmailIcon} alt="Email" className="w-4 h-4" />
//                 info@allinoneholdings.com
//               </p>
//             </div>
//           </div>

//           {/* Show only Mobile */}
//           {/* Column 2 */}
//           <div className="md:hidden md:ml-0">
//             <h3 className="text-[18px] font-medium mb-3">Next-Gen Marketing</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   to="/marketing/digital-strategy"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Digital Strategy
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/marketing/social-media-management"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Social Media Management
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/marketing/social-media-advertising"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Social Media Advertising
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/design/creative-content"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Creative Content
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/design/brand-identity-development"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Brand Identity Development
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Column 3 */}
//           <div className="md:hidden md:ml-0">
//             <h3 className="text-[18px] font-medium mb-3">
//               Expert IT Solutions
//             </h3>
//             <ul className="space-y-2 text-[#F5F5F5]">
//               <li>
//                 <Link
//                   to="/design/ui-ux-design"
//                   className="hover:text-[#02EC97]"
//                 >
//                   UI/UX Design
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/technology/WebService"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Web Development
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/technology/MobileService"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Mobile App Development
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/technology/AIService"
//                   className="hover:text-[#02EC97]"
//                 >
//                   AI Solutions
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/technology/SEOService"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Search Engine Optimization
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Show only Desktop + Tablet */}
//           {/* Column 2 - Marketing */}
//           <div className="md:block hidden lg:ml-40 md:ml-0 lg:w-full lg:mt-21">
//             <h3 className="text-[18px] font-medium mb-3">Marketing</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   to="/marketing/digital-strategy"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Digital Strategy
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/marketing/social-media-advertising"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Social Media Advertising
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/marketing/social-media-management"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Social Media Management
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/marketing/lead-generation-&-conversion-rate-optimization"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Lead Generation & CRO
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/marketing/search-engine-optimization"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Search Engine Optimization
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/marketing/pay-per-click-marketing"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Pay-Per-Click Marketing
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/marketing/email-marketing"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Email Marketing
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/marketing/branding" className="hover:text-[#02EC97]">
//                   Branding
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/technology/WebService"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Web Development
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Column 3 - Technology */}
//           <div className="md:block hidden lg:ml-40 lg:w-full md:ml-0 lg:mt-21">
//             <h3 className="text-[18px] font-medium mb-3">Technology</h3>
//             <ul className="space-y-2 text-[#F5F5F5]">
//               <li>
//                 <Link
//                   to="/technology/WebService"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Web Development
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/technology/SystemService"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Web System Development
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/technology/StandaloneSysDevService"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Standalone System Development
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/technology/MobileService"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Mobile Application Development
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/technology/AIService"
//                   className="hover:text-[#02EC97]"
//                 >
//                   AI Solutions
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/technology/TestAutomationService"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Test Automation Solutions
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Column 4 - Design */}
//           <div className="md:block hidden lg:ml-40 lg:w-full md:ml-0 lg:mt-21">
//             <h3 className="text-[18px] font-medium mb-3">Design</h3>
//             <ul className="space-y-2 text-[#F5F5F5]">
//               <li>
//                 <Link
//                   to="/design/brand-identity-development"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Brand Identity Development
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/design/packaging-design"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Package Design
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/design/promotional-material-design"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Promotion Material Design
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/design/creative-content"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Creative Content
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/design/photography-and-videography"
//                   className="hover:text-[#02EC97]"
//                 >
//                   Photography & Videography
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/design/ui-ux-design"
//                   className="hover:text-[#02EC97]"
//                 >
//                   UI/UX Design
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Footer Bottom Section with social + nav + credit */}
//       <div className="relative z-10 w-full">
//         <div className="w-11/12 mx-auto py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
//           <div className="flex flex-col justify-center md:justify-start text-[#F5F5F5]">
//             <h3 className="text-[18px] font-medium mb-3 text-center md:text-left">
//               Navigations
//             </h3>
//             <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//               <Link to="/" className="hover:text-[#02EC97] transition">
//                 Home
//               </Link>
//               <Link to="/Aboutus" className="hover:text-[#02EC97] transition">
//                 About
//               </Link>
//               <Link to="/Marketing" className="hover:text-[#02EC97] transition">
//                 Marketing
//               </Link>
//               <Link
//                 to="/Technology"
//                 className="hover:text-[#02EC97] transition"
//               >
//                 Technology
//               </Link>
//               <Link to="/Design" className="hover:text-[#02EC97] transition">
//                 Design
//               </Link>
//               <Link to="/Contact" className="hover:text-[#02EC97] transition">
//                 Contact
//               </Link>
//             </div>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-4 justify-center md:justify-end">
//             <a
//               href="https://www.facebook.com/allinoneholdings"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center hover:opacity-80"
//             >
//               <img
//                 src={FacebookIcon}
//                 alt="Facebook"
//                 className="w-[18px] h-[18px]"
//               />
//             </a>
//             <a
//               href="https://www.instagram.com/all_in_one_holdings"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center hover:opacity-80"
//             >
//               <img
//                 src={InstagramIcon}
//                 alt="Instagram"
//                 className="w-[18px] h-[18px]"
//               />
//             </a>
//             <a
//               href="https://g.co/kgs/Cw4rrUZ"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-[#02EC97] border-2 border-[#02EC97] flex items-center justify-center hover:opacity-80"
//             >
//               <img
//                 src={GoogleIcon}
//                 alt="Google"
//                 className="w-[18px] h-[18px]"
//               />
//             </a>
//           </div>
//         </div>

//         {/* ✅ Credit Line */}
//         <div className="text-xs py-3 bg-[#01050A]">
//           <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2 text-[#F5F5F5]">
//             <p className="hover:text-[#02EC97] transition-colors duration-200">
//               Copyrights © 2025 All in One IT Solutions. All Rights Reserved
//             </p>
//             <p className="text-[10px] transition-colors duration-200">
//               <a
//                 href="/terms"
//                 className="hover:text-[#02EC97] cursor-pointer transition-colors duration-200"
//               >
//                 User Terms & Conditions
//               </a>{" "}
//               |{" "}
//               <a
//                 href="/privacy"
//                 className="hover:text-[#02EC97] cursor-pointer transition-colors duration-200"
//               >
//                 Privacy Policy
//               </a>
//             </p>
//           </div>
//         </div>
//         <div className="relative z-10 w-11/12 mx-auto">
//           {/* All footer content */}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;