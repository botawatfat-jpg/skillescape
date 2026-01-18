# Analytics Library

Библиотека для работы с Google Tag Manager и аналитикой.

## Быстрый старт

### 1. Использование в клиентских компонентах

```tsx
"use client";

import { useAnalytics } from "@/shared/lib/analytics/use-analytics";

export function MyComponent() {
  const { trackButtonClick, trackQuizStart } = useAnalytics();

  const handleStartQuiz = () => {
    trackQuizStart();
    // ... ваша логика
  };

  return (
    <button onClick={() => trackButtonClick("Start Quiz", "HomePage")}>
      Start Quiz
    </button>
  );
}
```

### 2. Отслеживание конверсий

```tsx
import { useAnalytics } from "@/shared/lib/analytics/use-analytics";

export function SubscriptionPage() {
  const { trackBeginCheckout, trackSubscriptionPurchase } = useAnalytics();

  const handleCheckout = () => {
    trackBeginCheckout("Premium Plan", 49.99);
    // Переход на страницу оплаты
  };

  const handlePurchaseComplete = (transactionId: string) => {
    trackSubscriptionPurchase(transactionId, "Premium Plan", 49.99);
  };

  return (
    <button onClick={handleCheckout}>
      Subscribe Now
    </button>
  );
}
```

### 3. Отслеживание квиза

```tsx
import { useAnalytics } from "@/shared/lib/analytics/use-analytics";

export function QuizPage() {
  const { trackQuizStart, trackQuizComplete } = useAnalytics();

  useEffect(() => {
    // Отслеживаем начало квиза
    trackQuizStart();
  }, []);

  const handleQuizFinish = (score: number) => {
    trackQuizComplete(score);
    // Показываем результаты
  };

  return <div>Quiz Content</div>;
}
```

### 4. Отслеживание регистрации/логина

```tsx
import { useAnalytics } from "@/shared/lib/analytics/use-analytics";

export function LoginForm() {
  const { trackLogin, trackSignUp } = useAnalytics();

  const handleLogin = async (method: string) => {
    // Логика логина
    trackLogin(method); // 'email', 'google', 'facebook'
  };

  const handleSignUp = async (method: string) => {
    // Логика регистрации
    trackSignUp(method);
  };

  return (
    <div>
      <button onClick={() => handleLogin("email")}>Login</button>
      <button onClick={() => handleSignUp("email")}>Sign Up</button>
    </div>
  );
}
```

### 5. Кастомные события

```tsx
import { trackEvent } from "@/shared/config/analytics-config";

// В любом месте приложения
trackEvent("custom_event_name", {
  param1: "value1",
  param2: 123,
  user_action: "clicked_something",
});
```

## Доступные функции

### useAnalytics()

Возвращает объект с функциями для отслеживания:

- `trackEvent(name, params)` - базовое событие
- `trackButtonClick(buttonName, location)` - клик на кнопку
- `trackQuizStart()` - начало квиза
- `trackQuizComplete(score)` - завершение квиза
- `trackSignUp(method)` - регистрация
- `trackLogin(method)` - вход
- `trackViewProduct(name, id)` - просмотр продукта
- `trackBeginCheckout(plan, value)` - начало оформления
- `trackSubscriptionPurchase(id, plan, value)` - покупка подписки
- `trackVideoView(name, duration)` - просмотр видео
- `trackDownload(fileName)` - скачивание файла
- `trackSearch(term)` - поиск
- `trackFormSubmit(formName)` - отправка формы

## Конфигурация

Настройки находятся в `src/shared/config/analytics-config.ts`

```typescript
export const analyticsConfig = {
  gtm: {
    id: "GTM-T3S2P2LK",
    enabled: true,
  },
  // ... другие сервисы
};
```

## Важные события для e-commerce

### 1. Просмотр курса
```tsx
trackViewProduct("AI Freelancing Course", "course-001");
```

### 2. Начало оформления подписки
```tsx
trackBeginCheckout("Premium Plan", 49.99);
```

### 3. Успешная покупка
```tsx
trackSubscriptionPurchase("txn-12345", "Premium Plan", 49.99);
```

## Настройка в GTM

После добавления кода в проект, настройте в Google Tag Manager:

1. **Создайте триггеры** для событий:
   - `quiz_start`
   - `quiz_complete`
   - `sign_up`
   - `subscription_purchase`
   - и т.д.

2. **Создайте теги** для отправки в:
   - Google Analytics 4
   - Facebook Pixel
   - TikTok Pixel
   - и т.д.

3. **Настройте переменные** для параметров событий

## Отладка

### В development режиме

```bash
# Включить аналитику в development
NEXT_PUBLIC_ANALYTICS_ENABLED=true npm run dev
```

### Проверка в браузере

Откройте консоль разработчика и выполните:

```javascript
// Проверить dataLayer
console.log(window.dataLayer);

// Отправить тестовое событие
window.dataLayer.push({
  event: 'test_event',
  test_param: 'test_value'
});
```

### Режим предварительного просмотра GTM

1. Откройте GTM контейнер
2. Нажмите "Preview"
3. Введите URL вашего сайта
4. Тестируйте события в реальном времени

## Best Practices

1. **Не отслеживайте PII** (Personally Identifiable Information)
   - Не отправляйте email, телефоны, имена
   - Используйте хешированные ID

2. **Используйте осмысленные имена событий**
   - ✅ `quiz_complete`
   - ❌ `btn_click_1`

3. **Добавляйте контекст в параметры**
   ```tsx
   trackEvent("button_click", {
     button_name: "Start Quiz",
     page: "/home",
     section: "hero",
   });
   ```

4. **Отслеживайте важные конверсии**
   - Регистрация
   - Подписка
   - Завершение квиза
   - Просмотр ключевых страниц

5. **Тестируйте события перед релизом**
   - Используйте GTM Preview Mode
   - Проверяйте dataLayer в консоли

## Troubleshooting

### События не отправляются

1. Проверьте, что GTM загружен:
   ```javascript
   console.log(typeof window.dataLayer);
   ```

2. Проверьте GTM ID в конфиге

3. Убедитесь, что `enabled: true` в конфиге

### События дублируются

- Проверьте, что не вызываете событие несколько раз
- Используйте `useCallback` для предотвращения лишних ре-рендеров

### GTM не работает в development

- Добавьте env переменную:
  ```bash
  NEXT_PUBLIC_ANALYTICS_ENABLED=true
  ```

## Полезные ссылки

- [Google Tag Manager](https://tagmanager.google.com/)
- [GTM Documentation](https://developers.google.com/tag-manager)
- [GA4 Events Reference](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)
- [Enhanced E-commerce](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce)
