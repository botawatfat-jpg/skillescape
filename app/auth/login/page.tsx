"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input, Button } from "@/shared/ui";
import styles from "../auth.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация
    const newErrors = { email: "", password: "" };
    
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    }
    
    setErrors(newErrors);
    
    if (!newErrors.email && !newErrors.password) {
      // Здесь будет логика авторизации
      console.log("Login attempt:", { email, password });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome back</h1>
          <p className={styles.subtitle}>Login to your Skillescape account</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            label="Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          <Button type="submit" className={styles.submitButton}>
            Sign-in
          </Button>

          <Link href="/auth/reset-password" className={styles.forgotPassword}>
            Forgot password?
          </Link>
        </form>

        <div className={styles.footer}>
          <span className={styles.footerText}>Don&apos;t have an account?</span>
          <Link href="/quiz" className={styles.footerLink}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
