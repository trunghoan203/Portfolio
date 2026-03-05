"use client";

import { useEffect } from "react";

export function AnalyticsTracker() {
  useEffect(() => {
    const trackView = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!apiUrl) return;

        await fetch(`${apiUrl}/analytics/view`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ path: "home" }),
        });
      } catch (error) {
        console.error("Analytics error:", error);
      }
    };

    trackView();
  }, []);

  return null;
}