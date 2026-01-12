import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 72;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
      return;
    }

    window.scrollTo({ top: 0 });
  }, [location]);

  return null;
}
