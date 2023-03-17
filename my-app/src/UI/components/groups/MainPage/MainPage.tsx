import React, { useState, useRef } from 'react';
import { Textfit } from 'react-textfit';
import styled, { useTheme } from 'styled-components';
import { GreaterThan } from '../../../utility/styles/ResponsiveCSS';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { Frame } from '../../atoms/Frame/Frame';
import { HeaderOverlay } from '../HeaderOverlay/HeaderOverlay';
import { ProjectLabel } from './ProjectLabel/ProjectLabel';
import { HiddenTouchScrollY } from '../../../utility/styles/ScrollStyles';

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

export interface IMainPageProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MainPage: React.FC<IMainPageProps> = ({
  ...props
}): React.ReactElement => {
  const [hoveredText, setHoveredText] = useState('');

  return (
    <Wrapper {...props}>
      <BioWrapper>
        <LineText>{hoveredText}</LineText>
        {/*<Name>ELSON LIANG</Name>
        <Paragraph>Developer & Designer</Paragraph>*/}
      </BioWrapper>
      {/*<InfoWrapper $isVisible={!!hoveredText.name}>
        <LineText>{hoveredText.description}</LineText>
        </InfoWrapper>*/}
      <Project>
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
      </Project>
      <Frame />
      <HeaderOverlay
        iconTab={{
          href: '/',
        }}
        tabs={[
          {
            label: 'PROJECTS',
            href: '/',
            isActive: true,
          },
          {
            label: 'ABOUT',
            href: '/',
            isActive: false,
          },
        ]}
      />
    </Wrapper>
  );
};

const Name = styled(Paragraph).attrs(() => ({
  size: 'h1',
  isWrapped: false,
}))`
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.logo.family};
  font-size: 2.4rem;
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
`;

const BioWrapper = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;

  padding-left: calc(52px + 20px);
  padding-bottom: calc(20px + 20px);
`;

const LineText = styled(Paragraph)`
  width: 400px;
  //margin-bottom: 20px;
  color: ${({ theme }) => theme.color.primary};
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Project = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-top: 52px;
  ${GreaterThan(0, `padding-bottom: 0px;`)}
  ${GreaterThan(800, `padding-bottom: 20px;`)}
`;

const ProjectWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  ${GreaterThan(0, `padding: 30px 20px;`)}
  ${GreaterThan(800, `padding: 40px 40px;`)}
`;

const ProjectLabelColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled(Paragraph)`
  text-align: right;
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
  margin-bottom: 20px;
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.default};`) +
    GreaterThan(800, `font-size: ${theme.font.default.size.large};`)};
`;
