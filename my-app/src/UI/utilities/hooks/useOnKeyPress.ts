import { useEffect } from 'react';

export default function useOnKeyPress(callback: (key: string) => void) {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      callback && callback(e.key);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [callback]);
}
