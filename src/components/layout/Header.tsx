import LanguageToggle from '@components/ui/LanguageToggle';
import ThemeToggle from '@components/ui/ThemeToggle';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation('translation');

  return (
    <header className="sticky top-0 z-10 bg-background/40 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between mx-auto px-4 py-3">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl">{t('title')}</h1>
          <h2 className="text-xs text-muted-foreground">{t('subtitle')}</h2>
        </div>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
