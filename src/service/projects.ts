import { readFile } from 'fs/promises';
import path from 'path';

// 프로젝트 기본속성 정의
export type Project = {
  title: string;
  description: string;
  date: Date;
  category: string[];
  path: string;
  featured: boolean;
  github: string;
  link: string;
  participant: string;
};
export type ProjectData = Project & { content: string };

// 모든 프로젝트를 가져와서 featured 속성이 true 인것만 필터링해서 반환
export async function getFeaturedProject(): Promise<Project[]> {
  return getAllProject() //
    .then((projects) => projects.filter((project) => project.featured));
}

// 모든 프로젝트를 가져옴
// project.json 파일에서 모든 프로젝트를 읽어옴
// 퍄일 경로를 생성하고 JSON데이터를 Project 타입의 배열로 파싱
export async function getAllProject(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  return readFile(filePath, 'utf-8')
    .then<Project[]>((data) => JSON.parse(data))
    .then((projects) => projects);
}

// 특정 프로젝트를 가져옴
// fileName을 매개변수로 사용하여 해당 프로젝트의 Markdown 파일 경로를 생성
// getAllProject 함수 호출하여 해당 프로젝트를 찾는다.
// 프로젝트를 찾으면 Markdown파일의 내용을 읽고 ProjectData 타입 객체로 반환
export async function getProjectData(fileName: string): Promise<ProjectData> {
  const filePath = path.join(
    process.cwd(),
    'data',
    'projects',
    `${fileName}.md`
  );
  const metadata = await getAllProject() //
    .then((projects) => projects.find((project) => project.path === fileName));
  if (!metadata)
    throw new Error(`${fileName}에 해당하는 프로젝트를 찾을수 없음`);
  const content = await readFile(filePath, 'utf-8');
  return { ...metadata, content };
}
