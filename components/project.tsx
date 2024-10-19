import React from "react";
import ProjectCard from "../components/projectCards";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-18"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 ">
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
          src="/to-do.png"
          title="To-do List"
          description="Built a to-do list application using HTML, CSS, and JavaScript, featuring task addition, editing, and deletion with persistent data storage for seamless task management."
        />
      
        <ProjectCard
          src="/calculator.png"
          title="Calculator"
          description="Developed a responsive calculator using HTML, CSS, and JavaScript, providing basic arithmetic operations with a user-friendly interface and real-time input validation for a smooth experience."
        />
          <ProjectCard
          src="/CLI-IMAGE.png"
          title="CLI Atm Machine"
          description="Developed a CLI-based ATM machine using TypeScript, providing core banking functionalities such as balance inquiries, withdrawals, and secure PIN authentication. "
        />
        <ProjectCard
          src="/form.png"
          title="Sign u"
          description="Built a to-do list application using HTML, CSS, and JavaScript, featuring task addition, editing, and deletion with persistent data storage for seamless task management."
        />
      </div>
    </div>
  );
};

export default Projects;