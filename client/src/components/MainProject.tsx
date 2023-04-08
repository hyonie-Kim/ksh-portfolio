import React from "react";
import ProjectGrid from "./ProjectGrid";
import { getAllProject } from "@/service/project";

export default async function MainProject() {
  const projects = await getAllProject();
  return (
    <section>
      <h2>MainProject</h2>
      <ProjectGrid projects={projects} />
    </section>
  );
}
