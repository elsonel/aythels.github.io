import React from 'react';
import styled from 'styled-components';
import { TextFooterProps } from '../../../text/TextFooter';
import { TextLink } from '../../../text/TextLink';

export interface FooterLinkProps extends TextFooterProps {}

export const FooterLink: React.FC<FooterLinkProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <a href="/storybook" target="_blank" rel="noreferrer">
      <Link size={'tiny'} isWrapped={false} {...props}>
        Designed and built from scratch with React.
      </Link>
    </a>
  );
};

const Link = styled(TextLink)`
  color: ${({ theme }) => theme.color.textNeutral};

  &:hover {
    color: ${({ theme }) => theme.color.textHovered};
  }
`;
