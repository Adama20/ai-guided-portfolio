
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
import { useTypewriter } from '@/lib/animations';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { displayText } = useTypewriter("Développé avec passion et intelligence artificielle", 40, 300);
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-700' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email', color: 'hover:text-green-500' }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-secondary py-12 relative">
      <div className="absolute right-6 bottom-6 md:right-10 md:bottom-10">
        <Button 
          onClick={scrollToTop}
          className="rounded-full h-10 w-10 p-0 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          aria-label="Remonter en haut"
        >
          <ArrowUp size={18} />
        </Button>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-2">Portfolio</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Créé avec passion pour mettre en valeur mes projets et compétences en développement web et design.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground ${link.color} hover:bg-background/80 transition-all duration-300 transform hover:-translate-y-1`}
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>© {currentYear} Portfolio AI. Tous droits réservés.</p>
            <p className="mt-1">
              {displayText}
              <Heart size={14} className="inline-block ml-1 text-red-500 animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
