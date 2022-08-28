import React from 'react';
import styled from 'styled-components';
import { TextFooter, TextFooterProps } from '../../../text/TextFooter';

export interface FooterLinkProps extends TextFooterProps {}

export const FooterLink: React.FC<FooterLinkProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <TextFooter size={'tiny'} isWrapped={false} {...props}>
      <Link href="https://www.w3schools.com" target="_blank" rel="noreferrer">
        Designed from scratch and built with React.
      </Link>
    </TextFooter>
  );
};

const Link = styled.a`
  color: inherit;

  &:hover {
    color: ${({ theme }) => theme.colors.textPassive1};
  }

  transition: ${({ theme }) => theme.speed.normal};
`;
