import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../utility/themes/Theme';
import { ImageThumbnail } from '../../atoms/ImageThumbnail';
import { TwoColumn } from '../../layout/TwoColumn';
import { ProjectSectionText } from '../../atoms/ProjectSectionText';
import { GalleryProjectPanel } from '../../atoms/GalleryProjectPanel';
import { FooterIconRow } from '../Footer/FooterIconRow';
import { AboutSocialRow } from '../../atoms/AboutSocialRow';
import { TextTitle } from '../../text/TextTitle';
import { PageTitle } from '../../atoms/PageTitle';

export interface AboutPanelProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AboutPanel: React.FC<AboutPanelProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Content
        leftRatio={1}
        rightRatio={2}
        breakIfLessThan={1100}
        isRightToTop={true}
      >
        <Image src={Theme.image.profile} />
        <TextWrapper>
          <Title>DEVELOPER DESIGNER ARTIST</Title>
          <ProjectSectionText>
            {[
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla ultricies ultrices. Fusce porttitor, arcu a viverra euismod, sem massa faucibus felis, nec auctor dui orci id lectus.`,
              `Etiam quis quam quis nibh vulputate ultrices non vitae felis. Vestibulum placerat mi non urna euismod faucibus. Cras cursus elementum lacus laoreet consequat. Proin dignissim sagittis libero. Sed malesuada vel nunc eget convallis.`,
              `Praesent tortor metus, vestibulum vitae mattis ut, viverra luctus odio. Phasellus efficitur urna et dolor sollicitudin porta.`,
            ]}
          </ProjectSectionText>
          <IconRow />
        </TextWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;

  height: 100%;
  width: 100%;
  padding: 20px;
`;

const Content = styled(TwoColumn)`
  width: 100%;
  height: 100%;

  gap: 20px;
  align-items: center;
`;

const TextWrapper = styled.div`
  width: 100%;
`;

const Title = styled(PageTitle)`
  padding: 0px;
  > * {
    word-spacing: 100vw;
  }

  margin-bottom: 12px;
`;

const Image = styled(ImageThumbnail)`
  width: 100%;
  pointer-events: none;
`;

const IconRow = styled(AboutSocialRow)`
  padding-top: 24px;
`;
