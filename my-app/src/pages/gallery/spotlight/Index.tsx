import { useState } from 'react';
import styled from 'styled-components';
import { ImageThumbnail } from '../../../UI/components/atoms/ImageThumbnail';
import { ProjectLanding } from '../../../UI/components/atoms/ProjectLanding';
import { Fact } from '../../../UI/components/atoms/Fact';
import { ProjectSectionFactList } from '../../../UI/components/atoms/ProjectSectionFactList';
import { ProjectSectionImage } from '../../../UI/components/atoms/ProjectSectionImage';
import { ProjectSectionText } from '../../../UI/components/atoms/ProjectSectionText';
import { Explore } from '../../../UI/components/groups/Explore';
import { ProjectLayout } from '../../../UI/components/groups/Project/ProjectLayout';
import { ProjectSection } from '../../../UI/components/groups/Project/ProjectSection';
import { Grid } from '../../../UI/components/layout/Grid';
import { Page } from '../../../components/Page';
import { Layout } from '../../../components/Layout';
import { Theme } from '../../../UI/utility/themes/Theme';
import { ImageThumbnailAspect } from '../../../UI/components/atoms/ImageThumbnailAspect';

export interface IndexProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Index: React.FC<IndexProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Page {...props}>
      <Layout>
        <ProjectLayout>
          <ProjectLanding
            subtitle={'Media Streaming Platform'}
            title={'Spotlight'}
            src={Theme.image.exampleSquare}
          />
          <ProjectSection title="OVERVIEW">
            <ProjectSectionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non provident.
            </ProjectSectionText>
            <ProjectSectionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non.
            </ProjectSectionText>
            <ProjectSectionFactList>
              <Fact label="TYPE" value=" Mobile Application" />
              <Fact label="COMPLETION" value="June 2022" />
              <Fact
                label="COLLABORATORS"
                value="Elson Liang, Xavier Woo, Perry Wang"
              />
              <Fact label="GITHUB" value="Link" />
            </ProjectSectionFactList>
          </ProjectSection>
          <ProjectSection title="GALLERY">
            <Grid
              breakpoints={[
                {
                  minWidth: 0,
                  columnCount: 1,
                },
                {
                  minWidth: 600,
                  columnCount: 2,
                },
                {
                  minWidth: 1100,
                  columnCount: 3,
                },
              ]}
            >
              <ImageThumbnailAspect
                src={Theme.image.exampleSquare}
                aspect={1}
              />
              <ImageThumbnailAspect
                src={Theme.image.exampleSquare}
                aspect={1}
              />
              <ImageThumbnailAspect
                src={Theme.image.exampleSquare}
                aspect={1}
              />
              <ImageThumbnailAspect
                src={Theme.image.exampleSquare}
                aspect={1}
              />
            </Grid>
          </ProjectSection>
          <ProjectSection title="PROCESS">
            <ProjectSectionText title="Concept">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non provident.`}
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do' eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non.`}
            </ProjectSectionText>
            <ProjectSectionText title="Development">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </ProjectSectionText>
            <ProjectSectionImage src={Theme.image.exampleLandscape}>
              This is an image
            </ProjectSectionImage>
            <ProjectSectionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non provident.
            </ProjectSectionText>
          </ProjectSection>
        </ProjectLayout>
        <Explore title="EXPLORE">
          {[
            <ImageThumbnailAspect
              src={Theme.image.exampleSquare}
              title={'PORTFOL.IO'}
              subtitle={'DESIGN LEARNING PLATFORM'}
              aspect={1}
              isTextAlwaysVisible={true}
            />,
          ]}
        </Explore>
      </Layout>
    </Page>
  );
};
