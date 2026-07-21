import React from 'react';

interface ProjectContributionsSectionProps {
  items: string[];
}

export default function ProjectContributionsSection({
  items,
}: ProjectContributionsSectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-800 mb-4">프로젝트 기여</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
            <span className="text-teal-500 shrink-0">•</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
