import { useEffect, useState } from "react";

export function useThrottle(value: string, wait: number) {
  const [throttled, setThrottle] = useState(value)

  useEffect(() => {
      const handler = setTimeout(() => setThrottle(value), wait);
      return () => clearTimeout(handler)
  }, [value]);

  return throttled;  
}