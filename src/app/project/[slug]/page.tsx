import MarkdownViewer from "@/components/MarkdownViewer";
import { getProjectData } from "@/service/projects";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: { slug: string };
};
export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getProjectData(slug);
  return {
    title,
    description,
  };
}
export default async function ProjectPage({ params: { slug } }: Props) {
  const project = await getProjectData(slug);

  return (
    <article>
      <h1>{project.title}</h1>
      <MarkdownViewer content={project.content} />
    </article>
  );
}
