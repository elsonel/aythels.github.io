import { Paragraph } from 'UI/components/text/Paragraph';
import { Layout } from '../../../components/Layout';
import { Page } from '../../../components/Page';
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
      </Layout>
    </Page>
  );
};
