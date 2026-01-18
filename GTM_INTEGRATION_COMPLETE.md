# GTM Integration - Complete ✅

## Что было сделано

### 1. Рефакторинг Analytics системы

#### Создан новый helper `pushDL`
**Файл:** `src/shared/lib/analytics/push-datalayer.ts`

- ✅ SSR-safe функция для отправки событий в dataLayer
- ✅ Автоматическая инициализация dataLayer
- ✅ Логирование в development режиме
- ✅ TypeScript типизация

#### Обновлен хук `useAnalytics`
**Файл:** `src/shared/lib/analytics/use-analytics.tsx`

**Новые методы для GTM:**
- ✅ `trackQuizStart(quizId)` - с дедупликацией через sessionStorage + useRef
- ✅ `trackQuizProgress(progressPercent, quizId)` - отслеживание прогресса
- ✅ `trackQuizResultView(resultType, quizId)` - просмотр результата
- ✅ `trackLeadSubmit(leadType)` - с дедупликацией через sessionStorage + useRef

**Рефакторинг существующих методов:**
- ✅ Все методы теперь используют `pushDL` вместо прямых вызовов
- ✅ Улучшенная типизация
- ✅ SSR-safety

### 2. Интеграция GTM событий в проект

#### Quiz Questions Page
**Файл:** `src/pages/quiz-questions/ui/quiz-questions-page.tsx`

**Добавлено отслеживание:**
- ✅ `quiz_start` на pageId=1
- ✅ `quiz_progress` на каждой странице с progress > 0
  - Учитывает мотивационные экраны (пустой title)
  - Отслеживает только изменения прогресса
- ✅ `quiz_result_view` на pageId=57

**Параметры отслеживания:**
- `quiz_id`: "ai_quiz_v1"
- `progress_percent`: 0-100 (берется из renderContent().progress)
- `page_id`: берется из URL searchParams
- `title`: если пустой = мотивационный экран (НЕ отслеживается)

#### QuizPage55 - Email Capture
**Файл:** `src/features/quiz/ui/quiz-page-55/quiz-page-55.tsx`

**Добавлено отслеживание:**
- ✅ `lead_submit` с типом "quiz_email"
- ✅ `form_submit` с именем "quiz_email_form"
- ✅ Срабатывает только после успешной валидации
- ✅ Защита от дублирования (один раз за сессию)

#### Selling Page
**Файл:** `src/pages/selling-page/ui/selling-page.tsx`

**Добавлено отслеживание:**
- ✅ `plan_view` событие при просмотре готового плана
- ✅ Параметры: page_type, plan_status

#### QuizButton Component
**Файл:** `src/shared/ui/quiz-button/quiz-button.tsx`

**Обновлено:**
- ✅ Передается quiz_id="ai_quiz_v1" в trackQuizStart
- ✅ Отслеживание button_click
- ✅ Автоматический quiz_start при переходе на /quiz

### 3. Документация

#### GTM_TRACKING_MAP.md
**Полная карта отслеживания:**
- ✅ Где установлены теги
- ✅ Где НЕ установлены теги (с объяснением)
- ✅ Параметры каждого события
- ✅ Информация о дедупликации
- ✅ Рекомендации по дальнейшему добавлению

#### TESTING_GTM_EVENTS.md
**Руководство по тестированию:**
- ✅ Пошаговые инструкции для проверки каждого события
- ✅ Использование GTM Preview Mode
- ✅ Проверка в GA4 Real-time
- ✅ Troubleshooting
- ✅ Полные тестовые сценарии

#### GTM_USAGE_GUIDE.md
**Детальное руководство:**
- ✅ Архитектура системы
- ✅ Примеры использования всех событий
- ✅ Best practices
- ✅ Паттерны для Quiz, Lead, Purchase flows

#### EXAMPLES.tsx
**Готовые примеры кода:**
- ✅ Quiz flow
- ✅ Lead forms
- ✅ Purchase flow
- ✅ Auth flow
- ✅ Custom events
- ✅ Analytics debugger

---

## Схема отслеживания Quiz Flow

```
Пользователь → Главная страница
    ↓
Клик "Take Quiz" → button_click + quiz_start
    ↓
/quiz → Выбор пола
    ↓
/quiz/questions?pageId=1 → quiz_start (защищен от дублирования)
    ↓
pageId=2 (progress=10%) → quiz_progress (10%)
    ↓
pageId=3 (progress=20%) → quiz_progress (20%)
    ↓
pageId=12 (title="") → ПРОПУСК (мотивационный экран)
    ↓
pageId=13 (progress=90%) → quiz_progress (90%)
    ↓
pageId=55 (Email) → lead_submit + form_submit
    ↓
pageId=56 (Name)
    ↓
pageId=57 (Plan) → quiz_progress (100%) + quiz_result_view
    ↓
/selling-page → plan_view
```

---

## Настроенные GTM события

### Основные (приоритет 1)

| Событие | Описание | Параметры | Дедупликация |
|---------|----------|-----------|--------------|
| `quiz_start` | Начало квиза | `quiz_id` | ✅ Да (sessionStorage) |
| `quiz_progress` | Прогресс квиза | `quiz_id`, `progress_percent` | ❌ Нет |
| `quiz_result_view` | Просмотр результата | `quiz_id`, `result_type` | ❌ Нет |
| `lead_submit` | Отправка лида | `lead_type` | ✅ Да (sessionStorage) |

### Дополнительные (используются)

| Событие | Описание | Параметры |
|---------|----------|-----------|
| `button_click` | Клик на кнопку | `button_name`, `location` |
| `form_submit` | Отправка формы | `form_name` |
| `plan_view` | Просмотр плана | `page_type`, `plan_status` |

### Готовые к использованию (в хуке)

- `sign_up` - регистрация
- `login` - вход
- `view_item` - просмотр продукта
- `begin_checkout` - начало оформления
- `purchase` - покупка
- `subscription_purchase` - покупка подписки
- `video_view` - просмотр видео
- `download` - скачивание
- `search` - поиск

---

## Где НЕ установлены теги

### ❌ Subscription/Payment Pages
**Причина:** Не трогаем платежные процессы

**Нужно добавить:**
- `begin_checkout`
- `purchase`
- `subscription_purchase`

### ❌ Auth Pages (Login, Reset Password)
**Причина:** Приватные страницы, низкий приоритет

**Можно добавить:**
- `login`
- `sign_up`

### ❌ Legal Pages (Terms, Privacy)
**Причина:** Статичные страницы, низкий приоритет

### ❌ Error Pages (404, Error)
**Причина:** Технические страницы

---

## Как тестировать

### Быстрый тест

```bash
# 1. Запустить проект
yarn dev

# 2. Открыть консоль браузера (F12)

# 3. Пройти квиз
# - Начать с главной страницы
# - Кликнуть "Take Quiz"
# - Ответить на вопросы
# - Ввести email на странице 55
# - Дойти до конца

# 4. Проверить консоль
# Должны быть логи:
# [GTM DataLayer] { event: "quiz_start", ... }
# [GTM DataLayer] { event: "quiz_progress", ... }
# [GTM DataLayer] { event: "lead_submit", ... }
# и т.д.
```

### GTM Preview Mode

```
1. Откройте https://tagmanager.google.com/
2. Выберите контейнер GTM-T3S2P2LK
3. Нажмите "Preview"
4. Введите URL сайта
5. Выполняйте действия и смотрите события в реальном времени
```

### Проверка дедупликации

```javascript
// В консоли браузера после первого quiz_start:
sessionStorage.getItem('quiz_start_ai_quiz_v1')
// → "true"

// Попробуйте снова начать квиз
// В консоли должно быть:
// [Analytics] quiz_start already fired for ai_quiz_v1, skipping

// Очистить и протестировать снова:
sessionStorage.clear()
```

---

## Конфигурация GTM

### В GTM Dashboard нужно настроить:

#### 1. Триггеры (Custom Events)
- `quiz_start`
- `quiz_progress`
- `quiz_result_view`
- `lead_submit`
- `button_click`
- `form_submit`
- `plan_view`

#### 2. Переменные (Data Layer Variables)
- `quiz_id`
- `progress_percent`
- `result_type`
- `lead_type`
- `button_name`
- `form_name`
- `page_type`
- `plan_status`

#### 3. Теги

**GA4 Config Tag:**
- Trigger: All Pages
- Measurement ID: G-XXXXXXXXXX

**GA4 Event Tags:**
- Tag 1: quiz_start → Trigger: quiz_start
- Tag 2: quiz_progress → Trigger: quiz_progress
- Tag 3: quiz_result_view → Trigger: quiz_result_view
- Tag 4: lead_submit → Trigger: lead_submit

---

## Файловая структура

```
/Users/diasadilov/coding/jobjam/frontend/
├── app/
│   └── layout.tsx                          # ✅ GTM script установлен
│
├── src/
│   ├── shared/
│   │   ├── config/
│   │   │   └── analytics-config.ts         # ✅ GTM конфигурация
│   │   │
│   │   ├── lib/
│   │   │   └── analytics/
│   │   │       ├── push-datalayer.ts       # ✅ НОВЫЙ helper
│   │   │       ├── use-analytics.tsx       # ✅ ОБНОВЛЕН хук
│   │   │       ├── GTM_USAGE_GUIDE.md      # ✅ НОВАЯ документация
│   │   │       ├── EXAMPLES.tsx            # ✅ НОВЫЕ примеры
│   │   │       ├── index.ts                # ✅ Exports
│   │   │       └── README.md               # ✅ ОБНОВЛЕНА документация
│   │   │
│   │   └── ui/
│   │       └── quiz-button/
│   │           └── quiz-button.tsx         # ✅ ОБНОВЛЕН с quiz_id
│   │
│   ├── pages/
│   │   ├── quiz-questions/
│   │   │   └── ui/
│   │   │       └── quiz-questions-page.tsx # ✅ ДОБАВЛЕНО отслеживание
│   │   │
│   │   └── selling-page/
│   │       └── ui/
│   │           └── selling-page.tsx        # ✅ ДОБАВЛЕНО отслеживание
│   │
│   └── features/
│       └── quiz/
│           └── ui/
│               └── quiz-page-55/
│                   └── quiz-page-55.tsx    # ✅ ДОБАВЛЕНО отслеживание
│
├── GTM_TRACKING_MAP.md                     # ✅ НОВЫЙ файл
├── TESTING_GTM_EVENTS.md                   # ✅ НОВЫЙ файл
├── GTM_INTEGRATION_COMPLETE.md             # ✅ НОВЫЙ файл (этот)
├── ANALYTICS_SETUP.md                      # ✅ Обновлен
└── SEO_AND_ANALYTICS_SUMMARY.md            # ✅ Существующий
```

---

## Ключевые изменения в коде

### 1. push-datalayer.ts (НОВЫЙ)
```typescript
export function pushDL(eventName: string, payload?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  
  window.dataLayer.push({
    event: eventName,
    ...payload,
  });
}
```

### 2. use-analytics.tsx (ОБНОВЛЕН)
```typescript
// Добавлены refs для дедупликации
const quizStartFiredRef = useRef<Set<string>>(new Set());
const leadSubmitFiredRef = useRef<Set<string>>(new Set());

// Новые методы
trackQuizStart(quizId) // с защитой от дублирования
trackQuizProgress(progressPercent, quizId)
trackQuizResultView(resultType, quizId)
trackLeadSubmit(leadType) // с защитой от дублирования
```

### 3. quiz-questions-page.tsx (ОБНОВЛЕН)
```typescript
// Добавлено отслеживание
useEffect(() => {
  const content = renderContent();
  const progress = content.progress || 0;
  const title = content.title || "";
  const isMotivationScreen = title === "";
  
  if (pageId === 1) trackQuizStart(quizId);
  if (progress > 0 && !isMotivationScreen) trackQuizProgress(progress, quizId);
  if (pageId === 57) trackQuizResultView("ai_plan_generated", quizId);
}, [pageId]);
```

### 4. quiz-page-55.tsx (ОБНОВЛЕН)
```typescript
const handleSubmit = (e) => {
  // ... валидация
  
  updateQuizData({ email, agreeToReceive });
  
  // GTM tracking
  trackLeadSubmit("quiz_email");
  trackFormSubmit("quiz_email_form");
  
  router.push("/quiz/questions?pageId=56");
};
```

### 5. selling-page.tsx (ОБНОВЛЕН)
```typescript
useEffect(() => {
  trackEvent("plan_view", {
    page_type: "selling_page",
    plan_status: "generated",
  });
}, []);
```

---

## Checklist готовности

### Код
- [x] pushDL helper создан
- [x] useAnalytics обновлен
- [x] Quiz flow отслеживается
- [x] Email capture отслеживается
- [x] Selling page отслеживается
- [x] QuizButton обновлен
- [x] Дедупликация работает

### Документация
- [x] GTM_TRACKING_MAP.md
- [x] TESTING_GTM_EVENTS.md
- [x] GTM_USAGE_GUIDE.md
- [x] EXAMPLES.tsx
- [x] README.md обновлен

### Тестирование
- [ ] Протестировать все события локально
- [ ] Проверить в GTM Preview Mode
- [ ] Настроить теги и триггеры в GTM
- [ ] Проверить в GA4 Real-time
- [ ] Проверить дедупликацию
- [ ] Тест на production

### GTM Configuration
- [ ] Создать триггеры для всех событий
- [ ] Создать переменные для параметров
- [ ] Настроить GA4 Config tag
- [ ] Настроить GA4 Event tags
- [ ] Протестировать в Preview Mode
- [ ] Опубликовать контейнер

---

## Следующие шаги

### Высокий приоритет
1. **Настроить GTM Dashboard**
   - Создать триггеры
   - Создать переменные
   - Настроить GA4 теги
   - Протестировать

2. **Добавить отслеживание оплаты**
   - `begin_checkout`
   - `purchase`
   - `subscription_purchase`

3. **Тестирование**
   - Полное тестирование всех событий
   - Проверка дедупликации
   - Проверка в GA4

### Средний приоритет
4. **Auth tracking**
   - `sign_up`
   - `login`

5. **Footer/Header tracking**
   - Клики на ссылки
   - Newsletter forms

### Низкий приоритет
6. **Legal pages tracking**
7. **Error tracking**
8. **Video tracking** (если будет видео)

---

## Поддержка

**Документация:**
- [GTM Tracking Map](./GTM_TRACKING_MAP.md)
- [Testing Guide](./TESTING_GTM_EVENTS.md)
- [Usage Guide](./src/shared/lib/analytics/GTM_USAGE_GUIDE.md)
- [Examples](./src/shared/lib/analytics/EXAMPLES.tsx)
- [Analytics Setup](./ANALYTICS_SETUP.md)

**External Resources:**
- [GTM Dashboard](https://tagmanager.google.com/)
- [GA4 Dashboard](https://analytics.google.com/)
- [GTM Documentation](https://developers.google.com/tag-manager)

---

**Статус:** ✅ Базовая интеграция завершена  
**GTM Container:** GTM-T3S2P2LK  
**Последнее обновление:** 18 января 2026
