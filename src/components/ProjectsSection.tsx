import React from "react";
import { Project, getAllProject } from "@/service/projects";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

// type Props = {project:Project}
export default async function ProjectsSection() {
  const projects = await getAllProject();

  return (
    <section id="projects">
      <h1 className="text-center font-bold text-3xl">
        projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28 mb-20">
        {projects.map((project: Project, index) => {
          return (
            <div key={index}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-sliderUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="mt-8 md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        className={`rounded-xl shadow-xl hover:opacity-70 ${
                          project.path === 'wedding_mo' 
                            ? 'h-[226px] w-auto mx-auto' 
                            : ''
                        }`}
                        src={`/images/projects/${project.path}.png`}
                        alt={project.path}
                        width={1000}
                        height={1000}
                      />
                    </Link>
                  </div>
                  <div className="md:mt-6 md:w-1/2  mt-8 text-center md:text-left">
                    <div className="mb-4">
                      <h1 className="md:text-2xl font-bold mb-2 text-xl">
                         {project.title}
                      </h1>
                      <p className="text-gray-600 mb-2">
                        {project.participant}
                      </p>
                      <blockquote className="text-lg text-neutral-600 mb-4 border-l-4 border-gray-300 pl-4 italic">
                         {project.description}
                      </blockquote>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-700 mb-2">🛠사용 기술:</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.category.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-700 mb-2"> 👩🏻‍💻 개발 범위:</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {project.developmentScope || (project.participant.includes('개인') ? '100% 개인 개발' : project.participant)}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-700 mb-2">📌 주요 기능:</h3>
                      <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                        {project.keyFeatures ? (
                          project.keyFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))
                        ) : (
                          <>
                            <li>요금제 CRUD + 사용자 필터 검색</li>
                            <li>관리자 로그인 및 인증 처리</li>
                            <li>ERD 설계 및 API 문서 작성</li>
                          </>
                        )}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-700 mb-2">✅ 성과 / 포인트:</h3>
                      <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                        {project.achievements ? (
                          project.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))
                        ) : (
                          <>
                            <li>실무에서 경험한 요금제 관리 로직을 개인 프로젝트로 재구현</li>
                            <li>Prisma로 모델 구조를 설계하며 DB 연관성 학습</li>
                            <li>화면 → DB 흐름 전체를 혼자 구성하며 전체 아키텍처 이해도 향상</li>
                          </>
                        )}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                      <Link href={project.link} target="_blank" className="flex items-center space-x-2 hover:-translate-y-1 transition-transform cursor-pointer bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-600">
                        <BsArrowUpRightSquare size={16} />
                        <span>🔗 사이트 바로가기</span>
                      </Link>

                      <Link href={project.github} target="_blank" className="flex items-center space-x-2 hover:-translate-y-1 transition-transform cursor-pointer bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-900">
                        <BsGithub size={16} />
                        <span>GitHub</span>
                      </Link>

                      <Link
                        href={`/project/${project.path}`}
                        className="flex items-center bg-black text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 border-2 border-solid border-transparent hover:border-gray-800"
                      >
                        README 보기
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
