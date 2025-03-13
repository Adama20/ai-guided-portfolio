
import PortfolioNavbar from '@/components/PortfolioNavbar';
import Footer from '@/components/Footer';
import { useRevealAnimation } from '@/lib/animations';
import { Briefcase, Calendar, Building, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: "Ingénieur Informatique Décisionnelle(BI) / Consultant Data",
    company: "SNCF VOYAGEURS",
    period: "Mai 2023 - Octobre 2024",
    type: "Alternance",
    location: "Bordeaux",
    realizations: [
      "Analyse des besoins et conception de solutions BI",
      "Collecte, transformation et fiabilisation des données",
      "Développement et optimisation des tableaux de bord Power BI",
      "Optimisation des performances et automatisation des processus",
      "Participation à des projets transverses (Power Apps)",
      "Déploiement, formation et accompagnement des utilisateurs"
    ],
    tools: ["Power BI", "Azure", "Python", "SQL", "M", "DAX", "SharePoint", "Power Automate", "PL/SQL", "SQL Server", "Power Query", "Trello", "Excel"]
  },
  {
    title: "Développeur Web",
    company: "SEOS-FRANCE",
    period: "Avril 2022 - Juin 2022",
    type: "Stage",
    location: "Toulouse",
    realizations: [
      "Développement et optimisation du site web de l'organisation",
      "Intégration d'un chatbot conversationnel",
      "Administration des serveurs et bases de données",
      "Implémentation d'interfaces modernes et réactives"
    ],
    tools: ["JavaScript", "Visual Studio", "MySQL", "IONOS", "Bootstrap", "FileZilla", "HTML5", "CSS3"]
  },
  {
    title: "Consultant Support Technique Systèmes et Données",
    company: "SEWACARD INDUSTRIE",
    period: "Mai 2018 - Août 2020",
    type: "CDD",
    location: "Dakar",
    realizations: [
      "Installation et configuration des systèmes",
      "Déploiement des postes de travail sous Linux et Windows",
      "Gestion des bases de données et serveurs",
      "Gestion de l'activité de support via ServiceNow",
      "Assistance et formation des utilisateurs",
      "Rédaction de documents techniques et fonctionnels"
    ],
    tools: ["Linux", "Windows", "ServiceNow", "SGBD"]
  }
];

export default function Experiences() {
  const { ref, isVisible } = useRevealAnimation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <PortfolioNavbar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Expériences professionnelles</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center mb-16">
              Mon parcours professionnel, enrichi par diverses expériences dans l'informatique décisionnelle, la data et le développement.
            </p>
            
            <div 
              ref={ref}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="max-w-4xl mx-auto space-y-12">
                {experiences.map((exp, index) => (
                  <ExperienceCard 
                    key={index}
                    experience={exp}
                    index={index}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

function ExperienceCard({ 
  experience, 
  index,
  isVisible
}: { 
  experience: any; 
  index: number;
  isVisible: boolean;
}) {
  return (
    <div 
      className="relative"
      style={{ 
        opacity: isVisible ? 1 : 0, 
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.7s ease-out',
        transitionDelay: `${index * 200}ms`
      }}
    >
      <div className="glass dark:bg-gray-800/50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
        <div className="flex flex-col space-y-4">
          {/* Header with badges */}
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <Badge variant="secondary" className="px-3 py-1 flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {experience.period}
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              {experience.type}
            </Badge>
            <Badge variant="outline" className="px-3 py-1 flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {experience.location}
            </Badge>
          </div>
          
          {/* Job title and company */}
          <div>
            <h3 className="text-xl font-bold">{experience.title}</h3>
            <p className="text-primary font-medium">{experience.company}</p>
          </div>
          
          {/* Realizations */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-2">
              RÉALISATIONS
            </h4>
            <ul className="space-y-2">
              {experience.realizations.map((item: string, i: number) => (
                <li key={i} className="flex items-start">
                  <div className="mt-0.5 mr-2 flex-shrink-0">
                    <div className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs">
                      {i + 1}
                    </div>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Tools & Technologies */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-2">
              OUTILS & TECHNOLOGIES
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.tools.map((tool: string, i: number) => (
                <Badge key={i} variant="secondary" className="bg-secondary/70">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
