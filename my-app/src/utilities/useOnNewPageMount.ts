import { useEffect } from 'react';

export default function useOnNewPageMount(title: string) {
  useEffect(() => {
    document.title = title;
    document.documentElement.scrollTop = 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
