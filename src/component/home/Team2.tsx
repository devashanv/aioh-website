import { Link } from "react-router-dom";

import TeamSample from "../../assets/img/team.png";
import ExploreIcon from "../../assets/img/icons/project-explore.svg";

const Team = () => {
  return (
    <>
      <section className="w-11/12 mx-auto h-full flex flex-col lg:flex-row gap-10">
        <section className="w-full lg:w-1/2 text-center lg:text-left flex flex-col ">
          <p className="text-black text-[32px] md:text-[48px] lg:text-[52px] font-medium lg:leading-15 leading-12">
            We Don't Build the "Best" Solutions, We Build Profitable Ones
          </p>

          <p className="text-[18px] font-light text-justify mt-5 leading-8">
            Anyone can throw technology at a problem. ChatGPT can suggest the
            "best" solution in seconds. But here's what makes us different:
            we're not chasing perfection. We're chasing results. As experienced
            builders, we dig deep into your actual challenges. We analyze where
            you are, where you want to be, and what's realistic in between. Then
            we chart a clear, step-by-step path to get you there - one that fits
            your budget, your timeline, and your business realities.
          </p>

          <Link to="/Technology">
            <button className="bg-primary w-auto h-auto rounded-full hover:cursor-pointer hover:bg-primary/85 flex justify-center items-center py-2 px-4 mt-10">
              Let's Connect
              <img src={ExploreIcon} alt="" className="w-8 h-8" />
            </button>
          </Link>
        </section>
        <section className="w-full lg:w-1/2">
          <img src={TeamSample} alt="" className="h-full w-full" />
        </section>
      </section>
    </>
  );
};

export default Team;
