import React from 'react';
import styled from 'styled-components';
import { GreaterThan } from '../../../../utility/styles/ResponsiveCSS';
import { BodyCenter } from '../../../layout/BodyCenter';
import { Paragraph } from '../../../text/Paragraph/Paragraph';
import { FactsList } from '../FactsList/FactsList';
import { Title } from '../Title/Title';
import { FadeIn } from '../../../other/FadeIn/FadeIn';
import {
  FADE_MODE,
  FixedScrollFade,
} from '../../../other/FixedScrollFade/FixedScrollFade';
import { BodyWide } from '../../../layout/BodyWide/BodyWide';

export interface BodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Body: React.FC<BodyProps> = ({ ...props }): React.ReactElement => {
  return (
    <>
      <Wrapper {...props}>
        <BodyWide>
          <StyledTitle>KINETIC BOARDWALK</StyledTitle>
        </BodyWide>
        <FadeIn delay={0} offset={20}>
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
        </FadeIn>
        <Layout>
          <FadeIn delay={200} offset={50}>
            <BodyCenter>
              <ParagraphText>
                The Kinetic Boardwalk is an adaptive and programmable system of
                inflating tiles that span the coastline of Venice Beach. Acting
                as both a public amenity and functional infrastructure, the
                structure aims to address high tides and rising water levels
                while substituting as an exhibitive pedestrian walkway.
              </ParagraphText>
            </BodyCenter>
          </FadeIn>
          <FadeIn delay={400} offset={50}>
            <BodyCenter>
              <ParagraphTitle>
                Inspired By Sand Dunes and Grass Hills
              </ParagraphTitle>
              <ParagraphText>
                The Kinetic Boardwalk's form is made up of a modular system of
                "bumps" that can be mechanically controlled to individually rise
                or flatten at will. A variety of built environments with
                different use cases are created. The bump can be used as a
                deployable floodwall against high tides, a lookout point or rest
                area for pedestrians.
              </ParagraphText>
            </BodyCenter>
          </FadeIn>
          <FadeIn delay={600} offset={50}>
            <BodyCenter>
              <ParagraphTitle>A Mechanized System</ParagraphTitle>
              <ParagraphText>
                Each bump is made up of a grid of interlocking tiles layered
                over inflatables which are powered by motorized air pumps. The
                tiles rise at different elevations when the round inflatables
                hidden underneath are powered to create the appearance of a
                curved surface. Rubber flaps connect each tile length wise,
                hiding cracks and providing a water-tight seal.
              </ParagraphText>
            </BodyCenter>
          </FadeIn>
        </Layout>
      </Wrapper>
    </>
  );
};

const Block = styled.div`
  width: 100%;
  height: 2000px;
`;

const Wrapper = styled.div`
  //position: fixed;
  //top: 0px;
  //left: 0px;
  width: 100%;
`;

const StyledTitle = styled(Title)`
  margin-top: 40px;
`;

const StyledFactsList = styled(FactsList)`
  ${GreaterThan(0, `margin-bottom: 0px; margin-top: 40px;`)}
  ${GreaterThan(1400, `margin-bottom: 100px; margin-top: 40px;`)}
`;

const Layout = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;

  ${GreaterThan(0, `gap: 40px; padding-top: 40px;`)}
  ${GreaterThan(600, `gap: 80px; padding-top: 80px;`)}
  ${GreaterThan(1000, `gap: 120px; padding-top: 120px`)}
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
