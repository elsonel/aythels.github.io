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

      <TopLayout>
        <IntroText>
          The Kinetic Boardwalk is an adaptive and programmable system of
          inflating tiles that span the coastline of Venice Beach. Acting as
          both a public amenity and functional infrastructure, the structure
          aims to address high tides and rising water levels while substituting
          as an exhibitive pedestrian walkway.
        </IntroText>
        <FactsWrapper>
          <Fact>
            <FactTitle>TYPE</FactTitle>
            <FactValue>Public Mega-Infastructure</FactValue>
          </Fact>
          <Fact>
            <FactTitle>REGION</FactTitle>
            <FactValue>Los Angeles, California</FactValue>
          </Fact>
          <Fact>
            <FactTitle>SUPERVISOR</FactTitle>
            <FactValue>Nathan Bishop (ARC380)</FactValue>
          </Fact>
          <Fact>
            <FactTitle>COLLABORATORS</FactTitle>
            <FactValue>Elson Liang, Omar</FactValue>
          </Fact>
          <Fact>
            <FactTitle>COMPLETED</FactTitle>
            <FactValue>December 2020</FactValue>
          </Fact>
        </FactsWrapper>
      </TopLayout>
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
  width: 100%;
`;

const Layout = styled.div`
  box-sizing: border-box;
  width: min(600px, 100%);
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${GreaterThan(0, `gap: 80px; padding: 30px 20px;`)}
  ${GreaterThan(600, `gap: 100px; padding: 40px 30px;`)}
`;

const TopLayout = styled(Layout)`
  margin-top: 200px;
  margin-bottom: 200px;
`;

const TextWrapper = styled.div`
  width: 100%;
`;

const Title = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.title.family};
  font-weight: ${({ theme }) => theme.font.title.weight.bold};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.font.title.size.h6};
  user-select: none;
`;

const IntroText = styled(Paragraph)`
  text-align: center;
  color: ${({ theme }) => theme.color.text};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.large};`) +
    GreaterThan(600, `font-size: ${theme.font.default.size.h6};`)}
`;

const ParagraphTitle = styled(Paragraph)`
  margin-bottom: 10px;
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
  color: ${({ theme }) => theme.color.text};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.h4};`) +
    GreaterThan(600, `font-size: ${theme.font.default.size.h3};`)}
`;

const ParagraphText = styled(Paragraph)`
  color: ${({ theme }) => theme.color.text};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.default};`) +
    GreaterThan(600, `font-size: ${theme.font.default.size.large};`)}
`;

const FactsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  ${GreaterThan(0, `gap: 30px;`)}
  ${GreaterThan(600, `gap: 40px;`)}
`;

const Fact = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${GreaterThan(0, `flex-direction: column; align-items: start;`)}
  ${GreaterThan(600, `flex-direction: row; align-items: center;`)}
`;

const FactTitle = styled(Paragraph)`
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
`;

const FactValue = styled(Paragraph)`
  color: ${({ theme }) => theme.color.text};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.large};`) +
    GreaterThan(600, `font-size: ${theme.font.default.size.h6};`)};
`;
