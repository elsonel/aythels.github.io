import { Layout } from '../../../components/Layout';
import { Page } from '../../../components/Page';
import { ProjectGallery } from '../../../components/ProjectGallery';
import { SafeNotchPadding } from '../../../components/SafeNotchPadding';
import { ArchitectureData } from '../data';
import { GridsData, PanelData } from './data';

export interface PageProjectKineticBoardwalkProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const PageProjectKineticBoardwalk: React.FC<
  PageProjectKineticBoardwalkProps
> = ({ ...props }): React.ReactElement => {
  return (
    <Page title="Kinetic Boardwalk" {...props}>
      <Layout>
        <SafeNotchPadding>
          <ProjectGallery panelData={PanelData} gridsData={GridsData} />
        </SafeNotchPadding>
      </Layout>
    </Page>
  );
};
