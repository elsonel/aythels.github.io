import { Layout } from '../../../components/Layout';
import { Page } from '../../../components/Page';
import { ProjectExplore } from '../../../components/ProjectExplore';
import { ProjectGallery } from '../../../components/ProjectGallery';
import { SafeNotchPadding } from '../../../components/SafeNotchPadding';
import { UIUXData } from '../data';
import { GridsData, PanelData } from './data';

export interface PagePortfolioProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const PagePortfolio: React.FC<PagePortfolioProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Page title="Portfol.io" {...props}>
      <Layout>
        <SafeNotchPadding>
          <ProjectGallery panelData={PanelData} gridsData={GridsData} />
        </SafeNotchPadding>
        <ProjectExplore
          exploreData={UIUXData.filter((e) => e.title != 'PORTFOL.IO')}
        />
      </Layout>
    </Page>
  );
};
