
import PortfolioNavbar from '@/components/PortfolioNavbar';
import Footer from '@/components/Footer';
import { useRevealAnimation } from '@/lib/animations';
import { Cloud, BarChart3, Database, ChartPie, LineChart, CloudLightning } from 'lucide-react';
import { Card } from '@/components/ui/card';

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
                title="Application web et mobile de prédiction de la météo (IA)"
                description="Développement d'une solution de prédiction météorologique utilisant des algorithmes d'IA pour fournir des prévisions précises sur web et mobile."
                icon={CloudLightning}
                tags={["Intelligence Artificielle", "Développement Web", "Mobile"]}
              />
              
              <ProjectCard
                title="Météo Campus"
                description="Plateforme météorologique dédiée aux campus universitaires, offrant des prévisions localisées et des alertes en temps réel."
                icon={Cloud}
                tags={["Météorologie", "Données en temps réel", "API"]}
              />
              
              <ProjectCard
                title="Optimisation des données SNCF Voyageurs"
                description="Optimisation de la performance et de la gouvernance des données dans l'analyse des données de SNCF Voyageurs avec Azure, Power BI, SQL, Power Automate."
                icon={Database}
                tags={["Azure", "Power BI", "SQL", "Power Automate"]}
              />
              
              <ProjectCard
                title="Solution BI pour le suivi d'actions stratégiques"
                description="Développement d'une solution BI pour améliorer le suivi des actions stratégiques et opérationnelles du pôle QSE."
                icon={ChartPie}
                tags={["Business Intelligence", "Dashboarding", "Analyse stratégique"]}
              />
              
              <ProjectCard
                title="Rapport Power BI pour l'analyse environnementale"
                description="Développement d'un rapport Power BI pour l'analyse environnementale et les initiatives d'écomobilité."
                icon={BarChart3}
                tags={["Power BI", "Analyse environnementale", "Reporting"]}
              />
              
              <ProjectCard
                title="Analyse des initiatives d'écomobilité"
                description="Développement d'un rapport Power BI pour l'analyse détaillée des initiatives d'écomobilité et leur impact."
                icon={LineChart}
                tags={["Power BI", "Écomobilité", "Analyse d'impact"]}
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
  description, 
  icon: Icon,
  tags = []
}: { 
  title: string; 
  description: string; 
  icon: any;
  tags?: string[];
}) {
  return (
    <Card className="glass overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
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
      </div>
    </Card>
  );
}
