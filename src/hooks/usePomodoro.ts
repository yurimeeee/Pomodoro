import type { TimerMode, TimerStatus } from "@lib/types"
import { useCallback, useEffect, useRef, useState } from "react"

const FOCUS_TIME = 25 * 60 // 25분
const BREAK_TIME = 5 * 60 // 5분

export function usePomodoro() {
  const [mode, setMode] = useState<TimerMode>("focus")
  const [status, setStatus] = useState<TimerStatus>("idle")
  const [timeLeft, setTimeLeft] = useState(FOCUS_TIME)
  const [sessionStartTime, setSessionStartTime] = useState<Date | null>(null)
  const intervalRef = useRef<any>(null)

  const totalTime = mode === "focus" ? FOCUS_TIME : BREAK_TIME

  const start = useCallback(() => {
    if (status === "idle") {
      setSessionStartTime(new Date())
    }
    setStatus("running")
  }, [status])

  const pause = useCallback(() => {
    setStatus("paused")
  }, [])

  const reset = useCallback(() => {
    setStatus("idle")
    setTimeLeft(mode === "focus" ? FOCUS_TIME : BREAK_TIME)
    setSessionStartTime(null)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }, [mode])

  const skip = useCallback(() => {
    const newMode = mode === "focus" ? "break" : "focus"
    setMode(newMode)
    setTimeLeft(newMode === "focus" ? FOCUS_TIME : BREAK_TIME)
    setStatus("idle")
    setSessionStartTime(null)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }, [mode])

  useEffect(() => {
    if (status === "running") {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // Timer completed
            setStatus("idle")
            const newMode = mode === "focus" ? "break" : "focus"
            setMode(newMode)
            if (intervalRef.current) {
              clearInterval(intervalRef.current)
            }
            return newMode === "focus" ? FOCUS_TIME : BREAK_TIME
          }
          return prev - 1
        })
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [status, mode])


  const progress = ((totalTime - timeLeft) / totalTime) * 100

  return {
    mode,
    status,
    timeLeft,
    sessionStartTime,
    progress,
    start,
    pause,
    reset,
    skip,
  }
}