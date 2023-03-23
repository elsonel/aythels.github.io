import { createContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { setIsLoaderVisible } from '../Loader';

export const LoadingContext = createContext<{
  isLoaded: boolean;
  isFirstLoaded: boolean;
  goTo: (route: string) => void;
  finishLoad: () => void;
}>({
  isLoaded: false,
  isFirstLoaded: false,
  goTo: () => {},
  finishLoad: () => {},
});

export const LoadingContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { speed } = useTheme();

  const [isLoaded, setIsLoaded] = useState(false);
  const [isFirstLoaded, setIsFirstLoaded] = useState(false);
  const isTransitioning = useRef(true);
  const navigate = useNavigate();

  const goTo = (route: string, isMenuEnabled = true) => {
    if (route === window.location.pathname) return;
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    if (isMenuEnabled) setIsLoaderVisible(true);
    setTimeout(
      () => {
        navigate(route);
        setIsLoaded(false);
      },
      isMenuEnabled ? speed.loading : 0
    );
  };

  const finishLoad = () => {
    isTransitioning.current = false;
    setIsLoaderVisible(false);
    setIsLoaded(true);
    setIsFirstLoaded(true);
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoaded,
        isFirstLoaded,
        goTo,
        finishLoad,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
