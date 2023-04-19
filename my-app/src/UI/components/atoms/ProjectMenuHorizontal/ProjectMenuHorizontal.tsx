import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../utilities/themes/Theme';
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
  progress?: number;
}

export const ProjectMenuHorizontal: React.FC<ProjectMenuHorizontalProps> = ({
  tabs,
  progress = 0,
  ...props
}): React.ReactElement => {
  const lastActiveTab = [...tabs].reverse().find((e) => e.isActive);
  const lastActiveIndex = tabs.findIndex((e) => e === lastActiveTab);
  const progressStr = `${Math.max(0, Math.min(progress, 1)) * 100}%`;

  return (
    <Wrapper {...props}>
      <Content>
        <LineWrapper>
          <ProgressLine
            lineStart={0}
            lineWidth={progressStr}
            backLineColor={Theme.color.textNeutral}
          />
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
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding-bottom: 30px;

  pointer-events: none;
  user-select: none;

  border-bottom: 1px solid ${({ theme }) => theme.color.outline};
  background: ${({ theme }) => theme.color.background};
`;

const Content = styled.div`
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
  display: flex;
  justify-content: space-evenly;
  pointer-events: auto;
`;
