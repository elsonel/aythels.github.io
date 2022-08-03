import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { HeaderMain } from '../UI/components/groups/HeaderMain';
import { finishLoad, handlePageTransition } from '../Loader';

export interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Gallery: React.FC<GalleryProps> = ({
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
      This is the gallery
    </div>
  );
};
