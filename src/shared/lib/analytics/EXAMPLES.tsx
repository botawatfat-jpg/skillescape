/**
 * Analytics Usage Examples
 * Copy-paste ready code snippets for common scenarios
 */

// ============================================================================
// Example 1: Complete Quiz Flow
// ============================================================================

import { useAnalytics } from "@/shared/lib/analytics";
import { useState, useEffect } from "react";

export function QuizExample() {
  const {
    trackQuizStart,
    trackQuizProgress,
    trackQuizResultView,
  } = useAnalytics();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  
  const quizId = "ai_quiz_v1";
  const totalQuestions = 10;
  
  // Track quiz start on mount
  useEffect(() => {
    trackQuizStart(quizId);
  }, [trackQuizStart]);
  
  // Handle answer and progress
  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    
    const newQuestion = currentQuestion + 1;
    setCurrentQuestion(newQuestion);
    
    // Calculate and track progress
    const progressPercent = (newQuestion / totalQuestions) * 100;
    trackQuizProgress(progressPercent, quizId);
    
    // Check if quiz is complete
    if (newQuestion === totalQuestions) {
      const result = calculateResult(answers);
      trackQuizResultView(result, quizId);
    }
  };
  
  const calculateResult = (answers: string[]): string => {
    // Your logic here
    return "ai_beginner"; // or "ai_expert", "ai_intermediate"
  };
  
  return (
    <div>
      <h2>Question {currentQuestion + 1} of {totalQuestions}</h2>
      <button onClick={() => handleAnswer("option1")}>Answer A</button>
      <button onClick={() => handleAnswer("option2")}>Answer B</button>
    </div>
  );
}

// ============================================================================
// Example 2: Lead Form with Deduplication
// ============================================================================

export function LeadFormExample() {
  const { trackLeadSubmit, trackFormSubmit } = useAnalytics();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission attempt
    trackFormSubmit("waitlist_form");
    
    try {
      // Submit to backend
      const response = await fetch("/api/waitlist", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        // Track successful lead submission
        // This will only fire once per session
        trackLeadSubmit("waitlist");
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Failed to submit", error);
    }
  };
  
  if (submitted) {
    return <div>Thank you! You're on the waitlist.</div>;
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Join Waitlist</button>
    </form>
  );
}

// ============================================================================
// Example 3: Purchase Flow
// ============================================================================

export function PurchaseFlowExample() {
  const {
    trackViewProduct,
    trackBeginCheckout,
    trackSubscriptionPurchase,
  } = useAnalytics();
  
  const [step, setStep] = useState<"view" | "checkout" | "success">("view");
  
  const planName = "Premium Plan";
  const planValue = 49.99;
  const productId = "plan-premium";
  
  // Step 1: Track product view
  useEffect(() => {
    if (step === "view") {
      trackViewProduct(planName, productId);
    }
  }, [step, trackViewProduct]);
  
  // Step 2: Begin checkout
  const handleStartCheckout = () => {
    trackBeginCheckout(planName, planValue);
    setStep("checkout");
  };
  
  // Step 3: Complete purchase
  const handleCompletePurchase = async () => {
    try {
      // Process payment with your payment provider
      const { transactionId } = await processPayment();
      
      // Track purchase
      trackSubscriptionPurchase(transactionId, planName, planValue);
      
      setStep("success");
    } catch (error) {
      console.error("Payment failed", error);
    }
  };
  
  const processPayment = async () => {
    // Your payment logic
    return { transactionId: "txn-" + Date.now() };
  };
  
  if (step === "view") {
    return (
      <div>
        <h2>{planName}</h2>
        <p>${planValue}/month</p>
        <button onClick={handleStartCheckout}>Buy Now</button>
      </div>
    );
  }
  
  if (step === "checkout") {
    return (
      <div>
        <h2>Checkout</h2>
        <button onClick={handleCompletePurchase}>Complete Purchase</button>
      </div>
    );
  }
  
  return <div>Thank you for your purchase!</div>;
}

// ============================================================================
// Example 4: Sign Up / Login
// ============================================================================

export function AuthExample() {
  const { trackSignUp, trackLogin } = useAnalytics();
  const [mode, setMode] = useState<"login" | "signup">("login");
  
  const handleEmailAuth = async (email: string, password: string) => {
    try {
      if (mode === "signup") {
        await signUp(email, password);
        trackSignUp("email");
      } else {
        await login(email, password);
        trackLogin("email");
      }
    } catch (error) {
      console.error("Auth failed", error);
    }
  };
  
  const handleGoogleAuth = async () => {
    try {
      await signInWithGoogle();
      
      if (mode === "signup") {
        trackSignUp("google");
      } else {
        trackLogin("google");
      }
    } catch (error) {
      console.error("Google auth failed", error);
    }
  };
  
  const signUp = async (email: string, password: string) => {
    // Your sign up logic
  };
  
  const login = async (email: string, password: string) => {
    // Your login logic
  };
  
  const signInWithGoogle = async () => {
    // Your Google OAuth logic
  };
  
  return (
    <div>
      <button onClick={() => setMode("login")}>Login</button>
      <button onClick={() => setMode("signup")}>Sign Up</button>
      
      <button onClick={handleGoogleAuth}>
        Continue with Google
      </button>
      
      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        handleEmailAuth(
          formData.get("email") as string,
          formData.get("password") as string
        );
      }}>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit">
          {mode === "login" ? "Login" : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

// ============================================================================
// Example 5: Custom Events with pushDL
// ============================================================================

import { pushDL } from "@/shared/lib/analytics";

export function CustomEventsExample() {
  const handleCustomAction = () => {
    // Custom event not covered by useAnalytics
    pushDL("feature_used", {
      feature_name: "ai_assistant",
      feature_category: "tools",
      user_tier: "premium",
      usage_count: 5,
    });
  };
  
  const handleABTestVariant = (variant: string) => {
    // Track A/B test variant exposure
    pushDL("ab_test_exposure", {
      experiment_id: "homepage_v2",
      variant: variant, // "control" or "treatment"
      timestamp: new Date().toISOString(),
    });
  };
  
  const handleVideoEngagement = (videoId: string, progress: number) => {
    // Track video milestones
    if (progress === 25 || progress === 50 || progress === 75 || progress === 100) {
      pushDL("video_milestone", {
        video_id: videoId,
        milestone_percent: progress,
        video_duration: 300, // seconds
      });
    }
  };
  
  return (
    <div>
      <button onClick={handleCustomAction}>Use AI Assistant</button>
      <button onClick={() => handleABTestVariant("treatment")}>
        View Test Variant
      </button>
      <video onTimeUpdate={(e) => {
        const progress = (e.currentTarget.currentTime / e.currentTarget.duration) * 100;
        handleVideoEngagement("intro-video", Math.round(progress));
      }} />
    </div>
  );
}

// ============================================================================
// Example 6: Button Click Tracking
// ============================================================================

export function ButtonTrackingExample() {
  const { trackButtonClick } = useAnalytics();
  
  return (
    <div>
      <button onClick={() => trackButtonClick("Hero CTA", "/")}>
        Get Started
      </button>
      
      <button onClick={() => trackButtonClick("Pricing View", "/")}>
        View Pricing
      </button>
      
      <button onClick={() => trackButtonClick("Download PDF", "/resources")}>
        Download Guide
      </button>
    </div>
  );
}

// ============================================================================
// Example 7: Search Tracking
// ============================================================================

export function SearchExample() {
  const { trackSearch } = useAnalytics();
  const [query, setQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (query.trim()) {
      trackSearch(query);
      // Perform search
      performSearch(query);
    }
  };
  
  const performSearch = (query: string) => {
    // Your search logic
  };
  
  return (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

// ============================================================================
// Example 8: Testing / Debugging Helper
// ============================================================================

export function AnalyticsDebugger() {
  const analytics = useAnalytics();
  
  const testAllEvents = () => {
    console.log("Testing all analytics events...");
    
    // Test quiz events
    analytics.trackQuizStart("test_quiz");
    analytics.trackQuizProgress(50, "test_quiz");
    analytics.trackQuizResultView("test_result", "test_quiz");
    
    // Test lead event
    analytics.trackLeadSubmit("test_lead");
    
    // Test other events
    analytics.trackButtonClick("test_button");
    analytics.trackSignUp("email");
    analytics.trackViewProduct("Test Product", "prod-001");
    
    console.log("Check window.dataLayer:", window.dataLayer);
  };
  
  const clearSession = () => {
    sessionStorage.clear();
    console.log("Session storage cleared. Refresh to test again.");
  };
  
  return (
    <div style={{ padding: "20px", background: "#f0f0f0" }}>
      <h3>Analytics Debugger</h3>
      <button onClick={testAllEvents}>Test All Events</button>
      <button onClick={clearSession}>Clear Session</button>
      <button onClick={() => console.log(window.dataLayer)}>
        Log DataLayer
      </button>
    </div>
  );
}
