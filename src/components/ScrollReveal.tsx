import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Optional delay in ms for staggered effects */
  delay?: number;
  /** Direction the content animates in from */
  from?: "bottom" | "left" | "right" | "scale";
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  from = "bottom",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              window.setTimeout(() => setIsVisible(true), delay);
            } else {
              setIsVisible(true);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  const hiddenTransform =
    from === "left"
      ? "-translate-x-8 scale-[0.98]"
      : from === "right"
      ? "translate-x-8 scale-[0.98]"
      : from === "scale"
      ? "scale-[0.96]"
      : "translate-y-8 scale-[0.98]"; // bottom (default)

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform will-change-opacity",
        !isVisible && cn("opacity-0", hiddenTransform),
        isVisible && "opacity-100 translate-x-0 translate-y-0 scale-100",
        className
      )}
    >
      {children}
    </div>
  );
}
