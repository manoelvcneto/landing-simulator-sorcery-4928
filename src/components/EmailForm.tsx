
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: t('email.placeholder'),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission and redirect to CreateGame page
    setTimeout(() => {
      toast({
        title: "Success!",
        description: t('email.button'),
      });
      setEmail('');
      setIsSubmitting(false);
      navigate('/create-game');
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 opacity-0 animate-fade-in delay-300">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-white">{t('email.title')}</h2>
      <p className="text-gray-400 text-center mb-6">{t('email.subtitle')}</p>
      
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('email.placeholder')}
          className="px-4 py-3 rounded-md bg-arcade-gray/50 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-arcade-purple transition-all"
          disabled={isSubmitting}
        />
        
        <button 
          type="submit" 
          className="flex items-center justify-center py-3 px-4 bg-arcade-purple hover:bg-opacity-90 text-white rounded-md transition-all duration-300 disabled:opacity-70"
          disabled={isSubmitting}
        >
          <span>{t('email.button')}</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
