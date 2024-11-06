import React from "react";
import ProjectCard from "../components/projectCards";


const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pt-7 pb-[5rem]" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 ">
        <a
          href={"https://charity-website-virid.vercel.app/"} target="_blank" className="z-20">
          <ProjectCard
            src="/charity.png"
            title="Charity Website"
            description="Built a responsive charity website using Next.js and Tailwind CSS, optimizing performance and SEO.enhancing user experience and performance. "
          />
        </a>
        <a
          href={"https://milestone-4-steel.vercel.app/"} target="_blank" className="z-20">
          <ProjectCard
            src="/resume-builder.png"
            title="Resume Builder"
            description="Developed a dynamic resume builder using HTML, CSS, and TypeScript, enabling real-time content updates and customizable templates for an intuitive user experience."
          />
        </a>
        <a
          href={"https://maryamjami1.github.io/todo-app/"} target="_blank" className="z-20">
          <ProjectCard
            src="/to-do.png"
            title="To-do List"
            description="Built a to-do list application using HTML, CSS, and JavaScript, featuring task addition, editing, and deletion with persistent data storage for seamless task management."
          />
        </a>
        <a
          href={"https://maryamjami1.github.io/local-storage-form/"} target="_blank" className="z-20">
          <ProjectCard
            src="/form.png"
            title="Sign up form"
            description="Created a responsive sign-up form using HTML, CSS, and JavaScript, featuring real-time form validation, error handling, and user-friendly interface to ensure a seamless registration process."
          />
        </a>

        <a
          href={"https://technology-website-next-js.vercel.app/"} target="_blank" className="z-20">
          <ProjectCard
            src="/technology.png"
            title="Technology Website"
            description="Built a responsive technology website using Next.js and Custom CSS, optimizing performance and SEO.enhancing user experience and performance and fully responsive "
          />
        </a>

        <ProjectCard
          src="/CLI-IMAGE.png"
          title="CLI Atm Machine"
          description="Developed a CLI-based ATM machine using TypeScript, providing core banking functionalities such as balance inquiries, withdrawals, and secure PIN authentication.(npm i m6j5_cli_atm_machine) "
        />

        

      </div>
    </div>
  );
};

export default Projects;