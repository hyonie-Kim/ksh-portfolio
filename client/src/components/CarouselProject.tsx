import React from "react";
import ProjectCard from "./ProjectCard";
import MultiCarousel from "./MultiCarousel";
import { getAllProject } from "@/service/projects";

export default async function CarouselProject() {
  const projects = await getAllProject();
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold">CarouselProject</h2>
      <MultiCarousel>
        {projects.map((project) => (
          <ProjectCard key={project.path} project={project} />
        ))}
      </MultiCarousel>
    </section>
  );
}
