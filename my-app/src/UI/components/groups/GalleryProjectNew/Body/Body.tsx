import React from 'react';
import styled, { useTheme } from 'styled-components';
import { GreaterThan } from '../../../../utility/styles/ResponsiveCSS';
import { BodyCenter } from '../../../layout/BodyCenter';
import { Paragraph } from '../../../text/Paragraph/Paragraph';
import { FactsList } from '../FactsList/FactsList';
import { Gallery } from '../Gallery/Gallery';
import { BodyWide } from '../../../layout/BodyWide';
import { Textfit } from 'react-textfit';

export interface BodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Body: React.FC<BodyProps> = ({ ...props }): React.ReactElement => {
  return (
    <BodyWrapper {...props}>
      <BodyWide>
        <StyledTextFit mode="single" forceSingleModeWidth min={24} max={1000}>
          <Title>KINETIC BOARDWALK</Title>
        </StyledTextFit>
      </BodyWide>
      <Layout>
        <StyledFactsList
          facts={[
            {
              label: 'TYPE',
              value: 'Public Mega-Infastructure',
            },
            {
              label: 'REGION',
              value: 'Los Angeles, California',
            },
            {
              label: 'SUPERVISOR',
              value: 'Nathan Bishop (ARC380)',
            },
            {
              label: 'COLLABORATORS',
              value: 'Elson Liang, Omar Abdellatif',
            },
            {
              label: 'COMPLETED',
              value: 'December 2020',
            },
          ]}
        />
        <BodyCenter>
          <ParagraphText>
            The Kinetic Boardwalk is an adaptive and programmable system of
            inflating tiles that span the coastline of Venice Beach. Acting as
            both a public amenity and functional infrastructure, the structure
            aims to address high tides and rising water levels while
            substituting as an exhibitive pedestrian walkway.
          </ParagraphText>
        </BodyCenter>
        <BodyCenter>
          <ParagraphTitle>
            Inspired By Sand Dunes and Grass Hills
          </ParagraphTitle>
          <ParagraphText>
            The Kinetic Boardwalk's form is made up of a modular system of
            "bumps" that can be mechanically controlled to individually rise or
            flatten at will. A variety of built environments with different use
            cases are created. The bump can be used as a deployable floodwall
            against high tides, a lookout point or rest area for pedestrians.
          </ParagraphText>
        </BodyCenter>
        <BodyCenter>
          <ParagraphTitle>A Mechanized System</ParagraphTitle>
          <ParagraphText>
            Each bump is made up of a grid of interlocking tiles layered over
            inflatables which are powered by motorized air pumps. The tiles rise
            at different elevations when the round inflatables hidden underneath
            are powered to create the appearance of a curved surface. Rubber
            flaps connect each tile length wise, hiding cracks and providing a
            water-tight seal.
          </ParagraphText>
        </BodyCenter>
      </Layout>
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div`
  width: 100%;
`;

const StyledTextFit = styled(Textfit)`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const StyledFactsList = styled(FactsList)`
  ${GreaterThan(0, `margin-bottom: 0px;`)}
  ${GreaterThan(1400, `margin-bottom: 100px;`)}
`;

const Title = styled(Paragraph)`
  text-align: center;
  font-size: inherit;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.title.family};
  line-height: 1;
  overflow-wrap: normal;
`;

const Layout = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 40px 0px;
  display: flex;
  flex-direction: column;

  ${GreaterThan(0, `gap: 40px;`)}
  ${GreaterThan(600, `gap: 80px;`)}
  ${GreaterThan(1000, `gap: 120px;`)}
`;

const ParagraphTitle = styled(Paragraph)`
  margin-bottom: 10px;
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
  color: ${({ theme }) => theme.color.text};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.h6};`) +
    GreaterThan(600, `font-size: ${theme.font.default.size.h4};`)}
`;

const ParagraphText = styled(Paragraph)`
  color: ${({ theme }) => theme.color.text};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.default};`) +
    GreaterThan(600, `font-size: ${theme.font.default.size.large};`)}
`;
