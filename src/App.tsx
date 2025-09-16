import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Marketing from "./pages/Marketing";
import WebService from "./pages/WebService";
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

        {/* Design Service Details Pages */}
        <Route
          path="/design/brand-identity-development"
          element={<BrandDetails />}
        />
        <Route path="/design/packaging-design" element={<BrandDetails />} />
        <Route
          path="/design/promotional-material-design"
          element={<BrandDetails />}
        />
        <Route path="/design/creative-content" element={<BrandDetails />} />
        <Route
          path="/design/photography-and-videography"
          element={<BrandDetails />}
        />

        <Route path="/technology/WebService" element={<WebService />} />
      </Routes>
    </Router>
  );
}

export default App;
