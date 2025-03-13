
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useTypewriter } from '@/lib/animations';
import { Bot, Send, X, Minimize, Maximize } from 'lucide-react';

const INITIAL_MESSAGE = "Bonjour ! Je suis votre guide personnel pour ce portfolio. En quoi puis-je vous éclairer aujourd'hui ?";

// Réponses améliorées pour simuler une conversation plus naturelle et savante
const RESPONSES = {
  projects: "Ah, les projets ! Ils reflètent l'évolution d'un parcours créatif et technique. Vous trouverez dans la section Projets une collection d'œuvres où l'esthétique visuelle s'allie à l'ingéniosité technique. Chaque création raconte une histoire d'innovation et de résolution de problèmes.",
  
  skills: "Les compétences sont le fruit d'un apprentissage continu. Le portfolio présente une maîtrise approfondie de React et TypeScript pour l'architecture frontend, Node.js pour les solutions backend, et une expertise en conception UX/UI pour créer des expériences mémorables. L'intégration d'intelligence artificielle vient compléter cet écosystème de compétences pour des solutions véritablement avant-gardistes.",
  
  contact: "La communication est le pont entre les idées et leur réalisation. Vous pouvez initier une conversation professionnelle via le formulaire de contact en bas de page ou directement par courriel. Chaque échange est une opportunité de collaboration potentielle, que ce soit pour un projet spécifique ou une relation professionnelle à plus long terme.",
  
  experience: "L'expérience est un voyage fascinant ! Avec cinq années dédiées au développement web, ce parcours est marqué par une spécialisation dans la création d'interfaces modernes et l'intégration de solutions d'intelligence artificielle. Chaque étape professionnelle a été une pierre à l'édifice d'une expertise toujours en évolution.",
  
  education: "La formation académique et l'apprentissage autodidacte se complètent harmonieusement dans ce parcours. Une solide base théorique en informatique se marie à une curiosité insatiable pour les nouvelles technologies, créant ainsi un profil polyvalent capable de s'adapter aux évolutions constantes du domaine.",
  
  philosophy: "La philosophie qui guide ce travail repose sur trois piliers : l'élégance dans la simplicité, l'accessibilité pour tous, et l'innovation responsable. Chaque ligne de code écrite vise à servir l'utilisateur final tout en respectant les meilleures pratiques de l'industrie.",
  
  default: "Votre curiosité est le moteur de toute découverte ! N'hésitez pas à explorer plus en détail les différentes facettes de ce portfolio. Je suis à votre disposition pour approfondir n'importe quel aspect qui susciterait votre intérêt - projets, compétences techniques, expériences professionnelles ou vision créative."
};

// Fonction pour analyser le contexte de la conversation
const analyzeContext = (message, previousMessages) => {
  const userInput = message.toLowerCase();
  const conversationHistory = previousMessages
    .filter(msg => msg.isUser)
    .map(msg => msg.text.toLowerCase())
    .join(' ');
  
  // Analyse contextuelle
  if (userInput.includes('merci') || userInput.includes('intéressant')) {
    return "Je vous en prie. C'est un plaisir d'échanger avec vous sur ces sujets passionnants. Y a-t-il autre chose que vous aimeriez explorer ?";
  }
  
  if (userInput.includes('pourquoi') && 
     (userInput.includes('important') || userInput.includes('portfolio'))) {
    return "Excellente question ! Un portfolio est bien plus qu'une vitrine de projets — c'est le reflet d'une pensée créative et d'une approche méthodologique. Il permet de communiquer non seulement ce que l'on fait, mais surtout comment on le fait et pourquoi. C'est un dialogue silencieux avec les visiteurs avant même qu'une conversation réelle ne s'établisse.";
  }
  
  if ((userInput.includes('conseil') || userInput.includes('recommandation')) && 
      (userInput.includes('développeur') || userInput.includes('carrière'))) {
    return "En matière de développement professionnel, je recommanderais trois axes : la maîtrise approfondie de vos outils principaux, l'ouverture constante aux technologies émergentes, et la participation active à la communauté. L'équilibre entre spécialisation et polyvalence est souvent la clé d'une carrière épanouissante dans notre domaine en perpétuelle évolution.";
  }
  
  if (userInput.includes('ia') || userInput.includes('intelligence artificielle')) {
    return "L'intelligence artificielle transforme profondément notre façon de concevoir et développer des applications. Dans ce portfolio, vous remarquerez son intégration subtile pour améliorer l'expérience utilisateur, comme notre conversation actuelle. L'IA n'est pas une fin en soi, mais un outil puissant pour résoudre des problèmes complexes et créer des expériences plus intuitives et personnalisées.";
  }
  
  // Analyse des motifs de conversation
  if (conversationHistory.includes('projet') && userInput.includes('préféré')) {
    return "Parmi les projets présentés, le Dashboard analytique représente un défi particulièrement stimulant. La complexité de visualiser des données multidimensionnelles tout en maintenant une interface intuitive a nécessité une approche novatrice. Ce projet illustre particulièrement bien la fusion entre rigueur technique et sensibilité utilisateur.";
  }
  
  // Réponses standard basées sur les mots-clés
  if (userInput.includes('projet')) {
    return RESPONSES.projects;
  } else if (userInput.includes('compétence') || userInput.includes('skill')) {
    return RESPONSES.skills;
  } else if (userInput.includes('contact')) {
    return RESPONSES.contact;
  } else if (userInput.includes('expérience') || userInput.includes('parcours')) {
    return RESPONSES.experience;
  } else if (userInput.includes('formation') || userInput.includes('education')) {
    return RESPONSES.education;
  } else if (userInput.includes('philosophie') || userInput.includes('approche')) {
    return RESPONSES.philosophy;
  }
  
  return RESPONSES.default;
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
    
    // Simulate AI thinking with a variable delay based on message complexity
    const thinkingTime = Math.min(1000 + inputValue.length * 10, 3000);
    
    setTimeout(() => {
      const response = analyzeContext(inputValue, messages);
      setMessages(prev => [...prev, { text: response, isUser: false }]);
      setIsTyping(false);
    }, thinkingTime);
  };
  
  // Fonction pour gérer les suggestions de questions
  const handleSuggestionClick = (suggestion: string) => {
    setMessages(prev => [...prev, { text: suggestion, isUser: true }]);
    setIsTyping(true);
    
    setTimeout(() => {
      const response = analyzeContext(suggestion, messages);
      setMessages(prev => [...prev, { text: response, isUser: false }]);
      setIsTyping(false);
    }, 1500);
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
          
          {/* Suggestions (visible uniquement si peu de messages) */}
          {messages.length < 3 && (
            <div className="bg-white/95 px-4 py-2 border-t border-secondary/20">
              <p className="text-xs text-muted-foreground mb-2">Questions suggérées :</p>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => handleSuggestionClick("Parlez-moi des projets récents")}
                  className="text-xs bg-secondary/30 hover:bg-secondary/50 text-primary rounded-full px-2 py-1 transition-colors"
                >
                  Projets récents ?
                </button>
                <button 
                  onClick={() => handleSuggestionClick("Quelle est votre philosophie de développement ?")}
                  className="text-xs bg-secondary/30 hover:bg-secondary/50 text-primary rounded-full px-2 py-1 transition-colors"
                >
                  Philosophie de développement ?
                </button>
              </div>
            </div>
          )}
          
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
