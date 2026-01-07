/**
 * Утилиты для валидации данных
 * Next.js 15/16 - Server-side и Client-side валидация
 */

/**
 * Валидация email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Валидация телефона (международный формат)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone.replace(/[\s()-]/g, ""));
}

/**
 * Валидация URL
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Санитизация HTML для предотвращения XSS
 */
export function sanitizeHtml(html: string): string {
  const div = document.createElement("div");
  div.textContent = html;
  return div.innerHTML;
}

/**
 * Валидация длины строки
 */
export function isValidLength(
  str: string,
  min: number,
  max: number
): boolean {
  const length = str.trim().length;
  return length >= min && length <= max;
}

/**
 * Валидация пароля
 */
export function isValidPassword(password: string): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("Password must be at least 8 characters");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter");
  }

  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter");
  }

  if (!/\d/.test(password)) {
    errors.push("Password must contain at least one number");
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push("Password must contain at least one special character");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Валидация данных формы
 */
export interface FormValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
  message?: string;
}

export interface FormValidationSchema {
  [field: string]: FormValidationRule;
}

export function validateForm(
  data: Record<string, string>,
  schema: FormValidationSchema
): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  for (const [field, rules] of Object.entries(schema)) {
    const value = data[field] || "";

    if (rules.required && !value.trim()) {
      errors[field] = rules.message || `${field} is required`;
      continue;
    }

    if (rules.minLength && value.length < rules.minLength) {
      errors[field] =
        rules.message ||
        `${field} must be at least ${rules.minLength} characters`;
      continue;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      errors[field] =
        rules.message ||
        `${field} must be no more than ${rules.maxLength} characters`;
      continue;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      errors[field] = rules.message || `${field} format is invalid`;
      continue;
    }

    if (rules.custom && !rules.custom(value)) {
      errors[field] = rules.message || `${field} is invalid`;
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

