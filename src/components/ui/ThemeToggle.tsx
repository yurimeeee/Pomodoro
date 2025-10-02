import { Moon, Sun } from 'lucide-react';

import { Button } from './button';
import { themeAtom } from '@atoms/themeAtom';
import { toggleThemeAtom } from '@atoms/themeAtom';
import { useAtomValue } from 'jotai';
import { useSetAtom } from 'jotai';

const ThemeToggle = () => {
  const toggleTheme = useSetAtom(toggleThemeAtom);
  const theme = useAtomValue(themeAtom);

  return (
    <Button variant="neomorphRound" onClick={toggleTheme}>
      {theme === 'light' ? <Moon className="w-5 h-5 text-foreground" /> : <Sun className="w-5 h-5 text-foreground" />}
    </Button>
  );
};

export default ThemeToggle;
