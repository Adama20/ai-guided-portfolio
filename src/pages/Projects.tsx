
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
  Warehouse,
  Settings,
  Users,
  TrendingUp,
  Brain,
  Target
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
              Découvrez mes projets basés sur mes expériences professionnelles en data engineering, analyse de données et business intelligence.
            </p>
            
            <div ref={ref} className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              
              <ProjectCard
                title="Audit de Maturité Data & Recommandations Stratégiques"
                description="Réalisation d'audits complets des systèmes d'information pour évaluer la maturité data des organisations. Analyse de l'architecture existante, identification des axes d'amélioration et formulation de recommandations stratégiques pour optimiser l'exploitation des données."
                icon={Target}
                tags={["Audit SI", "Maturité Data", "Stratégie Data", "Architecture", "Conseil", "Gouvernance des données"]}
              />
              
              <ProjectCard
                title="Conception de Data Warehouse avec Modélisation Décisionnelle"
                description="Conception et mise en œuvre d'architectures de données scalables. Modélisation dimensionnelle (schémas en étoile, flocon) pour optimiser les performances analytiques et faciliter l'aide à la décision stratégique."
                icon={Warehouse}
                tags={["Data Warehouse", "Modélisation dimensionnelle", "Architecture data", "Schéma en étoile", "Big Data", "Performance"]}
              />
              
              <ProjectCard
                title="Pipelines de Données Automatisés avec Azure & Dataiku"
                description="Développement de pipelines de données robustes utilisant Azure et Dataiku. Automatisation complète du flux ETL/ELT avec profiling, mapping, gestion des métadonnées et orchestration des traitements pour garantir la qualité des données."
                icon={Settings}
                tags={["Azure", "Dataiku", "ETL/ELT", "Pipelines", "Automatisation", "Data Quality", "Orchestration"]}
              />
              
              <ProjectCard
                title="Tableaux de Bord Power BI pour le Secteur Bancaire"
                description="Création de dashboards Power BI sophistiqués pour l'analyse des performances opérationnelles et le suivi de la production industrielle dans le secteur bancaire et monétique. Intégration de données PostgreSQL et SharePoint avec modélisation avancée."
                icon={BarChart3}
                tags={["Power BI", "Secteur Bancaire", "PostgreSQL", "SharePoint", "DAX", "Dashboards", "KPIs"]}
              />
              
              <ProjectCard
                title="Automatisation des Processus de Reporting"
                description="Développement de solutions d'automatisation pour les processus de reporting avec Power BI Service et Python. Mise en place de notifications automatiques, rafraîchissements programmés et scénarios métiers pour optimiser l'efficacité opérationnelle."
                icon={Zap}
                tags={["Power BI Service", "Python", "Automatisation", "Notifications", "Scripting", "Optimisation"]}
              />
              
              <ProjectCard
                title="Formation & Accompagnement aux Outils DataViz"
                description="Conception et animation de programmes de formation sur les outils de visualisation de données. Accompagnement des équipes dans l'adoption de nouvelles technologies analytiques et développement de l'autonomie utilisateur."
                icon={Users}
                tags={["Formation", "DataViz", "Accompagnement", "Change Management", "Pédagogie", "Adoption technologique"]}
              />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mt-20 mb-8 text-center">Projets Académiques & Personnels</h2>
            <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              
              <ProjectCard
                title="Mise en place d'un Data Warehouse BigQuery avec GCP pour le Suivi des Étudiants"
                description="Système centralisé pour collecter et analyser les données des étudiants utilisant Google Cloud. Architecture scalable avec modélisation en étoile et connexion à des tableaux de bord Power BI pour le suivi des performances académiques."
                icon={Warehouse}
                tags={["Google Cloud Platform", "BigQuery", "Power BI", "DirectQuery", "DAX", "SQL", "Python", "Modélisation en étoile"]}
                githubLink="https://github.com/Adama20/suivi-etudiants-dwh"
              />
              
              <ProjectCard
                title="Météo Campus - Application IA de Prédiction Météorologique"
                description="Solution complète de prédiction météorologique pour campus universitaires avec algorithmes d'IA. Interface web et mobile offrant des prévisions localisées et alertes en temps réel avec visualisations interactives."
                icon={CloudLightning}
                tags={["Intelligence Artificielle", "Vue.js", "Tailwind", "Python", "API", "Mobile", "Données temps réel"]}
                githubLink="https://github.com/Lucas-Matusiak/meteo-campus/tree/main"
              />
              
              <ProjectCard
                title="Algorithme d'Identification Minimale en BDD"
                description="Implémentation d'un algorithme pour identifier les identifiants minimaux des tables d'une base de données. Optimisation de l'intégrité et des performances en identifiant les clés candidates les plus efficaces pour chaque relation."
                icon={Code}
                tags={["SQL", "Python", "Algorithmes", "Base de données", "Optimisation", "Performance"]}
              />
              
              <ProjectCard
                title="Solution BI pour l'Analyse Financière"
                description="Conception d'une solution Business Intelligence complète pour l'analyse financière. Centralisation des données, création de tableaux de bord interactifs et automatisation des rapports pour faciliter la prise de décision stratégique."
                icon={TrendingUp}
                tags={["Power BI", "Azure Synapse", "DAX", "ETL", "Modélisation de données", "Finance", "Reporting"]}
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
