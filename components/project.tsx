import React from "react";
import ProjectCard from "../components/projectCards";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/charity.png"
          title="Charity Website"
          description="Built a responsive charity website using Next.js and Tailwind CSS, optimizing performance and SEO.enhancing user experience and performance. "
        />
        <ProjectCard
          src="/resume-builder.png"
          title="Resume Builder"
          description="Developed a dynamic resume builder using HTML, CSS, and TypeScript, enabling real-time content updates and customizable templates for an intuitive user experience."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Projects;