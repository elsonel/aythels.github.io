import React from 'react';
import { createContext, useRef, useState } from 'react';

export const MainPageContext = createContext<{
  isLoaded: boolean;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  isChildDelayed: boolean;
  setIsChildDelayed: React.Dispatch<React.SetStateAction<boolean>>;
  reset: () => void;
}>({
  isLoaded: false,
  setIsLoaded: () => {},
  isChildDelayed: true,
  setIsChildDelayed: () => {},
  reset: () => {},
});

export const MainPageContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isChildDelayed, setIsChildDelayed] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const reset = () => {
    setIsChildDelayed(true);
    setIsLoaded(false);
  };

  return (
    <MainPageContext.Provider
      value={{
        isLoaded,
        setIsLoaded,
        isChildDelayed,
        setIsChildDelayed,
        reset,
      }}
    >
      {children}
    </MainPageContext.Provider>
  );
};
