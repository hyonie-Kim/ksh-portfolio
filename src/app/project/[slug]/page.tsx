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
    <article className="mx-auto px-4 sm:px-6 md:px-8 max-w-3xl md:max-w-4xl lg:max-w-4xl">
      {/* <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-8 md:mt-10">
        {project.title}
      </h1> */}
      <MarkdownViewer content={project.content} />
    </article>
  );
}
