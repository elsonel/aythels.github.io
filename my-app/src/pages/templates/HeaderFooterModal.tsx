import React, { useEffect } from 'react';
import styled from 'styled-components';
import { finishLoad, startLoad } from '../../Loader';
import { Footer } from '../../UI/components/groups/Footer/Footer';
import { HeaderMain } from '../../UI/components/groups/Header/HeaderMain';

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
      <Header
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
        tabLogo={{
          label: 'HOME',
          link: '/',
          onClick: () => startLoad(),
          onNavigate: () => resetCallback(),
        }}
      />

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

const Header = styled(HeaderMain)`
  z-index: ${({ theme }) => theme.layer.header};
  position: sticky;
  top: 0;
`;
