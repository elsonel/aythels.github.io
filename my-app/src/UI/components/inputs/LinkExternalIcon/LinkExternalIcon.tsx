import React from 'react';
import styled from 'styled-components';
import { StyledIconBase, StyledIcon } from '@styled-icons/styled-icon';

export interface LinkExternalIconProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactElement<StyledIcon>;
}

export const LinkExternalIcon: React.FC<LinkExternalIconProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <Link {...props}>
      <IconStyle>{children}</IconStyle>
    </Link>
  );
};

const Link = styled.a`
  display: inline-flex;
  text-decoration: none;
`;

const IconStyle = styled.div`
  ${({ theme }) => `
    
    ${StyledIconBase} {
      transition: ${theme.speed.normal};  

      color: ${theme.colors.textPassive2};
    
      &:hover {
        color: ${theme.colors.textPassive1};
      }
    }
  `}
`;
