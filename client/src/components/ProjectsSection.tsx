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
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <Image
                    className="rounded-xl "
                    src={`/images/projects/${project.path}.png`}
                    alt={project.path}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
