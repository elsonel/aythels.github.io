import { Layout } from '../../../components/Layout';
import { Page } from '../../../components/Page';
import { ProjectGallery } from '../../../components/ProjectGallery';
import { SafeNotchPadding } from '../../../components/SafeNotchPadding';
import { ArchitectureData } from '../data';
import { GridsData, PanelData } from './data';

export interface PageProjectBasiliskTowerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const PageProjectBasiliskTower: React.FC<
  PageProjectBasiliskTowerProps
> = ({ ...props }): React.ReactElement => {
  return (
    <Page title="Basilisk Tower" {...props}>
      <Layout>
        <SafeNotchPadding>
          <ProjectGallery panelData={PanelData} gridsData={GridsData} />
        </SafeNotchPadding>
      </Layout>
    </Page>
  );
};
