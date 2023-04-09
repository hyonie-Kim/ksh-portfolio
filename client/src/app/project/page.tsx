import SelectProject from "@/components/Project/SelectProject";
import { getAllProject } from "@/service/projects";
import React from "react";

export default async function ProjectPage() {
  const projects = await getAllProject();
  const projectList = projects.map((project) => project.title);
  return (
    <SelectProject
      projects={projects}
      projectList={projectList}
    ></SelectProject>
  );
}
