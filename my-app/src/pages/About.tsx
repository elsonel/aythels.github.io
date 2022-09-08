import React, { useEffect } from 'react';
import { HeaderFooter } from './templates/HeaderFooter';
import { About as AboutPage } from '../UI/components/groups/About';
import { PageTitle } from '../UI/components/atoms/PageTitle';

export interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {
  resetCallback: () => void;
}

export const About: React.FC<AboutProps> = ({
  resetCallback,
  ...props
}): React.ReactElement => {
  return (
    <div {...props}>
      <HeaderFooter reset={resetCallback}>
        <PageTitle>ABOUT</PageTitle>
        <AboutPage />
      </HeaderFooter>
    </div>
  );
};
