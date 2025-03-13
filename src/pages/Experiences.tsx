
import PortfolioNavbar from '@/components/PortfolioNavbar';
import Footer from '@/components/Footer';
import { useRevealAnimation } from '@/lib/animations';
import { Briefcase, Calendar, Building, MapPin, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    title: "Ingénieur Informatique Décisionnelle(BI) / Consultant Data",
    company: "SNCF VOYAGEURS",
    period: "Mai 2023 - Octobre 2024",
    type: "Alternance",
    location: "Bordeaux",
    realizations: [
      {
        title: "Analyse des besoins et conception de solutions BI",
        details: [
          "Analyser, structurer et formaliser les besoins métiers en collaboration avec les responsables du pôle QSE pour concevoir des solutions adaptées."
        ]
      },
      {
        title: "Collecte, transformation et fiabilisation des données",
        details: [
          "Collecter, traiter et transformer les données issues de diverses sources (SharePoint, Entrepôt de données, Application, SQL Server) afin de garantir leur qualité et leur cohérence.",
          "Centraliser et fiabiliser les données en améliorant la gouvernance et l'accessibilité des informations critiques."
        ]
      },
      {
        title: "Projets : Développement et optimisation des outils analytiques",
        details: [
          "Développer et perfectionner des tableaux de bord dans Power BI pour analyser la performance, la sécurité et l'impact environnemental à travers des KPIs et des modèles analytiques avancés.",
          "Refonte et optimisation des tableaux de bord pour la revue de sécurité, les formations électriques.",
          "Développeur des tableaux de bordeaux pour l'analyse environnementale et les initiatives d'écomobilité.",
          "Développement de solutions BI pour améliorer le suivi des actions stratégiques et opérationnelles du pôle QSE."
        ]
      },
      {
        title: "Optimisation des performances et automatisation",
        details: [
          "Migrer, intégrer et optimiser les données dans Power BI en appliquant des bonnes pratiques de modélisation (modèle en étoile, flocon, relationnel, DAX).",
          "Automatiser et fiabiliser les processus de reporting grâce à Power Automate et Power Query pour améliorer l'efficacité et réduire les erreurs humaines."
        ]
      },
      {
        title: "Participation à des projets transverses",
        details: [
          "Participation au développement d'une application Power Apps pour la gestion des précurseurs d'accidents et la prévention des risques.",
          "Mise en place d'indicateurs de performance et de suivi pour optimiser la gestion de la sécurité, de l'environnement et des formations internes."
        ]
      },
      {
        title: "Déploiement, formation et accompagnement des utilisateurs",
        details: [
          "Tester, déployer et maintenir les outils analytiques afin d'assurer leur bon fonctionnement et leur évolution en fonction des besoins.",
          "Former et assister les collaborateurs à l'utilisation des outils métiers pour améliorer leur autonomie et optimiser l'exploitation des données."
        ]
      }
    ],
    tools: ["Power BI", "Azure", "Python", "SQL", "M", "DAX", "SharePoint", "Power Automate", "PL/SQL", "SQL Server", "Power Query", "Trello", "Excel"]
  },
  {
    title: "Développeur Web",
    company: "SEOS-FRANCE",
    period: "Avril 2022 - Juin 2022",
    type: "Stage",
    location: "Toulouse",
    website: "https://seos-france.org/",
    realizations: [
      {
        title: "Développement et Optimisation du Site Web de l'Organisation",
        details: [
          "Participer au développement de sites web.",
          "Intégrer et personnaliser le chatbot conversationnel pour offrir une assistance immédiate aux utilisateurs.",
          "Administrer et gérer les serveurs et les bases de données.",
          "Implémenter des interfaces modernes et réactives, optimisées pour une expérience fluide.",
          "Collaborer avec l'équipe interne pour gérer le projet, définir les priorités, et respecter les délais."
        ]
      }
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
      {
        title: "Installation et configuration des systèmes",
        details: [
          "Installer et configurer des matériels, logiciels et systèmes pour garantir leur bon fonctionnement au sein de l'entreprise."
        ]
      },
      {
        title: "Déploiement des postes de travail",
        details: [
          "Déployer les postes de travail sous Linux et Windows, intégrer les outils de gestion des données pour assurer la productivité des utilisateurs."
        ]
      },
      {
        title: "Gestion des bases de données et serveurs",
        details: [
          "Administrer les bases de données et les serveurs applicatifs, en veillant à leur performance et à leur sécurité."
        ]
      },
      {
        title: "Gestion de l'activité de support",
        details: [
          "Piloter l'activité de support technique à travers l'outil de ticketing ServiceNow en assurant un suivi efficace des demandes des utilisateurs."
        ]
      },
      {
        title: "Assistance et formation des utilisateurs",
        details: [
          "Assister et ancien des utilisateurs (technique, fonctionnel)"
        ]
      },
      {
        title: "Rédaction de documents",
        details: [
          "Rédiger les documents techniques et fonctionnels pour faciliter la gestion et la compréhension des systèmes en place."
        ]
      }
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
