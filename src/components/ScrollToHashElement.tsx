import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Fallback: wait a bit for component to render (e.g. after a lazy load or navigation)
        const timeoutId = setTimeout(() => {
          const delayedElement = document.getElementById(
            location.hash.substring(1)
          );
          if (delayedElement) {
            delayedElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 500);
        return () => clearTimeout(timeoutId);
      }
    } else {
      // Scroll to top on route change if no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}
