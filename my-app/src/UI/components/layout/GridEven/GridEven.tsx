import React, { useState } from 'react';
import styled from 'styled-components';
import { TiltCard } from '../../atoms/TiltCard/TiltCard';

const Data = [
  {
    roleLabel: 'FRONTEND DEVELOPER',
    employerLabel: 'CENTRO',
    startDate: new Date(),
    endDate: new Date(),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur.`,
  },
  {
    roleLabel: 'FRONTEND DEVELOPER',
    employerLabel: 'CENTRO',
    startDate: new Date(),
    endDate: new Date(),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur.`,
  },
  {
    roleLabel: 'FRONTEND DEVELOPER',
    employerLabel: 'CENTRO',
    startDate: new Date(),
    endDate: new Date(),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur.`,
  },
  {
    roleLabel: 'FRONTEND DEVELOPER',
    employerLabel: 'CENTRO',
    startDate: new Date(),
    endDate: new Date(),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur.`,
  },
];

let highest = 0;
const map = Data.map((e) => 0);

export interface GridEvenProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[];
}

export const GridEven: React.FC<GridEvenProps> = ({
  children,
  ...props
}): React.ReactElement => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number>();

  return (
    <Wrapper {...props}>
      {Data.map((e, i) => (
        <Entry key={i}>
          {
            <TiltCard
              roleLabel={e.roleLabel}
              employerLabel={e.employerLabel}
              startDate={e.startDate}
              endDate={e.endDate}
              description={e.description}
              onCardEnter={() => {
                highest += 1;
                map[i] = highest;
                setHoveredCardIndex(i);
              }}
              zIndex={map[i]}
            />
          }
        </Entry>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  padding: 100px 0px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Entry = styled.div`
  width: 100%;
  aspect-ratio: 1;

  ${({ theme }) => `
    box-shadow: inset 0.5px 0px 0px ${theme.color.outline},
    inset -0.5px 0px 0px ${theme.color.outline},
    inset 0 1px 0px ${theme.color.outline},
    inset 0 -1px 0px ${theme.color.outline};
  `}

  display: flex;

  > * {
    width: 0px;
    height: 100%;

    flex-grow: 1;
  }
`;
