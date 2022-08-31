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
  subtitle?: string;
  title?: string;
}

export const ProjectMenu: React.FC<ProjectMenuProps> = ({
  tabs,
  isVisible = true,
  subtitle = '',
  title = '',
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Contents $isVisible={isVisible}>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
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

  width: 240px;
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

const Text = styled(Paragraph)`
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Subtitle = styled(Text)`
  white-space: nowrap;
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

const Title = styled(Text)`
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold2};
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
  transition: ${({ theme }) => theme.speed.slow};
  transition-delay: ${({ $index, $isVisible }) =>
    $isVisible ? $index * 30 + 30 : 0}ms;
  cursor: pointer;
`;

const TabBullet = styled.div<{ $isSelected: boolean }>`
  flex-shrink: 0;

  width: 4px;
  height: 4px;
  margin-right: 10px;

  background: ${({ theme, $isSelected }) =>
    $isSelected ? theme.color.text : 'transparent'};

  transition: ${({ theme }) => theme.speed.normal};
`;

const TabText = styled(Text)<{ $isSelected: boolean }>`
  font-size: ${({ theme }) => theme.font.size.small};
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.color.text : theme.color.textNeutral};
  transition: ${({ theme }) => theme.speed.normal};

  &:hover {
    color: ${({ theme }) => theme.color.text};
  }
`;
