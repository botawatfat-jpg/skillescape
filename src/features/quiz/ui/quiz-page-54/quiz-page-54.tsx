"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui";
import { QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-54.module.css";
import { useQuizStore } from "@/shared/store";
import { Check, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
    {
        author: "Emily Davis",
        date: "Sep 26, 2025",
        title: "Best AI course",
        text: "I had zero tech background, but the way Skillescape teaches AI automation is so clear and hands-on. Building and selling chatbots became a real skill for me — and actually profitable.",
        rating: 5,
    },
    {
        author: "James L.",
        date: "Aug 18, 2025",
        title: "Everything finally works!",
        text: "I've tried almost every way to earn online - freelancing, social media gigs, even automation courses. It always felt overwhelming - too many tools, no clear system, and zero real support.",
        rating: 5,
    },
    {
        author: "Sarah Martinez",
        date: "Oct 15, 2025",
        title: "Game changer",
        text: "Within two weeks of joining, I landed my first client. The step-by-step guidance and AI tools made everything so much easier than I expected.",
        rating: 5,
    },
    {
        author: "Michael Chen",
        date: "Sep 5, 2025",
        title: "Worth every penny",
        text: "The support team is incredible - they actually help, not just automated responses. I'm making consistent income now and couldn't be happier.",
        rating: 5,
    },
    {
        author: "Lisa Anderson",
        date: "Oct 2, 2025",
        title: "Simple and effective",
        text: "Finally, a course that doesn't overwhelm you with information. The templates and clear instructions made it easy to get started and see results quickly.",
        rating: 5,
    },
];

type ModalType =
    | "ready-to-take-control"
    | "commit-30-min"
    | "help-build-project"
    | null;

export const QuizPage54 = () => {
    const router = useRouter();
    const { updateQuizData } = useQuizStore();
    const [goalsProgress, setGoalsProgress] = useState(0);
    const [goalsCompleted, setGoalsCompleted] = useState(false);
    const [growthAreasProgress, setGrowthAreasProgress] = useState(0);
    const [growthAreasCompleted, setGrowthAreasCompleted] = useState(false);
    const [showGrowthAreas, setShowGrowthAreas] = useState(false);
    const [settingContentProgress, setSettingContentProgress] = useState(0);
    const [showSettingContent, setShowSettingContent] = useState(false);
    const [settingContentCompleted, setSettingContentCompleted] = useState(false);
    const [settingContentModalAnswered, setSettingContentModalAnswered] = useState(false);
    const [modalType, setModalType] = useState<ModalType>(null);
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    // Refs to store interval IDs
    const goalsIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const growthAreasIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const settingContentIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // Load Goals progress to 50%, then show modal
    useEffect(() => {
        if (goalsCompleted) return;

        goalsIntervalRef.current = setInterval(() => {
            setGoalsProgress((prev) => {
                if (prev >= 50) {
                    if (goalsIntervalRef.current) {
                        clearInterval(goalsIntervalRef.current);
                        goalsIntervalRef.current = null;
                    }
                    if (!goalsCompleted && prev === 50) {
                        setTimeout(() => setModalType("ready-to-take-control"), 0);
                    }
                    return 50;
                }
                return prev + 1;
            });
        }, 30);

        return () => {
            if (goalsIntervalRef.current) {
                clearInterval(goalsIntervalRef.current);
                goalsIntervalRef.current = null;
            }
        };
    }, [goalsCompleted]);

    // After Goals reaches 100%, mark as completed
    useEffect(() => {
        if (goalsProgress === 100 && !goalsCompleted) {
            setTimeout(() => {
                setGoalsCompleted(true);
                setShowGrowthAreas(true);
            }, 0);
        }
    }, [goalsProgress, goalsCompleted]);

    // Load Growth Areas progress to 50%, then show modal
    useEffect(() => {
        if (!showGrowthAreas || growthAreasCompleted) return;

        growthAreasIntervalRef.current = setInterval(() => {
            setGrowthAreasProgress((prev) => {
                if (prev >= 50) {
                    if (growthAreasIntervalRef.current) {
                        clearInterval(growthAreasIntervalRef.current);
                        growthAreasIntervalRef.current = null;
                    }
                    if (!growthAreasCompleted && goalsCompleted && prev === 50) {
                        setTimeout(() => setModalType("commit-30-min"), 0);
                    }
                    return 50;
                }
                return prev + 1;
            });
        }, 30);

        return () => {
            if (growthAreasIntervalRef.current) {
                clearInterval(growthAreasIntervalRef.current);
                growthAreasIntervalRef.current = null;
            }
        };
    }, [showGrowthAreas, growthAreasCompleted, goalsCompleted]);

    // After Growth Areas reaches 100%, mark as completed
    useEffect(() => {
        if (growthAreasProgress === 100 && !growthAreasCompleted) {
            setTimeout(() => {
                setGrowthAreasCompleted(true);
                setShowSettingContent(true);
            }, 0);
        }
    }, [growthAreasProgress, growthAreasCompleted]);

    // Load Setting Content progress to 50%, then show modal
    useEffect(() => {
        if (!showSettingContent || settingContentModalAnswered) return;

        settingContentIntervalRef.current = setInterval(() => {
            setSettingContentProgress((prev) => {
                if (prev >= 50) {
                    if (settingContentIntervalRef.current) {
                        clearInterval(settingContentIntervalRef.current);
                        settingContentIntervalRef.current = null;
                    }
                    if (modalType === null) {
                        setTimeout(() => setModalType("help-build-project"), 0);
                    }
                    return 50;
                }
                return prev + 1;
            });
        }, 30);

        return () => {
            if (settingContentIntervalRef.current) {
                clearInterval(settingContentIntervalRef.current);
                settingContentIntervalRef.current = null;
            }
        };
    }, [showSettingContent, settingContentModalAnswered, modalType]);

    // After Setting Content modal answered, continue progress from 50% to 100%
    useEffect(() => {
        if (!settingContentModalAnswered || !showSettingContent || settingContentProgress >= 100) return;

        // Clear any existing interval
        if (settingContentIntervalRef.current) {
            clearInterval(settingContentIntervalRef.current);
            settingContentIntervalRef.current = null;
        }

        // Continue from current progress (50%) to 100%
        settingContentIntervalRef.current = setInterval(() => {
            setSettingContentProgress((prev) => {
                const next = Math.min(prev + 1.5, 100);
                if (next >= 100) {
                    if (settingContentIntervalRef.current) {
                        clearInterval(settingContentIntervalRef.current);
                        settingContentIntervalRef.current = null;
                    }
                    return 100;
                }
                return next;
            });
        }, 20);

        return () => {
            if (settingContentIntervalRef.current) {
                clearInterval(settingContentIntervalRef.current);
                settingContentIntervalRef.current = null;
            }
        };
    }, [settingContentModalAnswered, showSettingContent, settingContentProgress]);

    // Mark Setting Content as completed when progress reaches 100%
    useEffect(() => {
        if (settingContentProgress === 100 && !settingContentCompleted) {
            setTimeout(() => {
                setSettingContentCompleted(true);
            }, 0);
        }
    }, [settingContentProgress, settingContentCompleted]);

    // Redirect to page 55 after 2 seconds when Setting Content is completed
    useEffect(() => {
        if (!settingContentCompleted) return;

        const timer = setTimeout(() => {
            router.push("/quiz/questions?pageId=55");
        }, 2000);

        return () => clearTimeout(timer);
    }, [settingContentCompleted, router]);

    // Auto-rotate reviews every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const handleModalAnswer = (answer: "yes" | "no") => {
        const currentModalType = modalType;

        // Close modal immediately for all modals
        setModalType(null);

        if (currentModalType === "ready-to-take-control") {
            updateQuizData({ readyToTakeControl: answer });

            // Clear any existing interval
            if (goalsIntervalRef.current) {
                clearInterval(goalsIntervalRef.current);
                goalsIntervalRef.current = null;
            }

            // Continue Goals progress from current value to 100%
            goalsIntervalRef.current = setInterval(() => {
                setGoalsProgress((prev) => {
                    const next = Math.min(prev + 1.5, 100);
                    if (next >= 100) {
                        if (goalsIntervalRef.current) {
                            clearInterval(goalsIntervalRef.current);
                            goalsIntervalRef.current = null;
                        }
                        return 100;
                    }
                    return next;
                });
            }, 20);
        } else if (currentModalType === "commit-30-min") {
            updateQuizData({ commit30Min: answer });

            // Clear any existing interval
            if (growthAreasIntervalRef.current) {
                clearInterval(growthAreasIntervalRef.current);
                growthAreasIntervalRef.current = null;
            }

            // Continue Growth Areas progress from current value to 100%
            growthAreasIntervalRef.current = setInterval(() => {
                setGrowthAreasProgress((prev) => {
                    const next = Math.min(prev + 1.5, 100);
                    if (next >= 100) {
                        if (growthAreasIntervalRef.current) {
                            clearInterval(growthAreasIntervalRef.current);
                            growthAreasIntervalRef.current = null;
                        }
                        return 100;
                    }
                    return next;
                });
            }, 20);
        } else if (currentModalType === "help-build-project") {
            updateQuizData({ wantsHelpBuildingProject: answer });
            // Start progress after modal is closed
            setSettingContentModalAnswered(true);
        }
    };

    const handleContinue = () => {
        router.push("/subscription");
    };

    const currentReview = reviews[currentReviewIndex];

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <QuizTitle>
                    Your Personal AI-Driven Income Growth Plan
                </QuizTitle>

                <div className={styles.cardsContainer}>
                    {/* Goals Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`${styles.card} ${goalsCompleted ? styles.cardActive : ''}`}
                    >
                        <span className={styles.cardLabel}>Goals</span>
                        {goalsCompleted ? (
                            <Check size={24} className={styles.checkIcon} />
                        ) : (
                            <div className={styles.progressContainer}>
                                <div className={styles.progressBar}>
                                    <div
                                        className={styles.progressFill}
                                        style={{ width: `${goalsProgress}%` }}
                                    />
                                </div>
                                <span className={styles.progressText}>{Math.round(goalsProgress)}%</span>
                            </div>
                        )}
                    </motion.div>

                    {/* Growth Areas Card */}
                    <AnimatePresence>
                        {showGrowthAreas && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className={`${styles.card} ${growthAreasCompleted ? styles.cardActive : ''}`}
                            >
                                <span className={styles.cardLabel}>Growth Areas</span>
                                {growthAreasCompleted ? (
                                    <Check size={24} className={styles.checkIcon} />
                                ) : (
                                    <div className={styles.progressContainer}>
                                        <div className={styles.progressBar}>
                                            <div
                                                className={styles.progressFill}
                                                style={{ width: `${growthAreasProgress}%` }}
                                            />
                                        </div>
                                        <span className={styles.progressText}>{Math.round(growthAreasProgress)}%</span>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Setting Content Card */}
                    <AnimatePresence>
                        {showSettingContent && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className={`${styles.card} ${settingContentCompleted ? styles.cardActive : ''}`}
                            >
                                <span className={styles.cardLabel}>Setting content</span>
                                {settingContentCompleted ? (
                                    <Check size={24} className={styles.checkIcon} />
                                ) : (
                                    <div className={styles.progressContainer}>
                                        <div className={styles.progressBar}>
                                            <div
                                                className={styles.progressFill}
                                                style={{ width: `${settingContentProgress}%` }}
                                            />
                                        </div>
                                        <span className={styles.progressText}>{Math.round(settingContentProgress)}%</span>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {modalType && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={styles.modalOverlay}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className={styles.modal}
                            >
                                <h3 className={styles.modalTitle}>
                                    {modalType === "ready-to-take-control" &&
                                        "Are you ready to finally take control of your income?"}
                                    {modalType === "commit-30-min" &&
                                        "Would you commit 30 min/day to learn a high-income skill?"}
                                    {modalType === "help-build-project" &&
                                        "Do you want us to help you build your first paid AI project?"}
                                </h3>
                                <p className={styles.modalSubtitle}>To move forward, please specify</p>
                                <div className={styles.modalButtons}>
                                    <Button
                                        variant="secondary"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleModalAnswer("no");
                                        }}
                                        className={styles.modalButton}
                                    >
                                        No
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleModalAnswer("yes");
                                        }}
                                        className={styles.modalButton}
                                    >
                                        Yes
                                    </Button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Reviews Section */}
                <div className={styles.reviewsSection}>
                    <h2 className={styles.reviewsTitle}>Trusted by 129,000 people</h2>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentReviewIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className={styles.reviewCard}
                        >
                            <div className={styles.reviewHeader}>
                                <div className={styles.reviewStars}>
                                    {Array(5)
                                        .fill(0)
                                        .map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                fill="#4CAF50"
                                                stroke="#4CAF50"
                                            />
                                        ))}
                                </div>
                                <span className={styles.reviewMeta}>{currentReview.author}</span>
                                <span className={styles.reviewDate}>{currentReview.date}</span>
                            </div>
                            <h3 className={styles.reviewTitle}>{currentReview.title}</h3>
                            <p className={styles.reviewText}>{currentReview.text}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
};
