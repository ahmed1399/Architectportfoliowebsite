import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0d0d0d] border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('projects')}
            className="tracking-wider transition-opacity hover:opacity-60 text-white"
          >
            ARCHITECTURE-TAREEF
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id)}
                className={`transition-opacity hover:opacity-60 ${
                  currentPage === link.id ? 'opacity-100' : 'opacity-50'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="p-2" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Navigate to different sections of the portfolio
              </SheetDescription>
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavigate(link.id)}
                    className={`text-left transition-opacity hover:opacity-60 ${
                      currentPage === link.id ? 'opacity-100' : 'opacity-50'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
