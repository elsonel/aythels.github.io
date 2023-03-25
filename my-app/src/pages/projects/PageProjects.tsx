import React, { useContext, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { Frame } from '../../UI/components/atoms/Frame/Frame';
import { Header } from '../../UI/components/groups/Header/Header';
import { HeaderTab } from '../../UI/components/groups/Header/HeaderTab/HeaderTab';
import { HeaderTabIcon } from '../../UI/components/groups/Header/HeaderTabIcon/HeaderTabIcon';
import { ProjectsPage } from '../../UI/components/groups/ProjectsPage/ProjectsPage';
import usePageTitle from '../../UI/utility/hooks/usePageTitle';
import { BIO_TEXT, PROJECT_DATA } from '../../utility/constants';
import { LoadingContext } from '../../utility/LoadingContext';

export interface IPageProjectsProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const PageProjects: React.FC<IPageProjectsProps> = ({
  ...props
}): React.ReactElement => {
  usePageTitle(`Elson Liang | Projects`);
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
      <ProjectsPage
        projectData={PROJECT_DATA}
        defaultHoverText={BIO_TEXT}
        isLoaded={isLoaded}
        delay={pageDelay}
      />
      <Frame isLoaded={isLoaded} delay={frameDelay} />
      <Header
        isLoaded={isLoaded}
        delay={headerDelay}
        tabIcon={<HeaderTabIcon href="/" onClick={() => goTo('/')} />}
      >
        <HeaderTab href="/projects" onClick={() => goTo('/projects')} isActive>
          PROJECTS
        </HeaderTab>
        <HeaderTab href="/about" onClick={() => goTo('/about')}>
          ABOUT
        </HeaderTab>
      </Header>
    </>
  );
};
