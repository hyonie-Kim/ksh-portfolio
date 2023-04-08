"use client";
import { Project } from "@/service/project";
import React, { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import ProjectList from "./ProjectList";
type Props = {
  projects: Project[];
  projectList: string[];
};
const ALL_PROJECTS = "All Project";
export default function SelectProject({ projects, projectList }: Props) {
  const [selected, setSelected] = useState(ALL_PROJECTS);
  const [filtered, setFiltered] = useState<Project[]>(projects);
  const selectProject = (select: string) => {
    const filter =
      select === ALL_PROJECTS
        ? projects
        : projects.filter((project) => project.title === select);
    setFiltered(filter);
    setSelected(select);
  };

  return (
    <section className="flex m-4">
      <ProjectGrid projects={filtered} />
      <ProjectList
        projectList={[ALL_PROJECTS, ...projectList]}
        selected={selected}
        onClick={selectProject}
      />
    </section>
  );
}
