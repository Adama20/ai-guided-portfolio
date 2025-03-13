
import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useRevealAnimation, useHoverEffect } from '@/lib/animations';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  link?: string;
  githubLink?: string;
  index: number;
}

export default function ProjectCard({ 
  title, 
  description, 
  imageSrc, 
  tags, 
  link, 
  githubLink, 
  index 
}: ProjectCardProps) {
  const { ref, isVisible } = useRevealAnimation(0.1);
  const { isHovered, hoverProps } = useHoverEffect();
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  // 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isHovered) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
  };
  
  return (
    <div 
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-xl transition-all duration-500",
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div 
        ref={cardRef}
        {...hoverProps}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          resetRotation();
          hoverProps.onMouseLeave();
        }}
        className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        style={{
          transform: isHovered ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)` : 'perspective(1000px) rotateX(0) rotateY(0)',
          transition: 'transform 0.3s ease'
        }}
      >
        <div className="aspect-video overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title}
            className={cn(
              "w-full h-full object-cover transition-all duration-700 ease-in-out",
              isHovered ? 'scale-110 filter brightness-90' : 'scale-100'
            )}
          />
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="text-xs font-medium bg-secondary/70 hover:bg-secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-3 mt-4">
            {link && (
              <Button 
                size="sm" 
                className="gap-1.5 group/btn"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(link, '_blank');
                }}
              >
                <span>Voir le projet</span>
                <ExternalLink size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Button>
            )}
            
            {githubLink && (
              <Button 
                size="sm" 
                variant="outline"
                className="gap-1.5"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(githubLink, '_blank');
                }}
              >
                <Github size={14} />
                <span>Code source</span>
              </Button>
            )}
          </div>
        </div>
        
        <div className={cn(
          "absolute top-3 right-3 h-24 w-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full blur-2xl transition-opacity duration-300",
          isHovered ? 'opacity-100' : 'opacity-0'
        )} />
      </div>
    </div>
  );
}
