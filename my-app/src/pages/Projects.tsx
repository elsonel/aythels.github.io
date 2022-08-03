import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { finishLoad, handlePageTransition } from '../Loader';
import { HeaderMain } from '../UI/components/groups/HeaderMain';

export interface ProjectsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Projects: React.FC<ProjectsProps> = ({
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
      This is the Projects Page
    </div>
  );
};
