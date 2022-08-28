import React, { useState } from 'react';
import styled from 'styled-components';
import { DropdownHeaderProps } from '../../atoms/DropdownHeader';
import { DropdownItem } from '../../atoms/DropdownItem';

export interface DropdownItemData {
  isSelected?: boolean;
  label?: string;
  onClick?: () => void;
}

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'medium' | 'small';
  header: React.ReactElement<DropdownHeaderProps>;
  tabs?: DropdownItemData[];
}

export const Dropdown: React.FC<DropdownProps> = ({
  size = 'medium',
  header,
  tabs = [],
  ...props
}): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper {...props}>
      <HeaderWrapper $isVisible={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {header}
      </HeaderWrapper>

      <Content $isVisible={isOpen}>
        {tabs.map((e, i) => (
          <DropdownItem
            key={i}
            size={size}
            isSelected={e.isSelected && e.isSelected}
            onClick={() => {
              setIsOpen(false);
              e.onClick && e.onClick();
            }}
          >
            {e.label}
          </DropdownItem>
        ))}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 400px;

  user-select: none;
`;

const HeaderWrapper = styled.div<{ $isVisible: boolean }>`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid
    ${({ theme, $isVisible }) =>
      $isVisible ? theme.colors.textPassive3 : 'transparent'};
  border-bottom: transparent;
  transition: ${({ theme }) => `${theme.speed.normal}`};

  > * {
    width: 100%;
  }
`;

const Content = styled.div<{ $isVisible: boolean }>`
  z-index: ${({ theme }) => theme.layer.header};
  box-sizing: border-box;

  position: absolute;
  top: 100%;
  left: 0px;
  width: 100%;

  border: 1px solid ${({ theme }) => theme.colors.textPassive3};

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  transition: ${({ theme }) => `${theme.speed.normal}`};
`;
