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
import React from 'react';
import { PageGallery } from './pages/gallery/PageGallery';
import { PageKineticboardwalk } from './pages/gallery/kineticboardwalk/PageKineticboardwalk';
import { Index } from './pages/gallery/spotlight/Index';

// https://stackoverflow.com/questions/57101831/react-router-how-do-i-update-the-url-without-causing-a-navigation-reload
// https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing
// https://github.com/rafgraph/spa-github-pages

export const App: React.FC = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/gallery" replace />} />
        <Route path="/gallery" element={<PageGallery />} />
        <Route
          path="/gallery/kineticboardwalk"
          element={<PageKineticboardwalk />}
        />
        <Route path="/gallery/spotlight" element={<Index />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
