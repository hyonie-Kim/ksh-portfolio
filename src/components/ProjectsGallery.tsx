'use client';

import React, { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import { Project } from '@/service/projects';
import { ProjectDetail } from '@/types/project';
import { getProjectBadge, getProjectThumbnail, getProjectYear, getProjectBadgeClass } from '@/lib/project-display';
import SlideUp from './SlideUp';
import ProjectDetailModal from './project-detail/ProjectDetailModal';

interface ProjectsGalleryProps {
  projects: Project[];
  details: Record<string, ProjectDetail>;
}

function Badge({ label }: { label: string }) {
  return (
    <span
      className={`absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md text-xs font-semibold border ${getProjectBadgeClass(label)}`}
    >
      {label}
    </span>
  );
}

export default function ProjectsGallery({ projects, details }: ProjectsGalleryProps) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const selectedDetail = selectedSlug ? details[selectedSlug] ?? null : null;
  const selectedListProject = selectedSlug
    ? projects.find((p) => p.path === selectedSlug) ?? null
    : null;

  const adjacent = useMemo(() => {
    if (!selectedSlug) return { prev: null, next: null };
    const index = projects.findIndex((p) => p.path === selectedSlug);
    if (index === -1) return { prev: null, next: null };
    return {
      prev: index > 0 ? projects[index - 1] : null,
      next: index < projects.length - 1 ? projects[index + 1] : null,
    };
  }, [selectedSlug, projects]);

  const handleOpen = useCallback((slug: string) => {
    setSelectedSlug(slug);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedSlug(null);
  }, []);

  const handleNavigate = useCallback((slug: string) => {
    if (!slug) {
      handleClose();
      return;
    }
    setSelectedSlug(slug);
  }, [handleClose]);

  return (
    <>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => {
          const badge = getProjectBadge(project);
          const thumbnail = getProjectThumbnail(project);
          const year = getProjectYear(project.date);
          const techPreview = project.category.slice(0, 3).join(' · ');

          return (
            <SlideUp key={project.path} offset="-100px 0px -100px 0px">
              <button
                type="button"
                onClick={() => handleOpen(project.path)}
                className="group block w-full h-full text-left bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-lg hover:border-teal-300 transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Badge label={badge} />
                  <Image
                    src={thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="p-4 md:p-5">
                  {project.cardLabel && (
                    <p className="text-xs text-gray-400 mb-1 tracking-wide">
                      {project.cardLabel}
                    </p>
                  )}
                  <h2 className="text-base md:text-lg font-bold text-gray-800 line-clamp-2 mb-2 group-hover:text-teal-700 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-500 line-clamp-1 mb-2">
                    {techPreview}
                  </p>
                  <p className="text-xs font-medium text-gray-400">{year}</p>
                </div>
              </button>
            </SlideUp>
          );
        })}
      </div>

      <ProjectDetailModal
        project={selectedDetail}
        listProject={selectedListProject}
        adjacent={adjacent}
        onClose={handleClose}
        onNavigate={handleNavigate}
      />
    </>
  );
}
