"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input, Button } from "@/shared/ui";
import styles from "../auth.module.css";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация
    if (!email) {
      setError("Email is required");
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email is invalid");
      return;
    }
    
    setError("");
    
    // Здесь будет логика отправки кода сброса
    console.log("Reset password for:", email);
    setSuccess(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Password reset</h1>
          <p className={styles.subtitle}>
            Enter your email address and we will send you a verification code.
          </p>
        </div>

        {!success ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Input
              label="Email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error}
            />

            <Button type="submit" className={styles.submitButton}>
              Get reset code
            </Button>
          </form>
        ) : (
          <div className={styles.successMessage}>
            <p>
              We&apos;ve sent a verification code to <strong>{email}</strong>
            </p>
            <p>Please check your email and follow the instructions.</p>
          </div>
        )}

        <div className={styles.footer}>
          <span className={styles.footerText}>Already know it? Back to</span>
          <Link href="/auth/login" className={styles.footerLink}>
            sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
