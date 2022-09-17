import { Layout } from '../../../components/Layout';
import { Page } from '../../../components/Page';
import { ProjectExplore } from '../../../components/ProjectExplore';
import { ProjectGallery } from '../../../components/ProjectGallery';
import { ArchitectureData } from '../data';
import { GridsData, PanelData } from './data';

export interface PageKineticboardwalkProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const PageKineticboardwalk: React.FC<PageKineticboardwalkProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Page title="Kinetic Boardwalk" {...props}>
      <Layout>
        <ProjectGallery panelData={PanelData} gridsData={GridsData} />
        <ProjectExplore
          exploreData={ArchitectureData.filter(
            (e) => e.title != 'KINETIC BOARDWALK'
          )}
        />
      </Layout>
    </Page>
  );
};
