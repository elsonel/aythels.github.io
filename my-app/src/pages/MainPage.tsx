import React, { useContext, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Frame } from '../UI/components/atoms/Frame';
import { AboutPage as AboutPageComponent } from '../UI/components/groups/AboutPage/AboutPage';
import { Header } from '../UI/components/groups/Header/Header';
import { HeaderTab } from '../UI/components/groups/Header/HeaderTab/HeaderTab';
import { HeaderTabIcon } from '../UI/components/groups/Header/HeaderTabIcon/HeaderTabIcon';
import { ProjectsPage as ProjectsPageComponent } from '../UI/components/groups/ProjectsPage/ProjectsPage';
import { PROJECT_DATA, BIO_TEXT } from '../utility/constants';
import { LoadingContext } from '../utility/LoadingContext';

const FRAME_DELAY = 300;
const HEADING_DELAY = 300;

const TABS: {
  [key: string]: {
    title: string;
    label: string;
  };
} = {
  '/projects': {
    title: `Elson Liang | Projects`,
    label: 'PROJECTS',
  },
  '/about': {
    title: `Elson Liang | About`,
    label: 'ABOUT',
  },
};

export const MainPage: React.FC = (): React.ReactElement => {
  const { speed } = useTheme();
  const { goTo } = useContext(LoadingContext);
  const currentRoute = useLocation().pathname;
  const [destinedRoute, setDestinedRoute] = useState<string>(currentRoute);

  useEffect(() => {
    setDestinedRoute(currentRoute);
  }, [currentRoute]);

  let navigate = useNavigate();

  return (
    <>
      <Outlet />
      <Frame delay={speed.loading} />
      <Header
        delay={speed.loading + FRAME_DELAY}
        tabIcon={
          <HeaderTabIcon href="/" onClick={() => goTo('/', speed.slow)} />
        }
      >
        {Object.entries(TABS).map(([route, data]) => (
          <HeaderTab
            key={route}
            href={route}
            isActive={destinedRoute === route}
            onClick={() => {
              setDestinedRoute(route);
              goTo(route, speed.slow);
            }}
          >
            {data.label}
          </HeaderTab>
        ))}
      </Header>
    </>
  );
};

export const ProjectsPage = (): React.ReactElement => {
  const { speed } = useTheme();
  const { isLoaded, finishLoad, isFirstLoad } = useContext(LoadingContext);

  useEffect(() => {
    finishLoad();
    document.title = `Elson Liang | Projects`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProjectsPageComponent
      isLoaded={isLoaded}
      projectData={PROJECT_DATA}
      defaultHoverText={BIO_TEXT}
      delay={isFirstLoad ? speed.loading + FRAME_DELAY + HEADING_DELAY : 0}
    />
  );
};

export const AboutPage = (): React.ReactElement => {
  const { speed } = useTheme();
  const { isLoaded, finishLoad, isFirstLoad } = useContext(LoadingContext);

  useEffect(() => {
    finishLoad();
    document.title = `Elson Liang | About`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AboutPageComponent
      isLoaded={isLoaded}
      delay={isFirstLoad ? speed.loading + FRAME_DELAY + HEADING_DELAY : 0}
    />
  );
};
