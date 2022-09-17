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
import { Gallery, PAGES } from './pages/Galley/Gallery';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Page } from './components/Page';
import { Kineticboardwalk } from './pages/Galley/kineticboardwalk/Kineticboardwalk';
import { Index } from './pages/Galley/spotlight/Index';

// https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing
// https://github.com/rafgraph/spa-github-pages

export const App: React.FC = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Page>
              <Layout />
            </Page>
          }
        />
        <Route
          path="/gallery/kineticboardwalk"
          element={<Kineticboardwalk />}
        />
        <Route path="/gallery/spotlight" element={<Index />} />
        <Route path="/" element={<Navigate to="/gallery" replace />} />
        <Route path="/gallery" element={<Gallery page={PAGES.VISUALARTS} />} />
        <Route
          path="/gallery/visualarts"
          element={<Gallery page={PAGES.VISUALARTS} />}
        />
        <Route path="/gallery/uiux" element={<Gallery page={PAGES.UIUX} />} />
        <Route
          path="/gallery/architecture"
          element={<Gallery page={PAGES.ARCHITECTURE} />}
        />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
