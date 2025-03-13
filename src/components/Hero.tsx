
import { useTypewriter, useParallax } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight, Wand2 } from 'lucide-react';
import { useRef, useEffect } from 'react';

export default function Hero() {
  const { displayText: title } = useTypewriter("Bienvenue sur mon portfolio", 50, 500);
  const { displayText: subtitle } = useTypewriter("Guidé par l'intelligence artificielle", 50, 2000);
  
  const parallaxBg = useParallax(0.05);
  const parallaxContent = useParallax(-0.05);
  const mouseMoveRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Mouse follow effect for the gradient orbs
  useEffect(() => {
    const element = mouseMoveRef.current;
    if (!element) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const orbs = element.querySelectorAll('.gradient-orb');
      
      orbs.forEach((orb, index) => {
        const htmlOrb = orb as HTMLElement;
        const speed = index === 0 ? 0.05 : 0.03;
        const x = (clientX - window.innerWidth / 2) * speed;
        const y = (clientY - window.innerHeight / 2) * speed;
        
        htmlOrb.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" ref={mouseMoveRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        ref={parallaxBg}
        className="absolute inset-0 bg-gradient-to-br from-white to-secondary opacity-50"
      />
      
      <div className="absolute inset-0">
        <div className="gradient-orb absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="gradient-orb absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="gradient-orb absolute top-1/3 right-1/3 w-40 h-40 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div 
        ref={parallaxContent}
        className="section-container relative z-10 flex flex-col items-center justify-center text-center"
      >
        <div className="reveal-animation">
          <div className="mb-2 px-3 py-1 rounded-full bg-primary/10 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-primary">
            <Wand2 size={12} className="animate-pulse" />
            <span>PORTFOLIO INTELLIGENT</span>
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
              className="px-8 py-6 text-md rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <span>Découvrir mes projets</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-6 text-md rounded-full hover:bg-secondary/80 transition-all duration-300 hover:shadow-md"
            >
              Me contacter
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button 
          onClick={scrollToProjects}
          className="text-primary/70 hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
      
      {/* Animated lines in background */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
        
        <div className="absolute top-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute top-2/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute top-3/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>
    </section>
  );
}
