# Тестирование GTM событий

## Быстрый тест всех событий

### 1. Подготовка

```bash
# Запустить проект в development режиме
yarn dev

# Откройте консоль браузера (F12)
# Все события будут логироваться в формате:
# [GTM DataLayer] { event: "event_name", param: "value" }
```

### 2. Тест Quiz Flow

#### Шаг 1: quiz_start
```
1. Перейдите на http://localhost:3000
2. Кликните на кнопку "Take Quiz"
3. Выберите пол (Male/Female)
```

**Ожидаемый результат в консоли:**
```javascript
[GTM DataLayer] { event: "button_click", button_name: "Take the quiz", ... }
[GTM DataLayer] { event: "quiz_start", quiz_id: "ai_quiz_v1" }
```

**Проверка в GTM Preview:**
- Событие `quiz_start` должно появиться в Summary
- Параметр `quiz_id` = "ai_quiz_v1"

#### Шаг 2: quiz_progress
```
1. Продолжайте отвечать на вопросы
2. На каждом шаге (где progress > 0) должно отправляться событие
```

**Ожидаемый результат в консоли:**
```javascript
// На странице 2 (progress: 10%)
[GTM DataLayer] { event: "quiz_progress", quiz_id: "ai_quiz_v1", progress_percent: 10 }

// На странице 6 (progress: 50%)
[GTM DataLayer] { event: "quiz_progress", quiz_id: "ai_quiz_v1", progress_percent: 50 }

// На странице 11 (progress: 80%)
[GTM DataLayer] { event: "quiz_progress", quiz_id: "ai_quiz_v1", progress_percent: 80 }
```

**Важно:**
- На мотивационных экранах (пустой title) событие НЕ отправляется
- Прогресс отслеживается только когда он изменяется

#### Шаг 3: lead_submit (Email Capture)
```
1. Дойдите до страницы 55 (Email)
2. Введите валидный email
3. Отметьте чекбокс согласия
4. Нажмите Continue
```

**Ожидаемый результат в консоли:**
```javascript
[GTM DataLayer] { event: "lead_submit", lead_type: "quiz_email" }
[GTM DataLayer] { event: "form_submit", form_name: "quiz_email_form" }
```

**Проверка дедупликации:**
```
1. Вернитесь назад (browser back button)
2. Повторите отправку email
3. В консоли должно появиться:
   [Analytics] lead_submit already fired for quiz_email, skipping
4. Событие НЕ должно отправиться повторно
```

#### Шаг 4: quiz_result_view
```
1. Дойдите до страницы 57 (финальная)
2. Посмотрите на ваш план
```

**Ожидаемый результат в консоли:**
```javascript
[GTM DataLayer] { event: "quiz_result_view", quiz_id: "ai_quiz_v1", result_type: "ai_plan_generated" }
```

### 3. Тест Selling Page

```
1. После завершения квиза вы должны попасть на /selling-page
2. Страница автоматически отслеживается
```

**Ожидаемый результат в консоли:**
```javascript
[GTM DataLayer] { event: "plan_view", page_type: "selling_page", plan_status: "generated" }
```

### 4. Тест Button Clicks

```
1. На главной странице кликните на любую кнопку "Take Quiz"
2. В Hero секции
3. В середине страницы
4. В TakeOurQuiz секции
```

**Ожидаемый результат в консоли:**
```javascript
[GTM DataLayer] { event: "button_click", button_name: "Take the quiz", location: "/" }
[GTM DataLayer] { event: "quiz_start", quiz_id: "ai_quiz_v1" }
```

---

## Проверка в GTM Dashboard

### Использование GTM Preview Mode

1. **Откройте GTM**
   - https://tagmanager.google.com/
   - Выберите контейнер `GTM-T3S2P2LK`

2. **Запустите Preview**
   - Нажмите кнопку "Preview" в правом верхнем углу
   - Введите URL: `http://localhost:3000` (или ваш production URL)
   - Нажмите "Connect"

3. **Откроется новая вкладка** с вашим сайтом
   - В нижней части экрана появится GTM debugger
   - Слева будет Timeline с событиями

4. **Выполните действия на сайте**
   - Начните квиз
   - Отвечайте на вопросы
   - Отправьте email
   - Дойдите до конца

5. **Проверьте события**
   - В Timeline должны появиться все события
   - Кликните на событие чтобы увидеть детали
   - Проверьте Variables (переменные)
   - Убедитесь что триггеры срабатывают
   - Проверьте какие теги отправились

### Проверка в GA4 Real-time

1. **Откройте GA4**
   - https://analytics.google.com/
   - Выберите ваш property

2. **Перейдите в Realtime**
   - Reports → Realtime
   - Или прямая ссылка в левом меню

3. **Выполните действия на сайте**
   - В течение 1-2 секунд события появятся в отчете

4. **Проверьте Events**
   - Должны появиться:
     - `quiz_start`
     - `quiz_progress`
     - `quiz_result_view`
     - `lead_submit`
     - `button_click`
     - etc.

5. **Проверьте параметры**
   - Кликните на событие
   - Посмотрите параметры события
   - Убедитесь что `quiz_id`, `progress_percent` и т.д. передаются

---

## Полный сценарий тестирования

### Сценарий 1: Новый пользователь (полный квиз)

```
✅ Шаг 1: Открыть главную страницу
   → Событие: page_view (автоматически GTM)

✅ Шаг 2: Кликнуть "Take Quiz" в Hero
   → Событие: button_click
   → Событие: quiz_start (первый раз)

✅ Шаг 3: Выбрать пол и начать квиз
   → URL: /quiz/questions?pageId=1
   → Событие: quiz_start (дублируется, но защищено sessionStorage)

✅ Шаг 4: Пройти 2-3 страницы
   → pageId=2: quiz_progress (10%)
   → pageId=3: quiz_progress (20%)
   → pageId=4: quiz_progress (30%)

✅ Шаг 5: Увидеть мотивационный экран (pageId=12)
   → Событие НЕ отправляется (title пустой)

✅ Шаг 6: Продолжить до Email (pageId=55)
   → quiz_progress событияна каждом шаге

✅ Шаг 7: Ввести email
   → Событие: lead_submit (один раз)
   → Событие: form_submit

✅ Шаг 8: Дойти до финала (pageId=57)
   → Событие: quiz_progress (100%)
   → Событие: quiz_result_view

✅ Шаг 9: Перейти на selling page
   → URL: /selling-page
   → Событие: plan_view
```

**Итого событий:** 15-20 событий в зависимости от пути

### Сценарий 2: Возврат пользователя (повторное прохождение)

```
✅ Шаг 1: Открыть /quiz (уже был quiz_start)
   → sessionStorage содержит "quiz_start_ai_quiz_v1"
   → Событие НЕ отправляется (защита от дублирования)

✅ Шаг 2: Начать с другой страницы (например pageId=10)
   → Событие: quiz_progress (70%)
   → События продолжают отправляться

✅ Шаг 3: Попытка повторно отправить email (pageId=55)
   → sessionStorage содержит "lead_submit_quiz_email"
   → Событие НЕ отправляется
   → В консоли: "lead_submit already fired for quiz_email, skipping"
```

### Сценарий 3: Тестирование дедупликации

```
Очистить sessionStorage:
sessionStorage.clear();

Повторить шаги 1-3 из Сценария 1:
✅ quiz_start должен отправиться снова
✅ lead_submit должен отправиться снова
```

---

## Troubleshooting

### События не появляются в консоли

**Проблема:** В консоли нет логов `[GTM DataLayer]`

**Решение:**
```bash
# Убедитесь что запущен development режим
yarn dev

# Проверьте что NODE_ENV = development
console.log(process.env.NODE_ENV)

# Проверьте dataLayer вручную
console.log(window.dataLayer)
```

### События не появляются в GTM Preview

**Проблема:** GTM Preview не показывает события

**Решение:**
1. Проверьте что GTM скрипт загружен:
   ```javascript
   console.log(typeof window.dataLayer)
   // Должно быть "object"
   ```

2. Проверьте Network tab в DevTools:
   - Должен быть запрос к `googletagmanager.com/gtm.js?id=GTM-T3S2P2LK`

3. Убедитесь что GTM ID правильный:
   - Откройте `src/shared/config/analytics-config.ts`
   - Проверьте `gtm.id: "GTM-T3S2P2LK"`

4. Проверьте что GTM включен:
   ```typescript
   gtm: {
     id: "GTM-T3S2P2LK",
     enabled: true, // Должно быть true
   }
   ```

### События дублируются

**Проблема:** Событие `quiz_start` отправляется несколько раз

**Решение:**
1. Это может быть React StrictMode в development
2. Проверьте что используется защита:
   ```typescript
   // В useAnalytics hook
   quizStartFiredRef.current.has(quizId) // должно быть true при повторе
   sessionStorage.getItem(`quiz_start_${quizId}`) // должно быть "true"
   ```

3. Очистите sessionStorage и проверьте снова:
   ```javascript
   sessionStorage.clear();
   ```

### События не появляются в GA4

**Проблема:** События есть в GTM Preview, но не в GA4

**Решение:**
1. Убедитесь что GA4 Config tag настроен в GTM
2. Проверьте что GA4 Event tags имеют правильные триггеры
3. Проверьте Measurement ID в GTM
4. Подождите 24-48 часов (данные обрабатываются)
5. Проверьте Real-time отчет (данные появляются сразу)

---

## Checklist перед Production

- [ ] Все события логируются в development консоли
- [ ] GTM Preview Mode показывает все события
- [ ] GA4 Real-time показывает события
- [ ] Дедупликация работает (quiz_start, lead_submit)
- [ ] Мотивационные экраны НЕ отслеживаются
- [ ] Прогресс отслеживается корректно (0-100%)
- [ ] Email форма отслеживается
- [ ] Selling page отслеживается
- [ ] Button clicks работают
- [ ] sessionStorage очищается при необходимости

---

## Полезные команды

```bash
# Запуск с аналитикой в development
NEXT_PUBLIC_ANALYTICS_ENABLED=true yarn dev

# Очистить sessionStorage в консоли
sessionStorage.clear()

# Проверить отправленные события
window.dataLayer.filter(item => item.event)

# Проверить конкретное событие
window.dataLayer.filter(item => item.event === 'quiz_start')

# Вручную отправить тестовое событие
window.dataLayer.push({
  event: 'test_event',
  test_param: 'test_value'
})
```

---

**Документация:**
- [GTM Tracking Map](./GTM_TRACKING_MAP.md) - где установлены теги
- [GTM Usage Guide](./src/shared/lib/analytics/GTM_USAGE_GUIDE.md) - как использовать
- [Analytics Examples](./src/shared/lib/analytics/EXAMPLES.tsx) - примеры кода
- [Analytics Setup](./ANALYTICS_SETUP.md) - полная настройка

**Последнее обновление:** 18 января 2026
