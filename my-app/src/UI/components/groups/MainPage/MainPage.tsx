import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { zeroPad } from '../../../utility/scripts/zeroPad';
import { GreaterThan } from '../../../utility/styles/ResponsiveCSS';
import { FrameLayout } from '../../layout/FrameLayout/FrameLayout';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { ProjectLabel } from './ProjectLabel/ProjectLabel';

export type ProjectData = {
  group: string;
  name: string;
  type: string;
  year: number;
  description: string;
};

const DATA: ProjectData[] = [
  {
    group: 'DEVELOPMENT',
    name: 'CENTRO FORECASTING',
    type: 'Web Application',
    year: 2022,
    description: `Lorem ipsum dolor sit amet. Eos dolorem iure ea architecto similique aut dignissimos repudiandae.`,
  },
  {
    group: 'DEVELOPMENT',
    name: 'CENTRO BUDGETING',
    type: 'Web Application',
    year: 2022,
    description: `Sed reprehenderit quas est saepe rerum ut impedit autem est rerum similique ut rerum ipsum sed sunt ducimus. 
    `,
  },
  {
    group: 'DEVELOPMENT',
    name: 'RPG NODE BOARD',
    type: 'Web Application',
    year: 2021,
    description: `Et porro numquam est molestias quia ea quia culpa ea minima magnam ea distinctio placeat.
    `,
  },
  {
    group: 'DESIGN',
    name: 'PORTFOL.IO',
    type: 'User Interface',
    year: 2020,
    description: `Cum veritatis voluptatibus non maiores galisum vel nihil sunt eum error eaque non itaque nisi.
    `,
  },
  {
    group: 'DESIGN',
    name: 'SPOTLIGHT',
    type: 'User Interface',
    year: 2020,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
  {
    group: 'ARCHIVE',
    name: 'FOLD PAVILION',
    type: 'Architecture',
    year: 2022,
    description: `Aut ullam sequi vel omnis quia eum doloribus repudiandae ut labore pariatur`,
  },
  {
    group: 'ARCHIVE',
    name: 'KINETIC BOARDWALK',
    type: 'Architecture',
    year: 2020,
    description: `Et voluptatem accusantium cum vero velit sed repudiandae. `,
  },
  {
    group: 'ARCHIVE',
    name: 'BASILISK TOWER',
    type: 'Architecture',
    year: 2019,
    description: `Est nemo soluta est cumque saepe est beatae aspernatur et deserunt laudantium sed ullam explicabo.
    `,
  },
];

const BIO_TEXT = `I'm a software developer with a passion for engineering resilient solutions that integrate well with sophisticated design and user experience.`;

export interface IMainPageProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MainPage: React.FC<IMainPageProps> = ({
  ...props
}): React.ReactElement => {
  const { color } = useTheme();
  const defaultTextdata = {
    text: BIO_TEXT,
    color: color.text,
    number: zeroPad(0, 3),
  };
  const [textData, setTextData] = useState(defaultTextdata);

  const renderProjects = (data: ProjectData[]) => {
    const elements: React.ReactElement[] = [];

    const dataGroups: { [key: string]: ProjectData[] } = {};

    let projectIndex = 0;

    for (let i = 0; i < data.length; i++) {
      const entry = data[i];
      if (!dataGroups[entry.group]) dataGroups[entry.group] = [];
      dataGroups[entry.group].push(entry);
    }

    for (let key in dataGroups) {
      const dataGroup = dataGroups[key];
      elements.push(
        <ProjectWrapper>
          <Label>/ {dataGroup[0].group} /</Label>
          <ProjectLabelColumn>
            {dataGroup.map((p) => (
              <ProjectLabel
                name={p.name}
                type={p.type}
                year={p.year}
                onHoverLeave={() => setTextData(defaultTextdata)}
                onHoverEnter={() =>
                  setTextData({
                    text: p.description,
                    color: color.primary,
                    number: zeroPad((projectIndex += 1), 3),
                  })
                }
              />
            ))}
          </ProjectLabelColumn>
        </ProjectWrapper>
      );
    }

    return elements;
  };

  return (
    <FrameLayout
      stickyChild={
        <LeftPosition>
          <TextWrapper>
            <LineText color={textData.color}>{textData.text}</LineText>
            <LineTextLabel color={textData.color}>
              {textData.number}
            </LineTextLabel>
          </TextWrapper>
        </LeftPosition>
      }
      {...props}
    >
      {renderProjects(DATA)}
    </FrameLayout>
  );
};

const LeftPosition = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  padding: 30px 20px;
  ${GreaterThan(0, `display: none;`)}
  ${GreaterThan(1000, `display: block;`)}
`;

const TextWrapper = styled.div`
  overflow: hidden;
  width: 200px;
  height: 250px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LineTextLabel = styled(Paragraph)`
  width: 100%;

  font-weight: ${({ theme }) => theme.font.mono.weight.medium};
  font-family: ${({ theme }) => theme.font.mono.family};
  font-size: ${({ theme }) => theme.font.default.size.large};
  transition: ${({ theme }) => theme.speed.normal}ms;
`;

const LineText = styled(Paragraph)`
  width: 100%;
  font-size: ${({ theme }) => theme.font.default.size.large};
  transition: ${({ theme }) => theme.speed.normal}ms;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const ProjectWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 30px 20px;
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
