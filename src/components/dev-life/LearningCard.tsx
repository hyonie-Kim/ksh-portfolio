import React from 'react';
import { LearningItem } from '@/data/devLifeData';
import TechBadge from './TechBadge';

interface LearningCardProps {
  item: LearningItem;
}

export default function LearningCard({ item }: LearningCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-blue-100 p-4 md:p-5 hover:shadow-md transition-shadow duration-300 h-full">
      <p className="text-xs font-semibold text-blue-600 mb-2">{item.period}</p>
      <h4 className="text-base font-bold text-gray-800 mb-2">{item.institution}</h4>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {item.skills.map((skill) => (
          <TechBadge key={skill.name} name={skill.name} icon={skill.icon} variant="learning" />
        ))}
      </div>
    </div>
  );
}
