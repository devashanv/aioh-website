import FooterLine from "../../assets/img/logo/linefoot.svg";
import Spline from "@splinetool/react-spline";

const FooterTop: React.FC = () => {
  const gradient = "linear-gradient(90deg, #0B385A, #02EC97, #05BBB7)";
  return (
    <>
      <div className="relative p-3">
        <div className="relative text-center text-[48px] font-semibold">
          <p>Need A Boost For Your Business?</p>
          <p className="text-center text-[18px] text-[#191818] font-light mt-1"> Lets Connect With Us</p>

          <button
            className="lg:inline-block px-5 py-3 text-lg font-normal py-0 rounded-[30px] text-white whitespace-nowrap cursor-pointer mt-4 z-40"
            style={{ background: gradient }}
            onClick={() => (window.location.href = "/contact")}
          >
            Connect Now
          </button>

          {/* robo */}
          <div
            className="z-40 absolute -top-10 right-0 pointer-events-none"
            style={{
              width: "clamp(200px, 15vw, 300px)",
              height: "clamp(200px, 15vw, 300px)",
            }}>
            <div className="w-full h-full">
              <Spline scene="https://prod.spline.design/Bsk3y3-ep8BPJiwJ/scene.splinecode" />
            </div>
          </div>
        </div>

        <div className="flex z-10 absolute items-center justify-center bottom-10 right-0 w-1/2">
          <div className="relative flex w-full pr-25 z-0">
            {/* Footer Line image */}
            <img
              src={FooterLine}
              alt="line"
              className="hidden md:block w-full px-5 -z-1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTop;
