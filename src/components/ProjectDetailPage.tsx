import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  year: string;
  description: string;
  location?: string;
  area?: string;
  images: string[];
}

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetailPage({ project, onBack }: ProjectDetailPageProps) {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      {/* Full-Width Cover Image with Centered Title - Extends behind nav */}
      <div className="relative w-full h-[calc(60vh+5rem)] md:h-[calc(70vh+5rem)] -mt-20 overflow-hidden bg-white/5">
        <ImageWithFallback
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Centered Title */}
        <div className="absolute inset-0 flex items-center justify-center pt-20">
          <h1 className="text-title text-white text-center px-6">{project.title}</h1>
        </div>

        {/* Back Button */}
        <div className="absolute top-28 left-6 md:left-12">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-[#d9c7a4] transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </button>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-6 text-caption mb-8">
            <span>{project.year}</span>
            {project.location && <span>{project.location}</span>}
            {project.area && <span>{project.area}</span>}
          </div>
          <p className="text-body text-white/80 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Additional Project Images */}
      {project.images.length > 1 && (
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
          <div className="space-y-8">
            {project.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-video overflow-hidden bg-white/5">
                <ImageWithFallback
                  src={image}
                  alt={`${project.title} - Image ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
