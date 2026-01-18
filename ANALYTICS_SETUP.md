# Google Tag Manager - Setup Complete ✅

## Статус интеграции

✅ Google Tag Manager успешно интегрирован в проект!

## Детали установки

### GTM Container ID
```
GTM-T3S2P2LK
```

### Файлы конфигурации

1. **`app/layout.tsx`**
   - GTM скрипт добавлен в `<head>`
   - Noscript fallback добавлен после `<body>`
   - Стратегия загрузки: `afterInteractive`

2. **`src/shared/config/analytics-config.ts`**
   - Централизованная конфигурация всех аналитических сервисов
   - GTM ID можно легко изменить в одном месте
   - Поддержка включения/выключения аналитики

3. **`src/shared/lib/analytics/use-analytics.tsx`**
   - React Hook для удобного отслеживания событий
   - Готовые функции для всех важных конверсий

4. **`src/shared/ui/quiz-button/quiz-button.tsx`**
   - Автоматическое отслеживание кликов на кнопки квиза
   - Пример интеграции аналитики в компоненты

## Отслеживаемые события

### Уже интегрированные

✅ **button_click** - клик на любую кнопку QuizButton
- Параметры: `button_name`, `location`

✅ **quiz_start** - начало прохождения квиза
- Параметры: `page`

### Готовые к использованию

Доступны через `useAnalytics()` хук:

- `quiz_complete` - завершение квиза
- `sign_up` - регистрация пользователя
- `login` - вход в систему
- `view_item` - просмотр курса/продукта
- `begin_checkout` - начало оформления подписки
- `purchase` - покупка подписки
- `subscription_purchase` - специфичное событие подписки
- `video_view` - просмотр видео
- `download` - скачивание файла
- `search` - поиск
- `form_submit` - отправка формы

## Быстрый старт

### Использование в компонентах

```tsx
"use client";

import { useAnalytics } from "@/shared/lib/analytics";

export function MyComponent() {
  const { trackButtonClick, trackQuizComplete } = useAnalytics();

  const handleClick = () => {
    trackButtonClick("My Button Name");
    // ваша логика
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

### Отслеживание конверсий

```tsx
import { useAnalytics } from "@/shared/lib/analytics";

export function SubscriptionPage() {
  const { trackSubscriptionPurchase } = useAnalytics();

  const handlePurchase = (transactionId: string) => {
    trackSubscriptionPurchase(transactionId, "Premium Plan", 49.99);
  };

  return <button onClick={() => handlePurchase("txn-123")}>Buy</button>;
}
```

### Кастомные события

```tsx
import { trackEvent } from "@/shared/config/analytics-config";

trackEvent("custom_event", {
  param1: "value1",
  param2: 123,
});
```

## Настройка в GTM Dashboard

### Шаг 1: Войдите в Google Tag Manager
1. Откройте https://tagmanager.google.com/
2. Выберите контейнер `GTM-T3S2P2LK`

### Шаг 2: Создайте триггеры для событий

Создайте Custom Event триггеры для:
- `button_click`
- `quiz_start`
- `quiz_complete`
- `sign_up`
- `subscription_purchase`
- `purchase`

**Пример триггера:**
```
Trigger Type: Custom Event
Event Name: quiz_start
```

### Шаг 3: Создайте теги

#### Google Analytics 4
1. Тег типа: Google Analytics: GA4 Event
2. Measurement ID: Ваш GA4 ID (например, G-XXXXXXXXXX)
3. Event Name: `{{Event}}` (используйте встроенную переменную)
4. Параметры события: настройте по необходимости

#### Facebook Pixel (опционально)
1. Тег типа: Facebook Pixel
2. Pixel ID: Ваш Facebook Pixel ID
3. Настройте стандартные события

#### TikTok Pixel (опционально)
1. Тег типа: TikTok Pixel
2. Pixel ID: Ваш TikTok Pixel ID

### Шаг 4: Настройте переменные

Создайте Data Layer Variables для параметров событий:
- `button_name`
- `plan_name`
- `transaction_id`
- `value`
- и т.д.

### Шаг 5: Используйте Preview Mode

1. В GTM нажмите "Preview"
2. Введите URL вашего сайта
3. Тестируйте события в реальном времени
4. Проверьте, что все триггеры срабатывают корректно

### Шаг 6: Опубликуйте изменения

1. Проверьте все изменения
2. Добавьте описание версии
3. Нажмите "Submit"

## Проверка работы

### В браузере (консоль разработчика)

```javascript
// Проверить dataLayer
console.log(window.dataLayer);

// Отправить тестовое событие
window.dataLayer.push({
  event: 'test_event',
  test_param: 'test_value'
});
```

### В GTM Preview Mode

1. Откройте GTM → Preview
2. Введите URL сайта
3. Выполняйте действия на сайте
4. Смотрите события в реальном времени
5. Проверяйте, какие теги срабатывают

### В Google Analytics 4 (реал-тайм)

1. Откройте GA4 → Reports → Realtime
2. Выполните действие на сайте
3. Событие должно появиться в течение 1-2 секунд

## Важные метрики для отслеживания

### E-commerce конверсии

1. **Quiz Completion Rate**
   - События: `quiz_start` → `quiz_complete`
   - Метрика: % завершения квиза

2. **Sign Up Rate**
   - События: просмотр страницы → `sign_up`
   - Метрика: % регистраций

3. **Subscription Purchase Rate**
   - События: `begin_checkout` → `subscription_purchase`
   - Метрика: % завершения покупки

4. **Revenue**
   - Событие: `purchase`
   - Параметр: `value`
   - Метрика: общая выручка

### Поведенческие метрики

1. **Button Clicks**
   - Событие: `button_click`
   - Параметры: `button_name`, `location`
   - Анализ: какие кнопки кликают чаще

2. **Video Views**
   - Событие: `video_view`
   - Параметры: `video_name`, `duration`
   - Анализ: какие видео смотрят

3. **Search Terms**
   - Событие: `search`
   - Параметр: `search_term`
   - Анализ: что ищут пользователи

## Рекомендуемые цели в GA4

Настройте следующие цели (Conversions):

1. `sign_up` - регистрация
2. `subscription_purchase` - покупка подписки
3. `quiz_complete` - завершение квиза
4. `begin_checkout` - начало оформления

**Как настроить:**
1. GA4 → Admin → Events
2. Найдите событие
3. Toggle "Mark as conversion"

## Troubleshooting

### GTM не загружается

**Проблема:** GTM скрипт не загружается на странице

**Решение:**
1. Проверьте GTM ID в `src/shared/config/analytics-config.ts`
2. Убедитесь, что `enabled: true`
3. Проверьте console на наличие ошибок
4. Проверьте Network tab - должен быть запрос к `googletagmanager.com`

### События не отправляются

**Проблема:** События не появляются в dataLayer

**Решение:**
1. Проверьте, что компонент клиентский (`"use client"`)
2. Убедитесь, что вызываете функции из `useAnalytics()`
3. Проверьте console: `console.log(window.dataLayer)`
4. Убедитесь, что GTM загружен перед отправкой событий

### События дублируются

**Проблема:** Одно и то же событие отправляется несколько раз

**Решение:**
1. Используйте `useCallback` для функций-обработчиков
2. Проверьте, что не вызываете событие в `useEffect` без зависимостей
3. Убедитесь, что компонент не ре-рендерится излишне

### GTM работает только в production

**Проблема:** GTM не работает в development режиме

**Решение:**
1. Добавьте переменную окружения:
   ```bash
   # .env.local
   NEXT_PUBLIC_ANALYTICS_ENABLED=true
   ```
2. Перезапустите dev server
3. Или измените `isAnalyticsEnabled()` в `analytics-config.ts`

## Дополнительная аналитика

### Добавление Facebook Pixel

1. Получите FB Pixel ID
2. Обновите `src/shared/config/analytics-config.ts`:
   ```typescript
   facebook: {
     pixelId: "YOUR_PIXEL_ID",
     enabled: true,
   }
   ```
3. Создайте тег в GTM для Facebook Pixel
4. Настройте события

### Добавление TikTok Pixel

1. Получите TikTok Pixel ID
2. Обновите конфиг аналогично Facebook
3. Создайте тег в GTM
4. Настройте события

### Добавление Yandex Metrika

1. Получите Yandex Counter ID
2. Обновите конфиг
3. Добавьте тег Yandex Metrika в GTM

## Полезные ссылки

- [Google Tag Manager](https://tagmanager.google.com/)
- [GTM Documentation](https://developers.google.com/tag-manager)
- [GA4 Events Reference](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)
- [Analytics README](./src/shared/lib/analytics/README.md)

## Контакты поддержки

При возникновении вопросов:
- Проверьте `src/shared/lib/analytics/README.md`
- Используйте GTM Preview Mode для отладки
- Проверяйте консоль браузера на ошибки

---

**Последнее обновление:** 18 января 2026
**Статус:** ✅ Готово к использованию
