
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PortfolioNavbar from '@/components/PortfolioNavbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <PortfolioNavbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
          <p className="text-xl text-muted-foreground mb-6">Oups ! La page que vous recherchez n'existe pas.</p>
          <Link 
            to="/" 
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
