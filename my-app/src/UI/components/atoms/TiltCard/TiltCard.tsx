import React, { useRef, useState } from 'react';
import styled, { keyframes, useTheme } from 'styled-components';
import Tilt from 'react-parallax-tilt';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { ThemeInterface } from '../../../utility/themes/Theme';

const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

export interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  roleLabel: string;
  employerLabel: string;
  startDate: Date;
  endDate: Date;
  description: string;
  zIndex?: number;
  onCardEnter?: () => void;
  onCardLeave?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  roleLabel,
  employerLabel,
  startDate,
  endDate,
  description,
  zIndex = 0,
  onCardEnter,
  onCardLeave,
  ...props
}): React.ReactElement => {
  const { color, speed, font } = useTheme() as ThemeInterface;
  const [isHovered, setIsHovered] = useState<boolean>();

  const startDateString = startDate
    .toLocaleDateString(undefined, DATE_FORMAT_OPTIONS)
    .toUpperCase();

  const endDateString = endDate
    .toLocaleDateString(undefined, DATE_FORMAT_OPTIONS)
    .toUpperCase();

  return (
    <Wrapper $zIndex={zIndex} {...props}>
      <TiltHandler
        $isHovered={!!isHovered}
        glareEnable={true}
        glareColor={color.primary}
        glareMaxOpacity={0.4}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        transitionSpeed={speed.slow}
        scale={1.15}
        onEnter={() => {
          setIsHovered(true);
          onCardEnter && onCardEnter();
        }}
        onLeave={() => {
          setIsHovered(false);
          onCardLeave && onCardLeave();
        }}
      >
        <TiltCardWrapper $isHovered={isHovered}>
          <TitleTextWrapper>
            <Text $isHovered={!!isHovered} weight="light" isWrapped={false}>
              {employerLabel.toUpperCase()}
            </Text>
            <Text
              $isHovered={!!isHovered}
              weight="bold"
              size="h2"
              isWrapped={false}
              font={font.title}
            >
              {roleLabel.toUpperCase()}
            </Text>
            <br />
            {isHovered && (
              <TextDescription weight="light">{description}</TextDescription>
            )}
          </TitleTextWrapper>
          <Text
            $isHovered={!!isHovered}
            weight="light"
            textAlign="right"
            isWrapped={false}
          >
            {`${startDateString} — ${endDateString}`}
          </Text>
        </TiltCardWrapper>
      </TiltHandler>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $zIndex: number }>`
  box-sizing: border-box;
  position: relative;
  width: 400px;
  height: 400px;
  padding: 2px;
  z-index: ${({ $zIndex }) => $zIndex};
`;

const TiltHandler = styled(Tilt)<{ $isHovered: boolean }>`
  width: 100%;
  height: 100%;

  ${({ $isHovered }) => $isHovered && `border-radius: 0px 25% 0px 25%`};

  > * {
    border-radius: 0px 25% 0px 25% !important;
  }
`;

const CardAnimation = ($isHovered: boolean, theme: ThemeInterface) =>
  $isHovered
    ? keyframes`
  0% {
    background-color: ${theme.color.background};
  }
  50% { 
    background-color: ${theme.color.primary};
  }
  100% { 
    background-color: ${theme.color.text};
  }`
    : keyframes`
  0% {
    background-color: ${theme.color.text};
  }
  50% { 
    background-color: ${theme.color.primary};
  }
  100% { 
    background-color: ${theme.color.background};
  }
`;

const TiltCardWrapper = styled.div<{ $isHovered?: boolean }>`
  overflow: hidden;
  box-sizing: border-box;
  padding: 40px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  animation-duration: ${({ theme }) => theme.speed.normal}ms;
  animation-fill-mode: forwards;
  animation-name: ${({ $isHovered, theme }) =>
    $isHovered !== undefined && CardAnimation($isHovered, theme)};
  animation-timing-function: linear;
  background-color: ${({ theme }) => theme.color.background};
`;

const Text = styled(Paragraph)<{ $isHovered: boolean }>`
  color: ${({ theme, $isHovered }) =>
    $isHovered ? theme.color.background : theme.color.text};
  transition: ${({ theme }) => theme.speed.normal}ms;
`;

const TextDescription = styled(Paragraph)`
  color: ${({ theme }) => theme.color.background};
`;

const TitleTextWrapper = styled.div`
  overflow: hidden;
  height: 0px;
  flex-grow: 1;
`;
