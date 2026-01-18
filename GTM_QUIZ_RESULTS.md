# GTM Quiz Results - Отправка результатов квиза

## Обзор

Результаты квиза автоматически отправляются в GTM со **ВСЕМИ** данными пользователя в виде JSON. Сегментация и анализ делается в GTM/GA4.

---

## 📊 Событие `quiz_result_view`

### Когда отправляется
- **Страница:** QuizPage 57 (финальная страница)
- **URL:** `/quiz/questions?pageId=57`
- **Триггер:** Автоматически при загрузке страницы

### Все параметры события

```typescript
{
  event: "quiz_result_view",
  quiz_id: "ai_quiz_v1",
  
  // Основные данные
  user_goal: string | null,          // Цель пользователя
  user_status: string | null,        // Текущий статус
  user_experience: string | null,    // Уровень опыта
  
  // Навыки
  coding_level: string | null,       // Уровень кодинга
  freelancing_level: string | null,  // Уровень фрилансинга
  ai_tools: string[],                // Список AI инструментов
  
  // Финансы
  income_goal: string | null,        // Желаемый доход
  goal_amount: string | null,        // Целевая сумма
  
  // Мотивация
  readiness: number | null,          // Готовность (1-10)
  guided_plan: number | null,        // Нужен ли план (1-10)
  
  // Контакты (без PII)
  has_email: boolean,                // Предоставил ли email
  has_name: boolean,                 // Предоставил ли имя
  
  // Рабочие предпочтения
  work_style: string | null,         // Стиль работы
  ideal_hours: string | null,        // Идеальные часы
  time_commitment: string | null,    // Готовность уделять время
}
```

---

## 🎯 Преимущества отправки полных данных

### Почему JSON вместо вычисленного result_type?

✅ **Гибкость** - можно создавать любые сегменты в GTM/GA4
✅ **Точность** - нет потери данных при категоризации
✅ **Простота** - не нужна сложная логика на фронтенде
✅ **Масштабируемость** - легко добавлять новые параметры
✅ **Аналитика** - можно анализировать корреляции между параметрами

### Примеры данных пользователей

#### Пример 1: Новичок-фрилансер
```javascript
{
  event: "quiz_result_view",
  quiz_id: "ai_quiz_v1",
  user_goal: "Start freelancing with AI",
  user_status: "9-5 office worker",
  user_experience: "no_experience",
  coding_level: "beginner",
  freelancing_level: "never",
  ai_tools: ["ChatGPT"],
  income_goal: "$1000-2000",
  readiness: 8,
  has_email: true,
  has_name: true
}
```

#### Пример 2: Продвинутый предприниматель
```javascript
{
  event: "quiz_result_view",
  quiz_id: "ai_quiz_v1",
  user_goal: "Automate business processes",
  user_status: "Entrepreneur",
  user_experience: "experienced",
  coding_level: "advanced",
  freelancing_level: "expert",
  ai_tools: ["ChatGPT", "Claude", "Make.com", "Zapier", "MidJourney"],
  income_goal: "$5000+",
  goal_amount: "$10000",
  readiness: 10,
  has_email: true,
  has_name: true
}
```

#### Пример 3: Студент
```javascript
{
  event: "quiz_result_view",
  quiz_id: "ai_quiz_v1",
  user_goal: "Learn AI for career",
  user_status: "Student",
  user_experience: "some_experience",
  coding_level: "intermediate",
  freelancing_level: "tried_once",
  ai_tools: ["ChatGPT", "Notion AI", "Grammarly"],
  income_goal: "$500-1000",
  readiness: 7,
  has_email: true,
  has_name: false
}
```

---

## 📋 Дополнительные данные пользователя

### Событие `plan_cta_click`

Отправляется при клике на кнопку "See My Plan" на странице 57:

```typescript
{
  event: "plan_cta_click",
  user_goal: string,        // Цель пользователя
  user_status: string,      // Статус (работник, студент и т.д.)
  income_goal: string,      // Желаемый доход
  has_email: boolean        // Предоставил ли email
}
```

### Событие `plan_view`

Отправляется при просмотре selling page:

```typescript
{
  event: "plan_view",
  page_type: "selling_page",
  plan_status: "generated",
  user_name: string,         // Имя пользователя
  user_email: string,        // "provided" или "missing"
  user_goal: string,         // Цель
  user_status: string,       // Статус
  income_goal: string,       // Желаемый доход
  experience_level: string   // Уровень опыта
}
```

---

## 🔍 Данные из Store

### Все доступные поля QuizData

```typescript
interface QuizData {
  // Базовая информация
  gender?: "male" | "female"
  age?: string
  name?: string
  email?: string
  
  // Цели и статус
  goal?: string                    // Главная цель
  status?: string                  // Текущий статус
  incomeGoal?: string             // Желаемый доход
  
  // Опыт и навыки
  experience?: string              // Общий опыт
  coding?: string                  // Знание кодинга
  freelancing?: string            // Опыт фрилансинга
  aiTools?: string[]              // Используемые AI инструменты
  
  // Мотивация
  challenges?: string[]            // Текущие вызовы
  stopping?: string               // Что останавливает
  agreement?: number              // Согласие (1-10)
  freedom?: number                // Желание свободы (1-10)
  readiness?: number              // Готовность (1-10)
  
  // Финансы
  moneyStress?: number            // Стресс от денег (1-10)
  extraIncome?: number            // Нужен доп. доход (1-10)
  goalAmount?: string             // Целевая сумма
  priceThreshold?: string         // Порог цены
  
  // Работа
  workStyle?: string              // Стиль работы
  idealHours?: string             // Идеальные часы
  timeCommitment?: string         // Готовность уделять время
  
  // AI и навыки
  excitingThing?: string          // Что интересно в AI
  confidenceFactor?: string       // Фактор уверенности
  guidedPlan?: number             // Нужен ли план (1-10)
  knowsClientMethods?: string     // Знание методов
  earningTimeline?: string        // Временные рамки
  knowsAiAutomation?: string      // Знание автоматизации
  
  // Финальные вопросы
  readyToTakeControl?: "yes" | "no"
  commit30Min?: "yes" | "no"
  wantsHelpBuildingProject?: "yes" | "no"
  agreeToReceive?: boolean
}
```

---

## 💡 Примеры использования в GTM

### Создание сегментов пользователей

В GTM можно создать аудитории на основе любых параметров:

**Сегмент "Новички-фрилансеры":**
```
user_goal contains "freelanc" AND 
(coding_level equals "beginner" OR freelancing_level equals "never")
```

**Сегмент "Продвинутые пользователи":**
```
coding_level equals "advanced" OR 
freelancing_level equals "expert" OR
ai_tools.length > 4
```

**Сегмент "Студенты":**
```
user_status contains "student"
```

**Сегмент "Высокий доход":**
```
income_goal contains "$5000" OR 
income_goal contains "$10000"
```

**Сегмент "Готовые начать":**
```
readiness >= 8 AND 
has_email equals true AND
time_commitment is not null
```

### Персонализация рекламы

**Facebook Pixel - Custom Audience:**
```javascript
// В GTM Tag с триггером quiz_result_view
var goal = {{DLV - user_goal}};
var codingLevel = {{DLV - coding_level}};
var incomeGoal = {{DLV - income_goal}};

// Разные офферы для разных сегментов
if (goal && goal.includes('freelanc')) {
  if (codingLevel === 'beginner') {
    fbq('track', 'ViewContent', {
      content_category: 'beginner_freelancer',
      content_name: 'AI Freelancing Starter Pack',
      value: 10
    });
  } else {
    fbq('track', 'ViewContent', {
      content_category: 'advanced_freelancer',
      content_name: 'Pro Freelancer Masterclass',
      value: 50
    });
  }
}

// Для высокодоходных целей
if (incomeGoal && (incomeGoal.includes('5000') || incomeGoal.includes('10000'))) {
  fbq('track', 'ViewContent', {
    content_category: 'premium',
    value: 100
  });
}
```

**Google Ads - Enhanced Conversions:**
```javascript
// Динамическая ценность конверсии на основе дохода
var incomeGoal = {{DLV - income_goal}};
var conversionValue = 10; // default

if (incomeGoal) {
  if (incomeGoal.includes('10000')) conversionValue = 100;
  else if (incomeGoal.includes('5000')) conversionValue = 50;
  else if (incomeGoal.includes('2000')) conversionValue = 25;
}

gtag('event', 'conversion', {
  send_to: 'AW-CONVERSION_ID',
  value: conversionValue,
  currency: 'USD'
});
```

### Условные триггеры в GTM

**Показать специальный offer для новичков:**
```
Trigger Name: Quiz Result - Beginners
Type: Custom Event
Event name: quiz_result_view
Conditions:
  - coding_level equals "beginner"
  - freelancing_level equals "never"
  - has_email equals true
```

**Триггер для готовых платить больше:**
```
Trigger Name: Quiz Result - High Value
Type: Custom Event
Event name: quiz_result_view
Conditions:
  - income_goal contains "$5000" OR income_goal contains "$10000"
  - readiness >= 8
  - has_email equals true
```

**Разные лендинги на основе цели:**
```javascript
// В GTM Tag (Custom HTML)
var goal = {{DLV - user_goal}};
var status = {{DLV - user_status}};

if (goal && goal.toLowerCase().includes('freelanc')) {
  window.location = '/freelancer-path';
} else if (status && status.toLowerCase().includes('student')) {
  window.location = '/student-offer';
} else if (status && status.toLowerCase().includes('entrepreneur')) {
  window.location = '/business-automation';
}
```

---

## 🧪 Тестирование

### Development Mode

```bash
yarn dev
```

**В консоли вы увидите:**
```javascript
[Quiz Result] {
  resultType: "ai_freelancer_beginner",
  quizData: {
    experience: "no_experience",
    coding: "beginner",
    freelancing: "never",
    goal: "Start freelancing with AI",
    status: "9-5 worker",
    aiTools: ["ChatGPT"]
  }
}

[GTM DataLayer] {
  event: "quiz_result_view",
  quiz_id: "ai_quiz_v1",
  result_type: "ai_freelancer_beginner"
}
```

### Тестовые сценарии

#### Сценарий 1: Новичок-фрилансер
```
Ответы:
- Goal: "Start freelancing"
- Status: "9-5 worker"
- Experience: "No experience"
- Coding: "Beginner"
- Freelancing: "Never tried"
- Income Goal: "$1000-2000"

Ожидаемые параметры в GTM:
{
  user_goal: "Start freelancing",
  user_status: "9-5 worker",
  user_experience: "no_experience",
  coding_level: "beginner",
  freelancing_level: "never",
  income_goal: "$1000-2000",
  ai_tools: ["ChatGPT"],
  readiness: 8,
  has_email: true
}
```

#### Сценарий 2: Продвинутый предприниматель
```
Ответы:
- Status: "Entrepreneur"
- Goal: "Automate business"
- Coding: "Advanced"
- AI Tools: ["ChatGPT", "MidJourney", "Claude", "Make.com", "Zapier"]
- Income Goal: "$10000+"

Ожидаемые параметры в GTM:
{
  user_goal: "Automate business",
  user_status: "Entrepreneur",
  coding_level: "advanced",
  ai_tools: ["ChatGPT", "MidJourney", "Claude", "Make.com", "Zapier"],
  income_goal: "$10000+",
  readiness: 10,
  has_email: true
}
```

#### Сценарий 3: Студент
```
Ответы:
- Status: "Student"
- Experience: "Some experience"
- AI Tools: ["ChatGPT", "Notion AI", "Grammarly"]
- Income Goal: "$500-1000"

Ожидаемые параметры в GTM:
{
  user_status: "Student",
  user_experience: "some_experience",
  ai_tools: ["ChatGPT", "Notion AI", "Grammarly"],
  income_goal: "$500-1000",
  has_email: true
}
```

### Проверка в GTM Preview

1. Пройдите квиз до конца
2. На странице 57 проверьте:
   - Event: `quiz_result_view`
   - Variable: `result_type` = правильное значение
3. Кликните "See My Plan"
4. Проверьте события:
   - `plan_cta_click` с данными пользователя
   - `plan_view` на selling page

### Проверка в GA4

1. Откройте GA4 → Realtime
2. Пройдите квиз
3. Проверьте событие `quiz_result_view`
4. Проверьте custom параметры:
   - `quiz_id`
   - `result_type`

---

## 📊 Аналитика результатов

### Метрики для отслеживания

**В GA4 создайте Custom Dimensions для ключевых параметров:**

1. **User Goal** (quiz_result_view.user_goal)
   - Scope: Event
   - Parameter: user_goal

2. **User Status** (quiz_result_view.user_status)
   - Scope: Event
   - Parameter: user_status

3. **Income Goal** (quiz_result_view.income_goal)
   - Scope: Event
   - Parameter: income_goal

4. **Coding Level** (quiz_result_view.coding_level)
   - Scope: Event
   - Parameter: coding_level

5. **Freelancing Level** (quiz_result_view.freelancing_level)
   - Scope: Event
   - Parameter: freelancing_level

6. **User Experience** (quiz_result_view.user_experience)
   - Scope: Event
   - Parameter: user_experience

**Отчеты для анализа:**

1. **Distribution by Goal**
   ```
   Dimension: User Goal
   Metric: Event Count
   Event: quiz_result_view
   Chart: Pie Chart
   ```

2. **Conversion Rate by Experience Level**
   ```
   Dimensions: 
   - User Experience
   - Coding Level
   - Freelancing Level
   Metrics: 
   - Quiz Completions
   - Lead Submissions (has_email = true)
   - Conversion Rate to Selling Page
   ```

3. **Income Goals Analysis**
   ```
   Dimension: Income Goal
   Metrics:
   - Count
   - Avg Readiness Score
   - Conversion to Purchase
   ```

4. **AI Tools Usage**
   ```
   Dimension: AI Tools (create from array)
   Metrics:
   - Users Count
   - Most Popular Tools
   - Correlation with Income Goal
   ```

5. **Readiness Score Distribution**
   ```
   Dimension: Readiness (1-10)
   Metrics:
   - Count
   - Conversion Rate
   - Time to Purchase
   ```

---

## 🎯 Оптимизация воронки

### A/B тесты на основе result_type

**Тест 1: Разные офферы для разных уровней**
```
Beginners → "Start from zero" offer
Intermediate → "Level up your skills" offer
Advanced → "Master AI freelancing" offer
```

**Тест 2: Персонализированный контент**
```javascript
// В selling page показывать разный контент
if (result_type.includes('freelancer')) {
  showContent('freelancer-testimonials');
} else if (result_type.includes('entrepreneur')) {
  showContent('business-automation-cases');
}
```

### Улучшение конверсии

**На основе данных можно:**

1. Показывать релевантные testimonials
2. Подбирать подходящие case studies
3. Предлагать правильный уровень курса
4. Персонализировать email последовательности
5. Настраивать ретаргетинг рекламу

---

## 🔗 Связанные документы

- [GTM Tracking Map](./GTM_TRACKING_MAP.md) - полная карта отслеживания
- [Testing GTM Events](./TESTING_GTM_EVENTS.md) - как тестировать
- [GTM Integration Complete](./GTM_INTEGRATION_COMPLETE.md) - общий обзор
- [Analytics Setup](./ANALYTICS_SETUP.md) - настройка аналитики

---

**Последнее обновление:** 18 января 2026  
**Статус:** ✅ Динамическое определение result_type реализовано
