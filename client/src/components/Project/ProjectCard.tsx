import { Project } from "@/service/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { project: Project };
export default function ProjectCard({
  project: { title, description, date, category, path },
}: Props) {
  return (
    <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
      <Link href={`/project/${path}`}>
        <Image
          className="w-full"
          src={`/images/projects/${path}.png`}
          alt={title}
          width={300}
          height={200}
        ></Image>
        <div className="flex flex-col items-center p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <span className="text-sm rounded-lg bg-green-100 px-2 my-2">
            {category}
          </span>
        </div>
      </Link>
    </article>
  );
}
