import React from 'react';
import { Gallery } from '../../components/Gallery';
import { Layout } from '../../components/Layout';
import { Page } from '../../components/Page';
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
        <PageTitle>GALLERY</PageTitle>
        <Gallery tabsData={TabsData} sortsData={SortsData} />
      </Layout>
    </Page>
  );
};
