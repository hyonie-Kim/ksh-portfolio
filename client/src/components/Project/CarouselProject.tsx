import React from "react";
import ProjectCard from "./ProjectCard";
import { getAllProject } from "@/service/projects";
import MultiCarousel from "./MultiCarousel";

export default async function CarouselProject() {
  const projects = await getAllProject();
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold my-4">📝 Project</h2>
      <MultiCarousel>
        {projects.map((project) => (
          <ProjectCard key={project.path} project={project} />
        ))}
      </MultiCarousel>
    </section>
  );
}
