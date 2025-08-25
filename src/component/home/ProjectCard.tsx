import React from "react";
import { Link } from "react-router-dom";

import type { Project } from "../../data/projects";


type cardProps = {
  project: Project;
}

const ProjectCard: React.FC<cardProps> = ({ project }) => {
  return (
    <>
      <Link
        to={project.link}
        className="group block relative"
        aria-label={project.title}
      >
        {/* Outer soft shell */}
        <div className="rounded-2xl bg-slate-800/80 ring-1 ring-white/10 shadow-xl p-2">
          {/* Inner frame */}
          <div className="rounded-xl bg-slate-700/60 ring-1 ring-white/10 overflow-hidden shadow">
            <img
              src={project.image}
              alt={project.title}
              className="h-36 w-56 object-cover select-none pointer-events-none"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>

        {/* Tiny arrow button (purely decorative) */}
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-700 ring-1 ring-white/10 text-slate-300 text-xs group-hover:bg-slate-600">
          ↗
        </span>
      </Link>

    </>
  )
};

export default ProjectCard
