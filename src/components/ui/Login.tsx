import { Button } from './button';
import { LoginDialog } from '@components/feature/LoginDialog';
import { UserRound } from 'lucide-react';
import { themeAtom } from '@atoms/themeAtom';
import { toggleThemeAtom } from '@atoms/themeAtom';
import { useAtomValue } from 'jotai';
import { useSetAtom } from 'jotai';
import { useState } from 'react';

const Login = () => {
  const toggleTheme = useSetAtom(toggleThemeAtom);
  const theme = useAtomValue(themeAtom);
  const [loignOpen, setLoignOpen] = useState(false);
  return (
    <div>
      <Button
        variant="neomorphRound"
        onClick={() => {
          setLoignOpen(true);
        }}
      >
        <UserRound className="w-5 h-5 text-foreground" />
      </Button>
      <LoginDialog open={loignOpen} onOpenChange={setLoignOpen} />
    </div>
  );
};

export default Login;
