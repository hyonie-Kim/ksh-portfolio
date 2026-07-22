import React from 'react';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';
import { ProjectDetail, PROJECT_TYPE_LABEL } from '@/types/project';
import { Project } from '@/service/projects';
import ProjectHero from './ProjectHero';
import ProjectSidebar from './ProjectSidebar';
import ProjectSummaryCards from './ProjectSummaryCards';
import ProjectChallengeSection from './ProjectChallengeSection';
import ProjectCaseStudySection from './ProjectCaseStudySection';
import ProjectOutcomesSection from './ProjectOutcomesSection';
import ProjectRetrospectiveSection from './ProjectRetrospectiveSection';
import ProjectNavigation from './ProjectNavigation';
import PrintPdfButton from './PrintPdfButton';
import ProjectCheckListSection from './ProjectCheckListSection';
import ProjectContributionsSection from './ProjectContributionsSection';

interface ProjectDetailBodyProps {
  project: ProjectDetail;
  adjacent?: {
    prev: Project | null;
    next: Project | null;
  };
  variant?: 'page' | 'modal';
  onClose?: () => void;
  onNavigate?: (slug: string) => void;
}

export default function ProjectDetailBody({
  project,
  adjacent,
  variant = 'page',
  onClose,
  onNavigate,
}: ProjectDetailBodyProps) {
  const isModal = variant === 'modal';
  const isCompact = project.layout === 'compact';
  const typeLabel = PROJECT_TYPE_LABEL[project.type];

  return (
    <div className="project-detail-layout grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-14">
      <div className="print-project-cover hidden print:block col-span-full mb-6 pb-4 border-b border-gray-300 print-avoid-break">
        <p className="text-xs text-gray-500 mb-2">김세현 · Full Stack Developer</p>
        <p className="text-sm font-semibold text-teal-700 mb-1">{typeLabel}</p>
        <h1 className="text-2xl font-bold text-gray-900 leading-snug">{project.title}</h1>
        {project.subtitle && (
          <p className="text-base text-gray-500 mt-1">{project.subtitle}</p>
        )}
        <p className="text-sm text-gray-500 mt-2">{project.period}</p>
      </div>

      <ProjectSidebar project={project} />

      <div className="project-main min-w-0">
        <ProjectHero project={project} />
        <ProjectSidebar project={project} compact />

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">프로젝트 소개</h2>
          <div className="space-y-3 text-gray-600 leading-relaxed">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">개발 배경</h3>
              <p className="text-sm whitespace-pre-line">{project.overview.background}</p>
            </div>
            {!isCompact && project.overview.objective && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">
                  프로젝트 목적
                </h3>
                <p className="text-sm">{project.overview.objective}</p>
              </div>
            )}
          </div>
        </section>

        {isCompact && project.improvements && (
          <ProjectCheckListSection title="주요 개선사항" items={project.improvements} />
        )}

        {!isCompact && (
          <>
            <ProjectSummaryCards highlights={project.highlights} />
            <ProjectChallengeSection
              challenge={project.challenge}
              solution={project.solution}
            />
          </>
        )}

        <ProjectCaseStudySection caseStudies={project.caseStudies} compact={isCompact} />

        {isCompact && project.contributions ? (
          <ProjectContributionsSection items={project.contributions} />
        ) : (
          <ProjectOutcomesSection outcomes={project.outcomes} />
        )}

        {project.retrospective && (
          <ProjectRetrospectiveSection retrospective={project.retrospective} />
        )}

        <div className="no-print lg:hidden space-y-2 mb-8">
          {isModal && onClose ? (
            <button
              type="button"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-medium bg-teal-600 text-white hover:bg-teal-700 transition-colors"
            >
              <BsArrowLeft />
              프로젝트 목록
            </button>
          ) : (
            <Link
              href="/#projects"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-medium bg-teal-600 text-white hover:bg-teal-700 transition-colors"
            >
              <BsArrowLeft />
              프로젝트 목록
            </Link>
          )}
          <PrintPdfButton />
        </div>

        {adjacent && (
          <ProjectNavigation
            prev={adjacent.prev}
            next={adjacent.next}
            onNavigate={onNavigate}
          />
        )}
      </div>
    </div>
  );
}
