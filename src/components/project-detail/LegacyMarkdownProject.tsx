import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsArrowUpRightSquare, BsArrowLeft } from 'react-icons/bs';
import MarkdownViewer from '@/components/MarkdownViewer';
import ProjectNavigation from '@/components/project-detail/ProjectNavigation';
import {
  getProjectBadge,
  getProjectThumbnail,
  getProjectYear,
  getProjectBadgeClass,
} from '@/lib/project-display';
import { Project, ProjectData } from '@/service/projects';

/**
 * TODO: 구조화된 상세 데이터로 마이그레이션 후 제거 예정
 * 아직 getProjectDetail(slug) 데이터가 없는 프로젝트용 Markdown fallback
 */
interface LegacyMarkdownProjectProps {
  project: ProjectData;
  adjacent: {
    prev: Project | null;
    next: Project | null;
  };
}

export default function LegacyMarkdownProject({
  project,
  adjacent,
}: LegacyMarkdownProjectProps) {
  const badge = getProjectBadge(project);
  const thumbnail = getProjectThumbnail(project);
  const year = getProjectYear(project.date);
  const hasLive = Boolean(project.link && project.link !== '#');
  const hasGithub = Boolean(project.github && project.github !== '#');
  const badgeClass = getProjectBadgeClass(badge);

  return (
    <article className="mx-auto px-4 sm:px-6 max-w-3xl md:max-w-4xl pt-24 pb-20">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-teal-700 mb-8 transition-colors"
      >
        <BsArrowLeft />
        프로젝트 목록으로
      </Link>

      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-gray-200 shadow-md bg-gray-100 mb-8">
        <Image
          src={thumbnail}
          alt={project.title}
          fill
          priority
          className="object-contain p-2"
          sizes="(max-width: 896px) 100vw, 896px"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span
          className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${badgeClass}`}
        >
          {badge}
        </span>
        <span className="text-sm text-gray-400">{year}</span>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        {project.title}
      </h1>
      <p className="text-sm text-gray-500 mb-6">{project.participant}</p>

      <div className="flex flex-wrap gap-3 mb-10">
        {hasLive && (
          <Link
            href={project.link}
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-teal-600 text-white hover:bg-teal-700 transition-colors"
          >
            <BsArrowUpRightSquare size={16} />
            Live
          </Link>
        )}
        {hasGithub && (
          <Link
            href={project.github}
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gray-800 text-white hover:bg-gray-900 transition-colors"
          >
            <BsGithub size={16} />
            GitHub
          </Link>
        )}
      </div>

      <MarkdownViewer content={project.content} />
      <ProjectNavigation prev={adjacent.prev} next={adjacent.next} />
    </article>
  );
}
