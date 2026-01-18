# GTM Analytics - Usage Guide

## Overview

Production-ready Google Tag Manager integration with proper event tracking, deduplication, and SSR safety.

## Architecture

```
┌─────────────────────────────────────┐
│   React Components                  │
│   ├─ useAnalytics() hook            │
│   └─ Direct pushDL() calls          │
└─────────────┬───────────────────────┘
              │
              ▼
┌─────────────────────────────────────┐
│   pushDL() helper                   │
│   ├─ SSR-safe guard                 │
│   ├─ DataLayer initialization       │
│   └─ Event formatting                │
└─────────────┬───────────────────────┘
              │
              ▼
┌─────────────────────────────────────┐
│   window.dataLayer                  │
│   (Google Tag Manager)              │
└─────────────────────────────────────┘
```

## Core GTM Events

These events are already configured in GTM with GA4 Event tags:

### 1. quiz_start

Fires when user starts a quiz. **Fires only once per session per quiz_id**.

```tsx
import { useAnalytics } from "@/shared/lib/analytics";

export function QuizPage() {
  const { trackQuizStart } = useAnalytics();
  
  useEffect(() => {
    trackQuizStart("ai_quiz_v1");
  }, []);
  
  return <div>Quiz content</div>;
}
```

**DataLayer push:**
```javascript
window.dataLayer.push({
  event: "quiz_start",
  quiz_id: "ai_quiz_v1"
});
```

### 2. quiz_progress

Fires when user progresses through the quiz.

```tsx
import { useAnalytics } from "@/shared/lib/analytics";

export function QuizPage() {
  const { trackQuizProgress } = useAnalytics();
  
  const handleNext = (currentQuestion: number, totalQuestions: number) => {
    const progress = (currentQuestion / totalQuestions) * 100;
    trackQuizProgress(progress, "ai_quiz_v1");
  };
  
  return <button onClick={() => handleNext(5, 10)}>Next</button>;
}
```

**DataLayer push:**
```javascript
window.dataLayer.push({
  event: "quiz_progress",
  quiz_id: "ai_quiz_v1",
  progress_percent: 50
});
```

### 3. quiz_result_view

Fires when user views their quiz result.

```tsx
import { useAnalytics } from "@/shared/lib/analytics";

export function QuizResults({ resultType }: { resultType: string }) {
  const { trackQuizResultView } = useAnalytics();
  
  useEffect(() => {
    trackQuizResultView(resultType, "ai_quiz_v1");
  }, [resultType]);
  
  return <div>Your result: {resultType}</div>;
}
```

**DataLayer push:**
```javascript
window.dataLayer.push({
  event: "quiz_result_view",
  quiz_id: "ai_quiz_v1",
  result_type: "ai_beginner"
});
```

### 4. lead_submit

Fires when user submits a lead form. **Fires only once per session per lead_type**.

```tsx
import { useAnalytics } from "@/shared/lib/analytics";

export function WaitlistForm() {
  const { trackLeadSubmit } = useAnalytics();
  
  const handleSubmit = async (email: string) => {
    // Submit to backend
    await submitToWaitlist(email);
    
    // Track in GTM
    trackLeadSubmit("waitlist");
  };
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(email);
    }}>
      <input type="email" />
      <button type="submit">Join Waitlist</button>
    </form>
  );
}
```

**DataLayer push:**
```javascript
window.dataLayer.push({
  event: "lead_submit",
  lead_type: "waitlist"
});
```

## Deduplication

### quiz_start Protection

Prevents duplicate `quiz_start` events using:
1. **useRef** - Protects against React StrictMode double renders
2. **sessionStorage** - Protects across page navigations

```tsx
// First call - fires
trackQuizStart("ai_quiz_v1");

// Second call - skipped
trackQuizStart("ai_quiz_v1");

// Different quiz - fires
trackQuizStart("sales_quiz_v2");
```

### lead_submit Protection

Same protection mechanism as `quiz_start`:

```tsx
// First call - fires
trackLeadSubmit("waitlist");

// Second call - skipped
trackLeadSubmit("waitlist");

// Different lead type - fires
trackLeadSubmit("consultation");
```

### Manual Reset (if needed)

```typescript
// Clear specific quiz
sessionStorage.removeItem("quiz_start_ai_quiz_v1");

// Clear specific lead
sessionStorage.removeItem("lead_submit_waitlist");

// Clear all
sessionStorage.clear();
```

## Other Supported Events

### E-commerce Events

```tsx
const {
  trackViewProduct,
  trackBeginCheckout,
  trackSubscriptionPurchase,
} = useAnalytics();

// Product view
trackViewProduct("AI Freelancing Course", "course-001");

// Begin checkout
trackBeginCheckout("Premium Plan", 49.99);

// Purchase complete
trackSubscriptionPurchase(
  "txn-12345",      // transaction_id
  "Premium Plan",   // plan_name
  49.99            // value
);
```

### User Events

```tsx
const { trackSignUp, trackLogin } = useAnalytics();

// Sign up
trackSignUp("email"); // method: email, google, facebook

// Login
trackLogin("email");
```

### Engagement Events

```tsx
const {
  trackButtonClick,
  trackVideoView,
  trackDownload,
  trackSearch,
  trackFormSubmit,
} = useAnalytics();

// Button click
trackButtonClick("Get Started", "/homepage");

// Video view
trackVideoView("Intro Tutorial", 120); // 120 seconds

// Download
trackDownload("course_syllabus.pdf");

// Search
trackSearch("AI tools");

// Form submit
trackFormSubmit("contact_form");
```

## Direct pushDL Usage

For custom events not covered by `useAnalytics()`:

```tsx
import { pushDL } from "@/shared/lib/analytics";

// Custom event
pushDL("custom_event", {
  custom_param1: "value1",
  custom_param2: 123,
  user_segment: "enterprise",
});

// Custom conversion
pushDL("custom_conversion", {
  conversion_type: "demo_requested",
  value: 0,
});
```

## SSR Safety

All functions are SSR-safe:

```tsx
// ✅ Safe on server - won't crash
const { trackQuizStart } = useAnalytics();
trackQuizStart("ai_quiz_v1");

// ✅ Safe on server
pushDL("custom_event", { param: "value" });
```

Server-side calls are no-ops and log in development mode.

## TypeScript Support

Full type safety:

```typescript
import { useAnalytics } from "@/shared/lib/analytics";
import { pushDL } from "@/shared/lib/analytics";

const analytics = useAnalytics();

// All methods are typed
analytics.trackQuizProgress(50, "ai_quiz_v1"); // ✅
analytics.trackQuizProgress("50", "ai_quiz_v1"); // ❌ Type error

// pushDL is typed
pushDL("event_name", { param: "value" }); // ✅
pushDL(123); // ❌ Type error
```

## Testing & Debugging

### Development Mode Logging

All events are logged in development:

```javascript
// Console output
[GTM DataLayer] {
  event: "quiz_start",
  quiz_id: "ai_quiz_v1"
}
```

### Manual DataLayer Inspection

```javascript
// Browser console
console.log(window.dataLayer);

// Check if dataLayer exists
if (window.dataLayer) {
  console.log("GTM is loaded");
}

// Manual event push
window.dataLayer.push({
  event: "test_event",
  test_param: "test_value"
});
```

### GTM Preview Mode

1. Open [Google Tag Manager](https://tagmanager.google.com/)
2. Select container `GTM-T3S2P2LK`
3. Click "Preview"
4. Enter your site URL
5. Interact with your site
6. See events in real-time in GTM debug panel

### GA4 Real-time Reports

1. Open GA4 → Reports → Realtime
2. Perform action on site
3. Event appears within 1-2 seconds
4. Check event parameters

## Common Patterns

### Quiz Flow

Complete quiz tracking:

```tsx
import { useAnalytics } from "@/shared/lib/analytics";

export function QuizFlow() {
  const {
    trackQuizStart,
    trackQuizProgress,
    trackQuizResultView,
  } = useAnalytics();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const totalQuestions = 10;
  const quizId = "ai_quiz_v1";
  
  // Start
  useEffect(() => {
    trackQuizStart(quizId);
  }, []);
  
  // Progress
  const handleNext = () => {
    const newQuestion = currentQuestion + 1;
    setCurrentQuestion(newQuestion);
    
    const progress = (newQuestion / totalQuestions) * 100;
    trackQuizProgress(progress, quizId);
  };
  
  // Result
  const handleComplete = (result: string) => {
    trackQuizResultView(result, quizId);
  };
  
  return <div>Quiz UI</div>;
}
```

### Lead Capture Flow

Complete lead submission:

```tsx
import { useAnalytics } from "@/shared/lib/analytics";

export function LeadForm() {
  const { trackLeadSubmit, trackFormSubmit } = useAnalytics();
  
  const handleSubmit = async (formData: FormData) => {
    // Track form submission attempt
    trackFormSubmit("lead_capture_form");
    
    try {
      // Submit to backend
      await submitLead(formData);
      
      // Track successful lead submission
      trackLeadSubmit("lead_form");
      
      // Show success message
      setSuccess(true);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}
```

### Purchase Flow

Complete purchase tracking:

```tsx
import { useAnalytics } from "@/shared/lib/analytics";

export function CheckoutFlow() {
  const {
    trackViewProduct,
    trackBeginCheckout,
    trackSubscriptionPurchase,
  } = useAnalytics();
  
  // Step 1: View product
  useEffect(() => {
    trackViewProduct("Premium Plan", "plan-premium");
  }, []);
  
  // Step 2: Begin checkout
  const handleCheckout = () => {
    trackBeginCheckout("Premium Plan", 49.99);
    router.push("/checkout");
  };
  
  // Step 3: Purchase complete
  const handlePurchaseComplete = (transactionId: string) => {
    trackSubscriptionPurchase(transactionId, "Premium Plan", 49.99);
    router.push("/success");
  };
  
  return <div>Checkout UI</div>;
}
```

## Best Practices

### ✅ DO

- Use `useAnalytics()` hook in React components
- Use `pushDL()` for custom events outside hooks
- Include meaningful event parameters
- Test events in GTM Preview Mode before production
- Use TypeScript types for safety
- Log events in development for debugging

### ❌ DON'T

- Don't send PII (emails, names, phone numbers)
- Don't track sensitive data (passwords, credit cards)
- Don't create duplicate event names
- Don't skip deduplication for critical events
- Don't use `gtag()` directly (use dataLayer)
- Don't hardcode event parameters

## Migration from Old Code

If you have old tracking code:

```tsx
// ❌ Old way (deprecated)
import { trackEvent } from "@/shared/config/analytics-config";
trackEvent("quiz_start", { page: "/quiz" });

// ✅ New way
import { useAnalytics } from "@/shared/lib/analytics";
const { trackQuizStart } = useAnalytics();
trackQuizStart("ai_quiz_v1");
```

```tsx
// ❌ Old way
window.dataLayer.push({ event: "quiz_start" });

// ✅ New way
import { pushDL } from "@/shared/lib/analytics";
pushDL("quiz_start", { quiz_id: "ai_quiz_v1" });
```

## Troubleshooting

### Events not appearing in GA4

1. Check GTM Preview Mode - are events firing?
2. Check GA4 Config tag is set up
3. Check GA4 Event tags have correct triggers
4. Verify Measurement ID in GTM
5. Wait 24-48 hours for data processing

### Duplicate events

1. Check if using deduplication (quiz_start, lead_submit)
2. Check React StrictMode isn't causing double renders
3. Check sessionStorage keys
4. Clear sessionStorage and test again

### TypeScript errors

1. Ensure proper imports
2. Check parameter types
3. Update to latest hook version
4. Check tsconfig.json includes analytics files

## Support

- [Full Analytics Setup Guide](../../../ANALYTICS_SETUP.md)
- [GTM Dashboard](https://tagmanager.google.com/)
- [GA4 Dashboard](https://analytics.google.com/)

---

**Last Updated:** January 18, 2026
**GTM Container:** GTM-T3S2P2LK
**Status:** ✅ Production Ready
