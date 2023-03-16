import React, { useState, useRef } from 'react';
import { Textfit } from 'react-textfit';
import styled, { useTheme } from 'styled-components';
import { GreaterThan } from '../../../utility/styles/ResponsiveCSS';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { Frame } from '../../atoms/Frame/Frame';
import { HeaderOverlay } from '../HeaderOverlay/HeaderOverlay';
import { ProjectLabel } from './ProjectLabel/ProjectLabel';

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
  const { color, icon } = useTheme();
  const [hoveredText, setHoveredText] = useState({
    name: '',
    description: '',
  });
  const lineRef = useRef<HTMLDivElement>(null);
  const lineVerticalRef = useRef<HTMLDivElement>(null);

  const onPointerMove = (e: React.PointerEvent) => {
    if (!lineRef.current) return;

    lineRef.current.style.transform = `translateY(${e.clientY}px)`;
  };

  return (
    <Wrapper onPointerMove={onPointerMove} {...props}>
      {/*<HeaderWrapper>
        <Name>ELSON LIANG</Name>
        <Text>Developer & Designer</Text>
        </HeaderWrapper>*/}
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
                onHoverLeave={() =>
                  setHoveredText({ name: '', description: '' })
                }
                onHoverEnter={() =>
                  setHoveredText({ name: p.name, description: p.description })
                }
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
                onHoverLeave={() =>
                  setHoveredText({ name: '', description: '' })
                }
                onHoverEnter={() =>
                  setHoveredText({ name: p.name, description: p.description })
                }
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
  padding: 40px;
  padding-bottom: 0;

  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.logo.family};
  font-size: 2.4rem;
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
  //transform-origin: center left;
  //transform: scaleX(1.12);
`;

const Subtitle = styled(Paragraph).attrs(() => ({
  size: 'h5',
  isWrapped: false,
}))`
  padding: 0px 40px;
  color: ${({ theme }) => theme.color.text};
`;

const BioWrapper = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
`;

const InfoWrapper = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  width: 600px;
  left: 0px;
  bottom: 0px;
  transition: ${({ theme }) => theme.speed.slow}ms;
  background-color: ${({ theme }) => theme.color.background};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
`;

const Line = styled.div<{ $isHovered: boolean }>`
  z-index: -1;
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 1px;
  transition: ${({ theme }) => theme.speed.instant}ms;
  transition-timing-function: linear;
  background-color: ${({ $isHovered, theme }) =>
    $isHovered ? theme.color.primary : theme.color.outline};
`;

const LineTitleWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;

  position: absolute;
  bottom: 0px;
  left: 0px;
`;

const LineText = styled(Paragraph)`
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.primary};
  padding: 40px;
`;

const BackgroundTitle = styled(Paragraph)`
  color: ${({ theme }) => theme.color.outline};
  font-family: ${({ theme }) => theme.font.title.family};
  font-size: inherit;
  line-height: 1;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Project = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 200px 0px;
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
