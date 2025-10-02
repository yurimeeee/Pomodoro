import type { TimerMode } from '@lib/types';
import { formatTime } from '@lib/utils/time';
import { useTranslation } from 'react-i18next';

interface TimerDisplayProps {
  timeLeft: number;
  mode: TimerMode;
  progress: number;
}

const TimerDisplay = ({ timeLeft, mode, progress }: TimerDisplayProps) => {
  const { t } = useTranslation('translation');
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* <div className="px-6 py-3 rounded-full">{mode === 'focus' ? t('focusTime') : t('breakTime')}</div> */}
      <div className="px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
        <div className="text-sm font-medium tracking-wider uppercase text-primary">{mode === 'focus' ? t('focusTime') : t('breakTime')}</div>
      </div>

      <div className="relative rounded-full p-8 bg-card border border-border">
        <svg className="w-64 h-64 -rotate-90 md:w-80 md:h-80" viewBox="0 0 200 200">
          {/* Background circle */}
          <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="3" className="text-border" />
          {/* Progress circle */}
          <circle
            cx="100"
            cy="100"
            r="85"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="text-primary transition-all duration-300"
            strokeDasharray={`${2 * Math.PI * 85}`}
            strokeDashoffset={`${2 * Math.PI * 85 * (1 - progress / 100)}`}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full w-48 h-48 md:w-60 md:h-60 flex items-center justify-center bg-background">
            <span className="text-5xl font-semibold tracking-tight md:text-6xl font-mono">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerDisplay;
