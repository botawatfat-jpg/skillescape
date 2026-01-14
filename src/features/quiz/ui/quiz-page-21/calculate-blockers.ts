type BlockerKey = "confusion" | "mental" | "financial" | "time";

type Scores = Record<BlockerKey, number>;

interface QuizData {
  independence?: number;
  moneyStress?: number;
  extraIncome?: number;
  smarterWay?: number;
  aiMeaning?: string;
  incomeGoal?: string;
}

const aiMeaningScore: Record<string, Partial<Record<BlockerKey, number>>> = {
  exploring: {
    confusion: 0.6,
    time: 0.4,
  },
  "extra-income": {
    financial: 0.6,
    time: 0.4,
  },
  "new-focus": {
    mental: 0.4,
    time: 0.6,
  },
};

const incomeGoalScore: Record<string, Partial<Record<BlockerKey, number>>> = {
  "500-1000": { financial: 0.3 },
  "1000-2000": { financial: 0.5 },
  "2000-3000": { financial: 0.7, mental: 0.3 },
  "3000+": { financial: 0.8, mental: 0.4 },
};

const mapLabel: Record<BlockerKey, string> = {
  confusion: "Confusion & Lack of Guidance",
  mental: "Mental & Emotional Barriers",
  financial: "Financial Pressure & Stability",
  time: "Time & Learning Challenges",
};

// Нормализация ответов 1–5
const normalize = (value?: number) => (value ? value / 5 : 0);

export const calculateBlockers = (quizData: QuizData): Scores => {
  const scores: Scores = {
    confusion: 0,
    mental: 0,
    financial: 0,
    time: 0,
  };

  const addScore = (
    value: number | undefined,
    weights: Partial<Record<BlockerKey, number>>
  ) => {
    const v = normalize(value);
    Object.entries(weights).forEach(([key, weight]) => {
      scores[key as BlockerKey] += v * (weight ?? 0);
    });
  };

  // Page 15 — Independence
  addScore(quizData.independence, {
    financial: 0.7,
    mental: 0.3,
  });

  // Page 16 — Money Stress
  addScore(quizData.moneyStress, {
    financial: 0.8,
    mental: 0.2,
  });

  // Page 17 — Extra Income Thinking
  addScore(quizData.extraIncome, {
    financial: 0.6,
    confusion: 0.4,
  });

  // Page 18 — Smarter Way
  addScore(quizData.smarterWay, {
    confusion: 0.7,
    time: 0.3,
  });

  // Page 19 — AI Meaning (radio)
  if (quizData.aiMeaning && aiMeaningScore[quizData.aiMeaning]) {
    Object.entries(aiMeaningScore[quizData.aiMeaning]).forEach(
      ([key, weight]) => {
        scores[key as BlockerKey] += weight ?? 0;
      }
    );
  }

  // Page 20 — Income Goal (radio)
  if (quizData.incomeGoal && incomeGoalScore[quizData.incomeGoal]) {
    Object.entries(incomeGoalScore[quizData.incomeGoal]).forEach(
      ([key, weight]) => {
        scores[key as BlockerKey] += weight ?? 0;
      }
    );
  }

  return scores;
};

export const toPercentages = (scores: Scores) => {
  // Вычисляем общую сумму всех scores
  const totalScore = Object.values(scores).reduce((sum, value) => sum + value, 0);

  // Если сумма 0, возвращаем равномерное распределение
  if (totalScore === 0) {
    return Object.entries(scores).map(([key]) => ({
      label: mapLabel[key as BlockerKey],
      percentage: 25,
    }));
  }

  // Нормализуем каждый score до процента с округлением
  const percentages = Object.entries(scores).map(([key, value]) => ({
    key: key as BlockerKey,
    label: mapLabel[key as BlockerKey],
    percentage: Math.round((value / totalScore) * 100),
  }));

  // Корректируем для точной суммы 100% (компенсируем ошибки округления)
  const sum = percentages.reduce((acc, item) => acc + item.percentage, 0);
  const diff = 100 - sum;

  if (diff !== 0) {
    // Находим элемент с наибольшим значением и добавляем к нему разницу
    const maxIndex = percentages.reduce(
      (maxIdx, item, idx, arr) =>
        item.percentage > arr[maxIdx].percentage ? idx : maxIdx,
      0
    );
    percentages[maxIndex].percentage += diff;
  }

  // Возвращаем без поля key
  return percentages.map(({ label, percentage }) => ({ label, percentage }));
};
