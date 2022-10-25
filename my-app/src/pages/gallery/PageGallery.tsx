import { Title } from 'components/Title';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import { ThemeInterface } from 'UI/utility/themes/Theme';
import { Gallery } from '../../components/Gallery';
import { Layout } from '../../components/Layout';
import { Page } from '../../components/Page';
import { SafeNotchPadding } from '../../components/SafeNotchPadding';
import { TabsData } from './data';

export interface PageGalleryProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const PageGallery: React.FC<PageGalleryProps> = ({
  ...props
}): React.ReactElement => {
  const theme = useTheme() as ThemeInterface;

  return (
    <Page title="Gallery" {...props}>
      <Layout>
        <SafeNotchPadding>
          <Title>GALLERY</Title>
          <Gallery tabsData={TabsData} />
        </SafeNotchPadding>
      </Layout>
    </Page>
  );
};
