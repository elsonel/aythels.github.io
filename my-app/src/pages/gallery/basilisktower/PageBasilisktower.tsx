import { Layout } from '../../../components/Layout';
import { Page } from '../../../components/Page';
import { ProjectExplore } from '../../../components/ProjectExplore';
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
        <ProjectExplore
          exploreData={ArchitectureData.filter(
            (e) => e.title != 'BASILISK TOWER'
          )}
        />
      </Layout>
    </Page>
  );
};
