import React from 'react';
import Image from 'next/image';
import { ProjectDetail, PROJECT_TYPE_LABEL } from '@/types/project';
import { getProjectBadgeClass } from '@/lib/project-display';

interface ProjectHeroProps {
  project: ProjectDetail;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const typeLabel = PROJECT_TYPE_LABEL[project.type];
  const heroImage = project.heroImage ?? project.thumbnail;

  return (
    <header className="project-hero print-avoid-break mb-10">
      <span
        className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold border mb-3 ${getProjectBadgeClass(typeLabel)}`}
      >
        {typeLabel}
      </span>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
        {project.title}
      </h1>

      {project.subtitle && (
        <p className="text-lg text-gray-500 mb-4">{project.subtitle}</p>
      )}

      <p className="text-gray-600 leading-relaxed mb-4">{project.summary}</p>

      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mb-6">
        <span>{project.period}</span>
        {project.company && (
          <>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span>{project.company}</span>
          </>
        )}
      </div>

      <p className="text-sm font-medium text-gray-700 mb-8 whitespace-pre-line">
        {project.role}
      </p>

      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
        <Image
          src={heroImage}
          alt={`${project.title} 대표 이미지`}
          fill
          priority
          className="object-contain p-2"
          sizes="(max-width: 1024px) 100vw, 896px"
        />
      </div>
    </header>
  );
}
