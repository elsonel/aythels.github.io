import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph';

export interface ProjectSectionTextProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: string[] | string;
}

export const ProjectSectionText: React.FC<ProjectSectionTextProps> = ({
  title,
  children,
  ...props
}): React.ReactElement => {
  !Array.isArray(children) && (children = [children]);

  return (
    <Wrapper {...props}>
      {title && <Title>{title}</Title>}
      {children.map((e, i) => (
        <Paragraph key={i}>{e}</Paragraph>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold2};
`;
