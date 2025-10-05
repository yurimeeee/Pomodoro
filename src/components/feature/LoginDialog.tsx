'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@components/ui/dialog';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { X } from 'lucide-react';
import { auth } from '@lib/utils/firebase';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const { t } = useTranslation('translation');
  const [task, setTask] = useState('');
  const [customTask, setCustomTask] = useState('');
  const [distractions, setDistractions] = useState<string[]>([]);
  const [customDistraction, setCustomDistraction] = useState('');
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  const googleLoign = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...

        console.log(token, user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md neomorph bg-background border-0">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light">{t('login')}</DialogTitle>
          <DialogDescription className="text-base">{t('loginSubtitle')}</DialogDescription>
        </DialogHeader>

        <div className="flex items-center flex-col gap-6 w-full">
          <Button variant="neomorphRound" className="border w-full max-w-[240px]" onClick={googleLoign}>
            <img src="/assets/google_icon.png" alt="google login" width={16} />
            {t('googleLoign')}{' '}
          </Button>
        </div>

        {/* <div className="flex gap-3 justify-end">
          <button onClick={() => onOpenChange(false)} className="neomorph-sm px-6 py-3 rounded-full bg-background text-foreground text-sm font-medium">
            취소
          </button>
          <button
            onClick={() => {}}
            disabled={!task && !customTask.trim()}
            className="neomorph-hover px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium disabled:opacity-50"
          >
            저장
          </button>
        </div> */}
      </DialogContent>
    </Dialog>
  );
}
