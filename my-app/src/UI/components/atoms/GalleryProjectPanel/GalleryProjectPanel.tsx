import React from 'react';
import styled from 'styled-components';
import { Fact } from '../Fact';
import { ImageTitle } from '../ImageTitle';
import { ProjectSectionFactList } from '../ProjectSectionFactList';
import { ProjectSectionText } from '../ProjectSectionText';

export interface Fact {
  label: string;
  value: React.ReactNode;
}

export interface GalleryProjectPanelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  body: string[];
  facts: Fact[];
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
        <ProjectSectionText key={i}>{e}</ProjectSectionText>
      ))}
      <ProjectSectionFactList>
        {facts.map((e, i) => (
          <Fact
            key={i}
            label={e.label}
            isAlwaysWrapped={true}
            value={e.value}
          />
        ))}
      </ProjectSectionFactList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;

  width: 100%;
  padding: 20px;

  //border: 1px solid ${({ theme }) => theme.color.outline};
  transition: ${({ theme }) => `${theme.speed.normal}`};

  display: flex;
  flex-direction: column;
  gap: 20px;
`;
