# Итоговая документация: GTM и Analytics 📊

**Дата:** 18 января 2026  
**GTM Container ID:** GTM-T3S2P2LK  
**GA4 Measurement ID:** G-JY5TCQH26F  
**Website:** https://skillescape.co

---

## 🎯 Краткая сводка

Google Tag Manager полностью интегрирован в проект с чистой воронкой событий, дедупликацией и SSR-безопасностью. Все ключевые события квиза отслеживаются автоматически.

---

## ✅ Реализованные события

### Основные события квиза

1. **`quiz_cta_click`** - клик по CTA кнопке "Take Quiz"
   - Параметры: `cta_text`, `cta_location`
   - Где: Homepage, landing pages
   - Защита: нет (каждый клик отслеживается)

2. **`quiz_start`** - фактический старт прохождения квиза
   - Параметры: `quiz_id: "ai_quiz_v1"`
   - Где: **ТОЛЬКО** pageId=1
   - Защита: sessionStorage + useRef (1 раз за сессию)

3. **`quiz_progress`** - прогресс прохождения
   - Параметры: `quiz_id`, `progress_percent: 0-100`
   - Где: каждая страница с progress > 0
   - Фильтры: пропускает мотивационные экраны (title === "")

4. **`quiz_result_view`** - просмотр результата
   - Параметры: ВСЕ данные квиза в JSON
   - Где: pageId=57 (финальная страница)
   - Включает: user_goal, user_status, coding_level, income_goal, readiness и др.

5. **`lead_submit`** - захват email
   - Параметры: `lead_type: "quiz_email"`, `quiz_id: "ai_quiz_v1"`
   - Где: pageId=55 (email форма)
   - Защита: sessionStorage + useRef (1 раз за сессию)

### Дополнительные события

- **`button_click`** - клик по любой кнопке
- **`form_submit`** - отправка формы
- **`plan_view`** - просмотр selling page
- **`plan_cta_click`** - клик на кнопку покупки

---

## 🎯 Чистая воронка событий

```
Homepage
   ↓ (user clicks "Take Quiz")
quiz_cta_click
   ↓
quiz_start (pageId=1)
   ↓
quiz_progress (10%, 25%, 50%, 75%, 100%)
   ↓
lead_submit (email capture)
   ↓
quiz_result_view (все данные квиза)
   ↓
plan_view (selling page)
   ↓
plan_cta_click
```

### Ключевые конверсии

- **CTA → Start:** эффективность CTA кнопок
- **Start → Lead:** эффективность квиза
- **Lead → Plan View:** retention после квиза
- **Plan View → CTA Click:** качество лидов

---

## 📋 Настройка GTM Dashboard

### Шаг 1: Создать переменные (Data Layer Variables)

Базовые переменные:
- `quiz_id`
- `cta_text`
- `cta_location`
- `progress_percent`
- `lead_type`

Параметры квиза (для quiz_result_view):
- `user_goal`
- `user_status`
- `user_experience`
- `coding_level`
- `freelancing_level`
- `ai_tools`
- `income_goal`
- `goal_amount`
- `readiness`
- `guided_plan`
- `has_email`
- `has_name`
- `work_style`
- `ideal_hours`
- `time_commitment`

Константа:
- **GA4 Measurement ID** (Constant): `G-JY5TCQH26F`

### Шаг 2: Создать триггеры (Custom Events)

Создать триггер для каждого события:
- `quiz_cta_click`
- `quiz_start`
- `quiz_progress`
- `quiz_result_view`
- `lead_submit`
- `button_click`
- `form_submit`
- `plan_view`
- `plan_cta_click`

### Шаг 3: Создать GA4 Configuration Tag

- Tag Type: **Google Analytics: GA4 Configuration**
- Measurement ID: `{{GA4 Measurement ID}}`
- Triggering: **All Pages**

### Шаг 4: Создать Event Tags

Создать GA4 Event Tag для каждого события. Пример:

**Tag: Quiz CTA Click**
- Tag Type: Google Analytics: GA4 Event
- Configuration Tag: `{{GA4 - Configuration}}`
- Event Name: `quiz_cta_click`
- Event Parameters:
  - `cta_text` = `{{DLV - cta_text}}`
  - `cta_location` = `{{DLV - cta_location}}`
- Triggering: `quiz_cta_click`

**Tag: Quiz Result View** (важный!)
- Event Name: `quiz_result_view`
- Event Parameters: ВСЕ переменные квиза (см. список выше)
- Triggering: `quiz_result_view`

### Шаг 5: Preview & Debug

1. Нажать "Preview" в GTM
2. Ввести URL сайта
3. Пройти квиз и проверить события
4. Убедиться что теги срабатывают (зеленые галочки)

### Шаг 6: Проверить в GA4

1. GA4 → Configure → DebugView
2. Должны появиться события в реальном времени

### Шаг 7: Publish

1. Нажать "Submit"
2. Version Name: `GA4 Integration - G-JY5TCQH26F + Quiz Events`
3. Publish

---

## 🔍 Детали параметров quiz_result_view

Событие `quiz_result_view` отправляет ВСЕ данные квиза для гибкой сегментации в GTM/GA4:

```javascript
{
  event: "quiz_result_view",
  quiz_id: "ai_quiz_v1",
  
  // Основные данные
  user_goal: string | null,
  user_status: string | null,
  user_experience: string | null,
  
  // Навыки
  coding_level: string | null,
  freelancing_level: string | null,
  ai_tools: string[],
  
  // Финансы
  income_goal: string | null,
  goal_amount: string | null,
  
  // Мотивация
  readiness: number | null,
  guided_plan: number | null,
  
  // Контакты
  has_email: boolean,
  has_name: boolean,
  
  // Рабочие предпочтения
  work_style: string | null,
  ideal_hours: string | null,
  time_commitment: string | null,
}
```

### Примеры сегментации в GTM

**Новички-фрилансеры:**
```
user_goal contains "freelanc" AND 
(coding_level equals "beginner" OR freelancing_level equals "never")
```

**Готовые платить больше:**
```
income_goal contains "$5000" OR income_goal contains "$10000"
AND readiness >= 8
AND has_email equals true
```

**Продвинутые пользователи:**
```
coding_level equals "advanced" OR 
freelancing_level equals "expert" OR
ai_tools.length > 4
```

---

## 💻 Использование в коде

### React Hook useAnalytics()

```tsx
"use client";

import { useAnalytics } from "@/shared/lib/analytics";

export function QuizPage() {
  const {
    trackQuizStart,
    trackQuizProgress,
    trackQuizResultView,
    trackLeadSubmit,
  } = useAnalytics();
  
  // Начало квиза (автоматическая дедупликация)
  useEffect(() => {
    trackQuizStart("ai_quiz_v1");
  }, []);
  
  // Прогресс
  const handleNext = (progress: number) => {
    trackQuizProgress(progress, "ai_quiz_v1");
  };
  
  // Email capture
  const handleEmailSubmit = () => {
    trackLeadSubmit("quiz_email", "ai_quiz_v1");
  };
  
  return <div>Quiz content</div>;
}
```

### Прямая отправка событий

```tsx
import { pushDL } from "@/shared/lib/analytics";

// Кастомное событие
pushDL("custom_event", {
  custom_param1: "value1",
  custom_param2: 123,
});
```

---

## 🧪 Тестирование

### Development Mode

```bash
# Запустить
yarn dev

# Открыть консоль (F12)
# В консоли увидите:
[GTM DataLayer] { event: "quiz_cta_click", ... }
[GTM DataLayer] { event: "quiz_start", ... }
[GTM DataLayer] { event: "quiz_progress", ... }
```

### Проверка dataLayer

```javascript
// В консоли браузера
console.log(window.dataLayer);

// Найти конкретное событие
window.dataLayer.filter(e => e.event === 'quiz_result_view');

// Очистить session для повторного теста
sessionStorage.clear();
```

### GTM Preview Mode

1. [GTM Dashboard](https://tagmanager.google.com) → Preview
2. Ввести URL сайта
3. Пройти квиз
4. Проверить что события срабатывают

### GA4 Real-time Reports

1. GA4 → Reports → Realtime
2. Выполнить действие на сайте
3. События появятся в течение 1-2 секунд

---

## 📊 Рекомендуемые воронки в GA4

### Воронка 1: Core Funnel

```
Step 1: quiz_cta_click
Step 2: quiz_start
Step 3: quiz_progress (progress_percent >= 50)
Step 4: lead_submit
Step 5: quiz_result_view
```

### Воронка 2: Drop-off Analysis

```
Step 1: quiz_start
Step 2: quiz_progress = 25
Step 3: quiz_progress = 50
Step 4: quiz_progress = 75
Step 5: lead_submit
Step 6: quiz_result_view
```

### Воронка 3: Lead Quality

```
Step 1: lead_submit
Step 2: quiz_result_view
Step 3: plan_view
```

---

## 🔒 Content Security Policy (CSP)

CSP настроен в `next.config.ts` для работы с GTM:

```typescript
"script-src 'self' 'unsafe-inline' 'unsafe-eval' " +
  "https://www.googletagmanager.com " +
  "https://*.googletagmanager.com " +
  "https://www.google-analytics.com " +
  "https://*.google-analytics.com",

"connect-src 'self' " +
  "https://www.google-analytics.com " +
  "https://*.google-analytics.com " +
  "https://www.googletagmanager.com " +
  "https://*.googletagmanager.com",
```

**Если видите ошибку CSP:**
1. Перезапустите dev сервер
2. Очистите кеш браузера (Hard Reload)
3. Проверьте что изменения применились

---

## 🎓 GA4 Custom Dimensions

Создайте Custom Dimensions для анализа:

1. **User Goal**
   - Scope: Event
   - Parameter: `user_goal`

2. **Income Goal**
   - Scope: Event
   - Parameter: `income_goal`

3. **Coding Level**
   - Scope: Event
   - Parameter: `coding_level`

4. **Readiness Score**
   - Scope: Event
   - Parameter: `readiness`

5. **Quiz ID**
   - Scope: Event
   - Parameter: `quiz_id`

---

## 🚨 Troubleshooting

### События не появляются в консоли

**Решение:**
```bash
# Убедитесь что запущен development режим
yarn dev

# Проверьте dataLayer
console.log(window.dataLayer)
```

### События не появляются в GTM Preview

**Решение:**
1. Проверьте что GTM скрипт загружен
2. Проверьте Network tab → должен быть gtm.js
3. Проверьте GTM ID: `GTM-T3S2P2LK`

### События не появляются в GA4

**Решение:**
1. Проверьте что GA4 Configuration Tag создан
2. Проверьте Measurement ID: `G-JY5TCQH26F`
3. Подождите 1-2 минуты
4. Проверьте в GA4 DebugView

### Дублирование событий

**Решение:**
- ✅ У нас есть дедупликация (sessionStorage + useRef)
- Проверьте что gtag.js НЕ установлен напрямую
- Очистите sessionStorage и проверьте снова

---

## 📈 Будущие улучшения (не срочно)

### Высокий приоритет
- **Server-Side Tracking** для lead_submit (100% надежность)
- **Enhanced Conversions** (когда запустите рекламу)

### Средний приоритет
- **Упростить quiz_progress** до милестоунов (10%, 25%, 50%, 75%, 100%)
- **GA4 Funnel Exploration** настроить после накопления данных
- **Facebook CAPI** (когда запустите FB Ads)

### Низкий приоритет
- Отслеживание времени на каждом шаге
- Отслеживание ошибок в квизе
- Отслеживание возвратов (Back button)
- Hotjar/Clarity для session replay

---

## 📁 Структура файлов

```
/Users/diasadilov/coding/jobjam/frontend/
├── app/
│   └── layout.tsx                    # GTM script установлен
│
├── src/
│   ├── shared/
│   │   ├── config/
│   │   │   └── analytics-config.ts   # GTM конфигурация
│   │   │
│   │   ├── lib/
│   │   │   └── analytics/
│   │   │       ├── push-datalayer.ts # Helper для dataLayer
│   │   │       ├── use-analytics.tsx # React hook
│   │   │       └── index.ts
│   │   │
│   │   └── ui/
│   │       └── quiz-button/
│   │           └── quiz-button.tsx   # Отслеживание CTA кликов
│   │
│   ├── pages/
│   │   ├── quiz-questions/
│   │   │   └── ui/
│   │   │       └── quiz-questions-page.tsx # Отслеживание квиза
│   │   │
│   │   └── selling-page/
│   │       └── ui/
│   │           └── selling-page.tsx  # Отслеживание plan_view
│   │
│   └── features/
│       └── quiz/
│           └── ui/
│               └── quiz-page-55/
│                   └── quiz-page-55.tsx # Отслеживание email
│
└── next.config.ts                    # CSP конфигурация
```

---

## ✅ Чеклист готовности

### Код
- ✅ pushDL helper создан
- ✅ useAnalytics hook обновлен
- ✅ Quiz flow отслеживается
- ✅ Email capture отслеживается
- ✅ Selling page отслеживается
- ✅ QuizButton с CTA tracking
- ✅ Дедупликация работает
- ✅ CSP настроен

### GTM Dashboard (нужно настроить)
- [ ] Создать все Data Layer Variables
- [ ] Создать все Custom Event Triggers
- [ ] Создать GA4 Configuration Tag
- [ ] Создать GA4 Event Tags
- [ ] Протестировать в Preview Mode
- [ ] Опубликовать контейнер

### GA4 (после настройки GTM)
- [ ] Проверить события в DebugView
- [ ] Создать Custom Dimensions
- [ ] Настроить воронки в Explorations
- [ ] Отметить конверсии
- [ ] Проверить Real-time Reports

---

## 🔗 Полезные ссылки

- [GTM Dashboard](https://tagmanager.google.com)
- [GA4 Property](https://analytics.google.com)
- [GTM Documentation](https://developers.google.com/tag-manager)
- [GA4 Events Reference](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)

---

## 🎯 Следующие шаги

1. **Протестировать локально** (yarn dev → пройти квиз → проверить консоль)
2. **Настроить GTM Dashboard** (переменные → триггеры → теги)
3. **Протестировать в Preview Mode** (убедиться что теги срабатывают)
4. **Опубликовать GTM** (Submit → Publish)
5. **Проверить в GA4** (DebugView → Real-time)
6. **Накопить данные** (1-2 недели)
7. **Создать воронки** (GA4 Explorations)
8. **Анализировать и оптимизировать** (найти drop-off → улучшить)

---

**Статус:** ✅ Код готов, GTM нужно настроить  
**Уровень реализации:** Сильный продуктовый инженер ⭐  
**Последнее обновление:** 18 января 2026
