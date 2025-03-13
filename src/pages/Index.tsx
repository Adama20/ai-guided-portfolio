
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import AIGuide from '@/components/AIGuide';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { useRevealAnimation } from '@/lib/animations';
import { ArrowRight, Github, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projectData = [
  {
    title: 'Site E-commerce moderne',
    description: 'Une plateforme e-commerce complète avec des animations fluides et une interface utilisateur intuitive',
    imageSrc: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    tags: ['React', 'NextJS', 'Tailwind CSS', 'Stripe'],
    link: '#'
  },
  {
    title: 'Application de gestion de tâches',
    description: 'Une application minimaliste pour gérer vos tâches quotidiennes avec des fonctionnalités avancées',
    imageSrc: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    tags: ['TypeScript', 'React', 'Redux', 'Firebase'],
    link: '#'
  },
  {
    title: 'Dashboard analytique',
    description: 'Un tableau de bord interactif pour visualiser et analyser des données complexes',
    imageSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    tags: ['React', 'D3.js', 'Recharts', 'Node.js'],
    link: '#'
  },
  {
    title: 'Application mobile fitness',
    description: 'Une application mobile pour suivre vos activités sportives et votre progression',
    imageSrc: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    tags: ['React Native', 'Firebase', 'Redux', 'GraphQL'],
    link: '#'
  },
  {
    title: 'Portfolio designer',
    description: 'Un portfolio pour un designer UX/UI avec des animations impressionnantes',
    imageSrc: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    tags: ['HTML/CSS', 'JavaScript', 'GSAP', 'Figma'],
    link: '#'
  }
];

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'UI/UX Design', level: 75 },
  { name: 'Firebase', level: 70 }
];

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovate',
    period: '2021 - Présent',
    description: 'Développement d\'applications web modernes avec React, TypeScript et Next.js. Création d\'interfaces utilisateur intuitives et optimisation des performances.'
  },
  {
    title: 'UI/UX Designer',
    company: 'Creative Studio',
    period: '2019 - 2021',
    description: 'Conception d\'interfaces utilisateur et d\'expériences utilisateur pour des applications web et mobiles. Création de prototypes interactifs et collaboration avec les équipes de développement.'
  },
  {
    title: 'Web Developer',
    company: 'Digital Agency',
    period: '2017 - 2019',
    description: 'Développement de sites web et d\'applications avec HTML, CSS, JavaScript et React. Intégration de CMS et optimisation SEO.'
  }
];

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const { ref: aboutRef, isVisible: aboutVisible } = useRevealAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useRevealAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useRevealAnimation();
  const { ref: experienceRef, isVisible: experienceVisible } = useRevealAnimation();
  
  useEffect(() => {
    // Simulate loading experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-r-primary border-b-transparent border-l-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          <p className="mt-4 text-lg font-medium animate-pulse">Chargement...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="section-container">
            <div 
              ref={projectsRef}
              className={`transition-all duration-700 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="text-center mb-12">
                <Badge className="mb-3 px-3 py-1 rounded-full">Portfolio</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Mes projets récents</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Découvrez une sélection de mes travaux récents combinant design élégant et développement technique avancé.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectData.map((project, index) => (
                <ProjectCard
                  key={index}
                  index={index}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  tags={project.tags}
                  link={project.link}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="group">
                <span>Voir tous les projets</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20 bg-secondary/50">
          <div className="section-container">
            <div 
              ref={aboutRef}
              className={`transition-all duration-700 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="text-center mb-12">
                <Badge className="mb-3 px-3 py-1 rounded-full">À propos</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Qui suis-je ?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Développeur web passionné par la création d'expériences numériques innovantes et esthétiques, guidées par l'intelligence artificielle.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Portrait" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">Jean Dupont</h3>
                    <p className="text-white/80">Développeur Frontend & UX Designer</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Je suis un développeur web avec 5 ans d'expérience, spécialisé dans la création d'interfaces utilisateur modernes et intuitives. J'ai une passion pour l'innovation et l'intégration des nouvelles technologies comme l'intelligence artificielle dans mes projets.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Ma philosophie de design est centrée sur l'utilisateur, avec une attention particulière portée aux détails et à l'accessibilité. Je crois que la technologie doit servir l'humain et non l'inverse.
                </p>
                
                <div className="flex gap-4 pt-4">
                  <Button className="rounded-full">
                    <Download size={16} className="mr-2" />
                    Télécharger CV
                  </Button>
                  <Button variant="outline" className="rounded-full">
                    <Github size={16} className="mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div 
              ref={skillsRef}
              className={`transition-all duration-700 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="text-center mb-12">
                <Badge className="mb-3 px-3 py-1 rounded-full">Compétences</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Mes compétences</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Un aperçu des technologies et compétences que j'utilise au quotidien dans mes projets.
                </p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="glass p-6 rounded-xl hover:shadow-md transition-shadow"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-medium">{skill.name}</h3>
                      <span className="text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-1000 ease-out rounded-full"
                        style={{ 
                          width: skillsVisible ? `${skill.level}%` : '0%', 
                          transitionDelay: `${index * 100 + 300}ms` 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="py-20 bg-secondary/50">
          <div className="section-container">
            <div 
              ref={experienceRef}
              className={`transition-all duration-700 ${experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="text-center mb-12">
                <Badge className="mb-3 px-3 py-1 rounded-full">Parcours</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Mon expérience</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Mon parcours professionnel et les entreprises avec lesquelles j'ai collaboré.
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <div className="relative pl-8 border-l-2 border-primary/20 space-y-12">
                  {experiences.map((exp, index) => (
                    <div 
                      key={index}
                      className="relative"
                      style={{ 
                        opacity: experienceVisible ? 1 : 0, 
                        transform: experienceVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.5s ease-out',
                        transitionDelay: `${index * 200}ms`
                      }}
                    >
                      <div className="absolute -left-[25px] h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full bg-primary"></div>
                      </div>
                      <div className="glass rounded-xl p-6">
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">{exp.period}</span>
                        <h3 className="text-xl font-bold mt-3 mb-1">{exp.title}</h3>
                        <p className="text-muted-foreground mb-3">{exp.company}</p>
                        <p className="text-sm">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <Badge className="mb-3 px-3 py-1 rounded-full">Contact</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Me contacter</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vous avez un projet ou une question ? N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* AI Guide */}
      <AIGuide />
    </div>
  );
}
