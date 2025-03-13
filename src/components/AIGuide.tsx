
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useTypewriter } from '@/lib/animations';
import { Bot, Send, X, Minimize, Maximize } from 'lucide-react';

const INITIAL_MESSAGE = "Bonjour ! Je suis votre guide IA. Comment puis-je vous aider à naviguer dans ce portfolio ?";

const RESPONSES = {
  projects: "Je peux vous montrer les projets de développement web et design. Descendez à la section Projets pour découvrir des travaux variés combinant interfaces élégantes et fonctionnalités techniques avancées.",
  skills: "Les compétences principales incluent: React, TypeScript, Node.js, UI/UX Design, et intégration d'IA. Chaque projet démontre ces compétences dans des contextes pratiques.",
  contact: "Vous pouvez me contacter via le formulaire en bas de page ou directement par email. Je suis disponible pour discuter de projets freelance ou d'opportunités professionnelles.",
  experience: "Mon parcours inclut 5 ans d'expérience en développement web, spécialisé dans les interfaces modernes et l'intégration d'IA pour créer des expériences utilisateur innovantes.",
  default: "N'hésitez pas à explorer le portfolio. Vous pouvez me poser des questions sur les projets, compétences, ou expérience professionnelle à tout moment."
};

export default function AIGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: INITIAL_MESSAGE, isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Wait a bit before showing the AI guide button
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: inputValue, isUser: true }]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate AI thinking
    setTimeout(() => {
      let response = '';
      
      const userInput = inputValue.toLowerCase();
      if (userInput.includes('projet')) {
        response = RESPONSES.projects;
      } else if (userInput.includes('compétence') || userInput.includes('skill')) {
        response = RESPONSES.skills;
      } else if (userInput.includes('contact')) {
        response = RESPONSES.contact;
      } else if (userInput.includes('expérience') || userInput.includes('parcours')) {
        response = RESPONSES.experience;
      } else {
        response = RESPONSES.default;
      }
      
      setMessages(prev => [...prev, { text: response, isUser: false }]);
      setIsTyping(false);
    }, 1000);
  };
  
  if (!isOpen) return null;
  
  return (
    <div 
      className={`fixed bottom-4 right-4 z-40 flex flex-col transition-all duration-300 ease-out
        ${isMinimized ? 'h-14 w-14' : 'h-96 w-80 sm:w-96'}`}
    >
      {/* Chat header */}
      <div 
        className="glass rounded-t-xl flex items-center justify-between p-3 cursor-pointer"
        onClick={() => !isMinimized && setIsMinimized(true)}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Bot size={18} className="text-primary" />
          </div>
          {!isMinimized && (
            <span className="font-medium text-sm">Guide IA</span>
          )}
        </div>
        
        <div className="flex gap-1">
          {!isMinimized ? (
            <>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMinimized(true);
                }}
                className="p-1 hover:bg-secondary rounded-full transition-colors"
                aria-label="Minimize"
              >
                <Minimize size={14} />
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="p-1 hover:bg-secondary rounded-full transition-colors"
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </>
          ) : (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsMinimized(false);
              }}
              className="p-1 hover:bg-secondary rounded-full transition-colors"
              aria-label="Maximize"
            >
              <Maximize size={14} />
            </button>
          )}
        </div>
      </div>
      
      {!isMinimized && (
        <>
          {/* Messages area */}
          <div className="flex-1 bg-white/95 p-4 overflow-y-auto">
            <div className="flex flex-col gap-4">
              {messages.map((message, index) => (
                <div 
                  key={index}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      message.isUser 
                        ? 'bg-primary text-white rounded-tr-none' 
                        : 'bg-secondary text-primary rounded-tl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-secondary text-primary rounded-2xl rounded-tl-none p-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-primary/40 rounded-full animate-pulse"></span>
                      <span className="w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Input area */}
          <form 
            onSubmit={handleSubmit} 
            className="glass border-t p-3 rounded-b-xl flex gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Posez une question..."
              className="flex-1 bg-transparent border-none outline-none text-sm"
            />
            <Button 
              type="submit" 
              size="icon" 
              className="h-8 w-8"
              disabled={!inputValue.trim()}
            >
              <Send size={14} />
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
