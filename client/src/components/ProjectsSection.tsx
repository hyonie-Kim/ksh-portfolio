import React from "react";
import { getAllProject } from "@/service/projects";
import Image from "next/image";

export default async function ProjectsSection() {
  const projects = await getAllProject();

  return (
    <section id="projects">
      <h1 className="text-center font-bold text-3xl">
        projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="md:w-1/2">
                  <Image
                    className="rounded-xl shadow-xl hover:opacity-70"
                    src={`/images/projects/${project.path}.png`}
                    alt={project.path}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="md:1/2">
                  <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
