import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph';

export interface DropdownItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'medium' | 'small';
  isSelected?: boolean;
  children?: string;
  onClick?: () => void;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  size = 'medium',
  isSelected = false,
  children = '',
  onClick,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper $size={size} $isSelected={isSelected} onClick={onClick} {...props}>
      {size === 'medium' ? (
        <TextMedium $isSelected={isSelected}>{children}</TextMedium>
      ) : (
        <TextSmall $isSelected={isSelected}>{children}</TextSmall>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $isSelected: boolean; $size: 'medium' | 'small' }>`
  box-sizing: border-box;
  width: 100%;
  padding: ${({ $size }) => ($size === 'medium' ? `10px` : `8px`)};

  display: flex;
  align-items: center;

  cursor: pointer;
  user-select: none;
  transition: ${({ theme }) => `${theme.speed.normal}`};
  background: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.textPassive4 : theme.colors.background};

  &:hover {
    background: ${({ theme }) => theme.colors.textPassive4};

    > * {
      font-weight: ${({ theme, $size }) =>
        $size === 'medium' ? theme.font.weight.bold2 : theme.font.weight.bold1};
    }
  }
`;

const Text = styled(Paragraph)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TextSmall = styled(Text)<{ $isSelected: boolean }>`
  font-size: ${({ theme }) => theme.font.size.tiny};
  font-weight: ${({ theme, $isSelected }) =>
    $isSelected ? theme.font.weight.bold1 : theme.font.weight.regular};
`;

const TextMedium = styled(Text)<{ $isSelected: boolean }>`
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme, $isSelected }) =>
    $isSelected ? theme.font.weight.bold2 : theme.font.weight.regular};
`;
