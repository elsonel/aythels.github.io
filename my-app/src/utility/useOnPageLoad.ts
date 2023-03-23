import { useEffect, useState } from 'react';

const DELAY = 1000;

export default function useOnPageLoad() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoaded(true), DELAY);
    return () => clearTimeout(timeout);
  }, []);

  return isLoaded;
}
