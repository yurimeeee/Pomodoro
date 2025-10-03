import TimerController from './TimerController';
import TimerDisplay from './TimerDisplay';
import { usePomodoro } from '@hooks/usePomodoro';

interface PomodoroTimerProps {
  onSessionComplete: (startTime: Date, endTime: Date, duration: number) => void;
}

const PomodoroTimer = ({ onSessionComplete }: PomodoroTimerProps) => {
  const { mode, status, timeLeft, sessionStartTime, progress, start, pause, reset, skip } = usePomodoro();
  const handleReset = () => {
    if (mode === 'focus' && sessionStartTime && status !== 'idle') {
      // Session was interrupted
      const endTime = new Date();
      const duration = Math.floor((endTime.getTime() - sessionStartTime.getTime()) / 1000);
      onSessionComplete(sessionStartTime, endTime, duration);
    }
    reset();
  };
  const handleSkip = () => {
    if (mode === 'focus' && sessionStartTime) {
      // Focus session completed
      const endTime = new Date();
      const duration = Math.floor((endTime.getTime() - sessionStartTime.getTime()) / 1000);
      onSessionComplete(sessionStartTime, endTime, duration);
    }
    skip();
  };

  return (
    <div>
      <div className="flex flex-col gap-12">
        <TimerDisplay timeLeft={timeLeft} mode={mode} progress={progress} />
        <TimerController status={status} onStart={start} onPause={pause} onReset={handleReset} onSkip={handleSkip} />
      </div>
    </div>
  );
};

export default PomodoroTimer;
