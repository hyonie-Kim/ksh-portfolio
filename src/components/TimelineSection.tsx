'use client';
import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import SlideUp from './SlideUp';
import CareerCard from './dev-life/CareerCard';
import LearningCard from './dev-life/LearningCard';
import { careerItems, learningItems } from '@/data/devLifeData';

export default function TimelineSection() {
  return (
    <section id="dev-life" className="scroll-mt-28 pt-16 pb-16 md:pb-24 bg-gray-50 w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Dev Life</h2>
            <p className="text-lg text-gray-600">경력과 성장의 기록</p>
          </div>
        </SlideUp>

        {/* Career */}
        <div className="mb-16 md:mb-20">
          <SlideUp offset="-100px 0px -100px 0px">
            <div className="flex items-center gap-2 mb-8 md:mb-10">
              <FaBriefcase className="text-teal-600 text-xl" />
              <h3 className="text-2xl font-bold text-gray-800">Career</h3>
              <span className="text-sm text-gray-500 ml-1">회사 실무 경력</span>
            </div>
          </SlideUp>

          <div className="space-y-0">
            {careerItems.map((item, index) => (
              <SlideUp key={item.company} offset="-80px 0px -80px 0px">
                <div className="relative flex gap-3 md:gap-0">
                  <div className="hidden md:block w-32 shrink-0 pr-6 text-right pt-1">
                    <span className="text-sm font-bold text-teal-600 leading-snug">{item.period}</span>
                  </div>

                  <div className="relative flex flex-col items-center w-4 shrink-0">
                    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-teal-500 border-2 md:border-4 border-gray-50 shadow z-10 mt-1.5 md:mt-2" />
                    {index < careerItems.length - 1 && (
                      <div className="w-0.5 flex-1 bg-teal-200 mt-1" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0 md:pl-6 pb-8 md:pb-10">
                    <CareerCard item={item} />
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>

        {/* Learning */}
        <div>
          <SlideUp offset="-100px 0px -100px 0px">
            <div className="flex items-center gap-2 mb-8 md:mb-10">
              <FaGraduationCap className="text-blue-600 text-xl" />
              <h3 className="text-2xl font-bold text-gray-800">Learning</h3>
              <span className="text-sm text-gray-500 ml-1">교육 및 부트캠프</span>
            </div>
          </SlideUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {learningItems.map((item) => (
              <SlideUp key={item.institution} offset="-80px 0px -80px 0px">
                <LearningCard item={item} />
              </SlideUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
