import { Layout } from '../../../components/Layout';
import { Page } from '../../../components/Page';
import { ProjectExplore } from '../../../components/ProjectExplore';
import { ProjectGallery } from '../../../components/ProjectGallery';
import { SafeNotchPadding } from '../../../components/SafeNotchPadding';
import { ArchitectureData } from '../data';
import { GridsData, PanelData } from './data';

export interface PageProjectFoldPavilionProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const PageProjectFoldPavilion: React.FC<
  PageProjectFoldPavilionProps
> = ({ ...props }): React.ReactElement => {
  return (
    <Page title="Fold Pavilion" {...props}>
      <Layout>
        <SafeNotchPadding>
          <ProjectGallery panelData={PanelData} gridsData={GridsData} />
        </SafeNotchPadding>
        <ProjectExplore
          exploreData={ArchitectureData.filter(
            (e) => e.title != 'FOLD PAVILION'
          )}
        />
      </Layout>
    </Page>
  );
};
