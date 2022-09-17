import React, { useState } from 'react';
import { GalleryHeaderMain } from '../UI/components/groups/GalleryHeader/GalleryHeaderMain';
import { GridBreakpoint } from '../UI/components/layout/Grid';
import { IGallerySortable } from '../utility/sort';
import { GalleryGrid, IGalleryEntry } from './GalleryGrid';

function renderGrid(
  gridType: typeof GalleryGrid,
  data: IGalleryEntry[],
  breakpoints: GridBreakpoint[]
) {
  const Grid = gridType;
  return <Grid data={data} breakpoints={breakpoints} />;
}

export interface ITab {
  label: string;
  data: IGalleryEntry[];
  breakpoints: GridBreakpoint[];
  gridType: typeof GalleryGrid;
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
      {renderGrid(
        tabsData[selectedTab].gridType,
        sortsData[selectedSort].sort(
          tabsData[selectedTab].data
        ) as IGalleryEntry[],
        tabsData[selectedTab].breakpoints
      )}
    </div>
  );
};
