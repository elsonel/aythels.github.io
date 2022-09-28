import React from 'react';
import styled from 'styled-components';
import { FactProps } from '../Fact';

export interface ProjectSectionFactListProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<FactProps>[];
}

export const ProjectSectionFactList: React.FC<ProjectSectionFactListProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
