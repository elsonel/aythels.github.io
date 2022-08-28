import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
  Navigate,
} from 'react-router-dom';

import { About } from './pages/About';
import { Error } from './pages/Error';
import { Gallery, PAGES } from './pages/Galley/Gallery';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

// https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing
// https://github.com/rafgraph/spa-github-pages

export const App: React.FC = ({}): React.ReactElement => {
  const [key, setKey] = React.useState(uuidv4());

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/gallery" replace />} />
        <Route
          path="/gallery"
          element={
            <Gallery key={key} page={PAGES.VISUALARTS} reset={() => {}} />
          }
        />
        <Route
          path="/gallery/visualarts"
          element={
            <Gallery key={key} page={PAGES.VISUALARTS} reset={() => {}} />
          }
        />
        <Route
          path="/gallery/uiux"
          element={<Gallery key={key} page={PAGES.UIUX} reset={() => {}} />}
        />
        <Route
          path="/gallery/architecture"
          element={
            <Gallery key={key} page={PAGES.ARCHITECTURE} reset={() => {}} />
          }
        />
        <Route
          path="/about"
          element={<About key={key} resetCallback={() => {}} />}
        />
        <Route path="*" element={<Error key={key} />} />
      </Routes>
    </BrowserRouter>
  );
};
