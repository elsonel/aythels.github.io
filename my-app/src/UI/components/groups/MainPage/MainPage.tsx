import React, { useState, useRef } from 'react';
import { Textfit } from 'react-textfit';
import styled, { useTheme } from 'styled-components';
import { GreaterThan } from '../../../utility/styles/ResponsiveCSS';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { Frame } from '../../atoms/Frame/Frame';
import { HeaderOverlay } from '../HeaderOverlay/HeaderOverlay';
import { ProjectLabel } from './ProjectLabel/ProjectLabel';
import { HiddenTouchScrollY } from '../../../utility/styles/ScrollStyles';
import { Logo } from '../AboutContent/Logo/Logo';

const DEVELOPMENT_DATA = [
  {
    name: 'CENTRO FORECASTING',
    type: 'Web Application',
    year: 2022,
    description: `Lorem ipsum dolor sit amet. Eos dolorem iure ea architecto similique aut dignissimos repudiandae.`,
  },
  {
    name: 'CENTRO BUDGETING',
    type: 'Web Application',
    year: 2022,
    description: `Sed reprehenderit quas est saepe rerum ut impedit autem est rerum similique ut rerum ipsum sed sunt ducimus. 
    `,
  },
  {
    name: 'RPG NODE BOARD',
    type: 'Web Application',
    year: 2021,
    description: `Et porro numquam est molestias quia ea quia culpa ea minima magnam ea distinctio placeat.
    `,
  },
];

const DESIGN_DATA = [
  {
    name: 'PORTFOL.IO',
    type: 'User Interface',
    year: 2020,
    description: `Cum veritatis voluptatibus non maiores galisum vel nihil sunt eum error eaque non itaque nisi.
    `,
  },
  {
    name: 'SPOTLIGHT',
    type: 'User Interface',
    year: 2020,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
  {
    name: 'FOLD PAVILION',
    type: 'Architecture',
    year: 2022,
    description: `Aut ullam sequi vel omnis quia eum doloribus repudiandae ut labore pariatur`,
  },
  {
    name: 'KINETIC BOARDWALK',
    type: 'Architecture',
    year: 2020,
    description: `Et voluptatem accusantium cum vero velit sed repudiandae. `,
  },
  {
    name: 'BASILISK TOWER',
    type: 'Architecture',
    year: 2019,
    description: `Est nemo soluta est cumque saepe est beatae aspernatur et deserunt laudantium sed ullam explicabo.
    `,
  },
];

const BIO_TEXT = `I'm a software developer with a formal background in architecture. My passion lies in engineering resilient solutions that integrate well with sophisticated design and user experience.`;

export interface IMainPageProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MainPage: React.FC<IMainPageProps> = ({
  ...props
}): React.ReactElement => {
  const { color } = useTheme();
  const [hoveredText, setHoveredText] = useState('');

  return (
    <Wrapper {...props}>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <TextWrapper>
        <LineText $color={hoveredText ? color.primary : color.text}>
          {hoveredText ? hoveredText : BIO_TEXT}
        </LineText>
      </TextWrapper>
      <ProjectWrapper>
        <Label>/ DEVELOPMENT /</Label>
        <ProjectLabelColumn>
          {DEVELOPMENT_DATA.map((p) => (
            <ProjectLabel
              name={p.name}
              type={p.type}
              year={p.year}
              onHoverLeave={() => setHoveredText('')}
              onHoverEnter={() => setHoveredText(p.description)}
            />
          ))}
        </ProjectLabelColumn>
      </ProjectWrapper>
      <ProjectWrapper>
        <Label>/ DESIGN /</Label>
        <ProjectLabelColumn>
          {DESIGN_DATA.map((p) => (
            <ProjectLabel
              name={p.name}
              type={p.type}
              year={p.year}
              onHoverLeave={() => setHoveredText('')}
              onHoverEnter={() => setHoveredText(p.description)}
            />
          ))}
        </ProjectLabelColumn>
      </ProjectWrapper>
    </Wrapper>
  );
};

const LogoWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  padding-left: calc(52px + 20px);
  padding-top: calc(52px + 30px);
`;

const TextWrapper = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  padding-left: calc(52px + 20px);
  padding-bottom: calc(20px + 30px);
`;

const LineText = styled(Paragraph)<{ $color: string }>`
  width: 400px;
  color: ${({ $color }) => $color};
`;

const Wrapper = styled.div`
  width: 100%;
`;

const ProjectWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
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
