import React, { useEffect } from 'react';
import styled from 'styled-components';
import { finishLoad, startLoad } from '../../Loader';
import { Footer } from '../../UI/components/groups/Footer/Footer';
import { Header } from '../../UI/components/groups/Header/Header/';
import { HeaderLogo } from '../../UI/components/groups/Header/HeaderLogo';
import { HeaderTabs } from '../../UI/components/groups/Header/HeaderTabs';

export interface HeaderFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {
  reset: () => void;
  children?: React.ReactNode;
}

export const HeaderFooter: React.FC<HeaderFooterProps> = ({
  reset: resetCallback,
  children,
  ...props
}): React.ReactElement => {
  useEffect(() => finishLoad());

  return (
    <div {...props}>
      <HeaderStyled>
        <HeaderLogo
          link="/"
          onClick={() => startLoad()}
          onNavigate={() => {
            window.scrollTo(0, 0);
            resetCallback();
          }}
        />
        <HeaderTabs
          tabs={[
            {
              label: 'GALLERY',
              link: '/gallery',
              onClick: () => startLoad(),
              onNavigate: () => {
                window.scrollTo(0, 0);
                resetCallback();
              },
            },
            {
              label: 'ABOUT',
              link: '/about',
              onClick: () => startLoad(),
              onNavigate: () => {
                window.scrollTo(0, 0);
                resetCallback();
              },
            },
          ]}
        />
      </HeaderStyled>
      {children}
      <Footer />
    </div>
  );
};

const HeaderStyled = styled(Header)`
  z-index: ${({ theme }) => theme.layer.header};
  position: sticky;
  top: 0;

  pointer-events: none;
`;
