import React from 'react';
import styled from 'styled-components';
import { TextButton } from '../../text/TextButton';
import { StyledIcon } from '@styled-icons/styled-icon';
import { IIconSVG } from '../../atoms/IIconSVG';

export interface DropdownHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'medium' | 'small';
  icon?:
    | string
    | React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  subtitle?: string;
  title?: string;
  onClick?: () => void;
}

export const DropdownHeader: React.FC<DropdownHeaderProps> = ({
  size = 'medium',
  subtitle,
  title,
  icon,
  onClick: onClick,
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
      {icon && <Icon $size={size} src={icon} />}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $size: 'medium' | 'small' }>`
  box-sizing: border-box;
  width: 100%;
  height: ${({ $size }) => ($size === 'medium' ? `40px` : `32px`)};
  padding: ${({ $size }) => ($size === 'medium' ? `10px` : `8px`)};

  display: flex;
  align-items: center;

  cursor: pointer;
  user-select: none;
  background: ${({ theme }) => theme.color.background};
`;

const Text = styled(TextButton)<{
  $size: 'medium' | 'small';
}>`
  font-size: ${({ theme, $size }) =>
    $size === 'medium'
      ? theme.font.default.size.default
      : theme.font.default.size.small};
`;

const TextPrefix = styled(Text)`
  flex-shrink: 1;
  flex-grow: 0;

  color: ${({ theme }) => theme.color.textNeutral};
`;

const TextSelected = styled(Text)`
  flex-shrink: 0;
  flex-grow: 1;
  flex-basis: 0;

  font-weight: ${({ theme }) => theme.font.default.weight.bold};
`;

const Icon = styled(IIconSVG)<{ $size: 'medium' | 'small' }>`
  flex-shrink: 0;

  margin-left: 10px;
  width: ${({ $size }) => ($size === 'medium' ? `16px` : `12px`)};
  height: ${({ $size }) => ($size === 'medium' ? `16px` : `12px`)};

  color: ${({ theme }) => theme.color.textNeutral};
`;
