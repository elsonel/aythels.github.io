import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../utility/themes/Theme';
import { DiamondLabel, State } from '../DiamondLabel';
import { ProgressLine } from '../ProgressLine';

export interface ProjectMenuHorizontalTab {
  label?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface ProjectMenuHorizontalProps
  extends React.HTMLAttributes<HTMLDivElement> {
  tabs: ProjectMenuHorizontalTab[];
}

export const ProjectMenuHorizontal: React.FC<ProjectMenuHorizontalProps> = ({
  tabs,
  ...props
}): React.ReactElement => {
  const lastActiveTab = [...tabs].reverse().find((e) => e.isActive);
  const lastActiveIndex = tabs.findIndex((e) => e === lastActiveTab);

  return (
    <Wrapper {...props}>
      <LineWrapper>
        <ProgressLine lineStart={0} lineWidth={'50%'} />
      </LineWrapper>
      <DiamondRow>
        {tabs.map((e, i) => (
          <DiamondLabel
            key={i}
            label={e.label}
            state={
              i <= lastActiveIndex
                ? i === lastActiveIndex
                  ? State.ACTIVE
                  : State.SEMIACTIVE
                : State.NEUTRAL
            }
            onClick={e.onClick}
          />
        ))}
      </DiamondRow>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-x: clip;
  overflow-y: visible;
  position: relative;
  width: 100%;
`;

const LineWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  > * {
    width: 100%;
    height: 1px;
  }
`;

const DiamondRow = styled.div`
  //position: relative;
  //left: -4px;
  //width: calc(100% + 8px);

  display: flex;
  //justify-content: space-between;
  justify-content: space-evenly;
`;
