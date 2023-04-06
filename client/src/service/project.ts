import { readFile } from "fs/promises";
import path from "path";
export type Project = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};
export async function getAllProject(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), "data", "projects.json");
  return readFile(filePath, "utf-8").then<Project[]>((data) =>
    JSON.parse(data)
  );
}
