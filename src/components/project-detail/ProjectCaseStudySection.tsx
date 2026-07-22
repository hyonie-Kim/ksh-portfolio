import React from 'react';
import { ProjectCaseStudy } from '@/types/project';
import ProjectImage from './ProjectImage';
import ProjectCodeBlock from './ProjectCodeBlock';

interface ProjectCaseStudySectionProps {
  caseStudies: ProjectCaseStudy[];
  compact?: boolean;
}

function CaseStudyBlock({
  study,
  index,
  compact,
}: {
  study: ProjectCaseStudy;
  index: number;
  compact?: boolean;
}) {
  const number = String(index + 1).padStart(2, '0');
  const implementations = study.keyImplementations ?? study.implementation;
  const implLabel = study.keyImplementations ? '핵심 구현' : '기술적 구현';
  const resultsLabel = compact ? '개선 효과' : '업무 개선 효과';

  return (
    <article className="py-10 border-t border-gray-200 first:border-t-0 first:pt-0">
      <p className="text-sm font-semibold text-teal-600 mb-1">Case {number}</p>
      <h3 className="print-avoid-break text-xl font-bold text-gray-900 mb-2">
        {study.title}
      </h3>
      {study.summary && (
        <p className="text-gray-600 leading-relaxed mb-6">{study.summary}</p>
      )}

      {study.afterImage ? (
        <ProjectImage image={study.afterImage} />
      ) : study.images?.length ? (
        study.imageLayout === 'row' ? (
          <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {study.images.map((image) => (
              <ProjectImage
                key={image.src}
                image={image}
                className="!my-0 !max-w-none w-full"
              />
            ))}
          </div>
        ) : (
          study.images.map((image) => (
            <ProjectImage key={image.src} image={image} />
          ))
        )
      ) : null}

      {study.flowImage && (
        <div className="my-6">
          
          <ProjectImage image={{ ...study.flowImage, type: 'diagram' }} />
        </div>
      )}

      {study.background && (
        <div className="mb-5">
          <h4 className="text-sm font-bold text-gray-800 mb-2">개발 배경</h4>
          <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
            {study.background}
          </p>
        </div>
      )}

      {study.improvements && study.improvements.length > 0 && (
        <div className="mb-5">
          <h4 className="text-sm font-bold text-gray-800 mb-3">주요 개선사항</h4>
          <ul className="space-y-2">
            {study.improvements.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-gray-700">
                <span className="text-teal-600 shrink-0">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {study.features && study.features.length > 0 && !study.improvements && (
        <div className="mb-5">
          <h4 className="text-sm font-bold text-gray-800 mb-2">주요 기능</h4>
          <ul className="space-y-1.5">
            {study.features.map((item) => (
              <li key={item} className="text-sm text-gray-600 flex gap-2">
                <span className="text-teal-500 shrink-0">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {implementations && implementations.length > 0 && (
        <div className="mb-5">
          <h4 className="text-sm font-bold text-gray-800 mb-2">{implLabel}</h4>
          <ul className="space-y-1.5">
            {implementations.map((item) => (
              <li key={item} className="text-sm text-gray-600 flex gap-2">
                <span className="text-teal-500 shrink-0">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {study.operationalIssues && study.operationalIssues.length > 0 && (
        <div className="mb-5">
          <h4 className="text-sm font-bold text-gray-800 mb-3">
            운영 이슈 해결 사례
          </h4>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full min-w-[32rem] text-sm text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-3 py-2.5 font-semibold text-gray-800 w-[38%]">
                    이슈
                  </th>
                  <th className="px-3 py-2.5 font-semibold text-gray-800">
                    해결 내용
                  </th>
                </tr>
              </thead>
              <tbody>
                {study.operationalIssues.map((item) => (
                  <tr
                    key={item.issue}
                    className="border-b border-gray-100 last:border-b-0 align-top"
                  >
                    <td className="px-3 py-2.5 text-gray-800 font-medium">
                      {item.issue}
                    </td>
                    <td className="px-3 py-2.5 text-gray-600 leading-relaxed">
                      {item.resolution}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {study.results && study.results.length > 0 && (
        <div className="mb-5">
          <h4 className="text-sm font-bold text-gray-800 mb-2">{resultsLabel}</h4>
          <ul className="space-y-1.5">
            {study.results.map((item) => (
              <li key={item} className="text-sm text-gray-600 flex gap-2">
                <span className="text-teal-500 shrink-0">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {study.code && <ProjectCodeBlock code={study.code} />}
    </article>
  );
}

export default function ProjectCaseStudySection({
  caseStudies,
  compact,
}: ProjectCaseStudySectionProps) {
  if (!caseStudies.length) return null;

  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-gray-800 mb-2">주요 개발 사례</h2>
      {!compact && (
        <p className="text-sm text-gray-500 mb-6">
          핵심 개발 사례를 Case Study 형식으로 정리했습니다.
        </p>
      )}
      {caseStudies.map((study, index) => (
        <CaseStudyBlock
          key={study.id}
          study={study}
          index={index}
          compact={compact}
        />
      ))}
    </section>
  );
}
