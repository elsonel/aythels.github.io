import { Layout } from '../../../components/Layout';
import { Page } from '../../../components/Page';
import { ProjectGallery } from '../../../components/ProjectGallery';
import { SafeNotchPadding } from '../../../components/SafeNotchPadding';
import { UIUXData } from '../data';
import { GridsData, PanelData } from './data';

export interface PageProjectSpotlightProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const PageProjectSpotlight: React.FC<PageProjectSpotlightProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Page title="Spotlight" {...props}>
      <Layout>
        <SafeNotchPadding>
          <ProjectGallery panelData={PanelData} gridsData={GridsData} />
        </SafeNotchPadding>
      </Layout>
    </Page>
  );
};
