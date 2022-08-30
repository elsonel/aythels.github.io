import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronUpDown } from '@styled-icons/fluentui-system-regular/ChevronUpDown';
import { DropdownHeader, DropdownHeaderProps } from '../DropdownHeader';
import { DropdownItem } from '../DropdownItem';

export interface DropdownItemData {
  isSelected?: boolean;
  label?: string;
  onClick?: () => void;
}

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'medium' | 'small';
  labelPrefix?: string;
  label?: string;
  tabs?: DropdownItemData[];
}

export const Dropdown: React.FC<DropdownProps> = ({
  size = 'medium',
  labelPrefix: prefix,
  label,
  tabs = [],
  ...props
}): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedTab = tabs.find((e) => e.isSelected);

  return (
    <Wrapper {...props}>
      <HeaderStyled
        onMouseLeave={() => setIsOpen(false)}
        onMouseEnter={() => isOpen && setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
        $isOpen={isOpen}
        size={size}
        icon={ChevronUpDown}
        subtitle={prefix}
        title={label !== undefined ? label : selectedTab && selectedTab.label}
      />
      <Content
        $isVisible={isOpen}
        onMouseEnter={() => isOpen && setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
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

const HeaderStyled = styled(DropdownHeader)<{ $isOpen: boolean }>`
  box-sizing: border-box;
  width: 100%;

  border: 1px solid
    ${({ theme, $isOpen }) =>
      $isOpen ? theme.color.textPassive3 : 'transparent'};
  transition: ${({ theme }) => `${theme.speed.normal}`};
`;

const Content = styled.div<{ $isVisible: boolean }>`
  z-index: ${({ theme }) => theme.layer.header};
  box-sizing: border-box;

  position: absolute;
  top: 100%;
  left: 0px;
  width: 100%;

  border: 1px solid ${({ theme }) => theme.color.textPassive3};
  border-top: 0px;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  transition: ${({ theme }) => `${theme.speed.normal}`};
`;
