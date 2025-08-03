import React from 'react';

const skillData = [
  {
    category: '🔧 Frontend',
    items: [
      'Next.js 14',
      'React',
      'TypeScript',
      'JQuery',
    ],
  },
  {
    category: '🛠 Backend',
    items: [
      'NestJS',
      'ASP.NET WebForms',
      'Classic ASP',
    ],
  },
  {
    category: '🗃 Database & Infra',
    items: [
      'MSSQL',
      'Windows Server',
      'IIS',
    ],
  },
  {
    category: '🧠 Collaboration & Tools',
    items: [
      'Git & GitHub',
      'Jira',
      'DBeaver',
      'Postman',
      'Figma',
    ],
  },
];

export default function AboutSection() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48 mb-24">
        <h1 className="text-center font-bold text-3xl mb-24">
          Skills & Tech Stack
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:p-4 md:space-y-0">
          <div className="md:w-1/2 md:text-left md:pr-5">
            {/* 왼쪽: Frontend, Backend */}
            {skillData.slice(0, 2).map((category, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="text-xl font-bold mb-4 text-gray-800">{category.category}</h2>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIdx) => (
                    <span key={itemIdx} className="px-3 py-2 bg-teal-100 text-teal-800 rounded-lg text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="md:w-1/2 md:text-left md:pl-5">
            {/* 오른쪽: Database & Infra, Collaboration & Tools */}
            {skillData.slice(2).map((category, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="text-xl font-bold mb-4 text-gray-800">{category.category}</h2>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIdx) => (
                    <span key={itemIdx} className="px-3 py-2 bg-teal-100 text-teal-800 rounded-lg text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
