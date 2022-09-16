import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Footer } from '../UI/components/groups/Footer/Footer';
import { Header } from '../UI/components/groups/Header/Header';
import { HeaderLogo } from '../UI/components/groups/Header/HeaderLogo';
import { HeaderTabs } from '../UI/components/groups/Header/HeaderTabs';
import useGoTo from '../utility/useGoTo';
import { Page } from './Page';

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
  top: 0px;
`;

const Body = styled.div`
  overflow: hidden;
  width: 100%;
`;
