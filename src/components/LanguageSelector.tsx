import { Globe } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-gray-400" />
      <Select value={language} onValueChange={(value) => setLanguage(value as 'en' | 'pt')}>
        <SelectTrigger className="w-auto min-w-[120px] bg-gray-800/50 border-gray-700 text-white">
          <SelectValue placeholder={t('language.select')} />
        </SelectTrigger>
        <SelectContent className="bg-gray-800 border-gray-700">
          <SelectItem value="en" className="text-white hover:bg-gray-700">
            {t('language.english')}
          </SelectItem>
          <SelectItem value="pt" className="text-white hover:bg-gray-700">
            {t('language.portuguese')}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;