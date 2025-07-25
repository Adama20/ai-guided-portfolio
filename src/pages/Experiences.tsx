
import PortfolioNavbar from '@/components/PortfolioNavbar';
import Footer from '@/components/Footer';
import { useRevealAnimation } from '@/lib/animations';
import { Briefcase, Calendar, Building, MapPin, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    title: "Consultant Data Ingénieur | Data Analyst",
    company: "Indépendant",
    period: "Depuis janvier 2025",
    type: "Freelance",
    location: "Bordeaux",
    realizations: [
      {
        title: "Audit des SI pour évaluer la maturité data et recommander des solutions",
        details: [
          "Évaluation de l'architecture data existante et identification des axes d'amélioration",
          "Recommandation de solutions adaptées aux besoins métiers et contraintes techniques"
        ]
      },
      {
        title: "Conception de Data Warehouse et modélisation décisionnelle",
        details: [
          "Conception d'architectures de données scalables et performantes",
          "Modélisation dimensionnelle pour l'aide à la décision"
        ]
      },
      {
        title: "Déploiement de pipelines de données et création de tableaux de bord",
        details: [
          "Automatisation des flux de données avec des outils ETL/ELT",
          "Développement de dashboards interactifs pour le pilotage métier"
        ]
      },
      {
        title: "Accompagnement à la transformation numérique",
        details: [
          "Support technique et formation aux outils analytiques",
          "Accompagnement des équipes dans l'adoption de nouvelles technologies"
        ]
      }
    ],
    tools: ["Python", "SQL", "Power BI", "Azure", "GCP", "Dataiku", "Talend", "Git"]
  },
  {
    title: "Analytics & Data Engineer",
    company: "SNCF VOYAGEURS",
    period: "Mai 2023 - Décembre 2024",
    type: "Alternance",
    location: "Bordeaux",
    realizations: [
      {
        title: "Analyse, structuration, et formalisation des besoins métiers",
        details: [
          "Analyser et structurer les besoins métiers en collaboration avec les équipes QSE",
          "Formaliser les spécifications techniques pour la conception de solutions adaptées"
        ]
      },
      {
        title: "Extraction et traitement de données avec SQL",
        details: [
          "Développement de requêtes SQL complexes pour l'extraction de données",
          "Optimisation des performances des requêtes sur de gros volumes de données"
        ]
      },
      {
        title: "Analyse et préparation des données avec Azure et Dataiku",
        details: [
          "Profiling et mapping des données pour garantir leur qualité",
          "Gestion des métadonnées et création de jeux de données structurés",
          "Développement de pipelines de données automatisés"
        ]
      },
      {
        title: "Modélisation de Data Warehouse",
        details: [
          "Conception de schémas en étoile et flocon pour l'optimisation des performances",
          "Application des principes de normalisation et dénormalisation",
          "Mise en place d'architectures décisionnelles scalables"
        ]
      },
      {
        title: "Automatisation de processus avec Power BI Service et Python",
        details: [
          "Développement de scripts Python pour l'automatisation des tâches",
          "Mise en place de notifications et rafraîchissements automatiques",
          "Création de scénarios métiers automatisés"
        ]
      },
      {
        title: "Création de tableaux de bord avec Power BI",
        details: [
          "Développement de dashboards interactifs utilisant Python, DAX et SQL",
          "Création de KPIs et indicateurs métiers avancés",
          "Optimisation des performances des rapports"
        ]
      }
    ],
    tools: ["Power BI", "Azure", "Dataiku", "Python", "SQL", "DAX", "Power Query", "Power Automate", "Trello"]
  },
  {
    title: "Data Analyst",
    company: "Sewacard - Banque & Monétique",
    period: "Janvier 2021 - Avril 2023",
    type: "CDD",
    location: "Bordeaux",
    realizations: [
      {
        title: "Développement de tableaux de bord Power BI",
        details: [
          "Création de dashboards pour l'analyse des performances opérationnelles",
          "Développement d'indicateurs de suivi de la production industrielle"
        ]
      },
      {
        title: "Modélisation des données",
        details: [
          "Modélisation des données issues de PostgreSQL et SharePoint",
          "Nettoyage, transformation et intégration dans Power BI via Power Query et DAX"
        ]
      },
      {
        title: "Automatisation des processus de reporting",
        details: [
          "Automatisation des mises à jour des jeux de données avec Power BI Service",
          "Optimisation des processus de reporting pour réduire les tâches manuelles"
        ]
      },
      {
        title: "Support IT pour les environnements analytiques",
        details: [
          "Déploiement des environnements analytiques",
          "Optimisation des connexions Azure et PostgreSQL"
        ]
      },
      {
        title: "Formation et accompagnement des utilisateurs",
        details: [
          "Formation des équipes sur les outils de dataViz",
          "Accompagnement dans l'adoption des nouveaux processus analytiques"
        ]
      }
    ],
    tools: ["Power BI", "PostgreSQL", "SharePoint", "Power Query", "DAX", "Azure", "Power BI Service"]
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
          
          {/* Website Link for SEOS-FRANCE */}
          {experience.website && (
            <div className="mt-1">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1.5"
                onClick={() => window.open(experience.website, '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
                Voir le site développé
              </Button>
            </div>
          )}
          
          {/* Realizations */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-4">
              RÉALISATIONS
            </h4>
            <div className="space-y-6">
              {experience.realizations.map((item: any, i: number) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs">
                        {i + 1}
                      </div>
                    </div>
                    <h5 className="font-medium">{item.title}</h5>
                  </div>
                  
                  {item.details && (
                    <ul className="ml-7 space-y-1.5">
                      {item.details.map((detail: string, j: number) => (
                        <li key={j} className="text-muted-foreground">
                          • {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
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
