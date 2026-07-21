import React from 'react';
import Image from 'next/image';
import { ProjectImageData } from '@/types/project';

interface ProjectImageProps {
  image: ProjectImageData;
  className?: string;
}

export default function ProjectImage({ image, className = '' }: ProjectImageProps) {
  const isDiagram = image.type === 'diagram';
  const label = image.label ?? image.caption;

  return (
    <figure className={`print-avoid-break my-4 ${isDiagram ? 'w-full' : 'max-w-3xl'} ${className}`}>
      {label && !image.label && image.caption && (
        <figcaption className="mb-2 text-sm font-semibold text-gray-700">{label}</figcaption>
      )}
      {image.label && (
        <p className="mb-2 text-sm font-bold text-gray-800 tracking-wide">{image.label}</p>
      )}
      <div
        className={`relative w-full rounded-lg border border-gray-200 bg-gray-50 shadow-sm overflow-hidden ${
          isDiagram ? 'aspect-[16/9]' : 'aspect-video'
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain p-2"
          sizes={isDiagram ? '100vw' : '(max-width: 768px) 100vw, 768px'}
        />
      </div>
      {image.caption && image.label && (
        <figcaption className="mt-2 text-sm text-gray-500 text-center">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}
