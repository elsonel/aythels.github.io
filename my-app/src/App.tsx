import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
  Navigate,
  useNavigate,
} from 'react-router-dom';

import { About } from './pages/About';
import { Error } from './pages/Error';
import { Gallery, PAGES } from './pages/Galley/Gallery';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { Kineticboardwalk } from './pages/Galley/architecture/kineticboardwalk/Kineticboardwalk';
import { Index } from './pages/Galley/uiux/spotlight/Index';
import { Layout } from './components/Layout';
import { Page } from './components/Page';
import { Test } from './pages/Test';

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
          path="/gallery/architecture/kineticboardwalk"
          element={<Kineticboardwalk />}
        />
        <Route
          path="/gallery/architecture/kineticboardwalk"
          element={<Kineticboardwalk />}
        />
        <Route path="/gallery/uiux/spotlight" element={<Index />} />
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
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
