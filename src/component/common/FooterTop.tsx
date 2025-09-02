import FooterLine from "../../assets/img/logo/linefoot.svg";

const FooterTop: React.FC = () => {
  const gradient = "linear-gradient(90deg, #0B385A, #02EC97, #05BBB7)";
  return (
    <>
      <div className="text-center text-[48px] font-semibold">
        Need A Boost For Your Business?
      </div>
      <div className="text-center text-[18px] text-[#191818] font-light mt-1">
        Lets Connect With Us
      </div>
      <div className="relative flex flex-col items-center">
        <button
          className="lg:inline-block px-5 py-3 rounded-[30px] text-white whitespace-nowrap cursor-pointer mt-4 z-10"
          style={{ background: gradient }}
          onClick={() => (window.location.href = "/contact")}
        >
          Connect Now
        </button>

        {/* Footer Line image */}
        <img
          src={FooterLine}
          alt="line"
          className="hidden md:block absolute top-[-6px] left-1/2 transform translate-x-5"
        />
      </div>
    </>
  );
};

export default FooterTop;
