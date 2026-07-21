import React from 'react';
import Link from 'next/link';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { Project } from '@/service/projects';

interface ProjectNavigationProps {
  prev: Project | null;
  next: Project | null;
  onNavigate?: (slug: string) => void;
}

function NavItem({
  project,
  direction,
  onNavigate,
}: {
  project: Project;
  direction: 'prev' | 'next';
  onNavigate?: (slug: string) => void;
}) {
  const isPrev = direction === 'prev';
  const className = `group flex flex-col gap-1 p-4 rounded-lg border border-gray-200 hover:border-teal-300 transition-colors ${
    !isPrev ? 'sm:text-right sm:items-end' : ''
  }`;

  const content = (
    <>
      <span
        className={`flex items-center gap-1 text-xs text-gray-400 ${
          !isPrev ? 'sm:flex-row-reverse' : ''
        }`}
      >
        {isPrev ? (
          <>
            <BsArrowLeft />
            이전 프로젝트
          </>
        ) : (
          <>
            다음 프로젝트
            <BsArrowRight />
          </>
        )}
      </span>
      <span className="text-sm font-semibold text-gray-800 group-hover:text-teal-700 line-clamp-2">
        {project.title}
      </span>
    </>
  );

  if (onNavigate) {
    return (
      <button type="button" onClick={() => onNavigate(project.path)} className={className}>
        {content}
      </button>
    );
  }

  return (
    <Link href={`/projects/${project.path}`} className={className}>
      {content}
    </Link>
  );
}

export default function ProjectNavigation({
  prev,
  next,
  onNavigate,
}: ProjectNavigationProps) {
  if (!prev && !next) return null;

  return (
    <nav className="no-print mt-12 pt-8 border-t border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {prev ? (
          <NavItem project={prev} direction="prev" onNavigate={onNavigate} />
        ) : (
          <div />
        )}
        {next ? (
          <NavItem project={next} direction="next" onNavigate={onNavigate} />
        ) : (
          <div />
        )}
      </div>

      <div className="text-center">
        {onNavigate ? (
          <button
            type="button"
            onClick={() => onNavigate('')}
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-900"
          >
            전체 프로젝트 보기
          </button>
        ) : (
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-900"
          >
            전체 프로젝트 보기
          </Link>
        )}
      </div>
    </nav>
  );
}
