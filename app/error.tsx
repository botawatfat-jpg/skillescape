"use client";

import { useEffect } from "react";
import { Button } from "@/shared/ui";

/**
 * Error Boundary для обработки ошибок на уровне приложения
 * Next.js 15/16 - автоматическая обработка ошибок
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Логирование ошибки в сервис мониторинга
    console.error("Application error:", error);
  }, [error]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Something went wrong!
      </h2>
      <p style={{ marginBottom: "2rem", color: "#666" }}>
        {error.message || "An unexpected error occurred"}
      </p>
      <Button onClick={reset} variant="primary">
        Try again
      </Button>
    </div>
  );
}

