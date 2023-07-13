import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AboutPage, MainPage, ProjectsPage } from './pages/MainPage';
import { PageProjectKineticBoardwalk } from './pages/PageProjectKineticBoardwalk';
import { ROUTES } from './utilities/routes';
import { MainPageContextProvider } from './utilities/MainPageContext';
import { PageProjectFoldPavilion } from './pages/PageProjectFoldPavilion';
import { PageProjectBasiliskTower } from './pages/PageProjectBasiliskTower';
import { PageProjectSpotlight } from './pages/PageProjectSpotlight';
import { PageProjectPortfolio } from './pages/PageProjectPortfolio';
import { PageVisualArts } from './pages/PageVisualArts';

// https://stackoverflow.com/questions/57101831/react-router-how-do-i-update-the-url-without-causing-a-navigation-reload
// https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing
// https://github.com/rafgraph/spa-github-pages

export const App: React.FC = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <MainPageContextProvider>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<Navigate to="/projects" replace />} />
            <Route path={ROUTES.projects} element={<ProjectsPage />} />
            <Route path={ROUTES.about} element={<AboutPage />} />
          </Route>
          <Route
            path={ROUTES.userInterface['portfol.io']}
            element={<PageProjectPortfolio />}
          />
          <Route
            path={ROUTES.userInterface['spotlight']}
            element={<PageProjectSpotlight />}
          />
          <Route
            path={ROUTES.architecture['foldPavilion']}
            element={<PageProjectFoldPavilion />}
          />
          <Route
            path={ROUTES.architecture['kineticBoardwalk']}
            element={<PageProjectKineticBoardwalk />}
          />
          <Route
            path={ROUTES.architecture['basiliskTower']}
            element={<PageProjectBasiliskTower />}
          />
          <Route path={ROUTES.visualarts} element={<PageVisualArts />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainPageContextProvider>
    </BrowserRouter>
  );
};
