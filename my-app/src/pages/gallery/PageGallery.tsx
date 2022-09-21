import React from 'react';
import { Gallery } from '../../components/Gallery';
import { Layout } from '../../components/Layout';
import { Page } from '../../components/Page';
import { SafeNotchPadding } from '../../components/SafeNotchPadding';
import { PageTitle } from '../../UI/components/atoms/PageTitle';
import { SortsData, TabsData } from './data';

export interface PageGalleryProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const PageGallery: React.FC<PageGalleryProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Page title="Gallery" {...props}>
      <Layout>
        <SafeNotchPadding>
          <PageTitle>GALLERY</PageTitle>
          <Gallery tabsData={TabsData} sortsData={SortsData} />
        </SafeNotchPadding>
      </Layout>
    </Page>
  );
};
