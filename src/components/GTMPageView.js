"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GTMPageView = () => {
  const pathname = usePathname();

  useEffect(() => {
    const url = pathname;
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "page_view",
      page_path: url,
    });

    // console.log("pathname: ", pathname);
    if (pathname === "/thank-you") {
      const tracked = sessionStorage.getItem("thankYouConversionTracked");
      if (!tracked) {
        window.dataLayer.push({
          event: "generate_lead",
        });
        sessionStorage.setItem("thankYouConversionTracked", "true");
      }
    }
  }, [pathname]);

  return null;
};

export default GTMPageView;
