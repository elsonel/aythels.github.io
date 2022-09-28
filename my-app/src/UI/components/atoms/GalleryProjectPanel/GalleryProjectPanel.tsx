import React from 'react';
import styled from 'styled-components';
import { TextLink } from '../../text/TextLink';
import { Fact } from '../Fact';
import { ProjectSectionFactList } from '../ProjectSectionFactList';
import { ProjectSectionText } from '../ProjectSectionText';

export interface Fact {
  label: string;
  value: React.ReactNode;
  to?: string;
}

export interface GalleryProjectPanelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  body: string[];
  facts: Fact[];
}

export const GalleryProjectPanel: React.FC<GalleryProjectPanelProps> = ({
  body,
  facts,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Section>
        {body.map((e, i) => (
          <ProjectSectionText key={i}>{e}</ProjectSectionText>
        ))}
      </Section>
      <Section>
        <ProjectSectionFactList>
          {facts.map((e, i) => (
            <Fact
              key={i}
              label={e.label}
              isAlwaysWrapped={true}
              value={
                e.to ? (
                  <a href={e.to} target="_blank" rel="noreferrer">
                    <TextLink weight="bold2">{e.value}</TextLink>
                  </a>
                ) : (
                  e.value
                )
              }
            />
          ))}
        </ProjectSectionFactList>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Section = styled.div`
  box-sizing: border-box;

  width: 100%;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.color.outline};
  transition: ${({ theme }) => `${theme.speed.normal}`};

  display: flex;
  flex-direction: column;
  gap: 20px;
`;
