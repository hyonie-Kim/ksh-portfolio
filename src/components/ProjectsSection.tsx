import React from 'react';
import {
  Project,
  getAllProject,
  getVisibleProjects,
} from '@/service/projects';
import { getAllProjectDetails } from '@/data/projects/index';
import ProjectsGallery from './ProjectsGallery';

export default async function ProjectsSection() {
  const projects = await getAllProject();
  const filteredProjects = getVisibleProjects(projects);
  const details = getAllProjectDetails();

  return (
    <section
      id="projects"
      className="scroll-mt-28 px-4 sm:px-6 md:mx-auto max-w-3xl md:max-w-7xl pb-20"
    >
      <h1 className="text-center font-bold text-3xl">
        프로젝트
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <ProjectsGallery projects={filteredProjects} details={details} />
    </section>
  );
}
