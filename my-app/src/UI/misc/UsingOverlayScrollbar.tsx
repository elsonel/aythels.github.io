import { useTheme } from 'styled-components';
import { GreaterThanHook } from '../utilities/hooks/ResponsiveProps';
import { GlobalScrollOverlay } from '../utilities/styles/GlobalStyles';
import { GlobalScrollHide } from '../utilities/styles/GlobalStyles';

export const UsingOverlayScrollbar = () => {
  const { breakpoint } = useTheme();
  const isDesktop = GreaterThanHook(breakpoint.header);
  const isSupported = CSS.supports('overflow', 'overlay');

  return isDesktop && isSupported ? (
    <GlobalScrollOverlay />
  ) : (
    <GlobalScrollHide />
  );
};
