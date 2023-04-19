import React, { useContext, useEffect, useState } from 'react';
import { Outlet, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Frame } from '../UI/components/atoms/Frame';
import { AboutPage as AboutPageComponent } from '../UI/components/groups/AboutPage/AboutPage';
import { Header } from '../UI/components/groups/Header/Header';
import { HeaderTab } from '../UI/components/groups/Header/HeaderTab/HeaderTab';
import { HeaderTabIcon } from '../UI/components/groups/Header/HeaderTabIcon/HeaderTabIcon';
import { ProjectsPage as ProjectsPageComponent } from '../UI/components/groups/ProjectsPage/ProjectsPage';
import { PROJECT_DATA, BIO_TEXT } from '../utility/constants';
import { MainPageContext } from '../utility/MainPageContext';
import {
  Loading,
  MINIMUM_DURATION,
} from '../UI/components/other/Loading/Loading';
import { ROUTES } from '../utility/routes';
import { LoadingBlank } from '../UI/components/other/LoadingBlank/LoadingBlank';
import useOnNewPageMount from '../utility/useOnNewPageMount';

const FRAME_DELAY = 200;
const HEADING_DELAY = 400;
const CONTENT_DELAY = 500;
const CONTENT_FADE_OUT_DURATION = 350;

export const MainPage: React.FC = (): React.ReactElement => {
  const { setIsChildDelayed, setIsLoaded, reset } = useContext(MainPageContext);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const currentRoute = useLocation().pathname;
  const [navTarget, setNavTarget] = useState(currentRoute);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaderVisible(false);
      setIsLoaded(true);
    }, MINIMUM_DURATION);

    return () => {
      clearTimeout(timeout);
      reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setNavTarget(currentRoute);
  }, [currentRoute]);

  useEffect(() => {
    if (currentRoute === navTarget) return;

    setIsLoaded(false);
    const timeout = setTimeout(() => {
      navigate(navTarget);
      setIsChildDelayed(false);
      setIsLoaded(true);
    }, CONTENT_FADE_OUT_DURATION);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navTarget]);

  return (
    <>
      <Outlet />
      <Frame isLoaded={!isLoaderVisible} delay={FRAME_DELAY} />
      <Header
        isLoaded={!isLoaderVisible}
        delay={HEADING_DELAY}
        tabIcon={
          <HeaderTabIcon
            href={ROUTES.index}
            onClick={() => setNavTarget(ROUTES.index)}
          />
        }
      >
        <HeaderTab
          href={ROUTES.projects}
          children="PROJECTS"
          onClick={() => setNavTarget(ROUTES.projects)}
          isActive={navTarget === ROUTES.projects}
        />
        <HeaderTab
          href={ROUTES.about}
          children="ABOUT"
          onClick={() => setNavTarget(ROUTES.about)}
          isActive={navTarget === ROUTES.about}
        />
      </Header>
      <Loading isVisible={isLoaderVisible} />
    </>
  );
};

export const ProjectsPage = (): React.ReactElement => {
  const { isLoaded, isChildDelayed } = useContext(MainPageContext);
  const [navTarget, setNavTarget] = useState<string>();
  const navigate = useNavigate();
  useOnNewPageMount(`ELSON LIANG | Projects`);

  return (
    <>
      <ProjectsPageComponent
        isLoaded={isLoaded}
        projectData={PROJECT_DATA.map((project) => {
          return {
            ...project,
            onClick: () =>
              !project.isOpeningNewTab && setNavTarget(project.href),
          };
        })}
        defaultHoverText={BIO_TEXT}
        delay={isChildDelayed ? CONTENT_DELAY : 0}
      />
      <LoadingBlank
        isVisible={!!navTarget}
        onVisibleComplete={() => navTarget && navigate(navTarget)}
      />
    </>
  );
};

export const AboutPage = (): React.ReactElement => {
  const { isLoaded, isChildDelayed } = useContext(MainPageContext);
  useOnNewPageMount(`ELSON LIANG | About`);

  return (
    <AboutPageComponent
      isLoaded={isLoaded}
      delay={isChildDelayed ? CONTENT_DELAY : 0}
    />
  );
};
