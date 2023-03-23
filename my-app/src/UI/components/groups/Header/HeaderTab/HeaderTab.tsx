import React, { useState } from 'react';
import styled from 'styled-components';
import { LinkFake } from '../../../inputs/LinkFake/LinkFake';
import { Paragraph } from '../../../text/Paragraph/Paragraph';

export interface IHeaderTabProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
  isActive?: boolean;
  href?: string;
  onClick?: () => void;
}

export const HeaderTab: React.FC<IHeaderTabProps> = ({
  children,
  isActive = false,
  href,
  onClick,
  ...props
}): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LinkWrapper {...props}>
      <Square $isHovered={isActive || isHovered} />
      <LinkFake
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        onClick={onClick}
        href={href}
      >
        <Text $isHovered={isActive || isHovered}>{children}</Text>
      </LinkFake>
    </LinkWrapper>
  );
};

const LinkWrapper = styled.div`
  position: relative;
`;

const Text = styled(Paragraph).attrs(() => ({
  isWrapped: false,
}))<{ $isHovered: boolean }>`
  color: ${({ $isHovered, theme }) =>
    $isHovered ? theme.color.text : theme.color.textNeutral};
  font-size: ${({ theme }) => theme.font.mono.size.small};
  font-weight: ${({ theme }) => theme.font.mono.weight.semiBold};
  font-family: ${({ theme }) => theme.font.mono.family};
  transition: ${({ theme }) => theme.speed.normal}ms;
`;

const Square = styled.div<{ $isHovered: boolean }>`
  position: absolute;
  top: 50%;
  right: calc(100% + 8px);
  height: 6px;
  width: 6px;
  background-color: ${({ theme }) => theme.color.text};
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};
  transform: translateY(-50%);
  transition: ${({ theme }) => theme.speed.normal}ms;
`;
