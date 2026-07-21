'use client';
import React from 'react';

interface SkillCategory {
  title: string;
  emoji: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    emoji: '💻',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
  },
  {
    title: 'Backend',
    emoji: '⚙',
    skills: ['ASP.NET', 'NestJS', 'PHP', 'Node.js'],
  },
  {
    title: 'Database',
    emoji: '🗄',
    skills: ['MSSQL', 'MySQL', 'Oracle'],
  },
  {
    title: 'Infrastructure',
    emoji: '☁',
    skills: ['AWS', 'CloudFront', 'Apache', 'Linux'],
  },
  {
    title: 'CMS',
    emoji: '🧩',
    skills: ['WordPress'],
  },
  {
    title: 'Tools',
    emoji: '🛠',
    skills: ['Git', 'GitHub', 'Cursor', 'ChatGPT', 'Gemini'],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 px-4 sm:px-6 md:mx-auto max-w-3xl md:max-w-5xl">
      <div className="my-12 pb-12 md:pt-16 md:pb-24">
        <h1 className="text-center font-bold text-3xl">
          보유 기술
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-5 md:p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4 pb-3 border-b border-teal-100">
                <span aria-hidden="true">{category.emoji}</span>
                {category.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 bg-gray-50 border border-teal-100 hover:border-teal-300 hover:text-teal-800 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
