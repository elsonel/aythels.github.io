import React from 'react';
import styled from 'styled-components';
import { Dropdown } from '../../../inputs/Dropdown';
import { Tabs } from '../../Tabs';
import {
  GalleryHeaderBase,
  GalleryHeaderBaseProps,
  GalleryHeaderTab,
} from '../GalleryHeaderBase';

export interface GalleryHeaderBrowserProps extends GalleryHeaderBaseProps {
  pageTabs?: GalleryHeaderTab[];
  sortTabs?: GalleryHeaderTab[];
}

export const GalleryHeaderBrowser: React.FC<GalleryHeaderBrowserProps> = ({
  pageTabs = [],
  sortTabs = [],
  ...props
}): React.ReactElement => {
  return (
    <GalleryHeaderBase {...props}>
      <Tabs tabs={pageTabs} />
      <Gap />
      <SortSelector labelPrefix="SORT BY&nbsp;" tabs={sortTabs} />
    </GalleryHeaderBase>
  );
};

const Gap = styled.div`
  align-self: bottom;
  flex-shrink: 0;
  flex-grow: 1;

  box-sizing: border-box;
  width: 20px;

  border-bottom: 1px solid ${({ theme }) => theme.color.textPassive3};
`;

const SortSelector = styled(Dropdown)`
  flex-shrink: 0;
  box-sizing: border-box;

  width: 220px;

  > * {
    border-bottom: 1px solid ${({ theme }) => theme.color.textPassive3};
  }
`;
