import { useEffect, useRef, useState } from 'react';

const TYPE_SPEED = 50;

export default function useType(text: string, speed = TYPE_SPEED) {
  const indexRef = useRef(0);
  const [characters, setCharacters] = useState('');

  useEffect(() => {
    indexRef.current = 0;
  }, [text]);

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current += 1;
      setCharacters(text.substring(0, indexRef.current));

      if (indexRef.current === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return characters;
}
