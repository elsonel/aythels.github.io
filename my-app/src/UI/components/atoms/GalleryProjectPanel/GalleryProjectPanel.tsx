import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph';
import { ImageTitle } from '../ImageTitle';
import { ProjectSectionFactProps } from '../ProjectSectionFact';

export interface GalleryProjectPanelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  body: string[];
  facts: React.ReactElement<ProjectSectionFactProps>[];
}

export const GalleryProjectPanel: React.FC<GalleryProjectPanelProps> = ({
  title,
  subtitle,
  body,
  facts,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <ImageTitle size="medium" title={title} subtitle={subtitle} />
      {body.map((e, i) => (
        <Paragraph key={i}>{e}</Paragraph>
      ))}
      <FactsWrapper>{facts}</FactsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;

  width: 100%;
  padding: 20px;

  border: 1px solid ${({ theme }) => theme.color.outline};
  transition: ${({ theme }) => `${theme.speed.normal}`};

  > * {
    padding-bottom: 14px;

    &:nth-last-child(2) {
      padding-bottom: 24px;
    }

    &:nth-last-child(1) {
      padding-bottom: 0px;
    }
  }
`;

const FactsWrapper = styled.div`
  > * {
    flex-wrap: wrap;
    padding-bottom: 14px;
  }
`;
