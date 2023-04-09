import MarkdownViewer from "@/components/Project/MarkdownViewer";
import { getProjectData } from "@/service/projects";
import React from "react";

type Props = {
  params: { slug: string };
};
export default async function ProjectPage({ params: { slug } }: Props) {
  const project = await getProjectData(slug);

  return (
    <article>
      <h1>{project.title}</h1>
      <MarkdownViewer content={project.content} />
    </article>
  );
}
