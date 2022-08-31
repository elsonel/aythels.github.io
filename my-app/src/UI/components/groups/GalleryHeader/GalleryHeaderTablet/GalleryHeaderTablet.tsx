import React from 'react';
import styled from 'styled-components';
import { Dropdown } from '../../../inputs/Dropdown';
import {
  GalleryHeaderBase,
  GalleryHeaderBaseProps,
  GalleryHeaderTab,
} from '../GalleryHeaderBase';

export interface GalleryHeaderTabletProps extends GalleryHeaderBaseProps {
  pageTabs?: GalleryHeaderTab[];
  sortTabs?: GalleryHeaderTab[];
}

export const GalleryHeaderTablet: React.FC<GalleryHeaderTabletProps> = ({
  pageTabs = [],
  sortTabs = [],
  ...props
}): React.ReactElement => {
  return (
    <GalleryHeaderBase {...props}>
      <PageSelector size="small" tabs={pageTabs} />
      <Gap />
      <SortSelector size="small" tabs={sortTabs} labelPrefix="SORT BY&nbsp;" />
    </GalleryHeaderBase>
  );
};

const Gap = styled.div`
  align-self: bottom;
  flex-shrink: 0;
  flex-grow: 1;

  box-sizing: border-box;
  width: 20px;

  border-bottom: 1px solid ${({ theme }) => theme.color.outline};
`;

const DropdownStyled = styled(Dropdown)`
  flex-shrink: 0;
  box-sizing: border-box;

  width: 200px;

  > * {
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid ${({ theme }) => theme.color.outline};
  }
`;

const PageSelector = styled(DropdownStyled)`
  flex-shrink: 1;
  flex-basis: 170px;

  min-width: 0;
`;

const SortSelector = styled(DropdownStyled)`
  flex-shrink: 1;
  flex-basis: 180px;

  min-width: 0;
`;
