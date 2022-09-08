import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph';
import { TextTitle } from '../../text/TextTitle';
import { Theme } from '../../../utility/themes/Theme';
import { ImageThumbnail } from '../../atoms/ImageThumbnail';
import { TwoColumn } from '../../layout/TwoColumn';

export interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const About: React.FC<AboutProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Content leftRatio={0.7} rightRatio={0.3} breakIfLessThan={800}>
        <TextWrapper>
          <TextTitle size="small">
            A hybrid between development and design
          </TextTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fringilla ultricies ultrices. Fusce porttitor, arcu a viverra
            euismod, sem massa faucibus felis, nec auctor dui orci id lectus.
          </Paragraph>
          <Paragraph>
            Etiam quis quam quis nibh vulputate ultrices non vitae felis.
            Vestibulum placerat mi non urna euismod faucibus. Cras cursus
            elementum lacus laoreet consequat. Proin dignissim sagittis libero.
            Sed malesuada vel nunc eget convallis.
          </Paragraph>
          <Paragraph>
            Praesent tortor metus, vestibulum vitae mattis ut, viverra luctus
            odio. Phasellus efficitur urna et dolor sollicitudin porta.
          </Paragraph>
          <a href="/images/myw3schoolsimage.jpg" download>
            <Paragraph>Resume</Paragraph>
          </a>
        </TextWrapper>
        <ImageThumbnailStyled src={Theme.image.profile} />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;

  width: 100%;
  padding: 20px;
`;

const Content = styled(TwoColumn)`
  gap: 20px;
`;

const TextWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;

  > * {
    margin-bottom: 12px;
  }
`;

const ImageThumbnailStyled = styled(ImageThumbnail)`
  width: 100%;
  pointer-events: none;
`;
