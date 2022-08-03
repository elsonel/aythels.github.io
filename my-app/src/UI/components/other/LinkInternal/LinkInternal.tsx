import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

/**
 * This element is listed under "Other" because it is a UI component that utilizes the react-router-dom library
 */

export interface LinkInternalProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Element to be linked
   */
  children: React.ReactElement | string;
  /**
   * Redirect link
   */
  link: string;
  /**
   * When link is clicked
   */
  onClick?: () => void;
}

export const LinkInternal: React.FC<LinkInternalProps> = ({
  children,
  link,
  onClick,
  ...props
}): React.ReactElement => {
  let navigate = useNavigate();

  return (
    <StyledLink
      to={link}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
        navigate(link);
      }}
      {...props}
    >
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
`;
