import { useState, useCallback } from "react";

export default function useCounter(initialValue = 0, focusRef) {
  const [count, setCount] = useState(initialValue);
  const increment = useCallback(() => setCount(x => x + 1), []);
  const reset = useCallback(() => {
    focusRef.current.focus();
    setCount(initialValue);
  }, [initialValue, focusRef]);

  return { count, increment, reset };
}
