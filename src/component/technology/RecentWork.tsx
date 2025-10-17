import { useEffect, useRef, useState } from "react";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { LiaHandPointRightSolid } from "react-icons/lia";
import { ImCheckmark2 } from "react-icons/im";

import tech_rw1 from "../../assets/img/recentWork/tech-rw1.png";
import tech_rw2 from "../../assets/img/recentWork/tech-rw2.png";
import tech_rw3 from "../../assets/img/recentWork/tech-rw3.png";
import tech_rw4 from "../../assets/img/recentWork/tech-rw4.png";
import tech_rw5 from "../../assets/img/recentWork/tech-rw5.png";
import tech_rw6 from "../../assets/img/recentWork/tech-rw6.png";
import tech_rw7 from "../../assets/img/recentWork/tech-rw7.png";
import tech_rw8 from "../../assets/img/recentWork/tech-rw8.png";
import tech_rw9 from "../../assets/img/recentWork/tech-rw9.png";
import tech_rw10 from "../../assets/img/recentWork/tech-rw10.png";
import tech_rw11 from "../../assets/img/recentWork/tech-rw11.png";
import tech_rw12 from "../../assets/img/recentWork/tech-rw10.png";
import tech_rw13 from "../../assets/img/recentWork/tech-rw11.png";
import tech_rw14 from "../../assets/img/recentWork/tech-rw10.png";
import dumy from "../../assets/img/recentWork/dumy.jpg";

import { AnimatePresence, motion } from "framer-motion";
import { LuCircleChevronRight } from "react-icons/lu";

const projects = [
  // Recent works
  {
    title: "OneDigital Website",
    description:
      "A premier U.S. firm in HR, insurance, and financial services.",
    image: tech_rw1,
    link: "https://onedigitalusa.com",
    description2:
      "This platform was crafted to showcase OneDigital, a premier U.S. firm specializing in employee benefits, HR consulting, insurance, and financial services. As a trusted partner to businesses and individuals nationwide, the site presents their capabilities from retirement planning and PEO solutions to technology-forward consulting through a professional, mobile-friendly design. Built using enterprise-grade frameworks and a robust CMS, the website delivers an optimized experience across devices.",
    challenges: [
      "Clearly presenting a wide range of services, including insurance brokerage, HR consulting, wealth management, and PEO solutions, proved difficult.",
      "Ensuring consistent access to resources for diverse user groups, employers, and individuals was essential.",
      "Building credibility in a field combining financial services with compliance and strategic consulting required focused effort.",
      "Seamless access to insights and news while integrating navigation across multiple sub-brands like Bold Studio and Resourcing Edge was challenging.",
      "Delivering fast and reliable performance for high-traffic enterprise pages was critical to optimize user experience.",
    ],
    solutions: [
      "Structured the website into clear sections Employer Services, Individual Solutions, Technology & Innovation, Newsroom, and Careers to accommodate diverse audiences. ",
      "Highlighted key offerings like employee benefits strategy, compliance consulting, retirement and wealth advising, and HR technology integration.",
      "Featured a dedicated Technology & Innovation section emphasizing automation, AI, and platform capabilities via OneDigital Impact Studio.",
      "Developed a streamlined Newsroom and blog portal, Ross-like events, policy updates, and career sections to support ongoing engagement.",
      "Integrated social proof and credibility through insights like Fortune’s “Best Places to Work” recognition and Great Place to Work certification.",
    ],
  },
  {
    title: "MyCourse.lk Website",
    description:
      "Sri Lanka’s first and largest online course marketplace for students.",
    image: tech_rw2,
    link: "https://mycourse.lk",
    description2:
      "This website was designed to promote MyCourse.lk, Sri Lanka’s first and largest course marketplace, enabling students to discover, compare, and apply for educational programs from institutions across the country. Built with a clean, responsive design stack likely based on WordPress (PHP/MySQL) or a custom CMS, the platform ensures fast performance and user-friendly access across all devices. ",
    challenges: [
      "Improving transparency in Sri Lankan higher education by presenting clear and comparable course information was a key challenge.",
      "Helping users navigate thousands of programs from diplomas to postgraduate qualifications required careful structuring.",
      "Delivering complex content in an accessible and intuitive way for both general and academic users was essential.",
      "Enabling institutions to regularly update course data for accuracy and relevance posed an ongoing focus.",
      "Guiding students through education pathways using structured planning tools was an important consideration.",
    ],
    solutions: [
      "Launched a centralized course platform featuring thousands of listings across disciplines like Business, IT, Engineering, and Health.",
      "Integrated a user-friendly filtering system (subject, level, institute) to help students find suitable options.",
      "Created a Pathway Guide to assist users in choosing the right course based on their current education level.",
      "Enabled institute-managed course profiles, allowing direct editing and updates to ensure accurate and current information.",
      "Launched a Course Alert feature to notify registered users when new relevant programs become available.",
    ],
  },
  {
    title: "EIKONE Website",
    description:
      "A digital agency platform showcasing innovation, brand strategy, and design.",
    image: tech_rw3,
    link: "https://eikone.co.uk",
    description2:
      "This website was crafted to showcase Eikone's strength in digital innovation, brand strategy, and design. As a forward-thinking digital agency, Eikone needed an online presence that  reflects their modern approach and creative mindset. Built using Next.js, Tailwind CSS, and  Headless CMS, the platform is fast, scalable, and delivers a seamless experience across all  devices.",
    challenges: [
      "Clearly communicating the wide range of services offered was a key challenge.",
      "Creating a strong visual identity through a functional yet minimalist design was essential.",
      "Structuring the website to be scalable and easy for the Eikone team to update proved challenging.",
      "Ensuring consistent branding across all devices required careful attention.",
      "Delivering high performance while maintaining design excellence demanded thorough planning.",
    ],
    solutions: [
      "Crafted a sleek, intuitive user interface that reflects Eikone’s brand identity.",
      "Developed a modular, CMS-integrated website that enables easy content management.",
      "Focused on responsive design to deliver a seamless experience on all screen sizes.",
      "Applied modern frameworks to achieve fast loading and high performance.",
      "Created a design system that aligns with Eikone’s tone and style across all pages.",
      "Built a flexible foundation to support future content, case studies, and service expansions.",
    ],
  },
  {
    title: "Kandy Rent Cars",
    description:
      "Kandy Rent Cars is your trusted car rental service in Kandy and beyond.",
    image: tech_rw4,
    link: "https://kandyrentcars.lk",
    description2:
      "This website was crafted to help tourists and visitors in Sri Lanka easily rent vehicles for travel in and around Kandy. Designed to promote both self-drive and chauffeur-driven car services, the platform offers users a convenient booking experience, transparent pricing, and detailed vehicle options. Built for simplicity and accessibility, it supports multilingual browsing and mobile responsiveness across devices.",
    challenges: [
      "Providing clear information about rental options, including self-drive versus driver-drive, vehicle types, and service areas was complex.",
      "Communicating deposit policies clearly and user-friendly to international renters was essential.",
      "Managing logistics for vehicle delivery and collection, particularly in remote areas, posed significant difficulties.",
      "Designing transparent pricing and mileage packages tailored to diverse travel needs required careful planning.",
    ],
    solutions: [
      "Developed a website presenting both self-drive and chauffeur-driven rental services, with clear vehicle categories from economy to luxury SUVs and wedding cars.",
      "Communicated deposit requirements and conditions upfront to ease booking transparency.",
      "Offered doorstep delivery or hotel pick-up in Kandy, Colombo, and airport locations, clarifying logistics and extra charges.",
      "Introduced distance-based packages and fuel/mileage estimates to help travelers plan costs.",
    ],
  },
  {
    title: "BuyCrafts Website",
    description:
      "An online platform showcasing handmade crafts for global customers.",
    image: tech_rw3,
    link: "https://buycrafts.net",
    description2:
      "This website was crafted to showcase Sri Lankan handmade crafts from wooden carvings to brass inlays. It enables both artisans and customers globally to connect through a storefront that's fast, visually engaging, and easy to navigate. Built on a modern e-commerce framework, it supports multi-currency, multi-language, and a responsive UI for shoppers worldwide.",
    challenges: [
      "Limited global visibility for local artisans restricted their reach to wider audiences.",
      "Absence of a centralized online platform hindered the showcase of diverse craft categories.",
      "Presenting rich visuals and detailed product descriptions in an engaging way required careful design.",
      "Managing a smooth checkout process amid international shipping complexities was difficult.",
      "Building trust for first-time buyers unfamiliar with Sri Lankan crafts was crucial to drive sales.",
    ],
    solutions: [
      "Developed a clean, attractive storefront with product categories like wooden and metal crafts, featuring high-resolution photos and pricing.",
      "Enabled multi-language (English, French, German) and multi-currency (USD, EUR) support to serve an international audience.",
      "Integrated features including secure online payments, order tracking, and a 7-day return policy to build trust.",
      "Showcased product details dimensions, materials, weight and seller credentials such as “New Kandyan Arts & Crafts”.",
      "Highlighted shipping worldwide and easy refund policies to reduce hesitation among global buyers",
    ],
  },
  {
    title: "Winchester Global",
    description:
      "A corporate platform showcasing global logistics and consultancy services.",
    image: tech_rw4,
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
  {
    title: "Dinuda Resort",
    description:
      "Dinuda Resort offers an unparalleled escape into tropical paradise.",
    image: tech_rw5,
    link: "https://dinudaresortkalpitiya.com",
    description2:
      "This website was crafted to present Dinuda Resort, a beachfront retreat in Kalpitiya offering serene lagoon-side stays and adventure activities like kitesurfing, kayaking, dolphin watching, and wildlife tours. Built using a visually engaging, responsive design likely powered by WordPress with a custom theme the platform delivers a tranquil yet dynamic browsing experience across all devices.",
    challenges: [
      "The resort’s unique lagoon-front location and water sports offerings like kite surfing, boating, and diving presented significant challenges.",
      "Balancing the serene resort imagery with engaging adventure content required careful design.",
      "Presenting room options like standard, deluxe, superior with clear layouts, views, and amenities was necessary for clarity.",
      "Building trust through guest reviews and emphasizing the resort’s friendly service was important.",
      "Providing easy access to inquiries, reservations, and pricing via clear contact information was essential to improve user experience.",
    ],
    solutions: [
      "Developed a clean, immersive homepage showcasing lagoon and beach visuals, service highlights, and room types.",
      "Structured content into sections: Rooms, Activities, Amenities, Contact for intuitive navigation.",
      "Integrated real-time booking inquiry and contact functionality prominently throughout the site. ",
      "Featured reviews and testimonials underscoring excellent staff hospitality and lagoon location.",
      "Highlighted amenities like private beach, pool, water sports, spa, restaurant, and free Wi-Fi.",
      "Designed scalable layout for seasonal promos, guest feedback, and activity packages.",
    ],
  },
  {
    title: "Fly Limousines",
    description:
      "A premium platform for booking luxury chauffeur and limousine services.",
    image: tech_rw6,
    link: "https://flylimosines.com",
    description2:
      "This website was crafted to offer a luxury and professional transportation booking experience through Fly Limousines Sri Lanka, a premium chauffeur service. The platform helps both local and international clients book limousines for weddings, airport transfers, corporate events, and special occasions. Built using responsive and elegant design principles, the site ensures smooth access across all devices with a focus on class and clarity.",
    challenges: [
      "Absence of a dedicated online platform for high-end limousine bookings limited customer access.",
      "Showcasing fleet details and available services in an engaging way required strategic planning.",
      "Lack of real-time visibility for bookings and contact options impacted customer convenience.",
      "Maintaining consistent brand presence in a competitive luxury transport market was challenging.",
      "Building trust through driver professionalism and service packages was critical for credibility.",
    ],
    solutions: [
      "Designed a modern, mobile-responsive website reflecting the premium quality of the service",
      "Highlighted a luxury vehicle fleet including sedans, SUVs, and limousines with visuals and descriptions",
      "Introduced clear sections for wedding packages, airport transfers, hourly hires, and VIP tours",
      "Enhanced credibility by showcasing professional chauffeurs, safety protocols, and client-focused services.",
      "Added prominent contact forms, call-to-action buttons, and WhatsApp integration for direct bookings.",
      "Improved search engine visibility and brand awareness through a clean, informative online presence",
    ],
  },
  {
    title: "NAFCO",
    description:
      "A trusted Sri Lankan cement block manufacturer with 35+ years of experience.",
    image: tech_rw7,
    link: "https://nafco.lk",
    description2:
      "This website was designed to represent Nafco Industries, a trusted Sri Lankan cement block manufacturer with over 35 years of experience. The site serves as an informative and reliable platform for customers to explore Nafco’s products, services, and technical specifications. Built with HTML5, CSS, and WordPress, the platform ensures fast loading, mobile responsiveness, and easy content management.",
    challenges: [
      "Outdated company branding and limited online presence hindered market reach.",
      "Absence of a digital platform to effectively showcase products and technical specifications.",
      "Manual inquiry and order handling caused communication delays and inefficiencies.",
      "Low visibility of the project portfolio affected new customer acquisition.",
      "Lack of clear presentation of SLS certifications and quality assurances impacted trust-building.",
    ],
    solutions: [
      "Created a clean, professional website with easy navigation and a modern design.",
      "Clearly highlighted product dimensions, strength, material composition, and SLS certifications.",
      "Integrated inquiry forms and direct contact options for better customer engagement.",
      "Developed a “Projects” section to showcase past works and build client trust.",
      "Enhanced mobile responsiveness to ensure the site works smoothly on all devices.",
      "Boosted search visibility through basic on-page SEO and structured content",
    ],
  },
  {
    title: "Muswenna Tea",
    description:
      "A family owned tea manufacturer in Galle offering certified teas and factory tours.",
    image: tech_rw8,
    link: "https://muswennatea.com/",
    description2:
      "This website was built to showcase the identity of Muswenna Tea Factory, a family-owned  tea manufacturing company located in Galle, Sri Lanka. The platform provides a simple, informative, and welcoming space for customers and tourists to explore the brand, discover its certified tea products, and book factory tours. The site was developed with a clean layout, multilingual support, and mobile responsiveness to ensure easy access for local and international audiences.",
    challenges: [
      "Lack of digital presence for the small-scale, family-run tea factory limited market reach.",
      "Creating an online platform to showcase certifications and export capabilities was essential.",
      "Presenting clear and accessible factory visit details for tourists required careful planning.",
      "Increasing brand awareness beyond local markets remained a significant obstacle.",
      "Developing a digital showcase for various tea products such as black, white, green, and flavored was important for customer engagement.",
    ],
    solutions: [
      "Developed a clean, responsive website highlighting the factory’s heritage, product range, and certifications. ",
      "Showcased ISO 22000, HACCP, and GMP certifications to support local and international credibility.",
      "Provided a clear and engaging visitor experience section for tourists interested in factory tours and tastings Added contact details, location maps, and business hours to support easy communication.",
      "Improved branding and visibility for Muswenna Tea in both local and global markets.",
      "Helped convert the offline tea experience into an informative online story for tourists and wholesale buyers.",
    ],
  },
  {
    title: "The Kandy Club Management System",
    description:
      "A digital platform automating operations and member services for the historic Kandy Club.",
    image: tech_rw9,
    link: "",
    description2:
      "The Kandy Club Management System (KCMS) was developed as an all-in-one digital platform to modernize and automate the day-to-day operations of the historic Kandy Club a private social and hospitality club offering accommodation, dining, event hosting, and member services. Designed to streamline complex workflows, the system integrates administration, finance, hospitality, and inventory management into a unified platform, improving both staff productivity and member satisfaction. Built using a secure and scalable architecture, KCMS ensures centralized data access, role-based controls, and seamless real-time operations.",
    challenges: [
      "Fragmented members and booking records caused by manual data entry created data inconsistencies.",
      "Preventing double bookings due to spreadsheet-based scheduling was necessary to avoid conflicts.",
      "Inventory tracking for the bar and restaurant required improvement for better resource management.",
      "Manual billing errors needed reduction to ensure accurate revenue reporting.",
      "Delays in generating financial reports hindered timely decision-making.",
      "Communication gaps between departments and members affected operational efficiency.",
    ],
    solutions: [
      "Implemented a centralized member management system with search, billing, and notification features.",
      "Digitized room, hall, and boardroom bookings with a real-time calendar view to avoid conflicts.",
      "Introduced a complete restaurant and bar billing engine with KOT/BOT (Kitchen/Bar Order Ticket) systems.",
      "Developed a multi-inventory control module with low-stock alerts, expiry tracking, and fast-moving reports.",
      "Integrated accounting and finance modules (including ledgers, trial balances, recurring payments, and vendor sheets).",
      "Enabled role-based dashboards for admins, accountants, cashiers, and service staff.",
      "Deployed an event calendar and cost tracking system for better planning and operational insight.",
    ],
  },
  {
    title: "Chandula Nanayakkara Website",
    description:
      "A platform highlighting the journey and leadership work of Chandula Nanayakkara.",
    image: tech_rw10,
    link: "https://chandulananayakkara.com",
    description2:
      "This website was crafted to showcase the inspiring journey and impactful work of Chandula Nanayakkara a youth leader, mentor, author, and CEO of All in One Holdings. The site serves as a central platform for sharing his personal story, publications, leadership initiatives, and professional engagements. Built using WordPress with Element or, PHP, and JavaScript, the site offers a smooth and professional user experience across all devices.",
    challenges: [
      "Presenting a multifaceted personal brand covering biography, leadership, publications, and entrepreneurship in one cohesive digital space was difficult.",
      "Structuring rich content such as leadership training, community service, gallery, and book information into a clean, user-friendly layout required detailed planning.",
      "Designing the site to engage a wide audience, from students to corporate professionals and institutions, posed significant challenges.",
      "Establishing credibility through testimonials, achievements, and media presence was essential to build trust.",
      "Ensuring seamless navigation across diverse content types like Books, Gallery, Contact, About, and Services demanded careful attention.",
    ],
    solutions: [
      "Developed a clean and elegant homepage summarizing Chandula’s leadership philosophy, key roles, and offerings.",
      "Highlighted key content pillars: Biography, Gallery, Publications Testimonials, Contact with clear navigation. ",
      "Showcased leadership training experience, community initiatives along with professional accolades.",
      "Incorporated a testimonial section featuring endorsements from education and corporate leaders to build trust. ",
      "Added contact form, email address, and social links (Instagram, LinkedIn) for direct engagement.",
      "Structured content using modern responsive design to ensure readability on desktop and mobile. ",
    ],
  },
  {
    title: "Ministry of Indigenous Medicine",
    description:
      "The official platform promoting traditional healthcare services in Sri Lanka.",
    image: tech_rw11,
    link: "https://mim.gov.lk",
    description2:
      "This official website represents Sri Lanka’s Ministry of Indigenous Medicine, showcasing straditional healthcare services and policy information. Built using modern web standards  (HTML5, CSS, likely with a CMS backend), the site provides content in English, Sinhala, and  Tamil and is optimized for government use reflecting the ministry’s mission to promote  Ayurveda, Siddha, Unani, and Homeopathy across Sri Lanka.",
    challenges: [
      "Lack of a centralized digital platform for presenting traditional medical policies, services, and public education was a major obstacle.",
      "Ensuring multilingual content with consistent translation and readability across Sinhala, Tamil, and English was essential.",
      "Improving interactivity and user engagement for citizens seeking guidance or services was a key focus.",
      "Increasing visibility for events, announcements, and pharmaceutical research activities was important for community awareness.",
      "Addressing accessibility and navigation challenges for a diverse user base was critical.",
    ],
    solutions: [
      "Developed a clear, multilingual website interface supporting all three official languages to ensure broad public access.",
      "Structured content into defined sections: Introduction, History, Research, Teaching Hospitals, Circuit Bungalows, Events & News. ",
      "Integrated a News & Events feed for recent announcements.",
      "Ensured responsiveness and clean navigation to improve user journeys across devices.",
      "Elevated public trust by providing institutional background establishment history, ministerial leadership and official contact details.",
      "Facilitated transparency through consistent updates on events, programs, and ministry initiatives.",
      "Improved site accessibility in accordance with Sri Lanka’s e-Government policy and multilingual usability best practices.",
    ],
  },
  {
    title: "Lanka Travel Trails Website",
    description:
      "A travel platform for hiking, nature, and adventure experiences in Sri Lanka.",
    image: tech_rw12,
    link: "https://lankatraveltrails.com",
    description2:
      "This website was developed to support Lanka Travel Trails in offering unique and unforgettable nature, hiking, and adventure experiences across Sri Lanka. The platform  showcases various scenic destinations and trail packages, helping travelers easily explore,  inquire, and book their next journey. Built using WordPress, Element or, HTML5, CSS3, and  JavaScript, the site provides a modern, mobile-responsive, and user-friendly interface on all  devices.",
    challenges: [
      "Presenting a wide range of adventure and nature-based tours in an organized and visually appealing layout was a major challenge.",
      "Improving online discoverability and professionalism was essential to attract international and domestic tourists.",
      "Creating responsive experience for seamless browsing on desktop and mobile devices was a key focus.",
      "Enabling quick queries and easy access to detailed travel information was important for user convenience.",
      "Displaying multiple destinations without overwhelming users required careful design and planning.",
    ],
    solutions: [
      "Designed a clean and visually appealing layout that highlights top destinations like Ella, Sigiriya, Nuwara Eliya, and Jaffna.",
      "Organized tour offerings into clear sections for Day Tours, Hiking Trails, and Nature Adventures.",
      "Integrated interactive contact and inquiry forms for faster lead generation.",
      "Added visual storytelling elements (images, banners, trail maps) to enhance engagement.",
      "Developed the platform to be scalable for future blog updates, seasonal promotions, and itinerary expansions.",
    ],
  },
  {
    title: "Wasantha Withanage Personal Website",
    description: "Renowned Sri Lankan boxing coach and sports leader.",
    image: tech_rw13,
    link: "https://wasanthawithanage.com/",
    description2:
      "This site was crafted to present Wasantha Kumara Withanage, a renowned Sri Lankan boxing  coach, sports official, and community leader. It serves as a central platform highlighting his professional journey from national coaching roles and AIBA technical officiating to educational and leadership positions. Built with a clean, WordPress-powered CMS, the platform offers a straightforward and responsive browsing experience tailored to both domestic and international audiences.",
    challenges: [
      "Presenting multiple achievements across sports, academics, and community leadership in a coherent manner was difficult.",
      "Structuring extensive biographical details into an accessible layout required careful design.",
      "Demonstrating professional credibility to build trust posed a significant focus.",
      "Balancing informative content with engaging features like article access and contact forms was challenging.",
      "Enabling easy entry for inquiries, speaking engagements, or mentorship requests demanded user-friendly solutions.",
    ],
    solutions: [
      "Developed a lightweight, fast-loading frontend using React + Vite to reduce initial load time.",
      "Implemented Tailwind CSS for a consistent, elegant design system across all screen sizes. ",
      "Integrated high-quality imagery and modular tour sections to enhance visitor engagement.",
      "Enabled custom filtering and browsing of travel experiences based on categories and regions.",
      "Built a future-proof structure that allows easy content updates and service additions. ",
      "Created a smooth and trustworthy booking experience to convert more visitors into customers.",
    ],
  },
  {
    title: "Office One Sri Lanka website",
    description:
      "A platform showcasing premium co-working spaces in Colombo and Kandy.",
    image: tech_rw14,
    link: "https://officeone.lk",
    description2:
      "This website was crafted to showcase Office One, a premium co-working space provider with locations in Colombo and Kandy, Sri Lanka. The platform presents workspace packages  such as hot desks, single cabins, and meeting rooms alongside amenities and booking options. Built on a WordPress-powered CMS using HTML5, CSS3, JavaScript, and PHP, the  site delivers a clean, user-friendly, and mobile-responsive experience. It enables flexible  browsing and seamless inquiries via prominently placed contact forms and CTAs.",
    challenges: [
      "Clearly communicating the variety of hot desks, cabins, and conference rooms with prices and details.",
      "Building trust and professionalism by effectively showcasing amenities like high-speed internet, quality furniture, printing, cafe areas, and parking required careful presentation.",
      "Supporting two branches in Colombo and Kandy with their specific packages under one platform created complexity.",
      "Enabling easy lead capture and booking through contact forms and inquiry calls-to-action was essential for user engagement.",
      "Ensuring fast loading times and responsive display on both mobile and desktop devices was a challenge to provide a smooth user experience.",
    ],
    solutions: [
      "Designed a modern, clean homepage showcasing workspace types, branch options, and booking calls-to-action.",
      "Structured content into location-specific sections: Office One Colombo and Office One Kandy, each with dedicated packages and contact forms.",
      "Highlighted amenities and facilities:- collaboration zones, ergonomic desks, highspeed internet, print services, lounge/coffee areas, 24/7 security, and parking.",
      "Included a detailed FAQ section addressing startup suitability, parking availability, and package selection. ",
      "Integrated a gallery slider displaying workspace interiors (cabins, conference rooms, communal areas) for visual appeal.",
      "Embedded contact forms prominently for Kandy and Colombo branches to facilitate seamless inquiries.",
      "Ensured mobile optimization and performance through lightweight layouts and responsive design choices.",
    ],
  },
  {
    title: "Cafe Lavia Website",
    description:
      "A cozy couple-friendly café in Kandy offering coffee, brunch, and online orders.",
    image: dumy,
    link: "https://cafelavia.net/",
    description2:
      "This website was crafted to showcase Cafe Lavia, a cozy, couple-friendly café nestled in the heart of Kandy, Sri Lanka. The platform invites visitors to explore its curated menu of  specialty coffees, bagels, cakes, and brunch options, while offering seamless online  ordering via Uber Eats. Built with a visually appealing, lightweight design likely using  WordPress or a simple CMS powered by HTML, CSS, and JavaScript the site delivers a  responsive, user-friendly experience to both locals and tourists.",
    challenges: [
      "Effectively communicating the café’s elegant and intimate ambiance in a highly competitive local market.",
      "Presenting a diverse all-day menu including breakfast, sandwiches, pastries, and coffee in a clear, navigable format.",
      "Supporting online orders via Uber Eats while maintaining a clean, uncluttered main site experience.",
      "Building trust and credibility through customer reviews and testimonials from platforms like Tripadvisor.",
      "Ensuring full mobile responsiveness with easy access to contact and location details for customer convenience.",
    ],
    solutions: [
      "Developed a clean, inviting homepage that highlights charming café interiors, featured dishes, and ordering links.",
      "Organized content into logical sections: About Us, Menu, Order Online, and Contact for intuitive browsing. ",
      "Embedded Uber Eats ordering links and “Buy For Home” call-to-action buttons throughout to streamline delivery. ",
      "Showcased positive user reviews such as: “Great ambience. Great service. An exceptionally nice place to chill in Kandy.”, and Added visible contact info and hours, reinforcing reliability and accessibility.",
    ],
  },
  {
    title: "QuickBox Website",
    description:
      "A courier and logistics platform for reliable parcel delivery in Sri Lanka.",
    image: dumy,
    link: "https://quickbox.lk/",
    description2:
      "This website was developed to introduce QuickBox.lk, a professional courier and logistics brand in Sri Lanka focused on reliable parcel delivery services. The platform enables  customers to easily book delivery services, track parcels, and access essential courier  information through a modern, clean, and responsive interface. Built using HTML5, CSS3,  JavaScript, and likely powered by a PHP-based CMS like WordPress, the site ensures smooth  usability and cross-device compatibility.",
    challenges: [
      "Introducing a new courier service in a competitive logistics industry was a key challenge.",
      "Clearly explaining local, international, packaging, and tracking services was essential.",
      "Providing real-time parcel tracking and a fast, seamless booking experience required focus.",
      "Ensuring mobile-first performance while maintaining a rich content layout was important.",
      "Building brand trust through transparency, accessible contact options, and verified information was critical.",
    ],
    solutions: [
      "Designed a streamlined homepage focused on delivery booking, parcel tracking, and service information.",
      "Structured service categories into clear sections: Domestic Delivery, International Shipping, Tracking, and Packaging Solutions.",
      "Integrated an online booking form and parcel tracking widget for seamless user interaction.",
      "Built the platform with responsive design using modern CSS frameworks, ensuring optimal performance on all devices.",
      "Ensured fast load times by minimizing code bloat and optimizing assets.",
      "Laid a foundation for future features such as shipping rate comparisons, customer portals, or even app integration.",
    ],
  },
  {
    title: "Senior Cargo Website",
    description:
      "The official platform for the Marine Pilots Association of Sri Lanka.",
    image: dumy,
    link: "https://seniorcargo.com/",
    description2:
      "This website was designed for Senior Cargo, a Sri Lankan freight forwarder and logistics provider specializing in air, sea, and land cargo services across the island and  internationally. The platform helps customers book shipments, track consignments, and  explore service options via a clean, responsive, and user-friendly interface. Built using a  professional CMS such as WordPress with HTML5, CSS3, JavaScript, and backend support  from PHP/MySQL, the site ensures fast performance and cross-device accessibility.",
    challenges: [
      "Clearly explaining various service categories such as air freight, ocean freight, cargo consolidation, and customs clearance was complex.",
      "Enabling customers to book shipments and access tracking information online required seamless functionality.",
      "Building brand credibility in a competitive logistics and freight market demanded strategic focus.",
      "Presenting regulatory and documentation details in an easy-to-understand format was challenging.",
      "Ensuring responsive design for both desktop and mobile devices was critical for user accessibility and convenience.",
    ],

    solutions: [
      "Designed a structured layout featuring key services: Air Freight, Sea Freight, Warehousing, Customs Brokerage, and Courier Solutions. ",
      "Integrated simplified booking forms or inquiry modules for freight quote requests. ",
      "Created dedicated sections explaining process flows for example, import/export procedures and required documents. ",
      "Highlighted trust signals like regulatory affiliations, experienced staff, and service transparency.",
      "Optimized site performance and layout using modern CSS and mobile-first designs.",
      "Built scalability into content structure to support future features like online tracking systems or customer dashboards.",
    ],
  },
  {
    title: "Automobile Billing & Management System",
    description:
      "A digital platform for billing and service management in automotive repair.",
    image: dumy,
    link: "",
    description2:
      "This custom-built web platform was designed to digitalize and streamline the complete billing and service management process for Willis AutoCare, a local automotive repair  service provider. The system supports real-time job tracking, invoice generation, item  registration, and user management all within a secure and user-friendly environment. Built  using Laravel (PHP) for the backend, Tailwind CSS for responsive UI design, and MySQL as  the database, the solution replaces manual operations with digital precision.",
    challenges: [
      "Inefficient manual billing caused operational inefficiencies.",
      "Complex invoice structures from Willis Autocare’s legacy processes complicated system integration.",
      "Lack of a unified platform for job categories, parts, and pricing created data fragmentation.",
      "High reliance on paper documents such as handwritten invoices and quotes led to workflow delays.",
      "Standard system features did not meet specific client customization needs.",
      "Inconsistent formatting of multi-page invoices affected professionalism and readability.",
    ],
    solutions: [
      "Developed a category-based billing system to reduce redundancy and increase input speed.",
      "Integrated a quotation and supplementary quotation module for handling complex job estimates. ",
      "Implemented a searchable invoice and job history system using vehicle number, customer ID, or invoice ID. ",
      "Created dynamic PDF generation with page headers retained across pages, following client branding format.",
      "Built admin-level user management for adding/removing staff accounts securely. ",
      "Delivered a modern, fully responsive UI optimized for both desktop and tablet interfaces.",
      "Used Laravel’s modular architecture for easy future scalability, including upcoming payment gateway integration.",
    ],
  },
  {
    title: "MedOne - Patient Management System",
    description:
      "A digital platform for streamlined patient and healthcare management.",
    image: dumy,
    link: "",
    description2:
      "The MedOne platform was developed to modernize and streamline healthcare workflows by providing an all-in-one digital patient management solution. Designed specifically for hospitals, clinics, and private practices, the system enables healthcare professionals to efficiently manage patient records, investigations, prescriptions, and administrativedocumentation. Built using modern web technologies (PHP, MySQL, HTML5, CSS3) with a focus on clean UI/UX, MedOne offers a seamless experience for both doctors and administrative staff. ",
    challenges: [
      "Fragmented and paper-based systems slowed access to patient data.",
      "Manual data entry and physical record keeping caused errors and inefficiencies.",
      "Lack of a centralized platform for managing consultations, prescriptions, and medical notes hindered workflow.",
      "Absence of system-generated letters and digital communication limited staff efficiency.",
      "Ensuring secure access and scalable architecture to support facility growth was a critical need.",
    ],
    solutions: [
      "Developed a user-friendly dashboard displaying patient visits, checklists, and daily activity logs",
      "Introduced structured data entry modules for patient problems, investigations, prescriptions, and notes",
      "Built a letter generation system to help doctors produce official documents (e.g., referral letters, discharge summaries) efficiently",
      "Designed a scalable patient registration and search module with filters by ID, name, or history",
      "Implemented role-based user access for secure multi-user operations (admins, doctors, assistants)",
      "Ensured data security with encryption and authentication protocols to safeguard patient information",
      "Delivered a clean, responsive UI optimized for tablets, desktops, and medical office environments",
    ],
  },
  {
    title: "Go Ahead Lanka Tours Website",
    description:
      "A travel platform offering guided tours and easy booking across Sri Lanka.",
    image: dumy,
    link: "https://goaheadlankatours.com/",
    description2:
      "This website was built to elevate Go Ahead Lanka Tours, a Sri Lankan-based travel service offering guided tours across the island. The platform enables travelers to search, book, and  manage tour experiences with ease. Featuring responsive design, advanced filtering, and a  secure booking engine, the site was developed using PHP 8, HTML5, CSS3, JavaScript, and  MySQL for reliable performance and smooth user interaction.",
    challenges: [
      "Absence of a centralized online tour booking system tailored for Sri Lanka limited platform efficiency.",
      "Supporting group travel coordination and loyalty programs added complexity to system design.",
      "Lack of a mobile-friendly solution affected accessibility for booking and browsing tours.",
      "Insufficient advanced filtering options made it difficult for tourists to find relevant packages.",
      "Ensuring security in handling sensitive customer and payment data was a critical requirement.",
    ],
    solutions: [
      "Designed a clean, mobile-responsive interface accessible across all devices.",
      "Implemented a secure multi-option payment system including deposits and installments.",
      "Developed an advanced tour listing and filtering feature (by destination, travel style, price, etc.).",
      'Created the "Club Go" Loyalty Program, enabling user rewards and repeat engagement.',
      "Introduced a Group Coordinator feature to manage private and incentive-based bookings.",
      "Integrated SEO optimization and SSL encryption to enhance online visibility and user security.",
      "Delivered a user account system to track bookings, manage itineraries, and support reward tracking.",
    ],
  },
  {
    title: "Aluviharaya.lk Website",
    description:
      "A cultural and heritage platform showcasing the historic Aluviharaya Rock Cave Temple.",
    image: dumy,
    link: "https://www.aluviharaya.lk/",
    description2:
      "This website was developed to introduce Aluviharaya Rock Cave Temple, a historic Buddhist temple in Matale, Sri Lanka, known as the place where the Tripiṭaka was first written on ola leaves. The platform provides visitors and pilgrims with accurate cultural, historical, and travel-related information, while also promoting the temple as a national heritage site. With a clean, informative, and responsive design, the site ensures accessibility for both local and international audiences, helping them understand Aluviharaya’s religious and cultural significance.",
    challenges: [
      "Showcasing a centuries-old religious and cultural heritage site in a modern digital format.",
      "Explaining historical, archaeological, and religious details in a clear and engaging manner.",
      "Providing visitor guidance including location, visiting hours, dress code, and tour details effectively.",
      "Ensuring mobile-friendly accessibility for tourists relying on smartphones",
      "Building trust through verified information and authentic visuals.",
    ],
    solutions: [
      "Designed an informative homepage highlighting the temple’s history, cultural importance, and significance in Buddhist heritage.",
      "Structured content into clear sections: History, Visitor Information, Image Gallery, and Contact Details.",
      "Integrated a location map and travel guidance to help visitors plan their journey.",
      "Employed real photographs and cultural imagery to build authenticity and connect with users emotionally.",
      "Laid the foundation for future features such as virtual tours, multilingual support, and event updates.",
    ],
  },
  {
    title: "CCL Academy Website",
    description:
      "An educational platform, showcasing academic and professional courses.",
    image: dumy,
    link: "https://cclacademy.lk/",
    description2:
      "CCL Academy is a creative and professional education institution based in Kandy, Sri Lanka. It offers a variety of academic and industry-relevant courses through its faculties such as Design, Business, and other professional studies. The website serves as the primary portal for information about courses, admissions, contact details, and student engagement, ensuring accessibility and clarity for both local and international students.",
    challenges: [
      "Presenting a multifaceted personal brand covering biography, leadership, publications, and entrepreneurship in one cohesive digital space was difficult.",
      "Structuring rich content such as leadership training, community service, gallery, and book information into a clean, user-friendly layout required detailed planning.",
      "Designing the site to engage a wide audience, from students to corporate professionals and institutions, posed significant challenges.",
      "Establishing credibility through testimonials, achievements, and media presence was essential to build trust.",
      "Ensuring seamless navigation across diverse content types like Books, Gallery, Contact, About, and Services demanded careful attention.",
    ],
    solutions: [
      "Designed a homepage that highlights the main faculties: School of Design, School of Business, etc., so students can immediately see what disciplines are on offer.",
      "Provided contact information clearly to build trust and make inquiries easier.",
      "Made content visually engaging and easy to read, suitable for both design‐focused and business‐focused students.",
      "Ensured core information (courses, faculties, admissions) is upfront and minimal navigation is needed to reach them.",
    ],
  },
  {
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
  {
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
];

// Project type definition
type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  description2?: string;
  challenges?: string[];
  solutions?: string[];
};

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
          We’ve transformed ideas into impactful solutions, driving growth and
          innovation for our clients through creativity, technology, and
          unwavering commitment.
        </motion.p>
      </motion.div>

      {/* card sec */}
      <AnimatePresence mode="wait">
        <motion.div
          ref={cardSectionRef}
          key={currentPage}
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
                  <div className="absolute flex items-center justify-center bottom-0 left-0 w-full p-2 md:p-4 bg-white/20 backdrop-blur-md rounded-b-[20px] z-0">
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
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex-1 lg:flex-1/2 text-white flex flex-col justify-between text-left overflow-y-scroll mx-4 lg:mx-0 lg:pr-6">
                <div>
                  <h2 className="text-2xl md:text-[32px] leading-[41px] font-semibold mb-4">
                    {popupData.title}
                  </h2>
                  <p className="text-base md:text-lg font-light leading-6 md:leading-7 lg:leading-8 mb-4 text-justify">
                    {popupData.description2}
                  </p>

                  {popupData.challenges && (
                    <>
                      <h3 className="text-lg md:text-2xl leading-6 md:leading-7 lg:leading-8 font-semibold mt-10 mb-4">
                        Key Challenges We Solved
                      </h3>
                      <ul className="text-base md:text-lg font-light space-y-2">
                        {popupData.challenges.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ImCheckmark2
                              style={{ width: "18px", height: "18px" }}
                              className="text-white mt-1 shrink-0"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {popupData.solutions && (
                    <>
                      <h3 className="text-lg md:text-2xl leading-6 md:leading-7 lg:leading-8 font-semibold mt-10 mb-4">
                        Our Strategic Solutions & Achievements
                      </h3>
                      <ul className="text-base md:text-lg font-light space-y-2">
                        {popupData.solutions.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <LiaHandPointRightSolid
                              style={{ width: "18px", height: "18px" }}
                              className="text-white mt-1.5 shrink-0"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <div className="mt-6 text-secondary">
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
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RecentWork;
