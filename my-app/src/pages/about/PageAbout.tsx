import React, { useEffect } from 'react';
import { About } from '../../UI/components/groups/About';
import { PageTitle } from '../../UI/components/atoms/PageTitle';
import { Layout } from '../../components/Layout';
import { Page } from '../../components/Page';

export interface PageAboutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PageAbout: React.FC<PageAboutProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Page title="About" {...props}>
      <Layout>
        <PageTitle>ABOUT</PageTitle>
        <About />
      </Layout>
    </Page>
  );
};
