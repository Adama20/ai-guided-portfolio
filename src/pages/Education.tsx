
import PortfolioNavbar from '@/components/PortfolioNavbar';
import Footer from '@/components/Footer';
import { useRevealAnimation } from '@/lib/animations';
import { GraduationCap, Calendar, Award, School, BookOpen, MapPin, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const educations = [
  {
    degree: "Master (Bac+5) Informatique parcours MIAGE - Informatique Décisionnelle",
    institution: "Université de Bordeaux",
    period: "2022-2024",
    location: "Bordeaux, France",
    programLink: "https://miage.emi.u-bordeaux.fr/",
    careerLink: "https://www.miage.fr/master-miage-sciences-numeriques-management-2/#"
  },
  {
    degree: "Licence (Bac+3) Informatique parcours MIAGE - Informatique Décisionnelle",
    institution: "Université de Bordeaux",
    period: "2021-2022",
    location: "Bordeaux, France"
  },
  {
    degree: "Licence Professionnelle Informatique parcours Administrateur de Systèmes et de Bases de Données",
    institution: "Université de Perpignan",
    period: "2020-2021",
    location: "Perpignan, France",
    programLink: "https://drive.google.com/file/d/1ihLZe6huiOmfCcYu9X0hnbknFPJveQUi/view?usp=sharing",
    careerLink: "https://formations.univ-perp.fr/diplome/licences-professionnelles/licence-pro-metiers-de-linformatique-administration-et-securite-des-systemes-et-des-reseaux#etapres"
  },
  {
    degree: "BTS Informatique SIO pour l'Industrie et les Services",
    institution: "Ecole Sénégal Japon",
    period: "2016-2018",
    location: "Dakar, Sénégal"
  }
];

const certifications = [
  {
    title: "L'essentiel de Power BI",
    issuer: "LinkedIn Learning",
    date: "2023"
  },
  {
    title: "L'essentiel de Power BI service",
    issuer: "LinkedIn Learning",
    date: "2023"
  },
  {
    title: "Modéliser les données avec DAX",
    issuer: "LinkedIn Learning",
    date: "2023"
  },
  {
    title: "Les fondements de Microsoft Fabric",
    issuer: "Microsoft",
    date: "2024"
  },
  {
    title: "Les Fondements de Microsoft Azure",
    issuer: "Microsoft",
    date: "2023"
  }
];

export default function Education() {
  const { ref: eduRef, isVisible: eduVisible } = useRevealAnimation();
  const { ref: certRef, isVisible: certVisible } = useRevealAnimation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <PortfolioNavbar />
      
      <main className="flex-grow pt-20">
        {/* Education Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Formations</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center mb-16">
              Mon parcours académique dans les domaines de l'informatique, de la data et de l'informatique décisionnelle.
            </p>
            
            <div 
              ref={eduRef}
              className={`transition-all duration-700 ${eduVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="max-w-4xl mx-auto space-y-8">
                {educations.map((edu, index) => (
                  <div 
                    key={index}
                    className="glass dark:bg-gray-800/50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                    style={{ 
                      opacity: eduVisible ? 1 : 0, 
                      transform: eduVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'all 0.7s ease-out',
                      transitionDelay: `${index * 200}ms`
                    }}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="px-3 py-1 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {edu.period}
                        </Badge>
                        <Badge variant="outline" className="px-3 py-1 flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {edu.location}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      
                      <div className="flex items-center gap-2 text-primary">
                        <School className="h-4 w-4" />
                        <span>{edu.institution}</span>
                      </div>
                      
                      {(edu.programLink || edu.careerLink) && (
                        <div className="mt-2 pt-2 flex flex-wrap gap-2">
                          {edu.programLink && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="flex items-center gap-2"
                              onClick={() => window.open(edu.programLink, '_blank')}
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                              {edu.careerLink ? 'Voir la Formation' : 'Voir le Programme'}
                            </Button>
                          )}
                          
                          {edu.careerLink && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="flex items-center gap-2"
                              onClick={() => window.open(edu.careerLink, '_blank')}
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                              Voir les Débouchés Métiers
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Certifications Section */}
        <section id="certifications" className="py-16 md:py-20 bg-secondary/30 dark:bg-secondary/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-16 text-center">Certifications</h2>
            
            <div 
              ref={certRef}
              className={`transition-all duration-700 ${certVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="glass dark:bg-gray-800/50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    style={{ 
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <Badge className="mb-2">
                          {cert.date}
                        </Badge>
                        <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <BookOpen className="h-3.5 w-3.5" />
                          <span>{cert.issuer}</span>
                        </div>
                      </div>
                    </div>
                  </div>
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
