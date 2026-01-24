'use client';
import React, { useState } from 'react';
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiDotnet,
  SiMicrosoftsqlserver,
  SiGit,
  
} from 'react-icons/si';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const skillData = [
  {
    name: 'React.js',
    icon: <SiReact className="w-6 h-6" />,
    level: 60,
    description: '헬스케어 서비스 및 Next.js 기반 UI 개발 경험',
    sources: [
      { place: '에넥스텔레콤', type: 'work', icon: <FaBriefcase /> },
      { place: '블루앤트', type: 'work', icon: <FaBriefcase /> },
      { place: '피어나인', type: 'work', icon: <FaBriefcase /> },
      { place: '한국소프트웨어교육원', type: 'education', icon: <FaGraduationCap /> },
      { place: '엘리스 SW', type: 'education', icon: <FaGraduationCap /> },
      { place: '서울시 청년취업사관학교', type: 'education', icon: <FaGraduationCap /> },
      { place: 'AI 양재허브', type: 'education', icon: <FaGraduationCap /> },
      
    ]
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs className="w-6 h-6" />,
    level: 65,
    description: '통신 서비스 실운영 환경 유지보수',
    sources: [
      { place: '에넥스텔레콤', type: 'work', icon: <FaBriefcase /> },
      { place: '블루앤트', type: 'work', icon: <FaBriefcase /> }
    ]
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="w-6 h-6" />,
    level: 60,
    description: 'Next.js 기반 서비스에서 타입 정의 및 유지보수 경험',
    sources: [
      { place: '에넥스텔레콤', type: 'work', icon: <FaBriefcase /> },
      { place: '블루앤트', type: 'work', icon: <FaBriefcase /> }, 
      { place: '한국소프트웨어교육원', type: 'education', icon: <FaGraduationCap /> },
      { place: '엘리스 SW', type: 'education', icon: <FaGraduationCap /> },
      { place: '서울시 청년취업사관학교', type: 'education', icon: <FaGraduationCap /> },
      { place: 'AI 양재허브', type: 'education', icon: <FaGraduationCap /> },
      { place: '블루앤트', type: 'work', icon: <FaBriefcase /> }

    ]
  },
  {
    name: 'ASP.NET',
    icon: <SiDotnet className="w-6 h-6" />,
    level: 70,
    description: '기존코드 이해 + 간단수정, CRUD, 기본 비즈니스 로직 구현, 레거시 유지보수 + 기능개선 주도',
    sources: [
      { place: '에넥스텔레콤', type: 'work', icon: <FaBriefcase /> }
    ]
  },
  {
    name: 'MSSQL',
    icon: <SiMicrosoftsqlserver className="w-6 h-6" />,
    level: 70,
    description: '복잡한 JOIN + CASE + 날짜 조건, 실서비스 데이터 조회/수정, 레거시 쿼리 유지보수, 운영 DB 직접 다룸 (ISMS 증적, 권한 이슈)',
    sources: [
      { place: '러닝스푼즈', type: 'education', icon: <FaGraduationCap /> },
      { place: '에넥스텔레콤', type: 'work', icon: <FaBriefcase /> }
    ]
  },
  {
    name: 'Git',
    icon: <SiGit className="w-6 h-6" />,
    level: 70,
    description: '기능 단위 브랜치 분리 (feature/xxx), 운영/개발 환경 구분, 충돌 해결 경험, Jenkins 연동 CI/CD 사용',
    sources: [
      { place: '한국소프트웨어교육원', type: 'education', icon: <FaGraduationCap /> },
      { place: '엘리스 SW', type: 'education', icon: <FaGraduationCap /> },
      { place: '서울시 청년취업사관학교', type: 'education', icon: <FaGraduationCap /> },
      { place: 'AI 양재허브', type: 'education', icon: <FaGraduationCap /> },
      { place: '에넥스텔레콤', type: 'work', icon: <FaBriefcase /> },
      { place: '블루앤트', type: 'work', icon: <FaBriefcase /> },
      { place: '피어나인', type: 'work', icon: <FaBriefcase /> }
    ]
  }
];

// 레이더 차트 컴포넌트
const RadarChart = ({ data }: { data: typeof skillData }) => {
  const centerX = 200;
  const centerY = 200;
  const radius = 150;
  const numSkills = data.length;
  
  // 각 기술의 위치 계산
  const getPoint = (index: number, level: number) => {
    const angle = (index * 2 * Math.PI) / numSkills - Math.PI / 2;
    const r = (level / 100) * radius;
    return {
      x: centerX + r * Math.cos(angle),
      y: centerY + r * Math.sin(angle)
    };
  };

  // 다각형 경로 생성
  const polygonPoints = data.map((skill, index) => {
    const point = getPoint(index, skill.level);
    return `${point.x},${point.y}`;
  }).join(' ');

  // 축 라인 생성
  const axisLines = data.map((skill, index) => {
    const point = getPoint(index, 100);
    return (
      <line
        key={index}
        x1={centerX}
        y1={centerY}
        x2={point.x}
        y2={point.y}
        stroke="#e5e7eb"
        strokeWidth="1"
      />
    );
  });

  // 원형 레벨 라인
  const levelCircles = [20, 40, 60, 80, 100].map((level) => (
    <circle
      key={level}
      cx={centerX}
      cy={centerY}
      r={(level / 100) * radius}
      fill="none"
      stroke="#e5e7eb"
      strokeWidth="1"
      strokeDasharray="5,5"
    />
  ));

  // 기술 라벨
  const labels = data.map((skill, index) => {
    const point = getPoint(index, 110);
    return (
      <text
        key={index}
        x={point.x}
        y={point.y}
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-xs font-medium fill-gray-600"
      >
        {skill.name}
      </text>
    );
  });

  return (
    <div className="flex justify-center">
      <svg width="400" height="400" className="border border-gray-200 rounded-lg bg-white">
        {/* 배경 원형 레벨 라인 */}
        {levelCircles}
        
        {/* 축 라인 */}
        {axisLines}
        
        {/* 다각형 영역 */}
        <polygon
          points={polygonPoints}
          fill="rgba(20, 184, 166, 0.2)"
          stroke="rgb(20, 184, 166)"
          strokeWidth="2"
        />
        
        {/* 기술 라벨 */}
        {labels}
        
        {/* 중심점 */}
        <circle cx={centerX} cy={centerY} r="3" fill="rgb(20, 184, 166)" />
      </svg>
    </div>
  );
};

export default function AboutSection() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section id="about" className='px-4 sm:px-6 md:mx-auto max-w-3xl md:max-w-7xl'>
      <div className="my-12 pb-12 md:pt-16 md:pb-24 mb-24">
        <h1 className="text-center font-bold text-3xl mb-24">
          Skills & Tech Stack
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <div className='flex flex-col lg:flex-row'>
        {/* 레이더 차트 */}
        <div className="hidden lg:block mb-12">
          <h2 className="text-center text-xl font-semibold mb-8 text-gray-800">
            기술 스택 레이더 차트
          </h2>
          <RadarChart data={skillData} />
        </div>
        
        {/* 상세 기술 목록 */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-xl font-semibold mb-8 text-gray-800">
            상세 기술 정보
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillData.map((skill, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow relative"
                onMouseEnter={() => setHoveredSkill(idx)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-teal-600">{skill.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                </div>
                
                {/* 프로그레스 바 */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div 
                    className="bg-gradient-to-r from-teal-400 to-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                
                <div className="text-sm text-gray-600 mb-3">
                  경험 수준: {skill.level}%
                </div>
                
                {/* 호버 시 상세 설명 툴팁 */}
                {skill.description && hoveredSkill === idx && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-gray-800 text-white text-xs rounded-lg p-3 z-50 shadow-xl max-w-full">
                    <div className="font-semibold mb-2 text-teal-300">경험 내용:</div>
                    <ul className="space-y-1 list-disc list-inside">
                      {skill.description.split(', ').map((item, i) => (
                        <li key={i} className="text-gray-200">{item}</li>
                      ))}
                    </ul>
                    <div className="absolute -top-2 left-6 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800"></div>
                  </div>
                )}
                
                {/* 출처 정보 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="p-1 bg-blue-100 text-blue-600 rounded-full">
                      <FaBriefcase />
                    </span>
                    <span>회사: {skill.sources.filter(s => s.type === 'work').length}개 조직 경험</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="p-1 bg-green-100 text-green-600 rounded-full">
                      <FaGraduationCap />
                    </span>
                    <span>교육: {skill.sources.filter(s => s.type === 'education').length}개 과정 이수</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

            {/* 범례 */}
          <div className="max-w-4xl mx-auto mt-8 flex justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="p-1 bg-blue-100 text-blue-600 rounded-full">
                <FaBriefcase />
              </span>
              <span>회사 경험</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="p-1 bg-green-100 text-green-600 rounded-full">
                <FaGraduationCap />
              </span>
              <span>교육 경험</span>
            </div>
          </div>
        
        </div>
      </div>
        
      </div>
    </section>
  );
}