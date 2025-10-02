import TimerController from './TimerController';
import TimerDisplay from './TimerDisplay';
import { usePomodoro } from '@hooks/usePomodoro';

const PomodoroTimer = () => {
  const { mode, status, timeLeft, sessionStartTime, progress, start, pause, reset, skip } = usePomodoro();
  console.log(sessionStartTime, timeLeft, mode, status);
  const handleReset = () => {
    reset();
  };
  const handleSkip = () => {
    skip();
  };

  return (
    <div>
      <TimerDisplay timeLeft={timeLeft} mode={mode} progress={progress} />
      <TimerController status={status} onStart={start} onPause={pause} onReset={handleReset} onSkip={handleSkip} />
    </div>
  );
};

export default PomodoroTimer;
