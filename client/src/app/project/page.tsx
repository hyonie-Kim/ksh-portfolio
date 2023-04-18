import SelectProject from "@/components/Project/SelectProject";
import ProjectsSection from "@/components/ProjectsSection";
import { getAllProject } from "@/service/projects";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "All Project",
  description: "지금까지 만든 프로젝트 페이지를 소개합니다.",
};
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
