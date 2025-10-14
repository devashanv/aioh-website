import { Link } from "react-router-dom";

import TeamSample from "../../assets/img/team.png";
import ExploreIcon from "../../assets/img/icons/project-explore.svg";

const Team = () => {
  return (
    <>
      <section className="w-11/12 mx-auto h-full flex flex-col lg:flex-row gap-10">
        <section className="w-full lg:w-1/2">
          <img src={TeamSample} alt="" className="h-full w-full object-cover" />
        </section>

        <section className="w-full lg:w-1/2 text-center lg:text-left flex flex-col ">
          <p className="text-black text-[32px] md:text-[48px] lg:text-[52px] font-medium lg:leading-15 leading-12">
            Whether you’re in Dubai, Brisbane, Texas, or Kandy.
          </p>

          <p className="text-[18px] font-light text-justify mt-5 leading-8">
            When we say we’re global, we mean it. Doesn’t matter where you are;
            we build your brand, expand your footprint, and understand the quick
            wins as well as the longer-term plan. Our offerings have been
            designed to cater to both those starting from the very beginning and
            the more experienced brands looking for new ways to grow their
            business.
          </p>

          <Link to="/Marketing">
            <button className="bg-primary w-auto h-auto rounded-full hover:cursor-pointer hover:bg-primary/85 flex justify-center items-center py-2 px-4 mt-10">
              Let's Connect
              <img src={ExploreIcon} alt="" className="w-8 h-8" />
            </button>
          </Link>
        </section>
      </section>
    </>
  );
};

export default Team;
