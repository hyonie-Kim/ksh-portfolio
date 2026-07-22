import React from 'react';
import Link from 'next/link';
import { BsArrowLeft, BsArrowUpRightSquare, BsGithub } from 'react-icons/bs';
import { ProjectDetail, PROJECT_TYPE_LABEL } from '@/types/project';
import PrintPdfButton from './PrintPdfButton';

interface ProjectSidebarProps {
  project: ProjectDetail;
  compact?: boolean;
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <dt className="text-xs font-medium text-gray-400 mb-0.5">{label}</dt>
      <dd className="text-sm text-gray-700 whitespace-pre-line">{value}</dd>
    </div>
  );
}

export default function ProjectSidebar({
  project,
  compact = false,
}: ProjectSidebarProps) {
  const typeLabel = PROJECT_TYPE_LABEL[project.type];
  const hasLive = Boolean(project.links?.live && project.links.live !== '#');
  const hasGithub = Boolean(project.links?.github && project.links.github !== '#');
  const hasDocument = Boolean(
    project.links?.document && project.links.document !== '#'
  );

  const wrapperClass = compact
    ? 'project-sidebar-compact rounded-xl border border-gray-200 bg-gray-50 p-4 space-y-3 lg:hidden'
    : 'project-sidebar-desktop hidden lg:block lg:sticky lg:top-28 lg:self-start space-y-6';

  return (
    <aside className={`project-sidebar ${wrapperClass}`}>
      <div className={compact ? 'space-y-3' : 'space-y-5'}>
        {hasLive && (
          <Link
            href={project.links!.live!}
            target="_blank"
            rel="noopener noreferrer"
            className="no-print flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-medium border border-teal-600 text-teal-700 hover:bg-teal-50 transition-colors"
          >
            <BsArrowUpRightSquare />
            사이트 이동
          </Link>
        )}

        <h2 className="text-sm font-bold text-gray-800 pb-2 border-b border-gray-200">
          프로젝트 정보
        </h2>

        <dl className="space-y-3">
          <InfoRow label="유형" value={typeLabel} />
          <InfoRow label="기간" value={project.period} />
          {project.company && (
            <InfoRow label="소속" value={project.company} />
          )}
          <InfoRow label="역할" value={project.role} />
          {project.teamSize && (
            <InfoRow label="팀 규모" value={project.teamSize} />
          )}
          {project.contribution && (
            <InfoRow label="기여" value={project.contribution} />
          )}
        </dl>

        <div>
          <p className="text-xs font-medium text-gray-400 mb-2">기술 스택</p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded-md text-xs font-medium text-gray-700 bg-white border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {(hasGithub || hasDocument) && (
          <div className="space-y-2">
            <p className="text-xs font-medium text-gray-400">링크</p>
            {hasGithub && (
              <Link
                href={project.links!.github!}
                target="_blank"
                className="no-print flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
              >
                <BsGithub />
                GitHub
              </Link>
            )}
            {hasDocument && (
              <Link
                href={project.links!.document!}
                target="_blank"
                className="no-print flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
              >
                <BsArrowUpRightSquare />
                Document
              </Link>
            )}
          </div>
        )}
      </div>

      {!compact && (
        <div className="space-y-2 pt-2 border-t border-gray-200">
          <Link
            href="/#projects"
            className="no-print flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-medium bg-teal-600 text-white hover:bg-teal-700 transition-colors"
          >
            <BsArrowLeft />
            프로젝트 목록
          </Link>
          <PrintPdfButton />
        </div>
      )}
    </aside>
  );
}
