
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' }
  ];
  
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-2">Portfolio</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Créé avec passion pour mettre en valeur mes projets et compétences en développement web et design.
            </p>
          </div>
          
          <div className="flex space-x-4 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-background/80 transition-colors"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>© {currentYear} Portfolio AI. Tous droits réservés.</p>
            <p className="mt-1">
              Conçu et développé avec <span className="text-red-500">❤</span> et IA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
