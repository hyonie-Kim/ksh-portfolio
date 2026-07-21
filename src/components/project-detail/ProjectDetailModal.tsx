'use client';

import React, { useCallback, useEffect } from 'react';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import { ProjectDetail } from '@/types/project';
import { Project } from '@/service/projects';
import ProjectDetailBody from './ProjectDetailBody';

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  listProject: Project | null;
  adjacent: { prev: Project | null; next: Project | null };
  onClose: () => void;
  onNavigate: (slug: string) => void;
}

function LegacyModalPreview({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const hasLive = Boolean(project.link && project.link !== '#');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
        <p className="text-sm text-gray-500 mb-4">{project.participant}</p>
        <p className="text-gray-600 leading-relaxed">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.category.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link
          href={`/projects/${project.path}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-teal-600 text-white hover:bg-teal-700"
        >
          <BsArrowUpRightSquare />
          전체 상세 보기
        </Link>
        {hasLive && (
          <Link
            href={project.link}
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 text-gray-700 hover:border-teal-300"
          >
            Live
          </Link>
        )}
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 text-gray-600 hover:border-teal-300"
        >
          닫기
        </button>
      </div>
    </div>
  );
}

export default function ProjectDetailModal({
  project,
  listProject,
  adjacent,
  onClose,
  onNavigate,
}: ProjectDetailModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!project && !listProject) return;

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, listProject, handleKeyDown]);

  if (!project && !listProject) return null;

  const title = project?.title ?? listProject?.title ?? '';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        aria-label="모달 닫기"
        onClick={onClose}
      />

      <div className="relative w-full sm:max-w-5xl lg:max-w-6xl max-h-[92vh] sm:max-h-[88vh] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col animate-[slideUp_0.25s_ease-out]">
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 border-b border-gray-200 shrink-0">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 truncate pr-2">
            {title}
          </h2>
          <div className="flex items-center gap-2 shrink-0">
            {project && (
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-teal-700 border border-teal-200 hover:bg-teal-50"
              >
                전체 페이지 · PDF
                <BsArrowUpRightSquare size={14} />
              </Link>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
              aria-label="닫기"
            >
              <IoClose size={24} />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto flex-1 px-4 sm:px-6 py-6">
          {project ? (
            <ProjectDetailBody
              project={project}
              adjacent={adjacent}
              variant="modal"
              onClose={onClose}
              onNavigate={onNavigate}
            />
          ) : listProject ? (
            <LegacyModalPreview project={listProject} onClose={onClose} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
