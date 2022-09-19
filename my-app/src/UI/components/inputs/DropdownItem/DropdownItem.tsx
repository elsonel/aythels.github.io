import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph';
import { TextButton } from '../../text/TextButton';

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
  onClick: onClick,
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
  height: ${({ $size }) => ($size === 'medium' ? `36px` : `28px`)};
  padding: ${({ $size }) => ($size === 'medium' ? `10px` : `8px`)};

  display: flex;
  align-items: center;

  cursor: pointer;
  user-select: none;
  transition: ${({ theme }) => `${theme.speed.normal}`};
  background: ${({ theme, $isSelected }) =>
    $isSelected ? theme.color.backgroundHighlight : theme.color.background};

  &:hover {
    background: ${({ theme }) => theme.color.backgroundHighlight};

    > * {
      font-weight: ${({ theme, $size }) =>
        $size === 'medium' ? theme.font.weight.bold2 : theme.font.weight.bold1};
    }
  }
`;

const TextSmall = styled(TextButton)<{ $isSelected: boolean }>`
  font-size: ${({ theme }) => theme.font.size.tiny};
  font-weight: ${({ theme, $isSelected }) =>
    $isSelected ? theme.font.weight.bold1 : theme.font.weight.regular};
`;

const TextMedium = styled(TextButton)<{ $isSelected: boolean }>`
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme, $isSelected }) =>
    $isSelected ? theme.font.weight.bold2 : theme.font.weight.regular};
`;
