
import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [loaded, setLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <header className={`py-8 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
        <div className="flex-1">
          <h1 className="font-bold text-white text-3xl md:text-4xl tracking-widest text-center" style={{ fontFamily: 'Arial', letterSpacing: '0.2em' }}>
            {t('header.title')}
          </h1>
          <p className="text-center text-gray-400 text-sm mt-1">{t('header.subtitle')}</p>
        </div>
        <div className="absolute top-8 right-8">
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
