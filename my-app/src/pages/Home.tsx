import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { LinkInternalDelayed } from '../UI/components/other/LinkInternalDelayed';
import { finishLoad, handlePageTransition } from '../Loader';

export interface HomeProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Home: React.FC<HomeProps> = ({ ...props }): React.ReactElement => {
  let navigate = useNavigate();

  useEffect(() => {
    finishLoad();
  });

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/projects">Projects</Link>
      </div>
      <div>
        <Link to="/gallery">Gallery</Link>
      </div>
      <div>
        <Link to="/profile/afas">Profile</Link>
      </div>
      <div>
        <LinkInternalDelayed
          onLinkClick={(route) => handlePageTransition(() => navigate(route))}
          link="/about"
        >
          New Link
        </LinkInternalDelayed>
      </div>
    </div>
  );
};
