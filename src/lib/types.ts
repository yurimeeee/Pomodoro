export interface PomodoroSession {
  id?: string
  startTime: Date
  endTime: Date
  duration: number
  task: string
  distractions: string[]
  completed: boolean
  createdAt: Date
}

export interface SessionStats {
  totalSessions: number
  totalFocusTime: number
  completedSessions: number
  topTasks: { task: string; count: number }[]
  topDistractions: { distraction: string; count: number }[]
}

export type TimerMode = "focus" | "break"
export type TimerStatus = "idle" | "running" | "paused"
