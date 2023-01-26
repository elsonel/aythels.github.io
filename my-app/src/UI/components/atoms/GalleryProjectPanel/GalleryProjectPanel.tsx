import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph';
import { TextLink } from '../../text/TextLink';
import { Fact } from '../Fact';
import { ProjectSectionFactList } from '../ProjectSectionFactList';
import { Link } from '../../inputs/Link';

export interface Fact {
  label: string;
  value: React.ReactNode;
  to?: string;
}

export interface GalleryProjectPanelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  body: React.ReactNode[];
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
          <Paragraph key={i}>{e}</Paragraph>
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
                  <StyledLink href={e.to}>
                    <TextLink weight="bold">{e.value}</TextLink>
                  </StyledLink>
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
  padding: 18px 20px;
  border: 1px solid ${({ theme }) => theme.color.outline};
  transition: ${({ theme }) => theme.speed.normal}ms;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  vertical-align: top;
`;
