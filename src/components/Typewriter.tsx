import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  className?: string;
  delay?: number;
}

export default function Typewriter({
  words,
  className,
  delay = 2500,
}: TypewriterProps) {
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const current = words[wordIndex % words.length] || "";

    if (!isDeleting && display.length < current.length) {
      const timeout = setTimeout(() => {
        setDisplay(current.slice(0, display.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && display.length === current.length) {
      const timeout = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && display.length > 0) {
      const timeout = setTimeout(() => {
        setDisplay(current.slice(0, display.length - 1));
      }, 40);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && display.length === 0) {
      setIsDeleting(false);
      setWordIndex((idx) => (idx + 1) % words.length);
    }

    return undefined;
  }, [display, isDeleting, wordIndex, words, delay]);

  return <span className={className}>{display}</span>;
}
