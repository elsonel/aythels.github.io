import React, { useEffect, useState } from 'react';
import { LoadingFadeIn } from './UI/components/other/Loading';
import { LoadingFadeOut } from './UI/components/other/LoadingFadeOut';

let ActiveHook: any = null;
let redirectCallback: any = null;

export const handlePageTransition = (onFinish: () => void) => {
  redirectCallback = onFinish;

  if (ActiveHook) {
    ActiveHook(true);
  } else {
    redirectCallback();
    redirectCallback = null;
  }
};

export const finishLoad = () => {
  if (ActiveHook) ActiveHook(false);
};

export const Loader = (): React.ReactElement => {
  const [isLoadingVisible, setLoadingVisible] = useState(true);

  useEffect(() => {
    ActiveHook = setLoadingVisible;
    return () => {
      ActiveHook = null;
    };
  }, []);

  return (
    <div>
      <LoadingFadeOut
        isVisible={isLoadingVisible}
        onFinish={() => {
          if (redirectCallback) {
            redirectCallback();
            redirectCallback = null;
          }
        }}
      />
      <LoadingFadeIn isVisible={isLoadingVisible} />
    </div>
  );
};
