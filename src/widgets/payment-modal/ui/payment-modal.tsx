"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/shared/store";
import { useAnalytics } from "@/shared/lib/analytics";
import styles from "./payment-modal.module.css";

export const PaymentModal: React.FC = () => {
  const router = useRouter();
  const { isPaymentModalOpen, closePaymentModal } = useQuizStore();
  const { trackEvent } = useAnalytics();

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const formatCardNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    const groups = numbers.match(/.{1,4}/g);
    return groups ? groups.join(" ") : numbers;
  };

  const formatExpiryDate = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length >= 2) {
      return numbers.slice(0, 2) + "/" + numbers.slice(2, 4);
    }
    return numbers;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    if (formatted.replace(/\s/g, "").length <= 16) {
      setCardNumber(formatted);
      setErrors((prev) => ({ ...prev, cardNumber: "" }));
    }
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    if (formatted.replace(/\//g, "").length <= 4) {
      setExpiryDate(formatted);
      setErrors((prev) => ({ ...prev, expiryDate: "" }));
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 3) {
      setCvv(value);
      setErrors((prev) => ({ ...prev, cvv: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    };

    const cleanCardNumber = cardNumber.replace(/\s/g, "");
    if (cleanCardNumber.length !== 16) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }

    const cleanExpiryDate = expiryDate.replace(/\//g, "");
    if (cleanExpiryDate.length !== 4) {
      newErrors.expiryDate = "Invalid expiry date";
    } else {
      const month = parseInt(cleanExpiryDate.slice(0, 2));
      const year = parseInt("20" + cleanExpiryDate.slice(2, 4));
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1;

      if (month < 1 || month > 12) {
        newErrors.expiryDate = "Invalid month";
      } else if (year < currentYear || (year === currentYear && month < currentMonth)) {
        newErrors.expiryDate = "Card has expired";
      }
    }

    if (cvv.length !== 3) {
      newErrors.cvv = "CVV must be 3 digits";
    }

    setErrors(newErrors);
    return !newErrors.cardNumber && !newErrors.expiryDate && !newErrors.cvv;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      trackEvent("payment_initiated", {
        card_last_4: cardNumber.slice(-4),
      });

      // Here you would normally process the payment
      console.log("Payment processing...", {
        cardNumber: cardNumber.replace(/\s/g, ""),
        expiryDate,
        cvv,
      });

      // Close modal
      closePaymentModal();

      // Reset form
      setCardNumber("");
      setExpiryDate("");
      setCvv("");

      // Redirect to success page
      router.push("/payment-success");
    }
  };

  const handleClose = () => {
    trackEvent("payment_modal_closed", {
      interaction: "close_button",
    });
    closePaymentModal();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      trackEvent("payment_modal_closed", {
        interaction: "overlay_click",
      });
      closePaymentModal();
    }
  };

  if (!isPaymentModalOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className={styles.promoBanner}>
          <div className={styles.promoContent}>
            <div className={styles.promoText}>
              <h3 className={styles.promoTitle}>New promocode applied!</h3>
              <p className={styles.promoSubtitle}>Get your personal plan with up 71% discount</p>
            </div>
            <div className={styles.promoBadge}>
              <div className={styles.badgeTop}>61%</div>
              <div className={styles.badgeBottom}>71% OFF</div>
            </div>
          </div>
        </div>

        <div className={styles.header}>
          <h2 className={styles.title}>Enter Payment Details</h2>
          <p className={styles.subtitle}>Complete your purchase securely</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="cardNumber" className={styles.label}>
              Card Number
            </label>
            <input
              id="cardNumber"
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="1234 5678 9012 3456"
              className={`${styles.input} ${errors.cardNumber ? styles.inputError : ""}`}
              autoComplete="cc-number"
            />
            {errors.cardNumber && (
              <span className={styles.error}>{errors.cardNumber}</span>
            )}
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="expiryDate" className={styles.label}>
                Expiry Date
              </label>
              <input
                id="expiryDate"
                type="text"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                placeholder="MM/YY"
                className={`${styles.input} ${errors.expiryDate ? styles.inputError : ""}`}
                autoComplete="cc-exp"
              />
              {errors.expiryDate && (
                <span className={styles.error}>{errors.expiryDate}</span>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="cvv" className={styles.label}>
                CVV
              </label>
              <input
                id="cvv"
                type="text"
                value={cvv}
                onChange={handleCvvChange}
                placeholder="123"
                className={`${styles.input} ${errors.cvv ? styles.inputError : ""}`}
                autoComplete="cc-csc"
              />
              {errors.cvv && (
                <span className={styles.error}>{errors.cvv}</span>
              )}
            </div>
          </div>

          <div className={styles.security}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L3 3V7C3 10.3 5.4 13.4 8 14C10.6 13.4 13 10.3 13 7V3L8 1Z" fill="#15803d" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.5 8L7.5 9L9.5 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className={styles.securityText}>Your payment information is secure and encrypted</span>
          </div>

          <button type="submit" className={styles.submitButton}>
            Complete Payment
          </button>
        </form>
      </div>
    </div>
  );
};
