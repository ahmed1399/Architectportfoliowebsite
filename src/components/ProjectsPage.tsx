import { useRef } from 'react';
import { ProjectCard } from './ProjectCard';
import { HeroSection } from './HeroSection';

interface Project {
  id: number;
  title: string;
  year: string;
  description: string;
  location?: string;
  area?: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Skyline Residence',
    year: '2024',
    location: 'Dubai, UAE',
    area: '450 sqm',
    description:
      'A contemporary residential project that integrates seamlessly with its urban context. The design emphasizes vertical space, natural light, and sustainability through innovative material choices and passive climate control strategies. Floor-to-ceiling glass walls blur the boundaries between interior and exterior, while carefully positioned overhangs provide shade and privacy.',
    images: [
      'https://images.unsplash.com/photo-1756227584303-f1400daaa69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjI2MzUwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: 2,
    title: 'Desert House',
    year: '2023',
    location: 'Al Ain, UAE',
    area: '320 sqm',
    description:
      'Minimalist residential architecture designed for the harsh desert climate. Clean lines and geometric forms create a striking contrast with the natural landscape while maintaining thermal efficiency and privacy. The house features thick walls, small openings on the south side, and large openings facing north to capture prevailing breezes.',
    images: [
      'https://images.unsplash.com/photo-1655025074116-119793238a0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaG91c2UlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjI2MDg5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: 3,
    title: 'Concrete Pavilion',
    year: '2023',
    location: 'Sharjah, UAE',
    area: '180 sqm',
    description:
      'An experimental structure exploring the sculptural qualities of concrete. The pavilion serves as both a functional gathering space and an artistic statement, pushing the boundaries of material expression. Its cantilevered roof appears to float above the space, creating dramatic shadows throughout the day.',
    images: [
      'https://images.unsplash.com/photo-1569258592171-357ea26da4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjI3MDQ2Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: 4,
    title: 'Minimal Interior',
    year: '2024',
    location: 'Abu Dhabi, UAE',
    area: '280 sqm',
    description:
      'Interior renovation emphasizing spatial continuity and natural materials. The design creates a serene environment through careful attention to proportion, light, and material texture. A neutral palette of stone, wood, and plaster allows the architecture itself to become the focal point.',
    images: [
      'https://images.unsplash.com/photo-1698463110448-e00538510289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGFyY2hpdGVjdHVyZSUyMHNwYWNlfGVufDF8fHx8MTc2MjcwNDYzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: 5,
    title: 'Urban Tower',
    year: '2022',
    location: 'Dubai, UAE',
    area: '12,000 sqm',
    description:
      'A mixed-use development that redefines urban living through innovative stacking of public and private spaces. The design promotes community interaction while maintaining individual privacy. Ground floor retail activates the street, while residential units above enjoy panoramic views.',
    images: [
      'https://images.unsplash.com/photo-1681371770835-0f15b81b2f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBidWlsZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjI3MDQ2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: 6,
    title: 'Glass Atrium',
    year: '2024',
    location: 'Dubai, UAE',
    area: '850 sqm',
    description:
      'Corporate headquarters featuring a dramatic glass atrium that serves as the heart of the building. Natural light floods the interior spaces, reducing energy consumption while creating an inspiring work environment. The transparent facade reflects the surrounding cityscape.',
    images: [
      'https://images.unsplash.com/photo-1718066236074-13f8cf7ae93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGJ1aWxkaW5nJTIwbW9kZXJufGVufDF8fHx8MTc2MjcwNjI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: 7,
    title: 'Residential Complex',
    year: '2023',
    location: 'Abu Dhabi, UAE',
    area: '5,600 sqm',
    description:
      'Multi-family residential development that balances privacy and community. Each unit features private outdoor space while shared courtyards encourage neighborly interaction. Traditional mashrabiya screens provide shade and visual interest to the facade.',
    images: [
      'https://images.unsplash.com/photo-1651093791352-2ae1c9e5e428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjI3MDYyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: 8,
    title: 'Contemporary Museum',
    year: '2022',
    location: 'Sharjah, UAE',
    area: '3,200 sqm',
    description:
      'Cultural institution designed to showcase contemporary art in naturally lit galleries. The building itself becomes a sculpture in the urban landscape, with its distinctive form visible from multiple vantage points. Interior spaces flow seamlessly, guiding visitors through the collection.',
    images: [
      'https://images.unsplash.com/photo-1664786063671-5f4f91e770cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjAzNzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: 9,
    title: 'Office Tower',
    year: '2023',
    location: 'Dubai, UAE',
    area: '18,000 sqm',
    description:
      'Sustainable office building incorporating green terraces and advanced climate control systems. The stepped form reduces wind loads while providing outdoor spaces on multiple levels. Solar shading devices adjust automatically to optimize daylight while minimizing heat gain.',
    images: [
      'https://images.unsplash.com/photo-1611736362199-2f7e76ebeca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjI2MjY2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: 10,
    title: 'Cultural Center',
    year: '2024',
    location: 'Abu Dhabi, UAE',
    area: '4,500 sqm',
    description:
      'Multi-purpose cultural facility housing performance spaces, galleries, and community rooms. The design draws inspiration from traditional regional architecture while employing contemporary construction techniques. A central courtyard serves as the organizing element.',
    images: [
      'https://images.unsplash.com/photo-1762106400715-a26d5aee0f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGNlbnRlciUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MjcwNjI2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: 11,
    title: 'Hillside Villa',
    year: '2023',
    location: 'Ras Al Khaimah, UAE',
    area: '550 sqm',
    description:
      'Luxury residence carved into a hillside, taking advantage of natural topography for privacy and views. Terraced gardens cascade down the slope, while interior spaces open onto multiple levels of outdoor living areas. Local stone and timber ground the architecture in its context.',
    images: [
      'https://images.unsplash.com/photo-1743208552160-b831247b158d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjI3MDYyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: 12,
    title: 'Public Library',
    year: '2024',
    location: 'Sharjah, UAE',
    area: '2,800 sqm',
    description:
      'Modern library designed to be a beacon of knowledge and community gathering. Generous reading spaces feature abundant natural light, while quiet study areas provide privacy. The building\'s distinctive geometric form makes it a landmark in the neighborhood.',
    images: [
      'https://images.unsplash.com/photo-1682854494783-bd851a8c4c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MjY3MDQ1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: 13,
    title: 'Courtyard House',
    year: '2022',
    location: 'Al Ain, UAE',
    area: '380 sqm',
    description:
      'Traditional courtyard typology reinterpreted for contemporary living. The central outdoor space provides natural ventilation and daylight to surrounding rooms while ensuring privacy from the street. Water features and planted areas create a microclimate.',
    images: [
      'https://images.unsplash.com/photo-1704458162479-42b5e0023c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydHlhcmQlMjBob3VzZXxlbnwxfHx8fDE3NjI3MDYyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: 14,
    title: 'Garden Pavilion',
    year: '2023',
    location: 'Dubai, UAE',
    area: '120 sqm',
    description:
      'Lightweight structure serving as an event space within a botanical garden. The design celebrates the beauty of the surrounding landscape through transparency and minimal material palette. Sliding glass panels allow the space to be fully open or enclosed.',
    images: [
      'https://images.unsplash.com/photo-1623207614186-7c559114e60b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXZpbGlvbiUyMHN0cnVjdHVyZXxlbnwxfHx8fDE3NjI3MDYyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: 15,
    title: 'Art Gallery',
    year: '2024',
    location: 'Dubai, UAE',
    area: '1,400 sqm',
    description:
      'Commercial gallery space designed for maximum flexibility. Movable walls and adjustable lighting systems allow curators to create unique environments for each exhibition. The minimal aesthetic ensures artworks remain the focus.',
    images: [
      'https://images.unsplash.com/photo-1549272427-4fd45418a8c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxsZXJ5JTIwc3BhY2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNzA2MjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
  {
    id: 16,
    title: 'Waterfront Residence',
    year: '2022',
    location: 'Dubai Marina, UAE',
    area: '620 sqm',
    description:
      'Luxury home embracing its waterfront location through extensive glazing and outdoor terraces. The design maximizes views while providing shade through deep overhangs and louvered screens. Interior spaces flow seamlessly to exterior decks and a private infinity pool.',
    images: [
      'https://images.unsplash.com/photo-1756227584303-f1400daaa69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjI2MzUwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
  },
];

interface ProjectsPageProps {
  onProjectClick: (project: Project) => void;
}

export function ProjectsPage({ onProjectClick }: ProjectsPageProps) {
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection onScrollToProjects={scrollToProjects} />

      {/* Projects Grid */}
      <div ref={projectsRef} className="max-w-[1800px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              year={project.year}
              image={project.images[0]}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export type { Project };
