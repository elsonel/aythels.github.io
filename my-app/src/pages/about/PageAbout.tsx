import React, { useContext, useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import { Frame } from '../../UI/components/atoms/Frame/Frame';
import { AboutPage } from '../../UI/components/groups/AboutPage/AboutPage';
import { Header } from '../../UI/components/groups/Header/Header';
import { HeaderTab } from '../../UI/components/groups/Header/HeaderTab/HeaderTab';
import { HeaderTabIcon } from '../../UI/components/groups/Header/HeaderTabIcon/HeaderTabIcon';
import usePageTitle from '../../UI/utility/hooks/usePageTitle';
import { LoadingContext } from '../../utility/LoadingContext';

export interface IPageAboutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PageAbout: React.FC<IPageAboutProps> = ({
  ...props
}): React.ReactElement => {
  usePageTitle(`Elson Liang | Developer & Designer`);
  const { speed } = useTheme();
  const { goTo, finishLoad, isLoaded } = useContext(LoadingContext);

  useEffect(() => {
    finishLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        tabIcon={<HeaderTabIcon href="/" onClick={() => goTo('/')} />}
      >
        <HeaderTab href="/projects" onClick={() => goTo('/projects')}>
          PROJECTS
        </HeaderTab>
        <HeaderTab href="/about" onClick={() => goTo('/about')} isActive>
          ABOUT
        </HeaderTab>
      </Header>
    </>
  );
};
