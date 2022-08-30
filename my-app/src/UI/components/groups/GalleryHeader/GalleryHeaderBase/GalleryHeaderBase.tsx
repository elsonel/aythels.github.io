import React from 'react';
import styled from 'styled-components';

export interface GalleryHeaderTab {
  label: string;
  isSelected: boolean;
  onClick?: () => void;
}

export interface GalleryHeaderBaseProps
  extends React.HTMLAttributes<HTMLDivElement> {
  pageTabs?: GalleryHeaderTab[];
  sortTabs?: GalleryHeaderTab[];
  children?: React.ReactNode;
}

export const GalleryHeaderBase: React.FC<GalleryHeaderBaseProps> = ({
  pageTabs = [],
  sortTabs = [],
  children,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Content>{children}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0px 20px;
`;

const Content = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  overflow-x: clip;
  overflow-y: visible;
`;
