# Clean GTM Funnel - Чистая воронка 🎯

## Проблема "размытого quiz_start" (решена!)

### Было (плохо):
```
CTA Click → quiz_start ❌
PageId=1 → quiz_start ❌

Проблема: quiz_start срабатывал 2 раза!
```

Да, дедупликация это исправляла, но **логически** было неправильно.

### Стало (хорошо):
```
CTA Click → quiz_cta_click ✅
PageId=1 → quiz_start ✅

Логика: Клик ≠ Старт прохождения!
```

---

## 🎯 Кристально чистая воронка

### Полная воронка пользователя:

```
1. quiz_cta_click (homepage)
   ↓
2. quiz_start (pageId=1)
   ↓
3. quiz_progress (10%, 25%, 50%, 75%, 100%)
   ↓
4. lead_submit (email capture)
   ↓
5. quiz_result_view (финал)
   ↓
6. plan_view (selling page)
   ↓
7. plan_cta_click (кнопка покупки)
```

### Теперь можно четко видеть:

**Конверсия CTA → Start:**
```
quiz_cta_click / quiz_start = % реально начавших
```

**Конверсия Start → Lead:**
```
quiz_start / lead_submit = % оставивших email
```

**Конверсия Lead → Plan View:**
```
lead_submit / plan_view = % дошедших до оффера
```

---

## 📊 События и их параметры

### 1. `quiz_cta_click` (новое!)
**Что:** Клик по CTA кнопке  
**Где:** Homepage, landing pages  
**Параметры:**
```javascript
{
  event: "quiz_cta_click",
  cta_text: "Take Our Quiz",
  cta_location: "/"
}
```

### 2. `quiz_start`
**Что:** Фактический старт прохождения квиза  
**Где:** ТОЛЬКО pageId=1  
**Параметры:**
```javascript
{
  event: "quiz_start",
  quiz_id: "ai_quiz_v1"
}
```

**Защита:**
- sessionStorage (межстраничная)
- useRef (React StrictMode)
- Отправляется 1 раз за сессию

### 3. `quiz_progress`
**Что:** Прогресс прохождения  
**Где:** Каждая страница с прогрессом > 0  
**Параметры:**
```javascript
{
  event: "quiz_progress",
  quiz_id: "ai_quiz_v1",
  progress_percent: 50
}
```

**Фильтры:**
- progress > 0
- title не пустой (не мотивационный экран)
- прогресс изменился

### 4. `lead_submit`
**Что:** Лид захвачен (email получен)  
**Где:** QuizPage55  
**Параметры:**
```javascript
{
  event: "lead_submit",
  lead_type: "quiz_email",
  quiz_id: "ai_quiz_v1"  // ✅ Важно для A/B тестов!
}
```

**Защита:**
- sessionStorage
- useRef
- Отправляется 1 раз за сессию

**Почему quiz_id важен:**
- A/B тесты разных квизов
- Разные источники трафика
- Атрибуция лидов к конкретному квизу

### 5. `quiz_result_view`
**Что:** Просмотр результата  
**Где:** pageId=57 (финальная страница)  
**Параметры:**
```javascript
{
  event: "quiz_result_view",
  quiz_id: "ai_quiz_v1",
  // ВСЕ данные квиза как JSON
  user_goal: "...",
  user_status: "...",
  coding_level: "...",
  // ... и т.д.
}
```

---

## 🔥 Примеры использования в GTM

### Воронка 1: Core Funnel
```
Название: "Quiz Core Funnel"
Шаги:
1. quiz_cta_click
2. quiz_start
3. quiz_progress >= 50
4. lead_submit
5. quiz_result_view
```

### Воронка 2: CTA Effectiveness
```
Название: "CTA to Start Conversion"
Шаги:
1. quiz_cta_click (сегмент по cta_location)
2. quiz_start

Метрика: conversion_rate
Сегменты:
- Homepage CTA
- Landing Page CTA
- Blog CTA
```

### Воронка 3: Drop-off Analysis
```
Название: "Quiz Progress Drop-off"
Шаги:
1. quiz_start
2. quiz_progress = 25
3. quiz_progress = 50
4. quiz_progress = 75
5. lead_submit
6. quiz_result_view

Метрика: где максимальный drop-off?
```

### Воронка 4: Lead Quality
```
Название: "Lead to Conversion"
Шаги:
1. lead_submit
2. quiz_result_view
3. plan_view
4. plan_cta_click

Метрика: качество лидов
Сегменты:
- По income_goal
- По coding_level
- По readiness
```

---

## 💡 GA4 Explorations - готовые отчеты

### Отчет 1: "CTA Performance"
**Тип:** Free Form  
**Dimensions:**
- cta_location
- cta_text

**Metrics:**
- quiz_cta_click (count)
- quiz_start (count)
- Conversion Rate (calculated: start/cta_click)

**Insight:** Какие CTA работают лучше?

### Отчет 2: "Quiz Completion Rate"
**Тип:** Funnel Exploration  
**Steps:**
1. quiz_start
2. quiz_progress >= 25
3. quiz_progress >= 50
4. quiz_progress >= 75
5. lead_submit

**Insight:** На каком этапе теряем пользователей?

### Отчет 3: "Lead Quality Segments"
**Тип:** Segment Overlap  
**Segments:**
- High Income Goal (income_goal contains "$5000" OR "$10000")
- High Readiness (readiness >= 8)
- Advanced Users (coding_level = "advanced")

**Insight:** Кто наши самые ценные лиды?

### Отчет 4: "Time to Lead"
**Тип:** Path Exploration  
**Start:** quiz_start  
**End:** lead_submit

**Metrics:**
- Median time
- Session duration
- Events between

**Insight:** Сколько времени нужно для конверсии?

---

## 🎓 Рекомендации по оптимизации

### 1. Оптимизация CTA
```
Если quiz_cta_click / quiz_start < 50%:
→ Проблема с загрузкой/UX после клика
→ Проверить время загрузки pageId=1
→ Возможно техническая проблема
```

### 2. Оптимизация Start → Progress 50%
```
Если quiz_start / quiz_progress(50%) < 70%:
→ Первые вопросы слишком сложные/скучные
→ Улучшить onboarding
→ Сделать первые 5 вопросов engaging
```

### 3. Оптимизация Progress → Lead
```
Если quiz_progress(75%) / lead_submit < 80%:
→ Email форма отпугивает
→ A/B тест: до/после email capture
→ Попробовать social proof
```

### 4. Оптимизация Lead Quality
```
Сегментировать лиды:
- High Value (income_goal высокий + readiness высокий)
- Medium Value
- Low Value

Настроить разные follow-up для каждого сегмента
```

---

## ✅ Чек-лист: Все ли правильно?

**В коде:**
- [ ] QuizButton отправляет `quiz_cta_click` (НЕ quiz_start)
- [ ] quiz_start отправляется ТОЛЬКО на pageId=1
- [ ] lead_submit содержит `quiz_id`
- [ ] Все события дедуплицированы где нужно

**В GTM:**
- [ ] Создан триггер `quiz_cta_click`
- [ ] Создан триггер `quiz_start` (отдельно!)
- [ ] Создан триггер `lead_submit` с quiz_id
- [ ] Теги отправляют события в GA4

**В GA4:**
- [ ] Создана воронка CTA → Start → Lead
- [ ] Создан отчет по drop-off
- [ ] Созданы сегменты по lead quality
- [ ] Настроены Custom Dimensions

---

**Статус:** ✅ Воронка идеально чистая  
**Последнее обновление:** 18 января 2026
