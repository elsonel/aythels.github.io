import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { finishLoad, handlePageTransition } from '../Loader';
import { HeaderMain } from '../UI/components/groups/HeaderMain';

export interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const About: React.FC<AboutProps> = ({
  ...props
}): React.ReactElement => {
  let navigate = useNavigate();

  useEffect(() => {
    finishLoad();
  });

  return (
    <div>
      <HeaderMain
        headerTabs={[
          {
            label: 'DEV PROJECTS',
            link: '/projects',
            onLinkClick: (route) => handlePageTransition(() => navigate(route)),
          },
          {
            label: 'DESIGN GALLERY',
            link: '/gallery',
            onLinkClick: (route) => handlePageTransition(() => navigate(route)),
          },
          {
            label: 'ABOUT',
            link: '/about',
            onLinkClick: (route) => handlePageTransition(() => navigate(route)),
          },
        ]}
        logoTab={{
          label: 'HOME',
          link: '/',
          onLinkClick: (route) => handlePageTransition(() => navigate(route)),
        }}
      />
      This is the About Page
    </div>
  );
};
