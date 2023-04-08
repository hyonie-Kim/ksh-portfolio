import React from "react";
import ProjectGrid from "./ProjectGrid";
import { getAllProject } from "@/service/project";

export default async function MainProject() {
  const projects = await getAllProject();
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">MainProject</h2>
      <ProjectGrid projects={projects} />
    </section>
  );
}
