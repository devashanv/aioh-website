import FooterLine from "../../assets/img/logo/linefoot.svg";
import Spline from "@splinetool/react-spline";

const FooterTop: React.FC = () => {
  const gradient = "linear-gradient(90deg, #0B385A, #02EC97, #05BBB7)";
  return (
    <>
      <div className="relative p-3">
        {/* Content + button */}
        <div className="relative text-center text-2xl lg:text-[40px] font-semibold z-50">
          <p>Have a Project for Us? Or don’t know where to start?</p>
          <p className="text-center text-[18px] lg:text-[24px] text-[#191818] font-light mt-1">
            Talk to our expert today.
          </p>

          <button
            className="lg:inline-block px-5 py-2 lg:py-3 text-lg font-normal rounded-[30px] text-white whitespace-nowrap cursor-pointer mt-4"
            style={{ background: gradient }}
            onClick={() => (window.location.href = "/contact")}
          >
            Schedule a Call 
          </button>

          {/* robo */}
          <div
            className="z-40 absolute -top-10 right-0 pointer-events-none lg:block hidden"
            style={{
              width: "clamp(200px, 15vw, 300px)",
              height: "clamp(200px, 15vw, 300px)",
            }}
          >
            <div className="w-full h-full">
              <Spline scene="https://prod.spline.design/Bsk3y3-ep8BPJiwJ/scene.splinecode" />
            </div>
          </div>
        </div>

        {/* Footer Line image (unchanged style, just z fixed) */}
        <div className="flex z-10 absolute items-center justify-center bottom-10 right-0 w-1/2">
          <div className="relative flex w-full pr-25">
            <img
              src={FooterLine}
              alt="line"
              className="hidden lg:block w-full px-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTop;
