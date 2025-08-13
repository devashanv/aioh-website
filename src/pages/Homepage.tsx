import Footer from "../component/common/Footer";
import HeroSection from "../component/home/HeroSection";

function Homepage() {
  return (
    <div className="min-h-screen bg-gray-50 text-center overflow-x-hidden">
      {/* Header */}
      <div className="mx-auto mb-3.5 p-3.5">
        <HeroSection />
      </div>

      <section>

      </section>

    
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Homepage;
