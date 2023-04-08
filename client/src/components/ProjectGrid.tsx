import { Project } from "@/service/project";
import React from "react";
import ProjectCard from "./ProjectCard";

type Props = { projects: Project[] };
export default function ProjectGrid({ projects }: Props) {
  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {projects.map((project) => (
        <li key={project.title}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
