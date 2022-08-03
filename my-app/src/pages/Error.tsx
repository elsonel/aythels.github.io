import React from 'react';
import styled from 'styled-components';

export interface ErrorProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Error: React.FC<ErrorProps> = ({
  ...props
}): React.ReactElement => {
  return <div>404 Error Page</div>;
};
