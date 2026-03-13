import { useState, useEffect, useRef } from "react";

interface CounterProps {
  target: string;
  duration?: number;
  className?: string;
}

export const Counter = ({ target, duration = 2000, className = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Extract number and suffix (handling decimals if needed)
  const numericMatch = target.match(/(\d+\.?\d*)/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = target.replace(numericMatch ? numericMatch[0] : "", "");
  
  // Check for decimals to determine fixed point
  const hasDecimals = numericMatch ? numericMatch[0].includes(".") : false;
  const decimalPlaces = hasDecimals ? (numericMatch![0].split(".")[1] || "").length : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const currentCount = progress * numericValue;
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, numericValue, duration]);

  return (
    <div ref={countRef} className={className}>
      {count.toFixed(decimalPlaces)}
      {suffix}
    </div>
  );
};
