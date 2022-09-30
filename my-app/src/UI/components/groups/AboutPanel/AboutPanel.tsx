import React from 'react';
import styled from 'styled-components';
import { AboutSocialRow } from '../../atoms/AboutSocialRow';
import { PageTitle } from '../../atoms/PageTitle';
import { Paragraph } from '../../text/Paragraph';

export interface AboutPanelProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AboutPanel: React.FC<AboutPanelProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Title
        textAlign="center"
        title="ABOUT"
        subtitle="Developer, Designer, Artist."
      />
      <BodyWrapper>
        <Paragraph textAlign="center">
          I'm a software developer with additional skills in design and visual
          communication.
        </Paragraph>
        <Paragraph textAlign="center">
          My Bachelor's in Architectural Technology, a multidisciplinary field
          that combines materiality, engineering, computation and design, from
          the University of Toronto, enables me to craft simple, clear, and
          empathetic solutions to complex and real world problems through
          iterative and inquisitive methods.
        </Paragraph>
        <Paragraph textAlign="center">
          When I'm away from the screen, I enjoy swimming, painting, and reading
          eastern fantasy.
        </Paragraph>
      </BodyWrapper>
      <IconRow />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;

  height: 100%;
  width: 100%;
  padding: 0px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(PageTitle)`
  padding-top: 54px;
  padding-bottom: 40px;
`;

const BodyWrapper = styled.div`
  max-width: 640px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const IconRow = styled(AboutSocialRow)`
  padding: 48px 0px;
`;
