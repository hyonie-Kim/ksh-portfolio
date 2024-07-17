'use client';
import React, { ReactNode, useEffect, useRef } from 'react';

interface Props {
  offset?: string;
  children?: ReactNode;
}

// 옵저버API 기능을 사용해서 해당 컴포넌트 안에 있는 요소들은
// 주어진 요소를 화면에 보일 때 슬라이드 업 애니메이션을 적용
export default function SlideUp({ children, offset = '0px' }: Props) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('animate-sliderUpCubiBezier');
          }
        });
      },
      { rootMargin: offset }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);
  return (
    <div ref={ref} className='relative opacity-0'>
      {children}
    </div>
  );
}
