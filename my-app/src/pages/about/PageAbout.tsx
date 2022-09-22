import React from 'react';
import { AboutPanel } from '../../UI/components/groups/AboutPanel';
import { Layout } from '../../components/Layout';
import { Page } from '../../components/Page';
import { SafeNotchPadding } from '../../components/SafeNotchPadding';

export interface PageAboutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PageAbout: React.FC<PageAboutProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Page title="About" {...props}>
      <Layout>
        <SafeNotchPadding>
          <AboutPanel />
        </SafeNotchPadding>
      </Layout>
    </Page>
  );
};
