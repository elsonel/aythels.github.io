import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import useOnWindowResize from '../../../utility/hooks/useOnWindowResize';
import { remap } from '../../../utility/scripts/remap';

// TODO: Refactor this

const MIN_STRIPES = 13;

const TRANSITION = 400;
const TRANSITION_SINGLE = 400;

const renderColumns = (columnCount: number, rowCount: number) => {
  const elements: React.ReactElement[] = [];
  const delay = TRANSITION / columnCount;
  const startingIndex = columnCount % 4 === 1 ? 1 : 0;

  for (let i = 0; i < columnCount; i++) {
    if ((i + startingIndex) % 2 === 0) continue;

    const progress = 1 - Math.sin(remap(i, 0, columnCount - 1, 0, Math.PI));

    elements.push(
      <Test
        $colStart={i + 1}
        $colEnd={i + 2}
        $rowStart={1}
        $rowEnd={rowCount + 1}
      >
        <StripeVerticalWrapper
          $delay={TRANSITION + 800 + progress * TRANSITION}
        >
          <StripeVertical $delay={i * delay} />
        </StripeVerticalWrapper>
      </Test>
    );
  }

  return elements;
};

const renderRows = (columnCount: number, rowCount: number) => {
  const elements: React.ReactElement[] = [];
  const delay = TRANSITION / rowCount;
  const startingIndex = rowCount % 4 === 1 ? 1 : 0;

  for (let i = 0; i < rowCount; i++) {
    if ((i + startingIndex) % 2 === 0) continue;

    const progress = Math.sin(remap(i, 0, rowCount - 1, 0, Math.PI));

    elements.push(
      <Test
        $colStart={1}
        $colEnd={columnCount + 1}
        $rowStart={i + 1}
        $rowEnd={i + 2}
      >
        <StripeHorizontalWrapper
          $delay={TRANSITION + 200 + progress * TRANSITION}
        >
          <StripeHorizontal $delay={TRANSITION - i * delay} />
        </StripeHorizontalWrapper>
      </Test>
    );
  }

  return elements;
};

export interface LoadingAnimationProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  ...props
}): React.ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [gridSettings, setGridSettings] = useState<{
    gridWidth: number;
    gridHeight: number;
    barThickness: number;
    columns: number;
    rows: number;
  }>();

  const [,] = useOnWindowResize(() => {
    if (!wrapperRef.current) return;

    const dimensions = wrapperRef.current.getBoundingClientRect();

    const barThickness =
      Math.min(dimensions.width, dimensions.height) / MIN_STRIPES;

    let altFlowStripeCount =
      MIN_STRIPES +
      Math.ceil(Math.abs(dimensions.width - dimensions.height) / barThickness);

    altFlowStripeCount = 2 * Math.floor(altFlowStripeCount / 2) + 1;

    const isLandscape = dimensions.width > dimensions.height;

    setGridSettings({
      gridWidth: dimensions.width,
      gridHeight: dimensions.height,
      barThickness: barThickness,
      columns: isLandscape ? altFlowStripeCount : MIN_STRIPES,
      rows: isLandscape ? MIN_STRIPES : altFlowStripeCount,
    });
  });

  return (
    <Wrapper ref={wrapperRef} {...props}>
      {gridSettings && (
        <Grid
          $barThickness={gridSettings.barThickness}
          $columns={gridSettings.columns}
          $rows={gridSettings.rows}
        >
          {renderColumns(gridSettings.columns, gridSettings.rows)}
          {renderRows(gridSettings.columns, gridSettings.rows)}
          <Logo
            $colStart={1}
            $colEnd={2}
            $rowStart={1}
            $rowEnd={6}
            $colOffset={Math.floor(gridSettings.columns / 2) - 2}
            $rowOffset={Math.floor(gridSettings.rows / 2) - 2}
          />
          <LogoMiddle
            $colStart={2}
            $colEnd={6}
            $rowStart={1}
            $rowEnd={2}
            $colOffset={Math.floor(gridSettings.columns / 2) - 2}
            $rowOffset={Math.floor(gridSettings.rows / 2) - 2}
          />
          <LogoMiddle
            $colStart={2}
            $colEnd={6}
            $rowStart={3}
            $rowEnd={4}
            $colOffset={Math.floor(gridSettings.columns / 2) - 2}
            $rowOffset={Math.floor(gridSettings.rows / 2) - 2}
          />
          <Logo
            $colStart={1}
            $colEnd={6}
            $rowStart={5}
            $rowEnd={6}
            $colOffset={Math.floor(gridSettings.columns / 2) - 2}
            $rowOffset={Math.floor(gridSettings.rows / 2) - 2}
          />
        </Grid>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100dvh;
  height: 100vh;
`;

const Grid = styled.div<{
  $barThickness: number;
  $columns: number;
  $rows: number;
}>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: ${({ $barThickness, $columns }) =>
    `repeat(${$columns}, ${$barThickness}px)`};
  grid-template-rows: ${({ $barThickness, $rows }) =>
    `repeat(${$rows}, ${$barThickness}px)`};
  justify-content: center;
  align-content: center;
`;

const Test = styled.div<{
  $colStart: number;
  $colEnd: number;
  $rowStart: number;
  $rowEnd: number;
}>`
  width: 100%;
  height: 100%;

  grid-column-start: ${({ $colStart }) => $colStart};
  grid-column-end: ${({ $colEnd }) => $colEnd};

  grid-row-start: ${({ $rowStart }) => $rowStart};
  grid-row-end: ${({ $rowEnd }) => $rowEnd};
`;

const AnimationVertical = keyframes`
  0% {
    height: 0%;
  }
  100% { 
    height: 100%;
  }
`;

const AnimationVerticalWrapper = keyframes`
  0% {
    top: 0%;
    height: 100%;
  }
  100% { 
    top: 50%;
    height: 0%;
  }
`;

const StripeBase = styled.div`
  overflow: hidden;
  position: relative;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
`;

const StripeVerticalWrapper = styled(StripeBase)<{ $delay: number }>`
  animation-duration: ${TRANSITION_SINGLE}ms;
  animation-fill-mode: forwards;
  animation-name: ${AnimationVerticalWrapper};
  animation-delay: ${({ $delay }) => $delay}ms;

  //animation-timing-function: ease-in;
`;

const StripeVertical = styled(StripeBase)<{ $delay: number }>`
  height: 0%;

  animation-duration: ${TRANSITION_SINGLE}ms;
  animation-fill-mode: forwards;
  animation-name: ${AnimationVertical};
  animation-delay: ${({ $delay }) => $delay}ms;
  background-color: black;
`;

const AnimationHorizontal = keyframes`
  0% {
    left: 100%;
    width: 0%;
  }
  100% { 
    left: 0%;
    width: 100%;
  }
`;

const AnimationHorizontalWrapper = keyframes`
  0% {
    left: 0%;
    width: 100%;
  }
  100% { 
    left: 50%;
    width: 0%;
  }
`;

const StripeHorizontalWrapper = styled(StripeBase)<{ $delay: number }>`
  animation-duration: ${TRANSITION_SINGLE}ms;
  animation-fill-mode: forwards;
  animation-name: ${AnimationHorizontalWrapper};
  animation-delay: ${({ $delay }) => $delay}ms;

  //animation-timing-function: ease-in;
  animation-timing-function: linear;
`;

const StripeHorizontal = styled(StripeBase)<{ $delay: number }>`
  width: 0%;

  animation-duration: ${TRANSITION_SINGLE}ms;
  animation-fill-mode: forwards;
  animation-name: ${AnimationHorizontal};
  animation-delay: ${({ $delay }) => $delay}ms;
  background-color: black;
`;

const AnimationLogo = keyframes`
  0% {
    opacity: 0;
  }
  100% { 
    opacity: 1;
  }
`;

const Logo = styled(StripeBase)<{
  $colOffset: number;
  $colStart: number;
  $colEnd: number;
  $rowOffset: number;
  $rowStart: number;
  $rowEnd: number;
}>`
  opacity: 0;

  animation-fill-mode: forwards;
  animation-name: ${AnimationLogo};
  animation-delay: ${TRANSITION}ms;

  grid-column: ${({ $colOffset, $colStart, $colEnd }) =>
    `${$colStart + $colOffset} / ${$colEnd + $colOffset}`};
  grid-row: ${({ $rowOffset, $rowStart, $rowEnd }) =>
    `${$rowStart + $rowOffset} / ${$rowEnd + $rowOffset}`};
  background-color: black;
`;

const LogoMiddle = styled(Logo)`
  left: 12.5%;
  width: 87.5%;
`;
