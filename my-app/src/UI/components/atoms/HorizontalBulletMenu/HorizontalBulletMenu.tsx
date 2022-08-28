import React from 'react';
import styled from 'styled-components';

export interface HorizontalBulletMenuTab {
  onClick?: () => void;
  isSelected?: boolean;
}

export interface HorizontalBulletMenuProps
  extends React.HTMLAttributes<HTMLDivElement> {
  tabs: HorizontalBulletMenuTab[];
}

export const HorizontalBulletMenu: React.FC<HorizontalBulletMenuProps> = ({
  tabs,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Container>
        {tabs.map((e, i) => (
          <Bullet
            key={i}
            onClick={e.onClick}
            $isSelected={e.isSelected ? e.isSelected : false}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Container = styled.div`
  box-sizing: border-box;

  width: 100%
  padding: 20px;

  display: flex;
  column-gap: 10px;

  overflow: hidden;
`;

const Bullet = styled.div<{ $isSelected: boolean }>`
  cursor: pointer;

  flex-shrink: 0;
  width: 32px;
  height: 4px;

  transition: ${({ theme }) => `${theme.speed.normal}`};
  background: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.background : `transparent`};
  border: 1px solid ${({ theme }) => theme.colors.textPassive2};

  &:hover {
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.background};
  }
`;
