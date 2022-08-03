import React from 'react';
import styled from 'styled-components';
import { Footer, FooterProps } from '../../groups/Footer/Footer';
import { HeaderMain, HeaderMainProps } from '../../groups/HeaderMain';

export interface PageTemplateProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: [
    header: React.ReactElement<HeaderMainProps>,
    ...body: React.ReactElement[],
    footer: React.ReactElement<FooterProps>
  ];
}

export const PageTemplate: React.FC<PageTemplateProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <div>
      {children[0]}
      {children.slice(1, children.length - 1)}
      {children.at(-1)}
    </div>
  );
};

const HeaderPlaceholder = styled(HeaderMain)`
  visibility: hidden;
`;

const HeaderFixed = styled(HeaderMain)`
  top: 0px;
  left: 0px;
  position: fixed;
  background: transparent;
`;
