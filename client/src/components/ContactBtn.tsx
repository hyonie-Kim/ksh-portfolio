"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);
export default function ContactBtn() {
  return (
    <div>
      <MotionLink
        href="/contact"
        className="bg-yellow-500 rounded-xl py-1 px-4 mt-2"
        whileHover={{ scale: 1.5 }}
      >
        ContactBtn
      </MotionLink>
    </div>
  );
}
