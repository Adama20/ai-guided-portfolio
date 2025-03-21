
import PortfolioNavbar from '@/components/PortfolioNavbar';
import Footer from '@/components/Footer';
import { Award, MapPin, Calendar, Mail, Linkedin, Phone, Languages, Heart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useRevealAnimation } from '@/lib/animations';

export default function About() {
  const { ref: bioRef, isVisible: bioVisible } = useRevealAnimation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <PortfolioNavbar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center">À propos de moi</h1>
            
            <div className="grid md:grid-cols-12 gap-12">
              {/* Left column: Photo and basic info */}
              <div className="md:col-span-4">
                <div className="sticky top-24">
                  <div className="rounded-2xl overflow-hidden mb-6 shadow-md">
                    <img 
                      src="/lovable-uploads/3c3e610e-c449-473c-915e-11599ca49a89.png" 
                      alt="Adama LO" 
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  
                  <div className="rounded-2xl p-6 glass">
                    <h2 className="text-2xl font-bold mb-4">Informations personnelles</h2>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Adresse</h3>
                          <p className="text-muted-foreground">33800 Bordeaux</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Téléphone</h3>
                          <p className="text-muted-foreground">+33 6 29 93 81 26</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <p className="text-muted-foreground">adamalo205@gmail.com</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Linkedin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">LinkedIn</h3>
                          <a 
                            href="https://bit.ly/adamalo" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            bit.ly/adamalo
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Languages className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Langues</h3>
                          <p className="text-muted-foreground">Français (Courant), Anglais (B1)</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Disponibilité</h3>
                          <p className="text-muted-foreground">Immédiate</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Mobilité</h3>
                          <p className="text-muted-foreground">Partout en France</p>
                        </div>
                      </li>
                    </ul>
                    
                    <div className="mt-6">
                      <Button className="w-full rounded-full" asChild>
                        <Link to="/contact">Me contacter</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right column: Biography and details */}
              <div className="md:col-span-8">
                <div ref={bioRef} className={`transition-all duration-700 ${bioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                  <div className="glass rounded-2xl p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Qui suis-je ?</h2>
                    <p className="text-lg leading-relaxed mb-4">
                      Ingénieur en data et informatique décisionnelle (MIAGE Bac+5), passionné par la data et les défis technologiques, je mets mon expertise en ingénierie des données et en BI au service de projets innovants, alliant analyse, synthèse et esprit d'équipe pour transformer les données en leviers de performance.
                    </p>
                    <p className="text-lg leading-relaxed">
                      J'aime apprendre de nouvelles technologies et relever de nouveaux défis. Mon parcours m'a permis d'acquérir une solide expérience dans les domaines de la Business Intelligence, de l'analyse de données et du développement de solutions décisionnelles.
                    </p>
                  </div>
                  
                  <div className="glass rounded-2xl p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Centres d'intérêt</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <InterestItem title="Football" emoji="⚽" />
                      <InterestItem title="Course à pied" emoji="🏃‍♂️" />
                      <InterestItem title="Vélo" emoji="🚴‍♂️" />
                      <InterestItem title="Voyage" emoji="✈️" />
                      <InterestItem title="Photographie" emoji="📷" />
                      <InterestItem title="Design" emoji="🎨" />
                    </div>
                  </div>
                  
                  <div className="glass rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-4">Engagement associatif</h2>
                    <div className="flex items-start gap-4">
                      <Heart className="h-8 w-8 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">AMEES éducatifs</h3>
                        <p className="text-muted-foreground">
                          Je suis impliqué dans l'association AMEES qui œuvre dans le domaine éducatif pour favoriser l'accès à l'éducation et au développement des compétences numériques.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

function InterestItem({ title, emoji }: { title: string, emoji: string }) {
  return (
    <div className="bg-secondary/60 rounded-lg p-4 flex flex-col items-center text-center hover:bg-secondary transition-colors">
      <span className="text-2xl mb-2">{emoji}</span>
      <h3 className="font-medium">{title}</h3>
    </div>
  );
}
