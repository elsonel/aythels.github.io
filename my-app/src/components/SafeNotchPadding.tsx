import React from 'react';
import styled from 'styled-components';

export interface SafeNotchPaddingProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const SafeNotchPadding: React.FC<SafeNotchPaddingProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
`;
