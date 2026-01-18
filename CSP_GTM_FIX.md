# CSP Fix for GTM - Исправление Content Security Policy 🔒

## 🚨 Проблема

**Ошибка в консоли:**
```
Loading the script 'https://www.googletagmanager.com/gtm.js?id=GTM-T3S2P2LK' 
violates the following Content Security Policy directive: 
"script-src 'self' 'unsafe-eval' 'unsafe-inline'". 
The action has been blocked.
```

**Причина:** CSP блокирует загрузку GTM скриптов с внешних доменов Google.

---

## ✅ Решение (уже применено!)

В файле `next.config.ts` добавлен CSP заголовок с поддержкой всех необходимых Google доменов.

### Что было добавлено:

```typescript
{
  key: "Content-Security-Policy",
  value: [
    "default-src 'self'",
    
    // 🔥 GTM и GA скрипты (с wildcard для всех поддоменов)
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' " +
      "https://www.googletagmanager.com " +
      "https://*.googletagmanager.com " +
      "https://tagmanager.google.com " +
      "https://www.google-analytics.com " +
      "https://*.google-analytics.com",
    
    // 🔥 Отдельно для <script> тегов (для лучшей совместимости)
    "script-src-elem 'self' 'unsafe-inline' " +
      "https://www.googletagmanager.com " +
      "https://*.googletagmanager.com " +
      "https://tagmanager.google.com " +
      "https://www.google-analytics.com " +
      "https://*.google-analytics.com",
    
    // 🔥 API запросы (события GTM/GA) - с wildcard для всех поддоменов
    "connect-src 'self' " +
      "https://www.google-analytics.com " +
      "https://*.google-analytics.com " +
      "https://analytics.google.com " +
      "https://region1.google-analytics.com " +
      "https://www.googletagmanager.com " +
      "https://*.googletagmanager.com",
    
    // 🔥 GA пиксели и изображения
    "img-src 'self' data: https: " +
      "https://www.google-analytics.com " +
      "https://www.googletagmanager.com",
    
    // 🔥 GTM noscript iframe
    "frame-src https://www.googletagmanager.com",
    
    // Остальные стандартные директивы
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self' data:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join("; "),
}
```

---

## 🔧 Как применить изменения

### 1. Остановить dev сервер
```bash
# В терминале нажать Ctrl+C
# Или найти процесс и убить его
```

### 2. Перезапустить dev сервер
```bash
yarn dev
# или
npm run dev
```

### 3. Очистить кеш браузера (важно!)
```
Chrome/Edge:
- Открыть DevTools (F12)
- Правый клик на кнопку обновления
- Выбрать "Очистить кеш и обновить страницу"

Firefox:
- Ctrl+Shift+R (hard refresh)

Safari:
- Cmd+Option+R
```

---

## ✅ Проверка (что должно работать)

### 1. Проверить в консоли (F12)
**Не должно быть ошибок CSP!**

```
✅ Раньше: CSP violation error (КРАСНЫЙ)
✅ Теперь: Никаких ошибок CSP
```

### 2. Проверить загрузку GTM скрипта
```
DevTools → Network → JS
Искать: gtm.js
Статус: 200 OK ✅
```

### 3. Проверить dataLayer
```javascript
// В консоли браузера
window.dataLayer

// Должен вернуть массив:
// [{ gtm.start: ..., event: "gtm.js" }, ...]
```

### 4. Проверить отправку событий
```bash
# Пройти квиз
# В консоли увидеть:
[GTM DataLayer] { event: "quiz_cta_click", ... }
[GTM DataLayer] { event: "quiz_start", ... }
# и т.д.
```

---

## 📋 Что разрешает наш CSP

### `script-src` - Загрузка JavaScript
- ✅ `'self'` - скрипты с нашего домена
- ✅ `'unsafe-inline'` - инлайн скрипты (нужно для GTM кода в `<head>`)
- ✅ `'unsafe-eval'` - eval() (нужно для некоторых GTM тегов)
- ✅ `https://www.googletagmanager.com` - GTM скрипты
- ✅ `https://*.googletagmanager.com` - **все поддомены GTM** (важно!)
- ✅ `https://tagmanager.google.com` - GTM Preview Mode
- ✅ `https://www.google-analytics.com` - GA скрипты
- ✅ `https://*.google-analytics.com` - **все поддомены GA** (важно!)

### `script-src-elem` - Загрузка `<script>` тегов (отдельная директива)
- ✅ `'self'` - скрипты с нашего домена
- ✅ `'unsafe-inline'` - инлайн скрипты
- ✅ `https://www.googletagmanager.com` - GTM скрипты
- ✅ `https://*.googletagmanager.com` - **все поддомены GTM**
- ✅ `https://tagmanager.google.com` - GTM Preview Mode
- ✅ `https://www.google-analytics.com` - GA скрипты
- ✅ `https://*.google-analytics.com` - **все поддомены GA**

**Зачем отдельная директива?** Некоторые браузеры проверяют `script-src-elem` для `<script>` тегов отдельно от `script-src`.

### `connect-src` - API запросы (fetch, XHR)
- ✅ `'self'` - запросы к нашему API
- ✅ `https://www.google-analytics.com` - отправка событий в GA4
- ✅ `https://*.google-analytics.com` - **все поддомены GA** (важно!)
- ✅ `https://analytics.google.com` - GA API
- ✅ `https://region1.google-analytics.com` - региональные серверы GA4
- ✅ `https://www.googletagmanager.com` - GTM API
- ✅ `https://*.googletagmanager.com` - **все поддомены GTM** (важно!)

### `img-src` - Загрузка изображений
- ✅ `'self'` - наши изображения
- ✅ `data:` - base64 изображения
- ✅ `https:` - любые HTTPS изображения (для CloudFront и т.д.)
- ✅ `https://www.google-analytics.com` - GA tracking pixels
- ✅ `https://www.googletagmanager.com` - GTM images

### `frame-src` - Загрузка iframe
- ✅ `https://www.googletagmanager.com` - GTM noscript fallback iframe

### `style-src` - Загрузка CSS
- ✅ `'self'` - наши стили
- ✅ `'unsafe-inline'` - инлайн стили (для динамических компонентов)

### `font-src` - Загрузка шрифтов
- ✅ `'self'` - наши шрифты
- ✅ `data:` - base64 шрифты

---

## 🔒 Безопасность

### Что мы разрешили (и почему это нормально)

**`'unsafe-inline'` и `'unsafe-eval'`:**
- Нужны для GTM и его тегов
- GTM - trusted source от Google
- Альтернатива: использовать nonce, но это сложнее в Next.js

**`https:` в `img-src`:**
- Разрешает любые HTTPS изображения
- Нужно для CloudFront и других CDN
- Безопасно, т.к. только HTTPS

### Что мы заблокировали

**`object-src 'none'`:**
- Блокирует `<object>`, `<embed>`, `<applet>`
- Защита от Flash и других уязвимых плагинов

**`base-uri 'self'`:**
- Блокирует изменение базового URL
- Защита от атак через `<base>`

**`form-action 'self'`:**
- Блокирует отправку форм на внешние домены
- Защита от phishing

---

## 🚨 Возможные проблемы и решения

### Проблема 1: CSP ошибки все еще есть
**Решение:**
1. Убедитесь что перезапустили dev сервер
2. Очистите кеш браузера (Hard Reload)
3. Проверьте что изменения в `next.config.ts` применились

### Проблема 2: GTM Preview Mode не работает
**Решение:**
- Добавлен домен `https://tagmanager.google.com` в `script-src`
- Перезапустите сервер

### Проблема 3: События не отправляются в GA4
**Решение:**
- Проверьте `connect-src` - там должны быть все GA домены
- Проверьте в Network tab что запросы идут (не блокируются)

### Проблема 4: В production CSP не работает
**Решение:**
- Next.js применяет заголовки только после билда
- Запустите `yarn build && yarn start`
- Проверьте заголовки в DevTools → Network → Headers

---

## 📝 Дополнительные домены (если нужно)

### Если используете другие сервисы:

**Facebook Pixel:**
```typescript
"connect-src ... https://www.facebook.com https://connect.facebook.net"
```

**Hotjar:**
```typescript
"script-src ... https://static.hotjar.com https://script.hotjar.com",
"connect-src ... https://*.hotjar.com https://*.hotjar.io"
```

**Intercom:**
```typescript
"script-src ... https://widget.intercom.io https://js.intercomcdn.com",
"connect-src ... https://*.intercom.io https://*.intercom.com"
```

---

## ✅ Чеклист проверки

После перезапуска сервера:

- [ ] Dev сервер перезапущен (`yarn dev`)
- [ ] Кеш браузера очищен (Hard Reload)
- [ ] Консоль открыта (F12)
- [ ] **НЕТ** ошибок CSP в консоли
- [ ] `window.dataLayer` возвращает массив
- [ ] GTM скрипт загружается (Network → gtm.js → 200 OK)
- [ ] События отправляются (`[GTM DataLayer]` логи в консоли)

---

## 🎯 Следующие шаги

1. ✅ **Перезапустить dev сервер** (прямо сейчас!)
2. ✅ **Очистить кеш браузера** (Hard Reload)
3. ✅ **Проверить** что ошибки CSP исчезли
4. ✅ **Протестировать** квиз и события
5. ✅ **Проверить** в GTM Preview Mode

---

## 📚 Полезные ссылки

- [MDN: Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Google Tag Manager: CSP](https://developers.google.com/tag-platform/tag-manager/web/csp)
- [Next.js: Headers](https://nextjs.org/docs/app/api-reference/next-config-js/headers)

---

**Статус:** ✅ CSP настроен, перезапустите сервер!  
**Дата:** 18 января 2026
