import React from "react";
import { getAllProject } from "@/service/projects";

export default async function ProjectsSection() {
  const projects = await getAllProject();
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-3xl">
        projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28">{}</div>
    </section>
  );
}
