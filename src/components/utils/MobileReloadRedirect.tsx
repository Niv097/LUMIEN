"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export function MobileReloadRedirect() {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Only run once on mount
        const checkAndRedirect = () => {
            if (typeof window === "undefined") return;

            const isNotHome = window.location.pathname !== "/";

            // Comprehensive reload check
            const navigationEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
            const isReload =
                (navigationEntries.length > 0 && navigationEntries[0].type === "reload") ||
                (window.performance && window.performance.navigation && window.performance.navigation.type === 1);

            if (isNotHome && isReload) {
                // Hard redirect to home only on a real page refresh
                window.location.replace("/");
            }
        };

        checkAndRedirect();
    }, []); // Empty dependency array is critical: only runs on initial page mount

    return null;
}
