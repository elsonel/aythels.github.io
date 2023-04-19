import React, { useState } from 'react';
import { GalleryHeaderMain } from '../UI/components/groups/GalleryHeader/GalleryHeaderMain';
import { IGallerySortable } from '../utilities/sortData';
import { GalleryGridProps } from './GalleryGrid';

export interface ITab {
  label: string;
  grids: React.ReactElement<GalleryGridProps>[];
}

export type ITabsData = ITab[];

export interface ISort {
  label: string;
  sort: (data: IGallerySortable[]) => IGallerySortable[];
}

export type ISortsData = ISort[];

export interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  tabsData: ITabsData;
  sortsData: ISortsData;
}

export const Gallery: React.FC<GalleryProps> = ({
  tabsData,
  sortsData,
  ...props
}): React.ReactElement => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedSort, setSelectedSort] = useState(0);

  return (
    <div {...props}>
      <GalleryHeaderMain
        pageTabs={tabsData.map((e, i) => {
          return {
            label: e.label,
            isSelected: i === selectedTab,
            onClick: () => setSelectedTab(i),
          };
        })}
        sortTabs={sortsData.map((e, i) => {
          return {
            label: e.label,
            isSelected: i === selectedSort,
            onClick: () => setSelectedSort(i),
          };
        })}
      />
      {tabsData[selectedTab].grids[selectedSort]}
    </div>
  );
};
