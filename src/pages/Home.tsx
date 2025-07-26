
import PortfolioNavbar from '@/components/PortfolioNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Briefcase, Code, GraduationCap, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTypewriter, useParallax } from '@/lib/animations';

export default function Home() {
  const { displayText: title } = useTypewriter("Adama LO", 80, 0);
  const { displayText: subtitle } = useTypewriter("Consultant Data & Analytics Engineer", 50, 1000);
  const { displayText: description } = useTypewriter("Transformer les données en performance", 30, 2000);
  
  const parallaxBg = useParallax(0.05);
  const parallaxContent = useParallax(-0.05);

  return (
    <div className="min-h-screen flex flex-col">
      <PortfolioNavbar />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
          <div 
            ref={parallaxBg}
            className="absolute inset-0 bg-gradient-to-br from-white to-secondary opacity-50"
          />
          
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="container mx-auto px-4 z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="reveal-animation">
                  <h1 className="text-5xl md:text-6xl font-bold mb-2">
                    {title}<span className="animate-pulse text-primary">_</span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-4">
                    {subtitle}
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                    {description}. Ingénieur en data et informatique décisionnelle, je mets mon expertise au service de projets innovants pour créer de la valeur à partir des données.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="rounded-full group">
                      <Link to="/contact">
                        Me contacter
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                      </Link>
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      <Download className="mr-2" size={16} />
                      Télécharger CV
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse"></div>
                  <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src="/lovable-uploads/3c3e610e-c449-473c-915e-11599ca49a89.png" 
                      alt="Adama LO" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Summary Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <SummaryCard 
                icon={Briefcase} 
                title="Expérience" 
                value="4+ ans"
                description="En informatique décisionnelle et data"
                link="/experiences"
              />
              <SummaryCard 
                icon={Code} 
                title="Compétences" 
                value="20+"
                description="Technologies maîtrisées"
                link="/skills"
              />
              <SummaryCard 
                icon={GraduationCap} 
                title="Formation" 
                value="Bac+5"
                description="Master MIAGE - Informatique Décisionnelle"
                link="/education"
              />
              <SummaryCard 
                icon={Award} 
                title="Certifications" 
                value="5+"
                description="Dataiku, Power BI"
                link="/education#certifications"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

function SummaryCard({ 
  icon: Icon, 
  title, 
  value, 
  description, 
  link 
}: { 
  icon: any, 
  title: string, 
  value: string, 
  description: string, 
  link: string 
}) {
  return (
    <div className="glass hover:shadow-md transition-all duration-300 rounded-xl p-6 hover:-translate-y-1">
      <Link to={link} className="flex flex-col items-center text-center group">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-2xl font-extrabold text-primary mb-2">{value}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </Link>
    </div>
  );
}
