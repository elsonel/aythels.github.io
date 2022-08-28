import React, { useEffect } from 'react';
import styled from 'styled-components';
import { finishLoad, startLoad } from '../../Loader';
import { Footer } from '../../UI/components/groups/Footer/Footer';
import { HeaderMain } from '../../UI/components/groups/Header/HeaderMain';

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
      <Header
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
        tabLogo={{
          label: 'HOME',
          link: '/',
          onClick: () => startLoad(),
          onNavigate: () => {
            window.scrollTo(0, 0);
            resetCallback();
          },
        }}
      />

      {children}
      <Footer />
    </div>
  );
};

const Header = styled(HeaderMain)`
  z-index: ${({ theme }) => theme.layer.header};
  position: sticky;
  top: 0;
`;
