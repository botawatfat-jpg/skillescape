import { create } from "zustand";
import { persist } from "zustand/middleware";

interface QuizData {
  // Gender selection
  gender?: "male" | "female";
  // Page 1
  age?: string;
  // Page 3
  goal?: string;
  // Page 4
  status?: string;
  // Page 5
  experience?: string;
  // Page 7
  challenges?: string[];
  // Page 8
  stopping?: string;
  // Page 9
  agreement?: number;
  // Page 10
  freedom?: number;
  // Page 11
  readiness?: number;
  // Page 13
  coding?: string;
  // Page 14
  freelancing?: string;

  // Page 15
  independence?: number;
  // Page 16
  moneyStress?: number;
}

interface QuizStore {
  quizData: QuizData;
  updateQuizData: (data: Partial<QuizData>) => void;
  resetQuizData: () => void;
}

export const useQuizStore = create<QuizStore>()(
  persist(
    (set) => ({
      quizData: {},
      updateQuizData: (data) =>
        set((state) => ({
          quizData: { ...state.quizData, ...data },
        })),
      resetQuizData: () => set({ quizData: {} }),
    }),
    {
      name: "quiz-storage",
    }
  )
);
