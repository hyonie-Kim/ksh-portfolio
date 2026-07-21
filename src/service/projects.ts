import { readFile } from 'fs/promises';
import path from 'path';
import { getProjectDetail } from '@/data/projects/index';

export type ProjectBadge = '실무' | '개인' | '팀 프로젝트';

export type { ProjectDetail } from '@/types/project';
export { getProjectDetail };
export {
  getProjectThumbnail,
  getProjectYear,
  getProjectBadge,
  getProjectBadgeClass,
} from '@/lib/project-display';

export type Project = {
  title: string;
  description: string;
  date: string;
  category: string[];
  path: string;
  featured: boolean;
  github: string;
  link: string;
  participant: string;
  developmentScope?: string;
  keyFeatures?: string[];
  achievements?: string[];
  badge?: ProjectBadge;
  thumbnail?: string;
  cardLabel?: string;
  problem?: string;
  solution?: string;
};

export type ProjectData = Project & { content: string };

const HIDDEN_PATHS = new Set(['cobooki', 'wedding_mo']);

export async function getFeaturedProject(): Promise<Project[]> {
  return getAllProject().then((projects) =>
    projects.filter((project) => project.featured)
  );
}

export async function getAllProject(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  return readFile(filePath, 'utf-8').then<Project[]>((data) => JSON.parse(data));
}

export async function getProjectData(fileName: string): Promise<ProjectData> {
  const filePath = path.join(
    process.cwd(),
    'data',
    'projects',
    `${fileName}.md`
  );
  const metadata = await getAllProject().then((projects) =>
    projects.find((project) => project.path === fileName)
  );
  if (!metadata) {
    throw new Error(`${fileName}에 해당하는 프로젝트를 찾을수 없음`);
  }
  const content = await readFile(filePath, 'utf-8');
  return { ...metadata, content };
}

/** projects.json 배열 순서 기준, 목록에 노출되는 프로젝트만 사용 */
export function getVisibleProjects(projects: Project[]): Project[] {
  return projects.filter((p) => !HIDDEN_PATHS.has(p.path));
}

export function getAdjacentProjects(
  slug: string,
  projects: Project[]
): { prev: Project | null; next: Project | null } {
  const visible = getVisibleProjects(projects);
  const index = visible.findIndex((p) => p.path === slug);
  if (index === -1) {
    return { prev: null, next: null };
  }
  return {
    prev: index > 0 ? visible[index - 1] : null,
    next: index < visible.length - 1 ? visible[index + 1] : null,
  };
}
