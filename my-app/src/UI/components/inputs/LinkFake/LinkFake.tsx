import React from 'react';
import styled from 'styled-components';

export interface LinkFakeProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Element to be linked
   */
  children: React.ReactNode;
  /**
   * override prevent default
   */
  isDefaultPrevented?: boolean;
  /**
   * When link is clicked
   */
  onClick?: () => void;
}

export const LinkFake: React.FC<LinkFakeProps> = ({
  children,
  isDefaultPrevented = true,
  onClick,
  ...props
}): React.ReactElement => {
  return (
    <Link
      onClick={(e) => {
        isDefaultPrevented && e.preventDefault();
        onClick && onClick();
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

const Link = styled.a`
  display: flex;
  text-decoration: none;
`;
