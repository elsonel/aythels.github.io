import { useEffect, useRef, useState } from 'react';

// https://stackoverflow.com/questions/53845595/wrong-react-hooks-behaviour-with-event-listener

export function useStateRef(initialValue: any) {
  const [value, setValue] = useState(initialValue);

  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return [value, setValue, ref];
}
