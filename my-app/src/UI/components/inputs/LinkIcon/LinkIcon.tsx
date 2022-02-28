import React from 'react';
import styled from "styled-components";
import {StyledIconBase} from '@styled-icons/styled-icon'

export interface LinkIconProps extends React.HTMLAttributes<HTMLAnchorElement> {
   // This should not be needed but typescript keeps throwing errors?
   href?: string;

   target?: string;

   rel?: string;
}

export const LinkIcon: React.FC<LinkIconProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
  <div>
      <Link {...props}>
        <IconStyle>
          {children}
        </IconStyle>
			</Link>
  </div>
)};

const Link = styled.a`
  display: inline-flex;
  text-decoration: none;
`;

const IconStyle = styled.div`
  ${({theme}) => `
    
    ${StyledIconBase} {
      transition: ${theme.speed.normal};  

      color: ${theme.colors.textPassive2};
    
      &:hover {
        color: ${theme.colors.textPassive1};
      }
    }
  `}
`;