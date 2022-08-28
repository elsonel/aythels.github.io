import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph';

export interface ProjectSectionTextProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: string;
}

export const ProjectSectionText: React.FC<ProjectSectionTextProps> = ({
  title,
  children,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      {title && <Title>{title}</Title>}
      <Paragraph>{children}</Paragraph>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled(Paragraph)`
  margin-bottom: 6px;

  font-size: ${({ theme }) => theme.font.size.h6};
  font-weight: ${({ theme }) => theme.font.weight.bold2};
`;
