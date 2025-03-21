
import PortfolioNavbar from '@/components/PortfolioNavbar';
import Footer from '@/components/Footer';
import { useRevealAnimation } from '@/lib/animations';
import { Database, Code, Server, BarChart3, Lightbulb, Workflow, PieChart, Globe } from 'lucide-react';

const skillCategories = [
  {
    name: "Data & BI",
    icon: BarChart3,
    skills: [
      { name: "Power BI", level: 90 },
      { name: "SQL Server", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "Oracle", level: 75 },
      { name: "ETL (Power Query)", level: 85 },
      { name: "Data Modeling", level: 80 },
      { name: "DAX", level: 85 },
      { name: "M Language", level: 80 },
    ]
  },
  {
    name: "Programmation",
    icon: Code,
    skills: [
      { name: "Python", level: 85 },
      { name: "PL/SQL", level: 80 },
      { name: "T-SQL", level: 80 },
      { name: "R", level: 70 },
      { name: "Java", level: 65 },
      { name: "HTML/CSS", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "VBA", level: 65 },
    ]
  },
  {
    name: "Intelligence Artificielle",
    icon: Lightbulb,
    skills: [
      { name: "Régression", level: 75 },
      { name: "Clustering", level: 70 },
      { name: "Classification", level: 70 },
      { name: "CNN", level: 65 },
    ]
  },
  {
    name: "Systèmes & Réseaux",
    icon: Server,
    skills: [
      { name: "Windows", level: 85 },
      { name: "Linux", level: 75 },
      { name: "TCP/IP", level: 70 },
      { name: "Scripting (Bash, PowerShell)", level: 75 },
    ]
  },
  {
    name: "Cloud & Services",
    icon: Globe,
    skills: [
      { name: "Microsoft Azure", level: 75 },
      { name: "Microsoft Fabric", level: 70 },
      { name: "Google Cloud Platform", level: 50 },
      { name: "SharePoint", level: 80 },
      { name: "Power Automate", level: 85 },
    ]
  },
  {
    name: "Méthodologie & Gestion",
    icon: Workflow,
    skills: [
      { name: "Méthode Agile", level: 80 },
      { name: "Trello", level: 85 },
      { name: "Git", level: 75 },
    ]
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col">
      <PortfolioNavbar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Compétences</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center mb-16">
              Découvrez mon ensemble de compétences techniques et mon expertise dans les domaines de la data, de l'informatique décisionnelle et du développement.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <SkillCategory
                  key={index}
                  category={category}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

function SkillCategory({ 
  category, 
  index 
}: { 
  category: { 
    name: string; 
    icon: any; 
    skills: { name: string; level: number }[] 
  }; 
  index: number 
}) {
  const { ref, isVisible } = useRevealAnimation(0.1);
  const Icon = category.icon;
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="glass rounded-xl p-6 h-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-xl font-bold">{category.name}</h2>
        </div>
        
        <div className="space-y-4">
          {category.skills.map((skill, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">{skill.name}</h3>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-1000 ease-out rounded-full"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%', 
                    transitionDelay: `${idx * 100 + 300}ms` 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
