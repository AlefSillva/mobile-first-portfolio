import { useState, useEffect } from "react";

export default function Typewriter({ text, speed = 120, errorChance = 0.1 }) {
  const [displayText, setDisplayText] = useState("");
  const [i, setI] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (i >= text.length && !isDeleting) return;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
        setIsDeleting(false);
      } else {
        if (Math.random() < errorChance && i < text.length) {
          const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26));
          setDisplayText((prev) => prev + randomChar);
          setIsDeleting(true);
        } else {
          setDisplayText((prev) => prev + text[i]);
          setI((prev) => prev + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, i, isDeleting, text, speed, errorChance]);

  return <h1>{displayText}|</h1>;
}
