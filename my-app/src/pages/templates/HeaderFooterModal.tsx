import React, { useEffect } from 'react';
import styled from 'styled-components';
import { finishLoad, startLoad } from '../../Loader';
import { Footer } from '../../UI/components/groups/Footer/Footer';
import { Header } from '../../UI/components/groups/Header/Header';
import { HeaderLogo } from '../../UI/components/groups/Header/HeaderLogo';
import { HeaderTabs } from '../../UI/components/groups/Header/HeaderTabs';

export interface HeaderFooteModalProps
  extends React.HTMLAttributes<HTMLDivElement> {
  resetCallback: () => void;
  children?: React.ReactNode;
}

export const HeaderFooteModal: React.FC<HeaderFooteModalProps> = ({
  resetCallback,
  children,
  ...props
}): React.ReactElement => {
  useEffect(() => finishLoad());

  return (
    <Wrapper {...props}>
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
              onNavigate: () => resetCallback(),
            },
            {
              label: 'ABOUT',
              link: '/about',
              onClick: () => startLoad(),
              onNavigate: () => resetCallback(),
            },
          ]}
        />
      </HeaderStyled>

      {children}
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  overflow-x: hidden;
  overflow-y: auto;
`;

const HeaderStyled = styled(Header)`
  z-index: ${({ theme }) => theme.layer.header};
  position: sticky;
  top: 0;

  pointer-events: none;
`;
