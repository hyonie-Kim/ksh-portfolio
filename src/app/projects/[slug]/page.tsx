import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectDetail } from '@/data/projects/index';
import StructuredProjectDetail from '@/components/project-detail/StructuredProjectDetail';
import LegacyMarkdownProject from '@/components/project-detail/LegacyMarkdownProject';
import {
  getAdjacentProjects,
  getAllProject,
  getProjectData,
} from '@/service/projects';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const projects = await getAllProject();
  return projects.map((project) => ({ slug: project.path }));
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const detail = getProjectDetail(slug);

  if (detail) {
    const ogImage = detail.heroImage ?? detail.thumbnail;
    return {
      title: detail.title,
      description: detail.summary,
      openGraph: {
        title: detail.title,
        description: detail.summary,
        images: [{ url: ogImage }],
      },
    };
  }

  try {
    const { title, description, thumbnail } = await getProjectData(slug);
    const ogImage = thumbnail ?? `/images/projects/${slug}.png`;
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [{ url: ogImage }],
      },
    };
  } catch {
    return { title: 'Project' };
  }
}

export default async function ProjectDetailPage({ params: { slug } }: Props) {
  const detail = getProjectDetail(slug);

  if (detail) {
    const allProjects = await getAllProject();
    const adjacent = getAdjacentProjects(slug, allProjects);
    return <StructuredProjectDetail project={detail} adjacent={adjacent} />;
  }

  // TODO: 모든 프로젝트 구조화 마이그레이션 후 LegacyMarkdownProject 제거
  try {
    const project = await getProjectData(slug);
    const allProjects = await getAllProject();
    const adjacent = getAdjacentProjects(slug, allProjects);
    return <LegacyMarkdownProject project={project} adjacent={adjacent} />;
  } catch {
    notFound();
  }
}
