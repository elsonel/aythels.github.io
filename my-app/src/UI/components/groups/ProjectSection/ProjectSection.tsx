import React from 'react';
import styled from 'styled-components';
import { ProjectSectionTitle } from '../../atoms/ProjectSectionTitle';

export interface ProjectSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactNode;
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
  padding-bottom: 60px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  > * {
    width: 100%;
  }
`;
