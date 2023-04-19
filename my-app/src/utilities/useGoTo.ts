import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DELAY = 300;

export default function useGoTo() {
  const [route, setRoute] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (route) timeout = setTimeout(() => navigate(route), DELAY);
    return () => clearTimeout(timeout);
  }, [navigate, route]);

  const goTo = (link: string) => {
    if (link === window.location.pathname) return;
    //LoaderManager.startLoad();
    setRoute(link);
  };

  return goTo;
}
