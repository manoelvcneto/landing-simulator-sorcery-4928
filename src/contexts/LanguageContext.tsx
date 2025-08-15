import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'header.title': 'Engine Arcade',
    'header.subtitle': 'AI Game Generator',
    
    // Hero section
    'hero.title': 'Create Games With Just a Prompt',
    'hero.subtitle': 'Type a prompt, get a playable game instantly. No coding required.',
    
    // Terminal
    'terminal.placeholder': 'Describe your game idea...',
    'terminal.example1': 'Create a 2D platformer with a ninja character',
    'terminal.example2': 'Make a space shooter with power-ups',
    'terminal.example3': 'Build a puzzle game with colorful blocks',
    'terminal.generate': 'Generate Game',
    
    // Email form
    'email.title': 'Get Early Access',
    'email.subtitle': 'Be the first to know when Engine Arcade launches',
    'email.placeholder': 'Enter your email',
    'email.button': 'Join Waitlist',
    
    // Features
    'feature.chat.title': 'Chat to Create',
    'feature.chat.description': 'Simply describe your game idea in natural language and watch it come to life',
    'feature.code.title': 'No Coding Required',
    'feature.code.description': 'Create complex games without writing a single line of code',
    'feature.play.title': 'Instantly Playable',
    'feature.play.description': 'Get a working game in seconds that you can play and share immediately',
    
    // Footer
    'footer.copyright': '© 2025 Engine Arcade. All rights reserved.',
    
    // Language selector
    'language.select': 'Language',
    'language.english': 'English',
    'language.portuguese': 'Português'
  },
  pt: {
    // Header
    'header.title': 'Engine Arcade',
    'header.subtitle': 'Gerador de Jogos IA',
    
    // Hero section
    'hero.title': 'Crie Jogos Com Apenas um Comando',
    'hero.subtitle': 'Digite um comando, obtenha um jogo jogável instantaneamente. Não é necessário programar.',
    
    // Terminal
    'terminal.placeholder': 'Descreva sua ideia de jogo...',
    'terminal.example1': 'Crie um jogo de plataforma 2D com um personagem ninja',
    'terminal.example2': 'Faça um jogo de tiro espacial com power-ups',
    'terminal.example3': 'Construa um jogo de quebra-cabeça com blocos coloridos',
    'terminal.generate': 'Gerar Jogo',
    
    // Email form
    'email.title': 'Obtenha Acesso Antecipado',
    'email.subtitle': 'Seja o primeiro a saber quando o Engine Arcade for lançado',
    'email.placeholder': 'Digite seu email',
    'email.button': 'Entrar na Lista',
    
    // Features
    'feature.chat.title': 'Converse para Criar',
    'feature.chat.description': 'Simplesmente descreva sua ideia de jogo em linguagem natural e veja-a ganhar vida',
    'feature.code.title': 'Não Requer Programação',
    'feature.code.description': 'Crie jogos complexos sem escrever uma única linha de código',
    'feature.play.title': 'Instantaneamente Jogável',
    'feature.play.description': 'Obtenha um jogo funcionando em segundos que você pode jogar e compartilhar imediatamente',
    
    // Footer
    'footer.copyright': '© 2025 Engine Arcade. Todos os direitos reservados.',
    
    // Language selector
    'language.select': 'Idioma',
    'language.english': 'English',
    'language.portuguese': 'Português'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};