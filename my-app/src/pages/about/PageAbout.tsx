import React, { useContext, useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import { setIsLoaderVisible } from '../../Loader';
import { Frame } from '../../UI/components/atoms/Frame/Frame';
import { AboutPage } from '../../UI/components/groups/AboutPage/AboutPage';
import { Header } from '../../UI/components/groups/Header/Header';
import { HeaderTab } from '../../UI/components/groups/Header/HeaderTab/HeaderTab';
import { HeaderTabIcon } from '../../UI/components/groups/Header/HeaderTabIcon/HeaderTabIcon';
import { LoadingContext } from '../../utility/LoadingContext';

export interface IPageAboutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PageAbout: React.FC<IPageAboutProps> = ({
  ...props
}): React.ReactElement => {
  const { speed } = useTheme();
  const { goTo, finishLoad, isLoaded } = useContext(LoadingContext);

  useEffect(() => {
    document.title = `Elson Liang | Developer & Designer`;
    finishLoad();
    setIsLoaderVisible(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fadeOutDuration = speed.slow;
  const frameDelay = speed.loading;
  const headerDelay = speed.loading + speed.normal;
  const pageDelay = speed.loading + speed.normal + speed.normal;

  return (
    <>
      <AboutPage isLoaded={isLoaded} delay={pageDelay} />
      <Frame isLoaded={isLoaded} delay={frameDelay} />
      <Header
        isLoaded={isLoaded}
        delay={headerDelay}
        tabIcon={
          <HeaderTabIcon href="/" onClick={() => goTo('/', fadeOutDuration)} />
        }
      >
        <HeaderTab
          href="/projects"
          onClick={() => goTo('/projects', fadeOutDuration)}
        >
          PROJECTS
        </HeaderTab>
        <HeaderTab
          href="/about"
          onClick={() => goTo('/about', fadeOutDuration)}
          isActive
        >
          ABOUT
        </HeaderTab>
      </Header>
    </>
  );
};
