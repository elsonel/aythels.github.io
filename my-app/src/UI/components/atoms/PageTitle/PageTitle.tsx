import React from 'react';
import styled from 'styled-components';
import { TextTitle } from '../../text/TextTitle';

export interface PageTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The title
   */
  children?: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <TextTitle isWrapped={false}>{children}</TextTitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
`;
