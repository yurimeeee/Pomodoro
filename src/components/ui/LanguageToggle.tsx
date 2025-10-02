import { languageAtom, toggleLanguageAtom } from '@atoms/languageAtom';

import { Button } from './button';
import { useAtomValue } from 'jotai';
import { useSetAtom } from 'jotai';

const LanguageToggle = () => {
  const toggleLanguage = useSetAtom(toggleLanguageAtom);
  const language = useAtomValue(languageAtom);

  return (
    <div>
      <Button variant="neomorphRound" onClick={toggleLanguage}>
        {language === 'ko' ? 'KO' : 'EN'}
      </Button>
    </div>
  );
};

export default LanguageToggle;
