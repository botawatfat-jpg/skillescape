# GA4 Setup in GTM - Настройка Google Analytics 4 через GTM 📊

## 🎯 Важно!

**НЕ добавляйте** gtag.js код напрямую в сайт!  
У вас уже установлен GTM, который является правильным решением.

---

## 📋 Что у вас есть

✅ **GTM Container ID:** `GTM-T3S2P2LK` (уже в коде)  
✅ **GA4 Measurement ID:** `G-JY5TCQH26F` (настроить в GTM)  
✅ **Website:** https://skillescape.co

---

## 🚀 Пошаговая инструкция

### Шаг 1: Открыть GTM

1. Перейти на [tagmanager.google.com](https://tagmanager.google.com)
2. Выбрать аккаунт и контейнер `GTM-T3S2P2LK`

---

### Шаг 2: Создать переменные (Variables)

Сначала создадим все Data Layer Variables для наших событий.

**Нажать "Variables" → "New" → "Data Layer Variable"**

Создать следующие переменные:

#### Базовые:
1. **DLV - quiz_id**
   - Data Layer Variable Name: `quiz_id`

2. **DLV - cta_text**
   - Data Layer Variable Name: `cta_text`

3. **DLV - cta_location**
   - Data Layer Variable Name: `cta_location`

4. **DLV - progress_percent**
   - Data Layer Variable Name: `progress_percent`

5. **DLV - lead_type**
   - Data Layer Variable Name: `lead_type`

#### Для quiz_result_view (параметры пользователя):
6. **DLV - user_goal**
7. **DLV - user_status**
8. **DLV - user_experience**
9. **DLV - coding_level**
10. **DLV - freelancing_level**
11. **DLV - ai_tools**
12. **DLV - income_goal**
13. **DLV - goal_amount**
14. **DLV - readiness**
15. **DLV - guided_plan**
16. **DLV - has_email**
17. **DLV - has_name**
18. **DLV - work_style**
19. **DLV - ideal_hours**
20. **DLV - time_commitment**

#### Константа для GA4 ID:
21. **GA4 Measurement ID**
    - Type: **Constant**
    - Value: `G-JY5TCQH26F`

---

### Шаг 3: Создать триггеры (Triggers)

**Нажать "Triggers" → "New"**

Создать Custom Event триггеры для каждого события:

#### 1. quiz_cta_click
- Type: **Custom Event**
- Event name: `quiz_cta_click`
- This trigger fires on: **All Custom Events**

#### 2. quiz_start
- Type: **Custom Event**
- Event name: `quiz_start`

#### 3. quiz_progress
- Type: **Custom Event**
- Event name: `quiz_progress`

#### 4. quiz_result_view
- Type: **Custom Event**
- Event name: `quiz_result_view`

#### 5. lead_submit
- Type: **Custom Event**
- Event name: `lead_submit`

#### 6. button_click
- Type: **Custom Event**
- Event name: `button_click`

#### 7. form_submit
- Type: **Custom Event**
- Event name: `form_submit`

#### 8. plan_view
- Type: **Custom Event**
- Event name: `plan_view`

#### 9. plan_cta_click
- Type: **Custom Event**
- Event name: `plan_cta_click`

---

### Шаг 4: Создать GA4 Configuration Tag

**Нажать "Tags" → "New"**

**Tag Configuration:**
- Tag Type: **Google Analytics: GA4 Configuration**
- Measurement ID: `{{GA4 Measurement ID}}` (выбрать созданную константу)

**Advanced Settings (опционально):**
- Cookie Settings:
  - Cookie Domain: `auto`
  - Cookie Expires: `63072000` (2 года)

**Triggering:**
- Trigger: **All Pages**

**Name:** `GA4 - Configuration`

**Сохранить!**

---

### Шаг 5: Создать Event Tags

Теперь создадим по одному тегу для каждого события.

#### 1. Tag: Quiz CTA Click

**Tag Configuration:**
- Tag Type: **Google Analytics: GA4 Event**
- Configuration Tag: `{{GA4 - Configuration}}`
- Event Name: `quiz_cta_click`
- Event Parameters:
  - Parameter Name: `cta_text`, Value: `{{DLV - cta_text}}`
  - Parameter Name: `cta_location`, Value: `{{DLV - cta_location}}`

**Triggering:**
- Trigger: `quiz_cta_click` (созданный триггер)

**Name:** `GA4 - Quiz CTA Click`

---

#### 2. Tag: Quiz Start

**Tag Configuration:**
- Tag Type: **Google Analytics: GA4 Event**
- Configuration Tag: `{{GA4 - Configuration}}`
- Event Name: `quiz_start`
- Event Parameters:
  - Parameter Name: `quiz_id`, Value: `{{DLV - quiz_id}}`

**Triggering:**
- Trigger: `quiz_start`

**Name:** `GA4 - Quiz Start`

---

#### 3. Tag: Quiz Progress

**Tag Configuration:**
- Tag Type: **Google Analytics: GA4 Event**
- Configuration Tag: `{{GA4 - Configuration}}`
- Event Name: `quiz_progress`
- Event Parameters:
  - Parameter Name: `quiz_id`, Value: `{{DLV - quiz_id}}`
  - Parameter Name: `progress_percent`, Value: `{{DLV - progress_percent}}`

**Triggering:**
- Trigger: `quiz_progress`

**Name:** `GA4 - Quiz Progress`

---

#### 4. Tag: Quiz Result View (ВАЖНЫЙ!)

**Tag Configuration:**
- Tag Type: **Google Analytics: GA4 Event**
- Configuration Tag: `{{GA4 - Configuration}}`
- Event Name: `quiz_result_view`
- Event Parameters (все параметры квиза):
  - `quiz_id` = `{{DLV - quiz_id}}`
  - `user_goal` = `{{DLV - user_goal}}`
  - `user_status` = `{{DLV - user_status}}`
  - `user_experience` = `{{DLV - user_experience}}`
  - `coding_level` = `{{DLV - coding_level}}`
  - `freelancing_level` = `{{DLV - freelancing_level}}`
  - `ai_tools` = `{{DLV - ai_tools}}`
  - `income_goal` = `{{DLV - income_goal}}`
  - `goal_amount` = `{{DLV - goal_amount}}`
  - `readiness` = `{{DLV - readiness}}`
  - `guided_plan` = `{{DLV - guided_plan}}`
  - `has_email` = `{{DLV - has_email}}`
  - `has_name` = `{{DLV - has_name}}`
  - `work_style` = `{{DLV - work_style}}`
  - `ideal_hours` = `{{DLV - ideal_hours}}`
  - `time_commitment` = `{{DLV - time_commitment}}`

**Triggering:**
- Trigger: `quiz_result_view`

**Name:** `GA4 - Quiz Result View`

---

#### 5. Tag: Lead Submit

**Tag Configuration:**
- Tag Type: **Google Analytics: GA4 Event**
- Configuration Tag: `{{GA4 - Configuration}}`
- Event Name: `lead_submit`
- Event Parameters:
  - Parameter Name: `lead_type`, Value: `{{DLV - lead_type}}`
  - Parameter Name: `quiz_id`, Value: `{{DLV - quiz_id}}`

**Triggering:**
- Trigger: `lead_submit`

**Name:** `GA4 - Lead Submit`

---

#### 6-9. Остальные теги (опционально)

Создать аналогично:
- `GA4 - Button Click` (event: `button_click`)
- `GA4 - Form Submit` (event: `form_submit`)
- `GA4 - Plan View` (event: `plan_view`)
- `GA4 - Plan CTA Click` (event: `plan_cta_click`)

---

### Шаг 6: Preview & Debug

1. **Нажать "Preview"** (в правом верхнем углу)
2. Ввести URL:
   - Production: `https://skillescape.co`
   - Development: `http://localhost:3000`
3. **Открыть GTM Debug Panel** (появится снизу)
4. **Пройти квиз:**
   - Кликнуть "Take Quiz" → должен сработать `quiz_cta_click`
   - PageId=1 → должен сработать `quiz_start`
   - Продолжить квиз → должны срабатывать `quiz_progress`
   - Email форма → должен сработать `lead_submit`
   - Результат → должен сработать `quiz_result_view`
5. **Проверить в Debug Panel:**
   - Tags → должны быть зеленые галочки "Tags Fired"
   - Variables → должны быть значения из dataLayer

---

### Шаг 7: Проверить в GA4

Пока Preview Mode активен:

1. Открыть [analytics.google.com](https://analytics.google.com)
2. Выбрать Property `G-JY5TCQH26F`
3. **Configure → DebugView**
4. Должны появиться события в реальном времени

Если не появляются:
- Проверить что GTM теги срабатывают (зеленые галочки)
- Проверить что в GTM указан правильный GA4 ID
- Подождать 1-2 минуты (может быть задержка)

---

### Шаг 8: Publish

Если все работает в Preview:

1. **Нажать "Submit"** (в правом верхнем углу)
2. **Version Name:** `GA4 Integration - G-JY5TCQH26F + Quiz Events`
3. **Version Description:**
   ```
   Added GA4 Configuration Tag (G-JY5TCQH26F)
   Added 9 Event Tags for quiz funnel tracking
   Added Data Layer Variables for all quiz parameters
   Created Custom Event Triggers
   ```
4. **Publish**

---

## ✅ Проверка после публикации

### 1. Real-time Reports
1. Открыть GA4: **Reports → Realtime**
2. Открыть сайт https://skillescape.co
3. Пройти квиз
4. В Real-time должны появиться:
   - Event count
   - Event name по каждому событию
   - User activity

### 2. Events Report (через 24 часа)
1. GA4: **Reports → Engagement → Events**
2. Должны появиться все события:
   - `quiz_cta_click`
   - `quiz_start`
   - `quiz_progress`
   - `quiz_result_view`
   - `lead_submit`

---

## 🎯 Custom Dimensions (рекомендуется)

Чтобы анализировать параметры квиза, создайте Custom Dimensions:

1. GA4: **Configure → Custom definitions**
2. **Create custom dimension:**

**Основные параметры:**

1. **User Goal**
   - Dimension name: `User Goal`
   - Scope: `Event`
   - Event parameter: `user_goal`

2. **Income Goal**
   - Dimension name: `Income Goal`
   - Scope: `Event`
   - Event parameter: `income_goal`

3. **Coding Level**
   - Dimension name: `Coding Level`
   - Scope: `Event`
   - Event parameter: `coding_level`

4. **Readiness Score**
   - Dimension name: `Readiness`
   - Scope: `Event`
   - Event parameter: `readiness`

5. **Quiz ID**
   - Dimension name: `Quiz ID`
   - Scope: `Event`
   - Event parameter: `quiz_id`

**Зачем:** После создания Custom Dimensions вы сможете:
- Сегментировать пользователей по целям
- Анализировать конверсию по уровню опыта
- Создавать аудитории для ремаркетинга
- Строить кастомные отчеты

---

## 📊 Explorations (воронки)

После накопления данных (1-2 дня) создайте воронки:

1. GA4: **Explore**
2. **Funnel exploration**

### Воронка 1: Core Funnel
```
Step 1: quiz_cta_click
Step 2: quiz_start
Step 3: quiz_progress (progress_percent >= 50)
Step 4: lead_submit
Step 5: quiz_result_view
```

### Воронка 2: Lead Quality
```
Step 1: lead_submit
Step 2: quiz_result_view
Step 3: plan_view
```

---

## 🚨 Troubleshooting

### События не появляются в GA4

**Проблема:** Теги срабатывают в GTM, но не появляются в GA4.

**Решение:**
1. Проверить что GA4 Measurement ID правильный: `G-JY5TCQH26F`
2. Проверить что Configuration Tag создан и опубликован
3. Подождать 1-2 минуты (может быть задержка)
4. Проверить в GA4 DebugView (должно работать сразу)

### Дублирование событий

**Проблема:** События отправляются дважды.

**Решение:**
- ✅ У нас есть дедупликация в коде (sessionStorage + useRef)
- Проверить что gtag.js НЕ установлен напрямую в коде
- Проверить что в GTM нет дубликатов тегов

### Не все параметры видны в GA4

**Проблема:** События есть, но параметры не видны.

**Решение:**
- Создать Custom Dimensions (см. выше)
- Подождать 24-48 часов для появления в Reports
- Параметры всегда видны в DebugView сразу

---

## 📚 Документация

- **[GTM Container](https://tagmanager.google.com)** - управление тегами
- **[GA4 Property](https://analytics.google.com)** - просмотр данных
- **[GTM Tracking Map](./GTM_TRACKING_MAP.md)** - где какие теги
- **[GTM Clean Funnel](./GTM_CLEAN_FUNNEL.md)** - воронка событий
- **[Testing Guide](./TESTING_GTM_EVENTS.md)** - как тестировать

---

## ✅ Чеклист

После настройки проверьте:

- [ ] GA4 Configuration Tag создан с ID `G-JY5TCQH26F`
- [ ] Все Data Layer Variables созданы
- [ ] Все Custom Event Triggers созданы
- [ ] Все GA4 Event Tags созданы
- [ ] Preview Mode показывает что теги срабатывают
- [ ] GA4 DebugView показывает события
- [ ] Версия опубликована в GTM
- [ ] Real-time Reports показывают события
- [ ] Custom Dimensions созданы (рекомендуется)

---

**Дата:** 18 января 2026  
**GTM ID:** GTM-T3S2P2LK  
**GA4 ID:** G-JY5TCQH26F  
**Website:** https://skillescape.co
