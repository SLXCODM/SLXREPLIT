import { useEffect } from "react";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * AnalyticsTracker
 * Invisible component that monitors route changes and reports to the backend.
 */
export default function AnalyticsTracker() {
    const [location] = useLocation();
    const { language } = useLanguage();

    useEffect(() => {
        const trackVisit = async () => {
            try {
                await fetch("/api/analytics/track", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        path: location + window.location.search,
                        language: language,
                    }),
                });
            } catch (error) {
                // Silent fail for analytics
                console.error("Tracking error:", error);
            }
        };

        trackVisit();
    }, [location, language]);

    return null; // Invisible component
}
