import React, { useState } from 'react';
import { GridBreakpoint } from 'UI/components/layout/Grid';
import { GalleryHeaderMain } from '../UI/components/groups/GalleryHeader/GalleryHeaderMain';
import { IGallerySortable } from '../utility/Sort';
import { GalleryGrid, SortMethods } from './GalleryGrid';
import { GalleryGridArt } from './GalleryGridArt';

export interface ITab {
  label: string;
  data: IGallerySortable[];
  breakpoints: GridBreakpoint[];
  isDynamicGrid: boolean;
}

export type ITabsData = ITab[];

export interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  tabsData: ITabsData;
}

export const Gallery: React.FC<GalleryProps> = ({
  tabsData,
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
        sortTabs={SortMethods.map((e, i) => {
          return {
            label: e.label,
            isSelected: i === selectedSort,
            onClick: () => setSelectedSort(i),
          };
        })}
      />
      {tabsData[selectedTab].isDynamicGrid ? (
        <GalleryGridArt
          key={`${selectedTab}-${selectedSort}`}
          data={tabsData[selectedTab].data}
          breakpoints={tabsData[selectedTab].breakpoints}
          sortType={SortMethods[selectedSort]}
        />
      ) : (
        <GalleryGrid
          key={`${selectedTab}-${selectedSort}`}
          data={tabsData[selectedTab].data}
          breakpoints={tabsData[selectedTab].breakpoints}
          sortType={SortMethods[selectedSort]}
        />
      )}
    </div>
  );
};
