import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Marketing from "./pages/Marketing";
import WebService from "./pages/technology/WebService";
import AboutUs from "./pages/AboutUs";
import Technology from "./pages/Technology";
import Design from "./pages/Design";
import ConsultationBooking from "./pages/ConsultationBooking";
import DigitalDetails from "./pages/marketing/DigitalDetails";
import BrandDetails from "./pages/design/BrandDetails";
import OptimizationDetails from "./pages/marketing/OptimizationDetails";
import AdvertisingDetails from "./pages/marketing/AdvertisingDetails";
import MarketingDetails from "./pages/marketing/MarketingDetails";
import ManagementDetails from "./pages/marketing/ManagementDetails";
import PackagingDetails from "./pages/design/PackagingDetails";
import CreativeDetails from "./pages/design/CreativeDetails";
import PhotographyDetails from "./pages/design/PhotographyDetails";
import PromotionalDetails from "./pages/design/PromotionalDetails";
import SystemService from "./pages/technology/SystemService";
import MobileService from "./pages/technology/MobileService";
import SEOService from "./pages/marketing/SEOService";
import UIUXDetails from "./pages/design/UIUXDetails";
import AISolutions from "./pages/technology/AISolutionsService";
import StandaloneService from "./pages/technology/StandaloneSysDevService";
import TestAutomationService from "./pages/technology/TestAutomationService";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Marketing" element={<Marketing />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/Design" element={<Design />} />
        <Route path="/Aboutus" element={<AboutUs />} />
        <Route path="/consultation" element={<ConsultationBooking />} />

        {/* Marketing Service Details Pages */}
        <Route
          path="/marketing/digital-strategy"
          element={<DigitalDetails />}
        />
        <Route
          path="/marketing/social-media-advertising"
          element={<AdvertisingDetails />}
        />
        <Route
          path="/marketing/social-media-management"
          element={<ManagementDetails />}
        />
        <Route
          path="/marketing/conversion-rate-optimization"
          element={<OptimizationDetails />}
        />
        <Route
          path="/marketing/content-marketing"
          element={<MarketingDetails />}
        />
        <Route
          path="/marketing/search-engine-optimization"
          element={<SEOService />}
        />

        {/* Design Service Details Pages */}
        <Route
          path="/design/brand-identity-development"
          element={<BrandDetails />}
        />
        <Route path="/design/packaging-design" element={<PackagingDetails />} />
        <Route
          path="/design/promotional-material-design"
          element={<PromotionalDetails />}
        />
        <Route path="/design/creative-content" element={<CreativeDetails />} />
        <Route
          path="/design/photography-and-videography"
          element={<PhotographyDetails />}
        />
        <Route path="/design/ui-ux-design" element={<UIUXDetails />} />

        {/* Techonology Service Details Pages */}
        <Route path="/technology/WebService" element={<WebService />} />
        <Route path="/technology/MobileService" element={<MobileService />} />
        <Route path="/technology/SEOService" element={<SEOService />} />
        <Route path="/technology/SystemService" element={<SystemService />} />
        <Route path="/technology/AIService" element={<AISolutions />} />
        <Route
          path="/technology/StandaloneSysDevService"
          element={<StandaloneService />}
        />
        <Route
          path="/technology/TestAutomationService"
          element={<TestAutomationService />}
        />
      </Routes>
    </Router>
  );
}

export default App;
