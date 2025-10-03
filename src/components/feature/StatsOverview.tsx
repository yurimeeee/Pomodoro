'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { Clock, Target, TrendingUp, Zap } from 'lucide-react';

import type { SessionStats } from '@lib/types';
import { formatDuration } from '@lib/utils/time';
import { useTranslation } from 'react-i18next';

interface StatsOverviewProps {
  stats: SessionStats;
}

export function StatsOverview({ stats }: StatsOverviewProps) {
  const { t } = useTranslation('translation');
  const completionRate = stats.totalSessions > 0 ? (stats.completedSessions / stats.totalSessions) * 100 : 0;

  const statCards = [
    {
      title: t('totalFocusTime'),
      value: formatDuration(stats.totalFocusTime),
      icon: Clock,
      description: t('cumulativeFocusTime'),
    },
    {
      title: t('completedSessions'),
      value: stats.completedSessions.toString(),
      icon: Target,
      description: `${t('totalSessionsCount')} ${stats.totalSessions}`,
    },
    {
      title: t('completionRate'),
      value: `${completionRate.toFixed(0)}%`,
      icon: TrendingUp,
      description: t('sessionCompletionRate'),
    },
    {
      title: t('averageFocus'),
      value: stats.topDistractions.length === 0 ? t('high') : t('medium'),
      icon: Zap,
      description: t('basedOnDistractions'),
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
      {statCards.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <div className="rounded-full p-2 bg-primary/10">
                <Icon className="w-4 h-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-semibold tracking-tight">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
