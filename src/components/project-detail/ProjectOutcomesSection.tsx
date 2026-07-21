import React from 'react';
import { ProjectDetail } from '@/types/project';

interface ProjectOutcomesSectionProps {
  outcomes: ProjectDetail['outcomes'];
}

export default function ProjectOutcomesSection({
  outcomes,
}: ProjectOutcomesSectionProps) {
  const sections = [
    { title: '업무 효율성', items: outcomes.efficiency },
    { title: '시스템 안정성', items: outcomes.stability },
    { title: '협업 및 운영', items: outcomes.collaboration },
  ].filter((s) => s.items && s.items.length > 0);

  if (sections.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-gray-800 mb-4">성과 및 기여</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sections.map((section) => (
          <div
            key={section.title}
            className="print-avoid-break rounded-lg border border-gray-200 p-5"
          >
            <h3 className="text-sm font-bold text-gray-800 mb-3">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items!.map((item) => (
                <li key={item} className="text-sm text-gray-600 flex gap-2">
                  <span className="text-teal-500 shrink-0">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
