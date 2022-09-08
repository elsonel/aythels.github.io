import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GalleryProjectEntry,
  GallerySortable,
  GalleryVisualArtsEntry,
  sortByDate,
  sortByName,
  _GalleryArchitectureData,
  _GalleryUIUXData,
  _GalleryVisualArtsData,
} from '../../data/data';
import { PageTitle } from '../../UI/components/atoms/PageTitle';
import { GalleryHeaderMain } from '../../UI/components/groups/GalleryHeader/GalleryHeaderMain';
import { ModalImage } from '../../UI/components/groups/ModalImage';
import { TextTitle } from '../../UI/components/text/TextTitle';
import { HeaderFooter, HeaderFooterProps } from '../templates/HeaderFooter';
import { GalleryArchitecture } from './GalleryArchitecture';
import { GalleryUIUX } from './GalleryUIUX';
import { GalleryVisualArts } from './GalleryVisualArts';

export enum PAGES {
  VISUALARTS = 'VISUAL ARTS',
  UIUX = 'UI / UX',
  ARCHITECTURE = 'ARCHITECTURE',
}

export enum SORT {
  NEW = 'NEWEST',
  OLD = 'OLDEST',
  AZ = 'A - Z',
  ZA = 'Z - A',
}

const sortPage = (data: GallerySortable[], sort: SORT) => {
  switch (sort) {
    case SORT.NEW:
      return sortByDate(data);
    case SORT.OLD:
      return sortByDate(data, false);
    case SORT.AZ:
      return sortByName(data);
    case SORT.ZA:
      return sortByName(data, false);
  }
};

export interface GalleryProps extends HeaderFooterProps {
  page?: PAGES;
}

export const Gallery: React.FC<GalleryProps> = ({
  reset,
  page = PAGES.VISUALARTS,
  ...props
}): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOffset, setModalOffset] = useState(0);

  const [selectedPage, setSelectedPage] = useState(page);
  const [selectedSort, setSelectedSort] = useState(SORT.NEW);

  let navigate = useNavigate();

  const renderPage = () => {
    switch (selectedPage) {
      case PAGES.VISUALARTS:
        return (
          <GalleryVisualArts
            data={
              sortPage(
                _GalleryVisualArtsData,
                selectedSort
              ) as GalleryVisualArtsEntry[]
            }
            onThumbnailClick={(i) => {
              setIsModalOpen(true);
              setModalOffset(i);
            }}
          />
        );
      case PAGES.UIUX:
        return (
          <GalleryUIUX
            data={
              sortPage(_GalleryUIUXData, selectedSort) as GalleryProjectEntry[]
            }
            onThumbnailClick={(i) => {}}
          />
        );
      case PAGES.ARCHITECTURE:
        return (
          <GalleryArchitecture
            data={
              sortPage(
                _GalleryArchitectureData,
                selectedSort
              ) as GalleryProjectEntry[]
            }
            onThumbnailClick={(i) => {}}
          />
        );
    }
  };

  return (
    <div {...props}>
      <HeaderFooter reset={reset}>
        <PageTitle>GALLERY</PageTitle>
        <GalleryHeaderMain
          pageTabs={Object.keys(PAGES).map((key) => {
            const entry = PAGES[key as keyof typeof PAGES];
            return {
              label: entry,
              isSelected: entry === selectedPage,
              onClick: () => {
                setSelectedPage(entry);
                //navigate('../success', { replace: true });
                //https://stackoverflow.com/questions/57101831/react-router-how-do-i-update-the-url-without-causing-a-navigation-reload
                window.history.replaceState(null, '', `/gallery/${entry}`);
              },
            };
          })}
          sortTabs={Object.keys(SORT).map((key) => {
            const entry = SORT[key as keyof typeof SORT];
            return {
              label: entry,
              isSelected: entry === selectedSort,
              onClick: () => setSelectedSort(entry),
            };
          })}
        />
        {renderPage()}

        <ModalImage
          onClick={() => setIsModalOpen(false)}
          indexOffset={modalOffset}
          isVisible={isModalOpen}
          srcArray={(
            sortPage(
              _GalleryVisualArtsData,
              selectedSort
            ) as GalleryVisualArtsEntry[]
          ).map((e) => {
            return { src: e.src, title: e.title, caption: e.caption };
          })}
        />
      </HeaderFooter>
    </div>
  );
};
