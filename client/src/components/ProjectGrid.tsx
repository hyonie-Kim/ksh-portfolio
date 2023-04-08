import { Project } from "@/service/project";
import React from "react";

type Props = { projects: Project[] };
export default function ProjectGrid({ projects }: Props) {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.path}>{project.title}</li>
      ))}
    </ul>
  );
}
