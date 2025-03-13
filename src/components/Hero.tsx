
import { useTypewriter, useParallax } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { displayText: title } = useTypewriter("Bienvenue sur mon portfolio", 50, 500);
  const { displayText: subtitle } = useTypewriter("Guidé par l'intelligence artificielle", 50, 2000);
  
  const parallaxBg = useParallax(0.05);
  const parallaxContent = useParallax(-0.05);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        ref={parallaxBg}
        className="absolute inset-0 bg-gradient-to-br from-white to-secondary opacity-50"
      />
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div 
        ref={parallaxContent}
        className="section-container relative z-10 flex flex-col items-center justify-center text-center"
      >
        <div className="reveal-animation">
          <div className="inline-block mb-2 px-3 py-1 rounded-full bg-muted text-xs font-medium tracking-wide">
            PORTFOLIO PERSONNEL
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {title}
            <span className="animate-pulse ml-0.5">_</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <Button 
              onClick={scrollToProjects}
              className="px-8 py-6 text-md rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              Découvrir mes projets
            </Button>
            <Button 
              variant="outline" 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-6 text-md rounded-full hover:bg-secondary/80 transition-all duration-300"
            >
              Me contacter
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={scrollToProjects}
          className="text-primary/70 hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
