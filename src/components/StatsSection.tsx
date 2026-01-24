'use client';
import React from 'react';
import { FaCode, FaProjectDiagram, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

interface StatItem {
  number: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}

const statsData: StatItem[] = [
  {
    number: '3+',
    label: 'Years Experience',
    icon: <FaCalendarAlt className="w-8 h-8" />,
    description: '웹 개발 경력'
  },
  {
    number: '7+',
    label: 'Projects',
    icon: <FaProjectDiagram className="w-8 h-8" />,
    description: '완료한 프로젝트'
  },
  {
    number: '15+',
    label: 'Tech Stack',
    icon: <FaCode className="w-8 h-8" />,
    description: '다양한 기술 스택'
  },
  {
    number: '3',
    label: 'Companies',
    icon: <FaBriefcase className="w-8 h-8" />,
    description: '경험한 회사'
  }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 via-white to-teal-50">
      <div className="px-4 sm:px-6 md:mx-auto max-w-3xl md:max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            검증된 경험과 성과
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            다양한 프로젝트와 기술 스택을 통해 쌓아온 실무 경험
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-teal-100"
            >
              <div className="flex justify-center mb-4 text-teal-600">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm md:text-base">
            헬스케어 스타트업부터 통신·렌탈 중견기업까지 다양한 도메인 경험
          </p>
        </div>
      </div>
    </section>
  );
}



