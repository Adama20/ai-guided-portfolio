
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import ThemeSelector from './ThemeSelector';
import { motion } from 'framer-motion';

const navItems = [
  { text: 'Accueil', href: '/' },
  { text: 'À propos', href: '/about' },
  { text: 'Expériences', href: '/experiences' },
  { text: 'Compétences', href: '/skills' },
  { text: 'Formations', href: '/education' },
  { text: 'Projets', href: '/projects' },
  { text: 'Contact', href: '/contact' },
];

const PortfolioNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-bold">
            Adama<span className="text-primary">LO</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink 
                key={item.href} 
                href={item.href} 
                text={item.text}
                isActive={location.pathname === item.href}
              />
            ))}
            <ThemeSelector />
          </nav>
          
          {/* Mobile Navigation Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeSelector />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-background/95 backdrop-blur-md shadow-lg"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`py-3 px-4 rounded-lg transition-colors ${
                  location.pathname === item.href 
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-secondary'
                }`}
                onClick={closeMenu}
              >
                {item.text}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

const NavLink = ({ href, text, isActive }: { href: string; text: string; isActive: boolean }) => {
  return (
    <Link
      to={href}
      className={`relative px-3 py-2 rounded-md transition-colors ${
        isActive ? 'text-primary' : 'hover:text-primary'
      }`}
    >
      {text}
      {isActive && (
        <motion.div
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary mx-3"
          transition={{ type: 'spring', duration: 0.5 }}
        />
      )}
    </Link>
  );
};

export default PortfolioNavbar;
