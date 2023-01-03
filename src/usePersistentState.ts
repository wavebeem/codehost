import { useEffect, useState } from "react";

export function usePersistentState<T>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] {
  const [state, setState] = useState(() => {
    const value = localStorage.getItem(key);
    if (value === null) {
      return defaultValue;
    }
    return JSON.parse(value);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}
