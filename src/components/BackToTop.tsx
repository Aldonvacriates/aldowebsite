import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const isVisible =
        document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
      setVisible(isVisible);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`hover:shadow-signUp back-to-top fixed bottom-8 right-8 left-auto z-[999] h-10 w-10 items-center justify-center rounded-sm bg-primary text-white shadow-md transition${
        visible ? " flex" : " hidden"
      }`}
      aria-label="Back to top"
    >
      <span className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"></span>
    </button>
  );
}
