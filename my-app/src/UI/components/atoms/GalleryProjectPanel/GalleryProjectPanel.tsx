import React from 'react';
import styled, { css } from 'styled-components';
import { LinkFake } from 'UI/components/inputs/LinkFake';
import { TextLink } from 'UI/components/text/TextLink';
import { Paragraph } from '../../text/Paragraph';
import { Fact } from '../Fact';
import { PageTitle, PageTitleBreakpoint } from '../PageTitle';
import { ProjectSectionFactList } from '../ProjectSectionFactList';
import { ProjectSectionText } from '../ProjectSectionText';

export interface Fact {
  label: string;
  value: React.ReactNode;
  to?: string;
  onClick?: () => void;
}

export interface GalleryProjectPanelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  body: string[];
  facts: Fact[];
  titleBreakpoints?: PageTitleBreakpoint[];
}

export const GalleryProjectPanel: React.FC<GalleryProjectPanelProps> = ({
  title,
  subtitle,
  body,
  facts,
  titleBreakpoints,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <div>
        <Title breakpoints={titleBreakpoints}>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
      {body.map((e, i) => (
        <ProjectSectionText key={i}>{e}</ProjectSectionText>
      ))}
      <ProjectSectionFactList>
        {facts.map((e, i) => (
          <Fact
            key={i}
            label={e.label}
            isAlwaysWrapped={true}
            value={
              e.to ? (
                <LinkFake href={e.to} onClick={e.onClick}>
                  <TextLink weight="bold2">{e.value}</TextLink>
                </LinkFake>
              ) : (
                e.value
              )
            }
          />
        ))}
      </ProjectSectionFactList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;

  width: 100%;
  //padding: 20px;
  //border: 1px solid ${({ theme }) => theme.color.outline};
  transition: ${({ theme }) => `${theme.speed.normal}`};

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled(PageTitle)`
  padding: 0px;
`;

const Subtitle = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold2};
`;
