import { create } from "zustand";
import { persist } from "zustand/middleware";

interface QuizData {
  // Quiz session ID (generated once per quiz session)
  quizId?: string;
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
  // Page 17
  extraIncome?: number;
  // Page 18
  smarterWay?: number;
  // Page 19
  aiMeaning?: string;
  // Page 20
  incomeGoal?: string;
  // Page 21
  financesNormal?: boolean;
  // Page 23
  workStyle?: string;
  // Page 24
  idealHours?: string;
  // Page 25
  fallingBehind?: number;
  // Page 26
  socialMediaTime?: string;
  // Page 29
  excitingThing?: string;
  // Page 30
  aiTools?: string[];
  // Page 32
  confidenceFactor?: string;
  // Page 33
  guidedPlan?: number;
  // Page 37
  knowsClientMethods?: string;
  // Page 38
  earningTimeline?: string;
  // Page 40
  knowsAiAutomation?: string;
  // Page 48
  priceThreshold?: string;
  // Page 50
  moneyReason?: string;
  // Page 51
  goalAmount?: string;
  // Page 52
  timeCommitment?: string;
  // Page 54
  readyToTakeControl?: "yes" | "no";
  commit30Min?: "yes" | "no";
  wantsHelpBuildingProject?: "yes" | "no";
  // Page 55
  email?: string;
  agreeToReceive?: boolean;
  // Page 56
  name?: string;
}

interface QuizStore {
  quizData: QuizData;
  updateQuizData: (data: Partial<QuizData>) => void;
  resetQuizData: () => void;
  generateQuizId: () => string;
}

// Генерация уникального ID для квиза
const generateUniqueQuizId = (): string => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 9);
  return `quiz_${timestamp}_${random}`;
};

export const useQuizStore = create<QuizStore>()(
  persist(
    (set, get) => ({
      quizData: {},
      updateQuizData: (data) =>
        set((state) => ({
          quizData: { ...state.quizData, ...data },
        })),
      resetQuizData: () => set({ quizData: {} }),
      generateQuizId: () => {
        const existingId = get().quizData.quizId;
        if (existingId) {
          return existingId;
        }
        const newId = generateUniqueQuizId();
        set((state) => ({
          quizData: { ...state.quizData, quizId: newId },
        }));
        return newId;
      },
    }),
    {
      name: "quiz-storage",
    }
  )
);
