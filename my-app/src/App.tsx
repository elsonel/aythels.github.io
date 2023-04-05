import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoadingContextProvider } from './utility/LoadingContext';
import { AboutPage, MainPage, ProjectsPage } from './pages/MainPage';
import { PageKineticBoardwalk } from './pages/PageKineticBoardwalk';
import { ROUTES } from './utility/routes';

// https://stackoverflow.com/questions/57101831/react-router-how-do-i-update-the-url-without-causing-a-navigation-reload
// https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing
// https://github.com/rafgraph/spa-github-pages

export const App: React.FC = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <LoadingContextProvider>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<Navigate to="/projects" replace />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route
              path={ROUTES.architecture.kineticBoardwalk}
              element={<PageKineticBoardwalk />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </LoadingContextProvider>
    </BrowserRouter>
  );
};
