import type { PomodoroSession, SessionStats } from '@lib/types';

import { BarChart3 } from 'lucide-react';
import { Card } from '@components/ui/card';
import PomodoroTimer from '@components/feature/PomodoroTimer';
import { SessionDialog } from '@components/feature/SessionDialog';
import { StatsOverview } from '@components/feature/StatsOverview';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('translation');
  const [sessions, setSessions] = useState<PomodoroSession[]>([]);
  const [stats, setStats] = useState<SessionStats>({
    totalSessions: 0,
    totalFocusTime: 0,
    completedSessions: 0,
    topTasks: [],
    topDistractions: [],
  });
  // const [period, setPeriod] = useState<TimePeriod>('week');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pendingSession, setPendingSession] = useState<{
    startTime: Date;
    endTime: Date;
    duration: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const handleSessionComplete = (startTime: Date, endTime: Date, duration: number) => {
    setPendingSession({ startTime, endTime, duration });
    setDialogOpen(true);
  };
  const handleSaveSession = () => {};

  return (
    <div className="flex flex-col gap-12">
      <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50 w-full max-w-[780px] mx-auto">
        <PomodoroTimer onSessionComplete={handleSessionComplete} />
      </Card>
      <div className="w-full max-w-[780px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="rounded-full p-2 bg-primary/10">
            <BarChart3 className="w-4 h-4 text-primary" />
          </div>
          <h2 className="text-lg font-semibold tracking-tight">{t('statistics')}</h2>
        </div>
        <StatsOverview stats={stats} />
      </div>
      <SessionDialog open={dialogOpen} onOpenChange={setDialogOpen} onSave={handleSaveSession} duration={pendingSession?.duration || 0} />
    </div>
  );
};

export default Home;
