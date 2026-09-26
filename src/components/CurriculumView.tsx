import React, { useState } from 'react';
import { Grade, Lesson } from '../types/mathverse';
import { useMathVerse } from '../context/MathVerseContext';
import { CURRICULUM_DATA } from '../data/curriculumData';
import { LessonDetailModal } from './LessonDetailModal';
import { BookOpen, CheckCircle2, Play, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

export const CurriculumView: React.FC = () => {
  const { user, updateGrade, setSelectedLessonId, setActiveTab } = useMathVerse();
  const currentGrade = user?.grade || 6;

  const [activeGradeTab, setActiveGradeTab] = useState<Grade>(currentGrade);
  const [selectedTopicFilter, setSelectedTopicFilter] = useState<string>('all');
  const [activeModalLesson, setActiveModalLesson] = useState<Lesson | null>(null);

  // Filter lessons by grade
  const gradeLessons = CURRICULUM_DATA.filter((l) => l.grade === activeGradeTab);

  // Distinct topics in this grade
  const topics = ['all', ...Array.from(new Set(gradeLessons.map((l) => l.topic)))];

  const filteredLessons = selectedTopicFilter === 'all'
    ? gradeLessons
    : gradeLessons.filter((l) => l.topic === selectedTopicFilter);

  const handleOpenLesson = (lesson: Lesson) => {
    soundManager.playClickSound();
    setActiveModalLesson(lesson);
  };

  const handleStartPractice = (lessonId: string) => {
    setActiveModalLesson(null);
    setSelectedLessonId(lessonId);
    setActiveTab('practice');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
            <BookOpen className="w-7 h-7 text-cyan-400" />
            <span>Chương trình học THCS</span>
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Lý thuyết trọng tâm, công thức cốt lõi và bài giảng từng bước từ Lớp 6 đến Lớp 9.
          </p>
        </div>

        {/* Grade tabs */}
        <div className="inline-flex p-1 rounded-2xl bg-slate-900 border border-slate-800">
          {([6, 7, 8, 9] as Grade[]).map((g) => (
            <button
              key={g}
              onClick={() => {
                setActiveGradeTab(g);
                updateGrade(g);
                setSelectedTopicFilter('all');
                soundManager.playClickSound();
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeGradeTab === g
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-indigo-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Lớp {g}
            </button>
          ))}
        </div>
      </div>

      {/* Topic Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs text-slate-500 flex items-center gap-1 pl-1">
          <Filter className="w-3.5 h-3.5" /> Chủ đề:
        </span>
        {topics.map((t) => (
          <button
            key={t}
            onClick={() => {
              setSelectedTopicFilter(t);
              soundManager.playClickSound();
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedTopicFilter === t
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200'
            }`}
          >
            {t === 'all' ? 'Tất cả chủ đề' : t}
          </button>
        ))}
      </div>

      {/* Lesson Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredLessons.map((lesson) => {
          const isDone = user?.completedLessons.includes(lesson.id);

          return (
            <div
              key={lesson.id}
              className={`group p-5 rounded-2xl bg-slate-900/80 border transition-all duration-300 backdrop-blur-md flex flex-col justify-between ${
                isDone
                  ? 'border-emerald-500/30 hover:border-emerald-500/50 shadow-sm shadow-emerald-500/5'
                  : 'border-slate-800 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-950/40'
              }`}
            >
              <div>
                {/* Meta row */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-950/60 border border-indigo-500/30 text-indigo-300">
                    {lesson.topic}
                  </span>
                  {isDone ? (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3" /> Đã hoàn thành
                    </span>
                  ) : (
                    <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-cyan-400" /> +50 XP
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                  {lesson.title}
                </h3>

                {/* Objective */}
                <p className="text-xs text-slate-300/90 line-clamp-2 leading-relaxed mb-4">
                  {lesson.objective}
                </p>

                {/* Key formulas preview */}
                {lesson.formulas.length > 0 && (
                  <div className="mb-4 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 font-mono text-xs text-cyan-300 flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 font-sans uppercase">Công thức:</span>
                    <span className="truncate">{lesson.formulas[0].formula}</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-slate-800/70 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleOpenLesson(lesson)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Học lý thuyết</span>
                </button>

                <button
                  onClick={() => handleStartPractice(lesson.id)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-500/20 transition-all cursor-pointer flex items-center gap-1.5 group-hover:scale-105"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Luyện tập</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Modal */}
      {activeModalLesson && (
        <LessonDetailModal
          lesson={activeModalLesson}
          onClose={() => setActiveModalLesson(null)}
          onStartPractice={handleStartPractice}
        />
      )}
    </div>
  );
};
