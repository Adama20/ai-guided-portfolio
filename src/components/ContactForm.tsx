
import { useState } from 'react';
import { useRevealAnimation } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const { ref, isVisible } = useRevealAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message envoyé avec succès!', {
        description: 'Nous vous répondrons dans les plus brefs délais.',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-6">
          <h3 className="text-2xl font-bold tracking-tight">Restons en contact</h3>
          <p className="text-muted-foreground">
            N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="text-base font-medium">Email</h4>
                <p className="text-sm text-muted-foreground">contact@monportfolio.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="text-base font-medium">Téléphone</h4>
                <p className="text-sm text-muted-foreground">+33 6 XX XX XX XX</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="text-base font-medium">Adresse</h4>
                <p className="text-sm text-muted-foreground">Paris, France</p>
              </div>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                className="h-12 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre email"
                required
                className="h-12 rounded-xl"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Input 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Sujet"
              required
              className="h-12 rounded-xl"
            />
          </div>
          
          <div className="space-y-2">
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message"
              required
              className="min-h-[150px] rounded-xl"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-white hover:shadow-md transition-all duration-300"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Envoi en cours...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send size={16} /> Envoyer le message
              </span>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
