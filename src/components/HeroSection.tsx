import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  onScrollToProjects: () => void;
}

export function HeroSection({ onScrollToProjects }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden -mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 -top-20 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1672667178350-d56bf88ba343?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBoZXJvJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjI3MDYyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Architecture Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-title text-white mb-4">
          Hi there, I'm Tareef.
        </h1>
        <p className="text-subheader text-white/90">
          Scroll down to see my projects.
        </p>

        {/* Down Arrow */}
        <button
          onClick={onScrollToProjects}
          className="mt-12 inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/30 hover:border-[#d9c7a4] hover:bg-[#d9c7a4]/10 transition-all duration-300 animate-bounce p-[0px]"
          aria-label="Scroll to projects"
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
}
