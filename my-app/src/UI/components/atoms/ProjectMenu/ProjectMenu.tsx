import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph';

export interface ProjectMenuTab {
  label: string;
  isSelected: boolean;
  onClick?: () => void;
}

export interface ProjectMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: ProjectMenuTab[];
  isVisible?: boolean;
}

export const ProjectMenu: React.FC<ProjectMenuProps> = ({
  tabs,
  isVisible = true,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Contents $isVisible={isVisible}>
        <Subtitle>UI/UX</Subtitle>
        <Title>SPOTLIGHT</Title>
        <TabWrapper>
          {tabs.map((e, i) => (
            <TabRow
              key={i}
              $index={i}
              $isVisible={isVisible}
              onClick={e.onClick}
            >
              <TabBullet $isSelected={e.isSelected} />
              <TabText $isSelected={e.isSelected}>{e.label}</TabText>
            </TabRow>
          ))}
        </TabWrapper>
      </Contents>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;

  position: fixed;
  top: 0px;
  left: 0px;
  width: 250px;
  padding: 20px;
`;

const Contents = styled.div<{ $isVisible: boolean }>`
  width: 100%;
  height: 100%;

  overflow: hidden;

  transform: ${({ $isVisible }) =>
    $isVisible ? 'translateX(0%)' : 'translateX(-25%)'};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  transition: ${({ theme }) => theme.speed.normal};
  user-select: none;
`;

const Title = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.h6};
  font-weight: ${({ theme }) => theme.font.weight.bold2};
`;

const Subtitle = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.bold1};
`;

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabRow = styled.div<{ $isVisible: boolean; $index: number }>`
  margin-top: 10px;

  display: flex;
  align-items: center;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: ${({ theme }) => theme.speed.normal};
  transition-delay: ${({ $index, $isVisible }) =>
    $isVisible ? $index * 30 + 30 : 0}ms;
  cursor: pointer;
`;

const TabBullet = styled.div<{ $isSelected: boolean }>`
  width: 4px;
  height: 4px;
  margin-right: 10px;

  background: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.text : 'transparent'};

  transition: ${({ theme }) => theme.speed.normal};
`;

const TabText = styled(Paragraph)<{ $isSelected: boolean }>`
  font-size: ${({ theme }) => theme.font.size.small};
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.text : theme.colors.textPassive2};
  transition: ${({ theme }) => theme.speed.normal};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;
