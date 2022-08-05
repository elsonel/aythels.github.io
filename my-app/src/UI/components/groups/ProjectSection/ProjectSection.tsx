import React from 'react';
import styled from 'styled-components';
import { ProjectSectionTitle } from '../../atoms/ProjectSectionTitle';

export interface ProjectSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactElement[] | React.ReactElement;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({
  title,
  children,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <ProjectSectionTitle>{title}</ProjectSectionTitle>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;

  > * {
    width: 100%;
    margin-bottom: 20px;
  }
`;
