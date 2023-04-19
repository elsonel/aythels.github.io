import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Footer } from '../UI/components/groups/Footer/Footer';
import useGoTo from '../utilities/useGoTo';

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  ...props
}): React.ReactElement => {
  const goTo = useGoTo();

  return (
    <div {...props}>
      <Sticky></Sticky>

      <Body>{children}</Body>
      <Footer />
    </div>
  );
};

// Flickering issue
// https://github.com/nolimits4web/swiper/issues/3527
const Sticky = styled.div`
  z-index: ${({ theme }) => theme.layer.header};
  position: sticky;
  width: 100%;
  top: 0px;
`;

const Body = styled.div`
  z-index: 0;
  width: 100%;
  min-height: ${({ theme }) =>
    `calc(100vh - ${theme.size.headerHeight}px - ${theme.size.footerHeight}px)`};
  display: grid;
  grid-template-columns: 100%;
`;
