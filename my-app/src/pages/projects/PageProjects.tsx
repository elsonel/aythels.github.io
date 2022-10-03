import { GalleryGrid } from 'components/GalleryGrid';
import { Title } from 'components/Title';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import { ThemeInterface } from 'UI/utility/themes/Theme';
import { Layout } from '../../components/Layout';
import { Page } from '../../components/Page';
import { SafeNotchPadding } from '../../components/SafeNotchPadding';
import { GreetingPanel } from '../../UI/components/groups/GreetingPanel';
import { Breakpoints, Data } from './data';

export interface PageProjectsProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const PageProjects: React.FC<PageProjectsProps> = ({
  ...props
}): React.ReactElement => {
  const theme = useTheme() as ThemeInterface;

  return (
    <Page title="Projects" {...props}>
      <Layout>
        <GreetingPanel />
        <SafeNotchPadding>
          <Title>PROJECTS</Title>
          <Grid data={Data} breakpoints={Breakpoints} />
        </SafeNotchPadding>
      </Layout>
    </Page>
  );
};

const Grid = styled(GalleryGrid)`
  padding-top: 0px;
`;
