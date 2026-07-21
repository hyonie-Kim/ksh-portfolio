'use client';
import React, { useEffect, useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link } from 'react-scroll';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  title: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  { title: '소개', page: 'home' },
  { title: '개발 여정', page: 'dev-life' },
  { title: '보유 기술', page: 'about' },
  { title: '프로젝트', page: 'projects' },
  { title: '연락하기', page: 'contact' },
];

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerBg = navbar
    ? 'bg-white/95 backdrop-blur-md border-b border-black/5'
    : scrolled
      ? 'bg-white/90 backdrop-blur-md border-b border-black/5'
      : 'bg-white/75 backdrop-blur-sm border-b border-transparent';

  return (
    <header
      className={`w-full mx-auto px-4 fixed top-0 z-50 sm:px-20 transition-all duration-300 ${headerBg}`}
    >
      <div className='justify-between md:items-center md:flex'>
        <div>
          <div className='flex items-center justify-between py-3'>
            <NextLink href='/'>
              <div className='md:py-2 md:block group'>
                <div
                  className='inline-flex items-center gap-2.5 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105'
                  style={{ backgroundColor: '#ECE7E9' }}
                >
                  <div className='flex items-center justify-center w-9 h-9 bg-white/40 rounded-md backdrop-blur-sm'>
                    <span className='text-xl'>👩🏻‍💻</span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-gray-800 text-base font-bold leading-tight'>
                      hyonie
                    </span>
                    <span className='text-gray-600 text-xs font-medium leading-tight'>
                      Developer
                    </span>
                  </div>
                </div>
              </div>
            </NextLink>
            <div className='md:hidden'>
              <button
                type='button'
                onClick={() => setNavbar(!navbar)}
                aria-label={navbar ? '메뉴 닫기' : '메뉴 열기'}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div className='item-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
              {!pathName.includes('/project') &&
                NAV_ITEMS.map((item, index) => {
                  return (
                    <Link
                      to={item.page}
                      key={index}
                      activeClass='active'
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={() => setNavbar(false)}
                      className='block lg:inline-block text-neutral-900 hover:text-neutral-500 justify-center md:space-x-6 cursor-pointer'
                    >
                      {item.title}
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
