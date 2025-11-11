import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ProjectsPage, type Project } from './components/ProjectsPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { Toaster } from './components/ui/sonner';

type PageView = 'projects' | 'about' | 'contact' | 'project-detail';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageView);
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentPage('project-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setCurrentPage('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'projects':
        return <ProjectsPage onProjectClick={handleProjectClick} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'project-detail':
        return selectedProject ? (
          <ProjectDetailPage project={selectedProject} onBack={handleBackToProjects} />
        ) : (
          <ProjectsPage onProjectClick={handleProjectClick} />
        );
      default:
        return <ProjectsPage onProjectClick={handleProjectClick} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d0d] text-white">
      <Navigation currentPage={currentPage === 'project-detail' ? 'projects' : currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
