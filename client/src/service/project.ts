import { readFile } from "fs/promises";
import path from "path";

// 프로젝트는 타입이고 아래와 같은 객체를 가지고 있음
export type Project = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export async function getFeaturedProject(): Promise<Project[]> {
  return getAllProject() //
    .then((project) => project.filter((project) => project.featured));
}

// 비동기로 동작하는 함수
// 프로젝트의 배열을 반환하는 프로미스
export async function getAllProject(): Promise<Project[]> {
  // data폴더에 project.json파일을 읽어온다
  const filePath = path.join(process.cwd(), "data", "projects.json");

  // readFile을 프로미스에 있는 것으로 한다
  return (
    readFile(filePath, "utf-8")
      // 프로젝트의 배열타입 명시
      .then<Project[]>((data) => JSON.parse(data))
      .then((projects) => projects)
  );
}
