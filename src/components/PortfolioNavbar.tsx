
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, User, Briefcase, Code, GraduationCap, Home, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeSelector from './ThemeSelector';

const navLinks = [
  { name: "Accueil", href: "/", icon: Home },
  { name: "À propos", href: "/about", icon: User },
  { name: "Expériences", href: "/experiences", icon: Briefcase },
  { name: "Compétences", href: "/skills", icon: Code },
  { name: "Formation", href: "/education", icon: GraduationCap },
  { name: "Contact", href: "/contact", icon: Mail }
];

export default function PortfolioNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set current path based on location
  useEffect(() => {
    const path = window.location.hash.replace('#', '') || '/';
    setCurrentSection(path);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/"
          className="text-2xl font-bold tracking-tight flex items-center gap-2"
        >
          <span className="text-primary">Adama LO</span>
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors flex items-center gap-1.5",
                currentSection === link.href 
                  ? "text-primary font-semibold" 
                  : "text-muted-foreground hover:text-primary"
              )}
              onClick={() => setCurrentSection(link.href)}
            >
              <link.icon className="h-4 w-4" />
              <span>{link.name}</span>
            </Link>
          ))}
          <ThemeSelector />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeSelector />
          <button 
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t p-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "px-4 py-2 rounded-md transition-colors flex items-center gap-2",
                  currentSection === link.href 
                    ? "bg-primary/10 text-primary" 
                    : "hover:bg-secondary text-muted-foreground"
                )}
                onClick={() => {
                  setCurrentSection(link.href);
                  setIsMenuOpen(false);
                }}
              >
                <link.icon className="h-5 w-5" />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
