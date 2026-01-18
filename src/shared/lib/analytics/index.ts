/**
 * Analytics library - централизованный экспорт
 */

export { useAnalytics } from "./use-analytics";
export { pushDL, clearDataLayer, isDataLayerAvailable } from "./push-datalayer";
export {
  analyticsConfig,
  isAnalyticsEnabled,
  // Deprecated - используйте pushDL или useAnalytics()
  trackEvent,
  trackConversion,
  trackPurchase,
} from "@/shared/config/analytics-config";
