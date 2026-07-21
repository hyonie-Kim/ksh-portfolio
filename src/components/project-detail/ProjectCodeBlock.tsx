import React from 'react';
import { ProjectCodeData } from '@/types/project';

interface ProjectCodeBlockProps {
  code: ProjectCodeData;
}

export default function ProjectCodeBlock({ code }: ProjectCodeBlockProps) {
  return (
    <div className="print-avoid-break my-4">
      <pre className="overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800 leading-relaxed">
        <code className="whitespace-pre-wrap break-words">{code.content}</code>
      </pre>
    </div>
  );
}
