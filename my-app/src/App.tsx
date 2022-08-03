import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { Error } from './pages/Error';
import { Gallery } from './pages/Gallery';
import { Projects } from './pages/Projects';
import { useEffect } from 'react';

// https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing
// https://github.com/rafgraph/spa-github-pages

export interface AppProps {}

export const App: React.FC<AppProps> = ({}): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
