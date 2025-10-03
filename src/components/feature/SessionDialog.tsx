'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@components/ui/dialog';

import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { X } from 'lucide-react';
import { useState } from 'react';

interface SessionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (task: string, distractions: string[]) => void;
  duration: number;
}

const COMMON_TASKS = ['코딩', '공부', '독서', '글쓰기', '회의', '기획'];
const COMMON_DISTRACTIONS = ['유튜브', '카톡', '인스타그램', '이메일', '전화', '기타'];

export function SessionDialog({ open, onOpenChange, onSave, duration }: SessionDialogProps) {
  const [task, setTask] = useState('');
  const [customTask, setCustomTask] = useState('');
  const [distractions, setDistractions] = useState<string[]>([]);
  const [customDistraction, setCustomDistraction] = useState('');

  const handleSave = () => {
    const finalTask = task || customTask;
    if (!finalTask.trim()) return;

    onSave(finalTask, distractions);
    // Reset form
    setTask('');
    setCustomTask('');
    setDistractions([]);
    setCustomDistraction('');
  };

  const toggleDistraction = (distraction: string) => {
    setDistractions((prev) => (prev.includes(distraction) ? prev.filter((d) => d !== distraction) : [...prev, distraction]));
  };

  const addCustomDistraction = () => {
    if (customDistraction.trim() && !distractions.includes(customDistraction.trim())) {
      setDistractions([...distractions, customDistraction.trim()]);
      setCustomDistraction('');
    }
  };

  const minutes = Math.floor(duration / 60);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md neomorph bg-background border-0">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light">세션 기록</DialogTitle>
          <DialogDescription className="text-base">{minutes}분 동안 무엇을 하셨나요? 방해 요소가 있었나요?</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-6 py-4">
          {/* Task selection */}
          <div className="flex flex-col gap-3">
            <Label className="text-sm font-medium">작업</Label>
            <div className="flex flex-wrap gap-2">
              {COMMON_TASKS.map((t) => (
                <button
                  key={t}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    task === t ? 'neomorph-pressed bg-primary text-primary-foreground' : 'neomorph-sm bg-background text-foreground'
                  }`}
                  onClick={() => {
                    setTask(task === t ? '' : t);
                    setCustomTask('');
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="neomorph-inset rounded-2xl bg-background">
              <Input
                placeholder="직접 입력..."
                value={customTask}
                onChange={(e) => {
                  setCustomTask(e.target.value);
                  setTask('');
                }}
                className="mt-1 border-0 bg-transparent shadow-none focus-visible:ring-0"
              />
            </div>
          </div>

          {/* Distraction selection */}
          <div className="flex flex-col gap-3">
            <Label className="text-sm font-medium">방해 요소 (선택)</Label>
            <div className="flex flex-wrap gap-2">
              {COMMON_DISTRACTIONS.map((d) => (
                <button
                  key={d}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    distractions.includes(d) ? 'neomorph-pressed bg-accent text-accent-foreground' : 'neomorph-sm bg-background text-foreground'
                  }`}
                  onClick={() => toggleDistraction(d)}
                >
                  {d}
                </button>
              ))}
            </div>

            {/* Custom distractions */}
            {distractions.filter((d) => !COMMON_DISTRACTIONS.includes(d)).length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {distractions
                  .filter((d) => !COMMON_DISTRACTIONS.includes(d))
                  .map((d) => (
                    <div key={d} className="neomorph-sm px-4 py-2 rounded-full text-sm bg-background flex items-center gap-2">
                      {d}
                      <button onClick={() => setDistractions(distractions.filter((dist) => dist !== d))} className="hover:text-destructive">
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
              </div>
            )}

            <div className="flex gap-2 mt-1">
              <div className="neomorph-inset rounded-2xl bg-background flex-1">
                <Input
                  placeholder="직접 입력..."
                  value={customDistraction}
                  onChange={(e) => setCustomDistraction(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addCustomDistraction();
                    }
                  }}
                  className="border-0 bg-transparent shadow-none focus-visible:ring-0"
                />
              </div>
              <button onClick={addCustomDistraction} className="neomorph-sm px-4 rounded-2xl bg-background text-foreground text-sm font-medium">
                추가
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-end">
          <button onClick={() => onOpenChange(false)} className="neomorph-sm px-6 py-3 rounded-full bg-background text-foreground text-sm font-medium">
            취소
          </button>
          <button
            onClick={handleSave}
            disabled={!task && !customTask.trim()}
            className="neomorph-hover px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium disabled:opacity-50"
          >
            저장
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
