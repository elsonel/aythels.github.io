import React from 'react';
import styled from 'styled-components';
import { TextButton } from '../../text/TextButton';
import { ChevronUpDown } from '@styled-icons/fluentui-system-regular/ChevronUpDown';
import { StyledIcon } from '@styled-icons/styled-icon';

export interface DropdownHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'medium' | 'small';
  icon?: React.ReactElement<StyledIcon>;
  subtitle?: string;
  title?: string;
  onClick?: () => void;
}

export const DropdownHeader: React.FC<DropdownHeaderProps> = ({
  size = 'medium',
  subtitle,
  title,
  icon,
  onClick,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper $size={size} onClick={onClick} {...props}>
      <TextPrefix isWrapped={false} $size={size}>
        {subtitle}
      </TextPrefix>
      <TextSelected isWrapped={false} $size={size}>
        {title}
      </TextSelected>
      <IconWrapper $size={size}>{icon}</IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $size: 'medium' | 'small' }>`
  box-sizing: border-box;
  width: 100%;
  padding: ${({ $size }) => ($size === 'medium' ? `10px` : `8px`)};

  display: flex;
  align-items: center;

  cursor: pointer;
  user-select: none;
  background: ${({ theme }) => theme.colors.background};
`;

const Text = styled(TextButton)<{
  $size: 'medium' | 'small';
}>`
  font-size: ${({ theme, $size }) =>
    $size === 'medium' ? theme.font.size.medium : theme.font.size.small};
`;

const TextPrefix = styled(Text)`
  flex-shrink: 1;
  flex-grow: 0;
`;

const TextSelected = styled(Text)`
  flex-shrink: 0;
  flex-grow: 1;
  flex-basis: 0;

  font-weight: ${({ theme }) => theme.font.weight.bold2};
`;

const IconWrapper = styled.div<{ $size: 'medium' | 'small' }>`
  flex-shrink: 0;

  margin-left: 10px;
  width: ${({ $size }) => ($size === 'medium' ? `16px` : `12px`)};
  height: ${({ $size }) => ($size === 'medium' ? `16px` : `12px`)};
  display: flex;

  > * {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.text};
  }
`;
