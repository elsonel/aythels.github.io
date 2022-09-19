import React, { useEffect, useState } from 'react';
import { Loading } from './UI/components/other/Loading';

interface LoaderManagerInterface {
  activeHook: React.Dispatch<React.SetStateAction<boolean>> | null;
  progressHook: React.Dispatch<React.SetStateAction<undefined | number>> | null;
  finishLoad: () => void;
  startLoad: () => void;
  setProgress: (n: number) => void;
}

function LoaderManagerFunct(this: LoaderManagerInterface) {
  this.activeHook = null;
  this.progressHook = null;

  this.finishLoad = () => {
    this.progressHook && this.progressHook(1);
    this.activeHook && this.activeHook(false);
  };

  this.startLoad = () => {
    this.progressHook && this.progressHook(0);
    this.activeHook && this.activeHook(true);
  };

  this.setProgress = (n: number) => {
    this.progressHook && this.progressHook(n);
  };
}

export const LoaderManager = new (LoaderManagerFunct as any)();

export const Loader = (): React.ReactElement => {
  const [isLoadingVisible, setLoadingVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    LoaderManager.activeHook = setLoadingVisible;
    LoaderManager.progressHook = setProgress;
    return () => {
      LoaderManager.activeHook = null;
      LoaderManager.progressHook = null;
    };
  }, []);

  return <Loading isVisible={isLoadingVisible} progress={progress} />;
};
