import React from 'react';
import { Link, LinkProps } from '../Link/Link';

export interface LinkFakeProps extends LinkProps {
  /**
   * When link is clicked
   */
  onClick?: () => void;
}

export const LinkFake: React.FC<LinkFakeProps> = ({
  onClick,
  ...props
}): React.ReactElement => {
  return (
    <Link
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
      {...props}
    />
  );
};
