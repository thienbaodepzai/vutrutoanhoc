import React, { createContext, useContext, useState, useEffect } from 'react';
import { Grade, UserProfile, MistakeRecord } from '../types/mathverse';
import { BADGES_DATA, getUserLevel } from '../data/badgesData';
import { soundManager } from '../utils/soundEffects';

interface MathVerseContextType {
  user: UserProfile | null;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedLessonId: string | null;
  setSelectedLessonId: (id: string | null) => void;
  selectedPracticeTopic: string | null;
  setSelectedPracticeTopic: (topic: string | null) => void;
  login: (name: string, grade: Grade, avatar: string) => void;
  logout: () => void;
  addXp: (amount: number, reason?: string) => void;
  completeLesson: (lessonId: string) => void;
  recordQuestionResult: (
    questionId: string,
    isCorrect: boolean,
    topic: string,
    questionText: string,
    userAnswer: string,
    correctAnswer: string,
    explanation: string,
    xpEarned: number
  ) => void;
  toggleSound: () => void;
  updateGrade: (grade: Grade) => void;
  updateProfile: (name: string, avatar: string) => void;
  resetAllData: () => void;
  recentXpGained: { amount: number; reason?: string } | null;
  newBadgeUnlocked: string | null;
  clearNewBadge: () => void;
}

const STORAGE_KEY = 'mathverse_user_profile_v1';

const defaultProfile: UserProfile = {
  name: '',
  grade: 6,
  avatar: '👨‍🚀',
  xp: 0,
  streak: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  completedLessons: [],
  answeredQuestionsCount: 0,
  correctAnswersCount: 0,
  timeSpentSeconds: 0,
  unlockedBadges: [],
  topicStats: {
    'Số học': { correct: 0, total: 0 },
    'Phân số': { correct: 0, total: 0 },
    'Đại số': { correct: 0, total: 0 },
    'Hình học': { correct: 0, total: 0 },
    'Thống kê': { correct: 0, total: 0 },
  },
  recentMistakes: [],
  soundEnabled: true,
};

const MathVerseContext = createContext<MathVerseContextType | undefined>(undefined);

export const MathVerseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.name) {
          // Check streak on startup
          const today = new Date().toISOString().split('T')[0];
          const lastDate = parsed.lastActiveDate || today;
          let streak = parsed.streak || 1;

          if (lastDate !== today) {
            const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
            if (lastDate === yesterday) {
              streak += 1;
            } else {
              streak = 1; // streak broke
            }
          }

          return {
            ...defaultProfile,
            ...parsed,
            streak,
            lastActiveDate: today,
          };
        }
      }
    } catch {
      // Ignore
    }
    return null;
  });

  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [selectedPracticeTopic, setSelectedPracticeTopic] = useState<string | null>(null);
  const [recentXpGained, setRecentXpGained] = useState<{ amount: number; reason?: string } | null>(null);
  const [newBadgeUnlocked, setNewBadgeUnlocked] = useState<string | null>(null);

  // Sync with sound manager
  useEffect(() => {
    if (user) {
      soundManager.setSoundEnabled(user.soundEnabled ?? true);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    }
  }, [user]);

  // Check badges whenever user profile changes
  const checkBadgeUnlocks = (updatedUser: UserProfile): UserProfile => {
    let newlyUnlocked: string[] = [];
    const currentBadges = new Set(updatedUser.unlockedBadges);

    BADGES_DATA.forEach((badge) => {
      if (!currentBadges.has(badge.id)) {
        if (badge.checkUnlocked(updatedUser)) {
          currentBadges.add(badge.id);
          newlyUnlocked.push(badge.title);
        }
      }
    });

    if (newlyUnlocked.length > 0) {
      setNewBadgeUnlocked(newlyUnlocked[0]);
      soundManager.triggerBigCelebration();
    }

    return {
      ...updatedUser,
      unlockedBadges: Array.from(currentBadges),
    };
  };

  const login = (name: string, grade: Grade, avatar: string) => {
    const newUser: UserProfile = {
      ...defaultProfile,
      name,
      grade,
      avatar,
      lastActiveDate: new Date().toISOString().split('T')[0],
      streak: 1,
    };
    setUser(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    soundManager.playTriumphSound();
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
    setActiveTab('dashboard');
  };

  const addXp = (amount: number, reason?: string) => {
    if (!user) return;
    setRecentXpGained({ amount, reason });
    setTimeout(() => setRecentXpGained(null), 3000);

    setUser((prev) => {
      if (!prev) return null;
      const updated = {
        ...prev,
        xp: prev.xp + amount,
      };
      return checkBadgeUnlocks(updated);
    });
  };

  const completeLesson = (lessonId: string) => {
    if (!user) return;
    const isNew = !user.completedLessons.includes(lessonId);

    setUser((prev) => {
      if (!prev) return null;
      if (!isNew) return prev;

      const updated = {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
        xp: prev.xp + 50,
      };
      return checkBadgeUnlocks(updated);
    });

    if (isNew) {
      soundManager.triggerConfetti();
      soundManager.playTriumphSound();
      setRecentXpGained({ amount: 50, reason: 'Hoàn thành bài học' });
      setTimeout(() => setRecentXpGained(null), 3000);
    }
  };

  const recordQuestionResult = (
    questionId: string,
    isCorrect: boolean,
    topic: string,
    questionText: string,
    userAnswer: string,
    correctAnswer: string,
    explanation: string,
    xpEarned: number
  ) => {
    if (!user) return;

    setUser((prev) => {
      if (!prev) return null;

      const prevTopic = prev.topicStats[topic] || { correct: 0, total: 0 };
      const updatedTopicStats = {
        ...prev.topicStats,
        [topic]: {
          correct: prevTopic.correct + (isCorrect ? 1 : 0),
          total: prevTopic.total + 1,
        },
      };

      let mistakes = [...prev.recentMistakes];
      if (!isCorrect) {
        const newMistake: MistakeRecord = {
          questionId,
          questionText,
          topic,
          userAnswer,
          correctAnswer,
          explanation,
          timestamp: Date.now(),
        };
        // Keep at most 20 recent mistakes
        mistakes = [newMistake, ...mistakes.filter((m) => m.questionId !== questionId)].slice(0, 20);
      } else {
        // If answered correctly later, remove from mistakes
        mistakes = mistakes.filter((m) => m.questionId !== questionId);
      }

      const updated: UserProfile = {
        ...prev,
        answeredQuestionsCount: prev.answeredQuestionsCount + 1,
        correctAnswersCount: prev.correctAnswersCount + (isCorrect ? 1 : 0),
        xp: prev.xp + (isCorrect ? xpEarned : 0),
        topicStats: updatedTopicStats,
        recentMistakes: mistakes,
      };

      return checkBadgeUnlocks(updated);
    });

    if (isCorrect) {
      soundManager.playCorrectSound();
      setRecentXpGained({ amount: xpEarned, reason: 'Trả lời đúng' });
      setTimeout(() => setRecentXpGained(null), 2500);
    } else {
      soundManager.playWrongSound();
    }
  };

  const toggleSound = () => {
    setUser((prev) => {
      if (!prev) return null;
      const nextSound = !prev.soundEnabled;
      soundManager.setSoundEnabled(nextSound);
      return { ...prev, soundEnabled: nextSound };
    });
  };

  const updateGrade = (grade: Grade) => {
    setUser((prev) => (prev ? { ...prev, grade } : null));
  };

  const updateProfile = (name: string, avatar: string) => {
    setUser((prev) => (prev ? { ...prev, name, avatar } : null));
  };

  const resetAllData = () => {
    if (!user) return;
    const cleanUser: UserProfile = {
      ...defaultProfile,
      name: user.name,
      grade: user.grade,
      avatar: user.avatar,
    };
    setUser(cleanUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanUser));
  };

  const clearNewBadge = () => {
    setNewBadgeUnlocked(null);
  };

  return (
    <MathVerseContext.Provider
      value={{
        user,
        activeTab,
        setActiveTab,
        selectedLessonId,
        setSelectedLessonId,
        selectedPracticeTopic,
        setSelectedPracticeTopic,
        login,
        logout,
        addXp,
        completeLesson,
        recordQuestionResult,
        toggleSound,
        updateGrade,
        updateProfile,
        resetAllData,
        recentXpGained,
        newBadgeUnlocked,
        clearNewBadge,
      }}
    >
      {children}
    </MathVerseContext.Provider>
  );
};

export const useMathVerse = () => {
  const context = useContext(MathVerseContext);
  if (!context) {
    throw new Error('useMathVerse must be used within a MathVerseProvider');
  }
  return context;
};
