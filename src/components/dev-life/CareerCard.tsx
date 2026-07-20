import React from 'react';
import { CareerItem } from '@/data/devLifeData';
import TechBadge from './TechBadge';

interface CareerCardProps {
  item: CareerItem;
}

export default function CareerCard({ item }: CareerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-teal-100 p-5 md:p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <h4 className="text-lg md:text-xl font-bold text-gray-800">{item.company}</h4>
        {item.isCurrent && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-100 text-teal-700 border border-teal-200">
            Current
          </span>
        )}
      </div>

      <p className="text-sm font-semibold text-teal-600 mb-2 md:hidden">{item.period}</p>

      <p className="text-base font-medium text-gray-800 mb-2">{item.description}</p>

      {item.details && (
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.details}</p>
      )}

      <div className="flex flex-wrap gap-2">
        {item.skills.map((skill) => (
          <TechBadge key={skill.name} name={skill.name} icon={skill.icon} variant="career" />
        ))}
      </div>
    </div>
  );
}
