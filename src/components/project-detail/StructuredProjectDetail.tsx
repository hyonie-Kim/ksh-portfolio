import React from 'react';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';
import { ProjectDetail } from '@/types/project';
import { Project } from '@/service/projects';
import ProjectDetailBody from './ProjectDetailBody';

interface StructuredProjectDetailProps {
  project: ProjectDetail;
  adjacent: {
    prev: Project | null;
    next: Project | null;
  };
}

export default function StructuredProjectDetail({
  project,
  adjacent,
}: StructuredProjectDetailProps) {
  return (
    <article className="mx-auto px-4 sm:px-6 max-w-[1280px] pt-24 pb-20">
      <Link
        href="/#projects"
        className="no-print inline-flex items-center gap-2 text-sm text-gray-500 hover:text-teal-700 mb-8 transition-colors"
      >
        <BsArrowLeft />
        프로젝트 목록으로
      </Link>

      <ProjectDetailBody project={project} adjacent={adjacent} variant="page" />
    </article>
  );
}
