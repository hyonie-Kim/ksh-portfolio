import React from 'react';
import { ProjectDetail } from '@/types/project';

interface ProjectRetrospectiveSectionProps {
  retrospective: NonNullable<ProjectDetail['retrospective']>;
}

function RetroBlock({ title, items }: { title: string; items?: string[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="print-avoid-break">
      <h3 className="text-sm font-bold text-gray-800 mb-2">{title}</h3>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="text-sm text-gray-600 flex gap-2">
            <span className="text-teal-500 shrink-0">·</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectRetrospectiveSection({
  retrospective,
}: ProjectRetrospectiveSectionProps) {
  const hasContent =
    retrospective.learned?.length ||
    retrospective.difficulty?.length ||
    retrospective.next?.length;

  if (!hasContent) return null;

  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-gray-800 mb-4">프로젝트 회고</h2>
      <div className="space-y-6 rounded-lg border border-gray-200 p-5">
        <RetroBlock title="배운 점" items={retrospective.learned} />
        <RetroBlock title="어려웠던 점" items={retrospective.difficulty} />
        <RetroBlock title="이후 개선하고 싶은 점" items={retrospective.next} />
      </div>
    </section>
  );
}
