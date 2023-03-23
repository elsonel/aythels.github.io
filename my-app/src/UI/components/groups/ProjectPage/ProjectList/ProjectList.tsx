import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../../text/Paragraph/Paragraph';
import { ProjectLabel } from '../ProjectLabel/ProjectLabel';

export type ProjectData = {
  group: string;
  name: string;
  type: string;
  year: number;
  description: string;
};

type ProjectDataWithIndex = ProjectData & { index: number };

export interface IProjectListProps
  extends React.HTMLAttributes<HTMLDivElement> {
  projectData: ProjectData[];
  onHoverEnter?: (index: number) => void;
  onHoverLeave?: (index: number) => void;
}

export const ProjectList: React.FC<IProjectListProps> = ({
  projectData,
  onHoverEnter,
  onHoverLeave,
  ...props
}): React.ReactElement => {
  const renderProjects = (data: ProjectData[]) => {
    const elements: React.ReactElement[] = [];
    const dataGroups: { [key: string]: ProjectDataWithIndex[] } = {};

    for (let i = 0; i < data.length; i++) {
      const entry = { ...data[i], index: i };
      if (!dataGroups[entry.group]) dataGroups[entry.group] = [];
      dataGroups[entry.group].push(entry);
    }

    for (let key in dataGroups) {
      const dataGroup = dataGroups[key];
      elements.push(
        <ProjectWrapper key={key}>
          <Label>/ {dataGroup[0].group} /</Label>
          <ProjectLabelColumn>
            {dataGroup.map((p) => (
              <ProjectLabel
                key={p.name}
                name={p.name}
                type={p.type}
                year={p.year}
                onHoverLeave={() => onHoverLeave && onHoverLeave(p.index)}
                onHoverEnter={() => onHoverEnter && onHoverEnter(p.index)}
              />
            ))}
          </ProjectLabelColumn>
        </ProjectWrapper>
      );
    }

    return elements;
  };

  return <Wrapper {...props}>{renderProjects(projectData)}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
`;

const ProjectWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.size.paddingVertical}px ${theme.size.paddingVertical}px`};
`;

const ProjectLabelColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled(Paragraph)`
  text-align: right;
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.font.mono.weight.medium};
  font-family: ${({ theme }) => theme.font.mono.family};
  font-size: ${({ theme }) => theme.font.mono.size.large};
  margin-bottom: 20px;
`;
