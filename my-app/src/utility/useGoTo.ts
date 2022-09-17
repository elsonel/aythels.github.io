import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { startLoad } from '../Loader';

const REROUTE_TIMER = 300;
type Timeout = NodeJS.Timeout | undefined;

export default function useGoTo() {
  const [rerouteTimeout, setRerouteTimeout] = useState<Timeout>(undefined);
  const navigate = useNavigate();

  const goTo = (link: string) => {
    if (link === window.location.pathname) return;

    clearTimeout(rerouteTimeout);

    startLoad();
    setRerouteTimeout(
      setTimeout(() => {
        navigate(link);
      }, REROUTE_TIMER)
    );
  };

  return goTo;
}
