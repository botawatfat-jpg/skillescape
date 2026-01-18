"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input } from "@/shared/ui";
import { QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-56.module.css";
import { useQuizStore } from "@/shared/store";

const validateName = (name: string): boolean => {
    // Name should be at least 2 characters and contain only letters, spaces, hyphens, and apostrophes
    const nameRegex = /^[a-zA-Zа-яА-Я\s'-]{2,}$/;
    return nameRegex.test(name.trim());
};

export const QuizPage56 = () => {
    const router = useRouter();
    const { updateQuizData } = useQuizStore();
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Reset error
        setNameError("");

        // Validate name
        if (!name.trim()) {
            setNameError("Name is required");
            return;
        }

        if (!validateName(name)) {
            setNameError("Please enter a valid name (at least 2 characters)");
            return;
        }

        // Validation passed
        updateQuizData({ name: name.trim() });
        router.push("/quiz/questions?pageId=57");
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <QuizTitle>What is your name?</QuizTitle>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputContainer}>
                        <Input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                if (nameError) setNameError("");
                            }}
                            className={`${styles.nameInput} ${nameError ? styles.inputError : ""}`}
                            autoFocus
                        />
                        {nameError && (
                            <span className={styles.errorText}>{nameError}</span>
                        )}
                    </div>

                    <div className="buttonContainerQuiz">
                        <Button type="submit" className={styles.continueButton}>
                            Continue
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
