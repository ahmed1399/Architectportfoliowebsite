import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  year: string;
  image: string;
  onClick: () => void;
}

export function ProjectCard({ title, year, image, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative aspect-video overflow-hidden bg-white/5 transition-all duration-500"
    >
      <ImageWithFallback
        src={image}
        alt={title}
        className={`w-full h-full object-cover transition-all duration-500 ${
          isHovered ? 'scale-105 brightness-50' : 'scale-100 brightness-100'
        }`}
      />

      {/* Overlay with title and year */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h3 className="text-subheader mb-2">{title}</h3>
        <p className="text-caption">{year}</p>
      </div>
    </button>
  );
}
