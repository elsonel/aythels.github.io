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
      <HeaderStyled>
        <HeaderLogo href="/" onClick={() => goTo('/')} />
        <HeaderTabs
          tabs={[
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
      </HeaderStyled>
      <Body>{children}</Body>
      <Footer />
    </div>
  );
};

const HeaderStyled = styled(Header)`
  z-index: ${({ theme }) => theme.layer.header};
  position: sticky;

  box-sizing: border-box;
  top: 0px;
  padding-left: calc(20px + env(safe-area-inset-left));
  padding-right: calc(20px + env(safe-area-inset-right));
`;

const Body = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: ${({ theme }) =>
    `calc(100vh - ${theme.size.headerHeight}px - ${theme.size.footerHeight}px)`};
  display: grid;
  grid-template-columns: 100%;

  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
`;
