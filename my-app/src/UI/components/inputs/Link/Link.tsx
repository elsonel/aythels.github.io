import React from 'react';
import styled from 'styled-components';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  isOpeningNewTab?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  children,
  isOpeningNewTab = true,
  ...props
}): React.ReactElement => {
  return (
    <>
      {isOpeningNewTab ? (
        <StyledAnchor target="_blank" rel="noreferrer" {...props}>
          {children}
        </StyledAnchor>
      ) : (
        <StyledAnchor {...props}>{children}</StyledAnchor>
      )}
    </>
  );
};

const StyledAnchor = styled.a`
  display: flex;
  cursor: pointer;

  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
