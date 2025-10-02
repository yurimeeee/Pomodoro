import { Pause, Play, RotateCcw, SkipForward } from 'lucide-react';

import { Button } from '@components/ui/button';
import type { TimerStatus } from '@lib/types';
import { useTranslation } from 'react-i18next';

interface TimerControlsProps {
  status: TimerStatus;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  onSkip: () => void;
}

const TimerController = ({ status, onStart, onPause, onReset, onSkip }: TimerControlsProps) => {
  const { t } = useTranslation('translation');
  return (
    <div className="flex items-center justify-center gap-4">
      {status === 'running' ? (
        <Button onClick={onPause} size="lg" variant="outline" className="h-16 px-10 text-base rounded-full bg-transparent">
          <Pause className="w-5 h-5 mr-2" />
          {t('pause')}
        </Button>
      ) : (
        <Button onClick={onStart} size="lg" className="h-16 px-10 text-base rounded-full">
          <Play className="w-5 h-5 mr-2" />
          {status === 'paused' ? t('continue') : t('start')}
        </Button>
      )}

      {status !== 'idle' && (
        <>
          <Button onClick={onReset} variant="outline" size="icon" className="h-14 w-14 rounded-full bg-transparent" aria-label={t('reset')}>
            <RotateCcw className="w-5 h-5" />
          </Button>
          <Button onClick={onSkip} variant="outline" size="icon" className="h-14 w-14 rounded-full bg-transparent" aria-label={t('skip')}>
            <SkipForward className="w-5 h-5" />
          </Button>
        </>
      )}
    </div>
  );
};

export default TimerController;
