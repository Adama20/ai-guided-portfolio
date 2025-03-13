
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useRevealAnimation } from '@/lib/animations';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  link?: string;
  index: number;
}

export default function ProjectCard({ title, description, imageSrc, tags, link, index }: ProjectCardProps) {
  const { ref, isVisible } = useRevealAnimation(0.1);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-xl transition-all duration-500 hover:shadow-xl",
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden rounded-xl">
        <img 
          src={imageSrc} 
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-all duration-700 ease-in-out",
            isHovered ? 'scale-105 blur-[2px]' : 'scale-100'
          )}
        />
      </div>
      
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-500",
          isHovered ? 'opacity-100' : 'opacity-90'
        )}
      >
        <div className={cn(
          "transform transition-transform duration-500",
          isHovered ? 'translate-y-0' : 'translate-y-8'
        )}>
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <Badge key={tag} className="bg-white/20 hover:bg-white/30 text-white text-xs">{tag}</Badge>
            ))}
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
          
          <p className={cn(
            "text-white/80 mb-4 text-sm transform transition-all duration-300 max-h-0 overflow-hidden",
            isHovered ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
          )}>
            {description}
          </p>
          
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <span className="text-sm font-medium">Voir le projet</span>
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
