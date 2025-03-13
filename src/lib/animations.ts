
import { useEffect, useState, useRef, useCallback } from 'react';

// Custom hook for reveal on scroll animations
export function useRevealAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  return { ref, isVisible };
}

// Custom hook for typewriter effect
export function useTypewriter(text: string, speed = 50, delay = 0) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    
    if (delay > 0) {
      timeoutId = setTimeout(() => startTyping(), delay);
    } else {
      startTyping();
    }
    
    function startTyping() {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
        }
      }, speed);
      
      return () => clearInterval(intervalId);
    }
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text, speed, delay]);

  return { displayText, isTyping };
}

// Custom hook for parallax effect
export function useParallax(speed = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollY = window.scrollY;
        ref.current.style.transform = `translateY(${scrollY * speed}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return ref;
}

// Custom hook for counting up numbers
export function useCountUp(endValue: number, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const [shouldStart, setShouldStart] = useState(!startOnView);
  const countRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(endValue * percentage));
      
      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [endValue, duration, shouldStart]);
  
  useEffect(() => {
    if (!startOnView || !countRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(countRef.current);
    
    return () => observer.disconnect();
  }, [startOnView]);
  
  return { count, countRef };
}

// Custom hook for staggered animations
export function useStaggeredAnimation(itemCount: number, delay = 100) {
  const getDelay = useCallback((index: number) => {
    return index * delay;
  }, [delay]);
  
  return { getDelay };
}

// Custom hook for animated cursor
export function useAnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    
    const updateCursorPosition = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    
    const handleMouseEnter = () => {
      cursor.classList.remove('opacity-0');
    };
    
    const handleMouseLeave = () => {
      cursor.classList.add('opacity-0');
    };
    
    window.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return cursorRef;
}

// Custom hook for hover effect
export function useHoverEffect() {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  
  const hoverProps = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  };
  
  return { isHovered, hoverProps };
}
