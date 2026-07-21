'use client';

import React from 'react';

export default function PrintPdfButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print w-full px-4 py-2.5 rounded-lg text-sm font-medium border border-gray-200 text-gray-700 hover:border-teal-300 hover:text-teal-800 transition-colors"
    >
      PDF로 저장
    </button>
  );
}
