import React, { useEffect } from 'react';
import { About as AboutPage } from '../UI/components/groups/About';
import { PageTitle } from '../UI/components/atoms/PageTitle';
import { Page } from '../components/Page';
import { Layout } from '../components/Layout';

export interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const About: React.FC<AboutProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Page {...props}>
      <Layout>
        <PageTitle>ABOUT</PageTitle>
        <AboutPage />
      </Layout>
    </Page>
  );
};
