# GTM Quick Start - Быстрый старт

## ✅ Что уже сделано

Все GTM события настроены и работают автоматически! Просто пройдите квиз и данные полетят в GTM.

---

## 📊 Главные события

### 1. `quiz_cta_click` (новое!)
**Где:** Любая CTA кнопка "Take Quiz"  
**Параметры:** `cta_text`, `cta_location`  
**Логика:** Это клик, НЕ старт квиза

### 2. `quiz_start`
**Где:** **ТОЛЬКО** при pageId=1 (фактический старт прохождения)  
**Параметры:** `quiz_id: "ai_quiz_v1"`  
**Защита:** Отправляется 1 раз за сессию  
**Воронка:** `quiz_cta_click` → `quiz_start`

### 3. `quiz_progress`
**Где:** На каждом шаге квиза  
**Параметры:** `quiz_id`, `progress_percent: 0-100`  
**Защита:** Отслеживает только изменения прогресса

### 4. `quiz_result_view`
**Где:** Финальная страница (pageId=57)  
**Параметры:** ВСЕ данные квиза в JSON  
**Ключевые поля:**
- `user_goal`, `user_status`, `user_experience`
- `coding_level`, `freelancing_level`, `ai_tools`
- `income_goal`, `readiness`, `has_email`

### 5. `lead_submit`
**Где:** Email форма (pageId=55)  
**Параметры:** 
- `lead_type: "quiz_email"`
- `quiz_id: "ai_quiz_v1"` ✅ (для A/B тестов)
**Защита:** Отправляется 1 раз за сессию

---

## 🧪 Как проверить (за 2 минуты)

```bash
# 1. Запустить dev
yarn dev

# 2. Открыть консоль (F12)

# ⚠️ Если видите ошибку CSP:
# "violates the following Content Security Policy directive"
# → Перезапустите сервер и очистите кеш (Hard Reload)
# → Подробнее в CSP_GTM_FIX.md

# 3. Кликнуть по "Take Quiz" на главной
# В консоли увидите:
# [GTM DataLayer] { event: "quiz_cta_click", cta_text: "Take Our Quiz", cta_location: "/" }

# 4. Пройти квиз
# В консоли увидите:
# [GTM DataLayer] { event: "quiz_start", quiz_id: "ai_quiz_v1" } (только на pageId=1!)
# [GTM DataLayer] { event: "quiz_progress", progress_percent: 50, ... }
# [GTM DataLayer] { event: "quiz_result_view", user_goal: "...", ... }

# 5. Проверить dataLayer
window.dataLayer
```

---

## 🎯 Что нужно настроить в GTM

### Шаг 1: Создать переменные (Data Layer Variables)

**Минимальный набор:**
1. `quiz_id`
2. `progress_percent`
3. `lead_type`
4. `cta_text`
5. `cta_location`
6. `user_goal`
7. `user_status`
8. `income_goal`
9. `coding_level`
10. `has_email`

### Шаг 2: Создать триггеры

**5 триггеров (Custom Events):**
1. `quiz_cta_click` (CTA клики)
2. `quiz_start` (фактический старт)
3. `quiz_progress`
4. `quiz_result_view`
5. `lead_submit`

### Шаг 3: Создать теги

**GA4 Event Tags:**
1. **Quiz CTA Click**
   - Event Name: `quiz_cta_click`
   - Trigger: quiz_cta_click
   - Parameters: cta_text, cta_location

2. **Quiz Start**
   - Event Name: `quiz_start`
   - Trigger: quiz_start
   - Parameters: quiz_id

3. **Quiz Progress**
   - Event Name: `quiz_progress`
   - Trigger: quiz_progress
   - Parameters: quiz_id, progress_percent

4. **Quiz Result**
   - Event Name: `quiz_result_view`
   - Trigger: quiz_result_view
   - Parameters: ВСЕ переменные (см. выше)

5. **Lead Submit**
   - Event Name: `lead_submit`
   - Trigger: lead_submit
   - Parameters: lead_type, quiz_id

---

## 📈 Полезные сегменты в GTM

### Новички
```
Trigger: quiz_result_view
Condition: coding_level = "beginner"
```

### Готовы платить
```
Trigger: quiz_result_view
Conditions:
  - income_goal contains "$5000" OR "$10000"
  - readiness >= 8
  - has_email = true
```

### Фрилансеры
```
Trigger: quiz_result_view
Condition: user_goal contains "freelanc"
```

---

## 🔗 Документация

- **[GTM Tracking Map](./GTM_TRACKING_MAP.md)** - где что установлено
- **[GTM Quiz Results](./GTM_QUIZ_RESULTS.md)** - как работают результаты
- **[Testing GTM](./TESTING_GTM_EVENTS.md)** - как тестировать
- **[Integration Complete](./GTM_INTEGRATION_COMPLETE.md)** - полный обзор

---

## ⚡ Шпаргалка команд

```bash
# Запуск
yarn dev

# Проверить dataLayer в консоли
window.dataLayer

# Найти конкретное событие
window.dataLayer.filter(e => e.event === 'quiz_result_view')

# Очистить session для повторного теста
sessionStorage.clear()
```

---

**Статус:** ✅ Все работает из коробки  
**GTM ID:** GTM-T3S2P2LK  
**Последнее обновление:** 18 января 2026
