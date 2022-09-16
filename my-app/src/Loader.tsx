import React, { useEffect, useState } from 'react';
import { Loading } from './UI/components/other/Loading';

let ActiveHook: any = null;

export const finishLoad = () => {
  if (ActiveHook) ActiveHook(false);
};

export const startLoad = () => {
  if (ActiveHook) ActiveHook(true);
};

export const Loader = (): React.ReactElement => {
  const [isLoadingVisible, setLoadingVisible] = useState(true);

  useEffect(() => {
    ActiveHook = setLoadingVisible;
    return () => {
      ActiveHook = null;
    };
  }, []);

  return <Loading isVisible={isLoadingVisible} />;
};
