import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * AnalyticsTracker
 * Invisible component that monitors route changes and reports to the backend.
 */
export default function AnalyticsTracker() {
    const [location] = useLocation();
    const { language } = useLanguage();
    const lastTrackedPath = useRef<string | null>(null);

    useEffect(() => {
        const trackVisit = async () => {
            const currentPath = location + window.location.search;

            // Prevent duplicate tracking if the path hasn't changed
            if (lastTrackedPath.current === currentPath) {
                return;
            }

            lastTrackedPath.current = currentPath;

            try {
                await fetch("/api/analytics/track", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        path: currentPath,
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
