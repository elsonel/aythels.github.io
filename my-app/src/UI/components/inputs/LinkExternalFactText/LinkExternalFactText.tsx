import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph';

export interface LinkExternalFactTextProps
  extends React.HTMLAttributes<HTMLDivElement> {
  link: string;
  children: string;
}

export const LinkExternalFactText: React.FC<LinkExternalFactTextProps> = ({
  link,
  children,
  ...props
}): React.ReactElement => {
  return (
    <Text {...props}>
      <Link href={link} target="_blank" rel="noreferrer">
        {children}
      </Link>
    </Text>
  );
};

const Text = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.font.weight.bold2};

  overflow: hidden;
  text-overflow: ellipsis;

  transition: ${({ theme }) => theme.speed.normal};
  &:hover {
    color: ${({ theme }) => theme.color.textHovered};
  }
`;

const Link = styled.a`
  color: inherit;
`;
