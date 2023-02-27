import React from 'react';
import styled, { useTheme } from 'styled-components';
import { GreaterThan } from '../../../../utility/styles/ResponsiveCSS';
import { Paragraph } from '../../../text/Paragraph/Paragraph';

export interface BodyProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageSrcSet?: string;
}

export const Body: React.FC<BodyProps> = ({
  title,
  subtitle,
  imageSrc,
  imageSrcSet,
  ...props
}): React.ReactElement => {
  return (
    <BodyWrapper {...props}>
      <Title>KINETIC BOARDWALK</Title>
      <Layout>
        <TextWrapper>
          <FactsWrapper>
            <div>
              <FactTitle>TYPE</FactTitle>
              <FactValue>Public Mega-Infastructure</FactValue>
            </div>
            <div>
              <FactTitle>REGION</FactTitle>
              <FactValue>Los Angeles, California</FactValue>
            </div>
            <div>
              <FactTitle>SUPERVISOR</FactTitle>
              <FactValue>Nathan Bishop (ARC380)</FactValue>
            </div>
            <div>
              <FactTitle>COLLABORATORS</FactTitle>
              <FactValue>Elson Liang, Omar</FactValue>
            </div>
            <div>
              <FactTitle>COMPLETED</FactTitle>
              <FactValue>December 2020</FactValue>
            </div>
          </FactsWrapper>
        </TextWrapper>
        <TextWrapper>
          <IntroText>
            The Kinetic Boardwalk is an adaptive and programmable system of
            inflating tiles that span the coastline of Venice Beach. Acting as
            both a public amenity and functional infrastructure, the structure
            aims to address high tides and rising water levels while
            substituting as an exhibitive pedestrian walkway.
          </IntroText>
        </TextWrapper>
      </Layout>
      <Layout>
        <TextWrapper>
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
        </TextWrapper>
        <TextWrapper>
          <ParagraphTitle>A Mechanized System</ParagraphTitle>
          <ParagraphText>
            Each bump is made up of a grid of interlocking tiles layered over
            inflatables which are powered by motorized air pumps. The tiles rise
            at different elevations when the round inflatables hidden underneath
            are powered to create the appearance of a curved surface. Rubber
            flaps connect each tile length wise, hiding cracks and providing a
            water-tight seal.
          </ParagraphText>
        </TextWrapper>
      </Layout>
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  ${GreaterThan(0, `padding: 30px 20px;`)}
  ${GreaterThan(500, `padding: 40px 30px;`)}
`;

const Layout = styled.div`
  width: min(600px, 100%);
  display: flex;
  flex-direction: column;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${GreaterThan(0, `gap: 60px;`)}
  ${GreaterThan(500, `gap: 80px;`)}
`;

const TextWrapper = styled.div`
  width: min(600px, 100%);
`;

const Title = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.title.family};
  font-weight: ${({ theme }) => theme.font.title.weight.bold};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.font.title.size.h6};
  user-select: none;
`;

const IntroText = styled(Paragraph)`
  ${GreaterThan(0, `padding: 100px 0px;`)}
  ${GreaterThan(500, `padding: 120px 0px;`)}

  text-align: center;
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.font.default.weight.medium};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.large};`) +
    GreaterThan(500, `font-size: ${theme.font.default.size.h6};`)}
`;

const ParagraphTitle = styled(Paragraph)`
  padding: 10px 0px;
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
  color: ${({ theme }) => theme.color.text};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.h4};`) +
    GreaterThan(500, `font-size: ${theme.font.default.size.h3};`)}
`;

const ParagraphText = styled(Paragraph)`
  color: ${({ theme }) => theme.color.text};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.default};`) +
    GreaterThan(500, `font-size: ${theme.font.default.size.large};`)}
`;

const FactsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  ${GreaterThan(0, `gap: 30px;`)}
  ${GreaterThan(500, `gap: 40px;`)}
`;

const FactTitle = styled(Paragraph)`
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.default};`) +
    GreaterThan(500, `font-size: ${theme.font.default.size.large};`)};
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
  margin-bottom: 2px;
`;

const FactValue = styled(Paragraph)`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.font.default.size.large};

  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.default};`) +
    GreaterThan(500, `font-size: ${theme.font.default.size.large};`)};
`;
