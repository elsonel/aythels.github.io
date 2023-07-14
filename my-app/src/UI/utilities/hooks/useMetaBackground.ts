import { useCallback } from 'react';
import { useTheme } from 'styled-components';

const META_NAME = 'theme-color';

export const useMetaBackground = () => {
  const setMetaBackgroundColor = useCallback((backgroundColor?: string) => {
    if (!backgroundColor) return;

    let metaElement = document.querySelector(
      `meta[name="${META_NAME}"]`
    ) as HTMLMetaElement;

    if (!metaElement) {
      metaElement = document.createElement('meta');
      metaElement.setAttribute('name', META_NAME);
      document.head.appendChild(metaElement);
    }

    metaElement.content = backgroundColor;
  }, []);

  return setMetaBackgroundColor;
};
