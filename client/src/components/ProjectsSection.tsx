import React from "react";
import { getAllProject } from "@/service/projects";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import ContactBtn from "./About/ContactBtn";
import SlideUp from "./SlideUp";
import { Project } from "@/service/projects";

export default async function ProjectsSection() {
  const projects = await getAllProject();

  return (
    <section id="projects">
      <h1 className="text-center font-bold text-3xl">
        projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-sliderUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="mt-8 md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        className="rounded-xl shadow-xl hover:opacity-70"
                        src={`/images/projects/${project.path}.png`}
                        alt={project.path}
                        width={1000}
                        height={1000}
                      />
                    </Link>
                  </div>
                  <div className="md:mt-12 md:w-1/2  mt-8 text-center md:text-left">
                    <h1 className="md:text-3xl font-bold mb-6 text-2xl">
                      {project.title}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4 justify-center md:justify-start">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>

                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>

                      <Link
                        href={`/project/${project.path}`}
                        className="flex items-center bg-black text-light p-2 rounded-lg text-sm font-semibold hover:bg-light hover:text-black border-2 border-solid border-transparent hover:border-black"
                      >
                        자세히 보기
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
}