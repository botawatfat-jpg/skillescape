"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui";
import { CardOption, QuizTitle, QuizDescription } from "@/features/quiz/shared";
import styles from "./quiz-page-30.module.css";
import { useQuizStore } from "@/shared/store";

export const QuizPage30 = () => {
  const router = useRouter();
  const { quizData, updateQuizData } = useQuizStore();

  const handleChange = (value: string) => {
    const currentTools = quizData.aiTools || [];

    // Если выбрали "none"
    if (value === "none") {
      // Если "none" уже выбран, снимаем его
      if (currentTools.includes("none")) {
        updateQuizData({ aiTools: [] });
      } else {
        // Иначе убираем все и ставим только "none"
        updateQuizData({ aiTools: ["none"] });
      }
      return;
    }

    // Если выбрали любой другой инструмент
    // Сначала убираем "none" если он был выбран
    const toolsWithoutNone = currentTools.filter((tool) => tool !== "none");

    // Затем toggle выбранного инструмента
    if (toolsWithoutNone.includes(value)) {
      updateQuizData({
        aiTools: toolsWithoutNone.filter((tool) => tool !== value),
      });
    } else {
      updateQuizData({ aiTools: [...toolsWithoutNone, value] });
    }
  };

  const handleContinue = () => {
    if (quizData.aiTools?.includes("none")) {
      router.push("/quiz/questions?pageId=39");
    } else {
      router.push("/quiz/questions?pageId=31");
    }
  };

  return (
    <div>
      <QuizTitle>Which of these AI tools have you heard about?</QuizTitle>

      <QuizDescription>
        No worries if none. Most people who start had zero experience - they
        just learned by trying
      </QuizDescription>

      <div className={styles.grid}>
        <CardOption
          name="aiTools"
          value="chatgpt"
          label="ChatGPT"
          icon="https://d2tpw6ibsnrlae.cloudfront.net/quiz/v6.1.1/33/media/Vector.png"
          checked={(quizData.aiTools || []).includes("chatgpt")}
          onChange={() => handleChange("chatgpt")}
        />
        <CardOption
          name="aiTools"
          value="deepseek"
          label="DeepSeek"
          icon="https://d2tpw6ibsnrlae.cloudfront.net/quiz/v6.1.1/33/media/AI Icons.png"
          checked={(quizData.aiTools || []).includes("deepseek")}
          onChange={() => handleChange("deepseek")}
        />
        <CardOption
          name="aiTools"
          value="gemini"
          label="Gemini"
          icon="https://d2tpw6ibsnrlae.cloudfront.net/quiz/v6.1.1/33/media/AI Icons-1.png"
          checked={(quizData.aiTools || []).includes("gemini")}
          onChange={() => handleChange("gemini")}
        />
        <CardOption
          name="aiTools"
          value="midjourney"
          label="Midjourney"
          icon="https://d2tpw6ibsnrlae.cloudfront.net/quiz/v6.1.1/33/media/AI Icons-2.png"
          checked={(quizData.aiTools || []).includes("midjourney")}
          onChange={() => handleChange("midjourney")}
        />
        <CardOption
          name="aiTools"
          value="veo3"
          label="VEO 3"
          icon="https://d2tpw6ibsnrlae.cloudfront.net/quiz/v6.1.1/33/media/Frame 2.png"
          checked={(quizData.aiTools || []).includes("veo3")}
          onChange={() => handleChange("veo3")}
        />
        <CardOption
          name="aiTools"
          value="perplexity"
          label="Perplexity AI"
          icon="https://d2tpw6ibsnrlae.cloudfront.net/quiz/v6.1.1/33/media/AI Icons-3.png"
          checked={(quizData.aiTools || []).includes("perplexity")}
          onChange={() => handleChange("perplexity")}
        />
        <CardOption
          name="aiTools"
          value="elevenlabs"
          label="Eleven Labs"
          icon="https://d2tpw6ibsnrlae.cloudfront.net/quiz/v6.1.1/33/media/AI Icons-4.png"
          checked={(quizData.aiTools || []).includes("elevenlabs")}
          onChange={() => handleChange("elevenlabs")}
        />
        <CardOption
          name="aiTools"
          value="kling"
          label="Kling AI"
          icon="https://d2tpw6ibsnrlae.cloudfront.net/quiz/v6.1.1/33/media/AI Icons-5.png"
          checked={(quizData.aiTools || []).includes("kling")}
          onChange={() => handleChange("kling")}
        />
        <CardOption
          name="aiTools"
          value="none"
          label="No experience yet, but I'm excited to learn"
          checked={(quizData.aiTools || []).includes("none")}
          onChange={() => handleChange("none")}
        />
      </div>

      <div className="buttonContainerQuiz">
        <Button onClick={handleContinue} className={styles.button}>
          Continue
        </Button>
      </div>
    </div>
  );
};
