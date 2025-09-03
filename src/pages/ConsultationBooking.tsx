/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import Header from "../component/common/Header";
import { useLocation } from "react-router-dom";
import Footer from "../component/common/Footer";
import FooterTop from "../component/common/FooterTop";

const ConsultationBooking: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="m-3.5">
        <div className="mx-auto mb-10 w-full">
          <Header currentPath={location.pathname} />
        </div>
        <section className="bg-white rounded-[20px] mb-30">
          <div className="flex lg:hidden items-center justify-center mx-auto py-6 mb-2">
            <h1 className="text-[26px] md:text-3xl lg:text-5xl lg:leading-[62px] font-bold">
              Book a <span className="text-primary"> Consultation </span>
            </h1>
          </div>
          <div className="lg:flex flex-col md:flex-row justify-center items-start gap-20 w-11/12 mx-auto">
            <div className="flex-1 flex justify-center">
              <div
                className="calendly-inline-widget min-w-[320px] w-full max-w-2xl h-screen lg:h-[85dvh]"
                data-url="https://calendly.com/pmbandara408/30min?hide_event_type_details=1&hide_gdpr_banner=1&text_color=191818&primary_color=01213a"
              ></div>
              <script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
                async
              ></script>
            </div>
            <div className="md:w-1/2 hidden lg:flex flex-col justify-center py-6">
              <h1 className="text-[26px] md:text-3xl lg:text-5xl lg:leading-[62px] font-bold">
                Book a <span className="text-primary"> Consultation </span>
              </h1>
              <p className="mt-4 text-base lg:text-xl leading-7 lg:leading-8 font-light text-justify">
                Schedule a one-on-one session with our experts to discuss your
                business needs, project ideas, or digital strategy. We’ll help
                you find the best solutions for your goals no obligation, just
                value!
              </p>

              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-2">
                  How to Book a Meeting
                </h2>
                <ol className="list-decimal pl-5 text-base lg:text-lg leading-7 font-light space-y-3">
                  <li>
                    Select your preferred date and time from the calendar on the
                    right.
                  </li>
                  <li>
                    Enter your name, email, and any details or questions you
                    have.
                  </li>
                  <li>
                    Click <span className="font-medium">"Schedule Event"</span>{" "}
                    to confirm your booking.
                  </li>
                  <li>
                    You’ll receive a confirmation email with the meeting link
                    and details.
                  </li>
                  <li>
                    Join the meeting at your scheduled time using the provided
                    link.
                  </li>
                </ol>
                <div className="text-sm text-ternary font-light mt-4">
                  If you have any issues booking, please contact us directly.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Before Footer */}
      <div>
        <FooterTop />
      </div>
      {/* Footer */}
      <section className="lg:mt-50">
        <Footer />
      </section>
    </>
  );
};

export default ConsultationBooking;
