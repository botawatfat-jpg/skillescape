"use client";

import React, { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui";
import { QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-53.module.css";
import { useQuizStore } from "@/shared/store";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export const QuizPage53 = () => {
    const router = useRouter();
    const { quizData } = useQuizStore();
    const [isMobile, setIsMobile] = useState(false);
    const [isSmallMobile, setIsSmallMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
            setIsSmallMobile(window.innerWidth <= 480);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleContinue = () => {
        router.push("/quiz/questions?pageId=54");
    };

    // Format goal amount for display
    const getFormattedGoalAmount = () => {
        const amount = quizData.goalAmount;
        if (!amount) return "$5000-$10000";

        // Convert the range format to display format
        if (amount === "5000-10000") return "$5000-$10000";
        if (amount === "10000-15000") return "$10000-$15000";
        if (amount === "15000-20000") return "$15000-$20000";
        if (amount === "more-20000") return "$20000+";

        return amount;
    };

    // Calculate target date (1 month from now as default)
    const getTargetDate = () => {
        const now = new Date();
        now.setMonth(now.getMonth() + 1);

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${now.getDate()} ${months[now.getMonth()]}`;
    };

    // Format money reason for display
    const getFormattedReason = () => {
        const reason = quizData.moneyReason;
        if (!reason) return "Go on a vacation";

        const reasonMap: { [key: string]: string } = {
            "debts": "Get out of debts",
            "vacation": "Go on a vacation",
            "wedding": "Have a perfect wedding",
            "car": "Get a new car",
            "apartment": "Buy an apartment",
            "student-loan": "Close student loan"
        };

        return reasonMap[reason] || reason;
    };

    // Calculate target amount based on goal
    const getTargetAmount = () => {
        const amount = quizData.goalAmount;
        if (!amount) return 10000; // Default to middle of 5000-10000

        if (amount === "5000-10000") return 10000;
        if (amount === "10000-15000") return 15000;
        if (amount === "15000-20000") return 20000;
        if (amount === "more-20000") return 25000;

        return 10000;
    };

    // Chart data and configuration
    const targetAmount = getTargetAmount();
    const startAmount = 1500;

    // Generate growth curve data (S-curve)
    // Based on image: Dec ~$1,500, Jan ~$3,000, Feb ~$5,000, Mar ~$10,000, Apr ~$15,000, May ~$20,000+
    const months = useMemo(() => ["Dec", "Jan", "Feb", "Mar", "Apr", "May"], []);
    const values = useMemo(() => {
        // Fixed values based on image pattern
        const fixedValues = [
            startAmount,      // Dec: ~$1,500
            3000,             // Jan: ~$3,000
            5000,             // Feb: ~$5,000 (Achieving your goal)
            10000,            // Mar: ~$10,000
            15000,            // Apr: ~$15,000
            targetAmount > 20000 ? targetAmount : 20000, // May: ~$20,000+ (Your Potential)
        ];
        return fixedValues;
    }, [targetAmount, startAmount]);

    // Custom plugin for markers
    const markerPlugin = useMemo(() => ({
        id: 'markers',
        afterDraw: (chart: ChartJS) => {
            const { ctx, chartArea, scales } = chart;
            if (!chartArea) return;

            // Адаптивные размеры для мобильных
            const fontSize = isSmallMobile ? 9 : isMobile ? 10 : 11;
            const labelPadding = isSmallMobile ? 6 : isMobile ? 7 : 8;
            const labelHeight = isSmallMobile ? 26 : isMobile ? 28 : 32;
            const lineSpacing = isSmallMobile ? 5 : 6;

            // Marker 1: "Achieving your goal" at Feb (index 2)
            const febIndex = 2;
            const febX = scales.x.getPixelForValue(febIndex);
            const febY = scales.y.getPixelForValue(values[febIndex]);

            // Draw vertical line from marker to x-axis
            ctx.save();
            ctx.strokeStyle = '#1a1a1a';
            ctx.lineWidth = isMobile ? 1.5 : 2;
            ctx.setLineDash([]);
            ctx.beginPath();
            ctx.moveTo(febX, febY);
            ctx.lineTo(febX, chartArea.bottom);
            ctx.stroke();
            ctx.restore();

            // Draw label "Achieving your goal" above the marker
            ctx.save();
            const label1 = 'Achieving';
            const label1Line2 = 'your goal';
            ctx.font = `bold ${fontSize}px system-ui, -apple-system, sans-serif`;
            const label1Width = Math.max(ctx.measureText(label1).width, ctx.measureText(label1Line2).width);
            const label1X = febX;
            const label1Y = febY - (isSmallMobile ? 35 : isMobile ? 38 : 40);
            const label1Radius = 4;

            // Draw black rounded rectangle background for label
            const label1RectX = label1X - label1Width / 2 - labelPadding;
            const label1RectY = label1Y - labelHeight / 2;
            const label1RectW = label1Width + labelPadding * 2;
            const label1RectH = labelHeight;

            ctx.fillStyle = '#1a1a1a';
            ctx.beginPath();
            ctx.roundRect(label1RectX, label1RectY, label1RectW, label1RectH, label1Radius);
            ctx.fill();

            // Draw white text (two lines)
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(label1, label1X, label1Y - lineSpacing);
            ctx.fillText(label1Line2, label1X, label1Y + lineSpacing);
            ctx.restore();

            // Marker 2: "Your Potential" at May (index 5)
            const mayIndex = 5;
            const mayX = scales.x.getPixelForValue(mayIndex);
            const mayY = scales.y.getPixelForValue(values[mayIndex]);

            // Draw label "Your Potential" to the right/left of the marker
            ctx.save();
            const label2 = 'Your';
            const label2Line2 = 'Potential';
            ctx.font = `bold ${fontSize}px system-ui, -apple-system, sans-serif`;
            const label2Width = Math.max(ctx.measureText(label2).width, ctx.measureText(label2Line2).width);
            const label2Radius = 4;

            // Position label (adjust for mobile to avoid overflow)
            const label2OffsetX = isSmallMobile ? -20 : isMobile ? -25 : -30;
            const label2X = mayX + label2OffsetX;
            const label2Y = mayY;

            // Calculate positions for rounded rectangle
            const label2RectX = label2X - label2Width / 2 - labelPadding;
            const label2RectY = label2Y - labelHeight / 2;
            const label2RectW = label2Width + labelPadding * 2;
            const label2RectH = labelHeight;

            // Draw blue rounded rectangle background for label
            ctx.fillStyle = '#5B7FFF';
            ctx.beginPath();
            ctx.roundRect(label2RectX, label2RectY, label2RectW, label2RectH, label2Radius);
            ctx.fill();

            // Draw curved arrow/line from label to point
            ctx.strokeStyle = '#5B7FFF';
            ctx.lineWidth = isMobile ? 1.5 : 2;
            ctx.beginPath();
            ctx.moveTo(label2RectX, label2Y);
            ctx.quadraticCurveTo(
                label2RectX - (isMobile ? 8 : 10),
                label2Y,
                mayX + 8,
                mayY
            );
            ctx.stroke();

            // Draw white text (two lines)
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(label2, label2X, label2Y - lineSpacing);
            ctx.fillText(label2Line2, label2X, label2Y + lineSpacing);
            ctx.restore();
        },
    }), [values, isMobile, isSmallMobile]);
    const chartData = useMemo(() => {
        return {
            labels: months,
            datasets: [
                {
                    label: "Growth",
                    data: values,
                    borderColor: (context: { chart: ChartJS }) => {
                        const chart = context.chart;
                        const { ctx, chartArea } = chart;
                        if (!chartArea) {
                            return "#FC806E";
                        }
                        // Horizontal gradient for line colors
                        const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
                        gradient.addColorStop(0, "#FC806E"); // Red
                        gradient.addColorStop(0.33, "#FFC53D"); // Orange
                        gradient.addColorStop(0.66, "#F9EB7C"); // Yellow
                        gradient.addColorStop(1, "#B7F5A8"); // Green
                        return gradient;
                    },
                    backgroundColor: (context: { chart: ChartJS }) => {
                        const chart = context.chart;
                        const { ctx, chartArea } = chart;
                        if (!chartArea) {
                            return "rgba(183, 245, 168, 0.1)";
                        }
                        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                        gradient.addColorStop(0, "rgba(183, 245, 168, 0.3)");
                        gradient.addColorStop(1, "rgba(252, 128, 110, 0.0)");
                        return gradient;
                    },
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 6,
                    pointHoverBorderWidth: 2,
                    pointHoverBorderColor: "#fff",
                },
            ],
        };
    }, [values, months]);

    const chartOptions = useMemo(() => ({
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: isSmallMobile ? 30 : isMobile ? 35 : 40,
                right: isSmallMobile ? 10 : isMobile ? 20 : 40,
                bottom: isSmallMobile ? 10 : isMobile ? 15 : 20,
                left: isSmallMobile ? 5 : isMobile ? 10 : 20,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: true,
                    color: "rgba(0, 0, 0, 0.1)",
                },
                ticks: {
                    color: "#666",
                    font: {
                        size: isSmallMobile ? 10 : isMobile ? 11 : 12,
                    },
                },
            },
            y: {
                grid: {
                    display: true,
                    color: "rgba(0, 0, 0, 0.1)",
                },
                ticks: {
                    color: "#666",
                    font: {
                        size: isSmallMobile ? 10 : isMobile ? 11 : 12,
                    },
                    callback: function (value: string | number) {
                        const numValue = typeof value === 'string' ? parseFloat(value) : value;
                        if (isSmallMobile) {
                            // Короткий формат для маленьких экранов
                            if (numValue >= 20000) return "$20k+";
                            if (numValue >= 1000) return `$${(numValue / 1000).toFixed(0)}k`;
                            return `$${numValue}`;
                        }
                        if (numValue >= 20000) return "$20,000+";
                        if (numValue >= 1000) return `$${(numValue / 1000).toFixed(0)},000`;
                        return `$${numValue}`;
                    },
                },
                beginAtZero: false,
                min: 0,
                max: 25000,
            },
        },
        animation: {
            duration: 2000,
            easing: "easeOutQuart" as const,
        },
    }), [isMobile, isSmallMobile]);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <QuizTitle>
                    Your Personal AI-Driven Income Growth Plan
                </QuizTitle>

                <div className={styles.predictionContainer}>
                    <p className={styles.predictionText}>
                        We predict you&apos;ll have{" "}
                        <span className={styles.goalAmount}>{getFormattedGoalAmount()}</span>{" "}
                        by <strong>{getTargetDate()}</strong>
                    </p>

                    <p className={styles.goalLabel}>Your big goal:</p>

                    <div className={styles.goalBadge}>
                        <p>{getFormattedReason()}</p>
                    </div>
                </div>

                <div className={styles.chartContainer}>
                    <div className={styles.chartWrapper}>
                        <Line data={chartData} options={chartOptions} plugins={[markerPlugin]} />
                    </div>
                </div>

                <div className="buttonContainerQuiz">
                    <Button onClick={handleContinue} className={styles.button}>
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    );
};
