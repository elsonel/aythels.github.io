import { useState } from 'react';
import { Loading } from './UI/components/other/Loading';

let _setIsLoaderVisible: React.Dispatch<React.SetStateAction<boolean>>;

export const setIsLoaderVisible = (isVisible: boolean) => {
  if (!_setIsLoaderVisible) return;
  _setIsLoaderVisible(isVisible);
};

export const Loader = (): React.ReactElement => {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  _setIsLoaderVisible = setIsLoaderVisible;

  return <Loading isVisible={isLoaderVisible} />;
};
