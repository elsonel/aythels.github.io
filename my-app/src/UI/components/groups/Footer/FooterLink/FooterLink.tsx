import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../inputs/Link';
import { TextFooterProps } from '../../../text/TextFooter';
import { TextLink } from '../../../text/TextLink';

export interface FooterLinkProps extends TextFooterProps {}

export const FooterLink: React.FC<FooterLinkProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Link href="/storybook">
      <StyledTextLink size={'tiny'} isWrapped={false} {...props}>
        Designed and built from scratch with React.
      </StyledTextLink>
    </Link>
  );
};

const StyledTextLink = styled(TextLink)`
  color: ${({ theme }) => theme.color.textNeutral};

  &:hover {
    color: ${({ theme }) => theme.color.textHovered};
  }
`;
