import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Footer } from '../UI/components/groups/Footer/Footer';
import { Header } from '../UI/components/groups/Header/Header';
import { HeaderLogo } from '../UI/components/groups/Header/HeaderLogo';
import { HeaderTabs } from '../UI/components/groups/Header/HeaderTabs';
import useGoTo from '../utility/useGoTo';

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
      <Sticky>
        <Header>
          <HeaderLogo href="/" onClick={() => goTo('/')} />
          <HeaderTabs
            tabs={[
              {
                label: 'PROJECTS',
                href: '/projects',
                onClick: () => goTo('/projects'),
              },
              {
                label: 'GALLERY',
                href: '/gallery',
                onClick: () => goTo('/gallery'),
              },
              {
                label: 'ABOUT',
                href: '/about',
                onClick: () => goTo('/about'),
              },
            ]}
          />
        </Header>
      </Sticky>

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
