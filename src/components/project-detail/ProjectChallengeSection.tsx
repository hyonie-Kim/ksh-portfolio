import React from 'react';

interface ProjectChallengeSectionProps {
  challenge: string[];
  solution: string[];
}

export default function ProjectChallengeSection({
  challenge,
  solution,
}: ProjectChallengeSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-gray-800 mb-4">문제와 해결</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="print-avoid-break rounded-lg border border-gray-200 p-5">
          <h3 className="text-sm font-bold text-gray-800 mb-3">문제</h3>
          <ul className="space-y-2">
            {challenge.map((item) => (
              <li key={item} className="text-sm text-gray-600 flex gap-2">
                <span className="text-teal-500 shrink-0">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="print-avoid-break rounded-lg border border-gray-200 p-5">
          <h3 className="text-sm font-bold text-gray-800 mb-3">해결</h3>
          <ul className="space-y-2">
            {solution.map((item) => (
              <li key={item} className="text-sm text-gray-600 flex gap-2">
                <span className="text-teal-500 shrink-0">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
