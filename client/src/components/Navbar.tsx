"use client";
import React, { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
interface NavItem {
  label: string;
  page: string;
}
const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Project", page: "project" },
];
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3">
            <div className="md:py-5 md:block">
              <h2 className="text-2xl font-bold">{"Sehyeon's Portfolio"}</h2>
            </div>
            <div>
              <button className="md:hidden">
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="item-center justify-center md:flex md:space-x-6">
              {NAV_ITEMS.map((item, index) => {
                return <a key={index}>{item.label}</a>;
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
