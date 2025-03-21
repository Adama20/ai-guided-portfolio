
import PortfolioNavbar from '@/components/PortfolioNavbar';
import Footer from '@/components/Footer';
import { useRevealAnimation } from '@/lib/animations';
import { 
  Cloud, 
  BarChart3, 
  Database, 
  ChartPie, 
  LineChart, 
  CloudLightning, 
  Github, 
  Shield, 
  Zap,
  Code,
  GraduationCap,
  Warehouse
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Projects() {
  const { ref, isVisible } = useRevealAnimation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <PortfolioNavbar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Mes Projets</h1>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Découvrez les projets sur lesquels j'ai travaillé, mettant en œuvre mes compétences en data science, BI et développement.
            </p>
            
            <div ref={ref} className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <ProjectCard
                title="Mise en place d'un Data Warehouse BigQuery avec GCP pour le Suivi des Étudiants"
                description="J'ai créé un système centralisé pour collecter et analyser les données des étudiants. Ce projet utilise Google Cloud pour stocker les informations de manière structurée et les connecte à des tableaux de bord interactifs, permettant aux responsables de suivre facilement les performances et le parcours des étudiants."
                icon={Warehouse}
                tags={["Google Cloud Platform", "BigQuery", "Power BI", "DirectQuery", "DAX", "Langage M", "SQL", "Python", "Modélisation en étoile", "Analyse de données"]}
                githubLink="https://github.com/Adama20/suivi-etudiants-dwh"
              />
              
              <ProjectCard
                title="Météo Campus - Application web et mobile de prédiction météorologique (IA)"
                description="Développement d'une solution complète de prédiction météorologique pour campus universitaires offrant des prévisions localisées et alertes en temps réel. Utilisation d'algorithmes d'IA pour fournir des prévisions précises sur web et mobile."
                icon={CloudLightning}
                tags={["Intelligence Artificielle", "Développement Web", "Mobile", "API", "Données en temps réel", "Vue.js", "Tailwind", "Python", "SQL", "Visualisation de données", "Modélisation de données"]}
                githubLink="https://github.com/Lucas-Matusiak/meteo-campus/tree/main"
              />
              
              <ProjectCard
                title="Optimisation des données SNCF Voyageurs"
                description="Optimisation de la performance et de la gouvernance des données dans l'analyse des données de SNCF Voyageurs. Implémentation de solutions de stockage et d'analyse optimisées pour les grands volumes de données ferroviaires."
                icon={Database}
                tags={["Azure", "Power BI", "SQL", "DAX", "Modélisation de données", "Power Automate", "Langage M"]}
              />
              
              <ProjectCard
                title="Développement de solutions BI pour améliorer le suivi des actions stratégiques et opérationnelles du pôle QSE de SNCF Voyageurs"
                subtitle="MAISON STRATÉGIQUE"
                description="Développement d'une solution BI complète pour le suivi des actions stratégiques et opérationnelles, facilitant la prise de décision et l'amélioration continue. Création de tableaux de bord interactifs et rapports analytiques."
                icon={ChartPie}
                tags={["Business Intelligence", "Power BI", "DAX", "Modélisation de données", "Langage M", "Dashboarding", "Analyse stratégique"]}
              />
              
              <ProjectCard
                title="Rapport Power BI pour l'analyse environnementale"
                description="Développement d'un rapport Power BI pour l'analyse environnementale et les initiatives d'écomobilité, intégrant des données de multiples sources pour créer une vue unifiée des performances environnementales."
                icon={BarChart3}
                tags={["Power BI", "DAX", "Modélisation de données", "Langage M", "Analyse environnementale", "Reporting"]}
              />
              
              <ProjectCard
                title="Analyse des initiatives d'écomobilité"
                description="Développement d'un rapport Power BI pour l'analyse détaillée des initiatives d'écomobilité et leur impact. Création de visualisations complexes pour identifier les tendances et opportunités d'optimisation."
                icon={LineChart}
                tags={["Power BI", "DAX", "Modélisation de données", "Langage M", "Écomobilité", "Analyse d'impact"]}
              />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mt-20 mb-8 text-center">Autres projets développés chez SNCF Voyageurs</h2>
            <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <ProjectCard
                title="Application de gestion des précurseurs d'accidents"
                description="Participation au développement d'une application Power Apps pour la gestion des précurseurs d'accidents et la prévention des risques, permettant d'identifier et de traiter les situations à risque avant qu'elles ne deviennent des accidents."
                icon={Shield}
                tags={["Power Apps", "Power BI", "DAX", "Modélisation de données", "Prévention des risques", "Sécurité"]}
              />
              
              <ProjectCard
                title="Refonte des tableaux de bord pour la revue de sécurité"
                subtitle="REVUE SÉCURITÉ"
                description="Refonte et optimisation des tableaux de bord pour améliorer le suivi et l'analyse des indicateurs de sécurité, facilitant l'identification des risques et la mise en place d'actions préventives."
                icon={Shield}
                tags={["Power BI", "DAX", "Modélisation de données", "Langage M", "Sécurité", "Reporting"]}
              />
              
              <ProjectCard
                title="Optimisation du suivi des formations électriques"
                subtitle="ELEC ACADÉMIE"
                description="Développement d'un système de suivi des formations électriques permettant de gérer efficacement les qualifications et habilitations des collaborateurs, assurant la conformité aux exigences réglementaires."
                icon={Zap}
                tags={["Power BI", "DAX", "Modélisation de données", "Langage M", "Formation", "Habilitations"]}
              />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mt-20 mb-8 text-center">Autres Projets Académiques</h2>
            <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <ProjectCard
                title="Algorithme d'Identification Minimale en BDD"
                description="Implémentation d'un algorithme permettant d'identifier tous les identifiants minimaux des tables d'une base de données. Ce projet a permis d'optimiser l'intégrité et la performance des bases de données en identifiant les clés candidates les plus efficaces pour chaque relation."
                icon={Code}
                tags={["SQL", "Python", "Algorithmes", "Base de données", "Optimisation"]}
              />
              
              <ProjectCard
                title="Solution BI pour l'Analyse Financière de Total Energie"
                description="Conception et mise en œuvre d'une solution Business Intelligence complète pour l'analyse financière de Total Energie. Ce projet a permis de centraliser les données financières, de créer des tableaux de bord interactifs et d'automatiser la génération de rapports d'analyse pour faciliter la prise de décision stratégique."
                icon={BarChart3}
                tags={["Power BI", "Azure Synapse", "DAX", "ETL", "Modélisation de données", "Finance"]}
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

function ProjectCard({ 
  title, 
  subtitle,
  description, 
  icon: Icon,
  tags = [],
  githubLink
}: { 
  title: string; 
  subtitle?: string;
  description: string; 
  icon: any;
  tags?: string[];
  githubLink?: string;
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border border-border">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold">{title}</h3>
            {subtitle && (
              <p className="text-sm font-medium text-primary">{subtitle}</p>
            )}
          </div>
        </div>
        
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-secondary/50 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {githubLink && (
          <div className="mt-4">
            <a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="sm" 
                variant="outline"
                className="gap-1.5"
              >
                <Github size={14} />
                <span>Voir le Code</span>
              </Button>
            </a>
          </div>
        )}
      </div>
    </Card>
  );
}
