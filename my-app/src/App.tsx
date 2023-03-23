import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
  Navigate,
  useNavigate,
} from 'react-router-dom';

import { PageAbout } from './pages/about/PageAbout';
import { Page404 } from './pages/404/Page404';
import React, { useState } from 'react';
import { PageGallery } from './pages/gallery/PageGallery';
import { PageKineticboardwalk } from './pages/gallery/kineticboardwalk/PageKineticboardwalk';
import { PageBasilisktower } from './pages/gallery/basilisktower/PageBasilisktower';
import { PageFoldpavilion } from 'pages/gallery/foldpavilion/PageFoldPavilion';
import { PageSpotlight } from 'pages/gallery/spotlight/PageSpotlight';
import { PagePortfolio } from 'pages/gallery/portfolio/PagePortfolio';
import { PageProjects } from 'pages/projects/PageProjects';
import { LoadingContextProvider } from './utility/LoadingContext';
import { Loading } from './UI/components/other/Loading/Loading';

// https://stackoverflow.com/questions/57101831/react-router-how-do-i-update-the-url-without-causing-a-navigation-reload
// https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing
// https://github.com/rafgraph/spa-github-pages

export const App: React.FC = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <LoadingContextProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/projects" replace />} />
          <Route path="/projects" element={<PageProjects />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </LoadingContextProvider>
    </BrowserRouter>
  );
};
