import React from 'react';
import { createContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { setIsLoaderVisible } from '../Loader';

export const LoadingContext = createContext<{
  isLoaded: boolean;
  goTo: (route: string, delay?: number) => void;
  finishLoad: () => void;
  isFirstLoad: boolean;
}>({
  isLoaded: false,
  goTo: () => {},
  finishLoad: () => {},
  isFirstLoad: true,
});

export const LoadingContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigateTimer = useRef<NodeJS.Timeout>();

  const navigate = useNavigate();

  const goTo = (route: string, delay = 0) => {
    if (route === window.location.pathname) return;
    clearTimeout(navigateTimer.current);
    setIsLoaded(false);

    navigateTimer.current = setTimeout(() => {
      navigate(route);
      setIsFirstLoad(false);
    }, delay);
  };

  const finishLoad = () => {
    clearTimeout(navigateTimer.current);
    setIsLoaded(true);
    setIsLoaderVisible(false);
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoaded,
        goTo,
        finishLoad,
        isFirstLoad,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
