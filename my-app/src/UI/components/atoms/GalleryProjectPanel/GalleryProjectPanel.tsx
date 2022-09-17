import React from 'react';
import styled, { css } from 'styled-components';
import { Paragraph } from '../../text/Paragraph';
import { Fact } from '../Fact';
import { ProjectSectionFactList } from '../ProjectSectionFactList';
import { ProjectSectionText } from '../ProjectSectionText';

export interface Fact {
  label: string;
  value: React.ReactNode;
}

export interface GalleryProjectPanelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  titleSize?: 'small' | 'medium' | 'large';
  title: string;
  subtitle: string;
  body: string[];
  facts: Fact[];
}

export const GalleryProjectPanel: React.FC<GalleryProjectPanelProps> = ({
  titleSize = 'large',
  title,
  subtitle,
  body,
  facts,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <div>
        <Title $size={titleSize}>{title.toUpperCase()}</Title>
        <Subtitle>{subtitle.toUpperCase()}</Subtitle>
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
  //padding: 20px;
  //border: 1px solid ${({ theme }) => theme.color.outline};
  transition: ${({ theme }) => `${theme.speed.normal}`};

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TitleSmall = css`
  font-size: 2.2rem;
  margin-top: -6px;
  margin-left: -2px;
  margin-bottom: 2px;
`;

const TitleMedium = css`
  font-size: 3rem;
  margin-top: -6px;
  margin-left: -2px;
  margin-bottom: 3px;
`;

const TitleLarge = css`
  font-size: 4rem;
  margin-top: -8px;
  margin-left: -3px;
  margin-bottom: 3px;
`;

const Title = styled(Paragraph)<{ $size: 'small' | 'medium' | 'large' }>`
  line-height: 1;
  font-weight: ${({ theme }) => theme.font.weight.bold2};
  transition: none;

  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return TitleSmall;
      case 'medium':
        return TitleMedium;
      case 'large':
        return TitleLarge;
    }
  }};
`;

const Subtitle = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold2};
`;
