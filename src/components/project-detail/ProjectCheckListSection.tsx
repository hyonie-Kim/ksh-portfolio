import React from 'react';

interface CheckListSectionProps {
  title: string;
  items: string[];
}

export default function ProjectCheckListSection({ title, items }: CheckListSectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm text-gray-700 leading-relaxed">
            <span className="text-teal-600 shrink-0 font-medium">✔</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
