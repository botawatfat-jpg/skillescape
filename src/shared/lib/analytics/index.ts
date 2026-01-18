/**
 * Analytics library - централизованный экспорт
 */

export { useAnalytics } from "./use-analytics";
export {
  analyticsConfig,
  trackEvent,
  trackConversion,
  trackPurchase,
  isAnalyticsEnabled,
} from "@/shared/config/analytics-config";
