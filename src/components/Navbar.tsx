'use client';
import React, { useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
// import Link from "next/link";
import { Link } from 'react-scroll';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
interface NavItem {
  title: string;
  page: string;
}
const NAV_ITEMS: Array<NavItem> = [
  { title: 'Home', page: 'home' },
  { title: 'Dev Life', page: 'dev-life' },
  { title: 'Skills', page: 'about' },
  { title: 'Projects', page: 'projects' },
  { title: 'Contact', page: 'contact' },
];
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const pathName = usePathname();
  return (
    <header className='w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 sm:px-20'>
      <div className='justify-between md:items-center md:flex'>
        <div>
          <div className='flex items-center justify-between py-3'>
            <NextLink href='/'>
              <div className='md:py-2 md:block'>
                <h2 className='text-2xl font-bold'>{"<Portfolio name='김세현'/>"}</h2>
              </div>
            </NextLink>
            <div className='md:hidden'>
              <button onClick={() => setNavbar(!navbar)}>
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
                      // href={`#${item.page}`}
                      onClick={() => setNavbar(!navbar)}
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
