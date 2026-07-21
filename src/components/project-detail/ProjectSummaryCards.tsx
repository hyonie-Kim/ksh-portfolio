import React from 'react';
import { ProjectDetail } from '@/types/project';

interface ProjectSummaryCardsProps {
  highlights: ProjectDetail['highlights'];
}

export default function ProjectSummaryCards({ highlights }: ProjectSummaryCardsProps) {
  const cards = [
    { label: '담당 역할', value: highlights.role },
    { label: '핵심 과제', value: highlights.challenge },
    { label: '주요 성과', value: highlights.outcome },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-gray-800 mb-4">핵심 요약</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="print-avoid-break rounded-lg border border-gray-200 bg-gray-50 p-4"
          >
            <h3 className="text-xs font-semibold text-teal-700 uppercase tracking-wide mb-2">
              {card.label}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">{card.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
