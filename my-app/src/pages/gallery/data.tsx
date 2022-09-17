import { ISortsData, ITabsData } from '../../components/Gallery';
import { GalleryGrid, IGalleryEntry } from '../../components/GalleryGrid';
import {
  GalleryGridArt,
  IGalleryEntryArt,
} from '../../components/GalleryGridArt';
import { GridBreakpoint } from '../../UI/components/layout/Grid';
import { sortByDate, sortByName } from '../../utility/sort';

export const VisualArtsData: IGalleryEntryArt[] = [
  {
    date: new Date(2022, 4),
    subtitle: '2022',
    title: 'NIGHT SKIRMISHES',
    src: '/images/visualarts/Night_Skirmishes.png',
    caption: 'Digital painting',
    width: 2040,
    height: 2600,
  },
  {
    date: new Date(2020, 5),
    subtitle: '2020',
    title: 'CORRUPTION',
    src: '/images/visualarts/Corruption.png',
    caption: 'Photo manipulation',
    width: 2448,
    height: 3264,
  },
  {
    date: new Date(2019, 1),
    subtitle: '2019',
    title: 'MEMORY',
    src: '/images/visualarts/Memory.png',
    caption: 'Watercolor',
    width: 1900,
    height: 2520,
  },
  {
    date: new Date(2018, 9),
    subtitle: '2018',
    title: 'FOCUS',
    src: '/images/visualarts/Focus.png',
    caption: 'Watercolor',
    width: 2170,
    height: 3058,
  },
  {
    date: new Date(2018, 8),
    subtitle: '2018',
    title: 'STORM',
    src: '/images/visualarts/Storm.png',
    caption: 'Acrylic on canvas',
    width: 2000,
    height: 2870,
  },
  {
    date: new Date(2018, 3),
    subtitle: '2017',
    title: 'REACH',
    src: '/images/visualarts/Reach.png',
    caption: 'Photography',
    width: 2339,
    height: 2930,
  },
  {
    date: new Date(2018, 2),
    subtitle: '2018',
    title: 'AMETHYST CITY',
    src: '/images/visualarts/Amethyst_City.png',
    caption: 'Acrylic on canvas',
    width: 2900,
    height: 2360,
  },
];

const Breakpoints1: GridBreakpoint[] = [
  {
    minWidth: 0,
    columnCount: 1,
  },
  {
    minWidth: 800,
    columnCount: 2,
  },
  {
    minWidth: 1000,
    columnCount: 3,
  },
];

export const UIUXData: IGalleryEntry[] = [
  {
    date: new Date(2020, 8),
    subtitle: '2020',
    title: 'PORTFOL.IO',
    src: '/images/uiux/Portfolio.png',
    to: '/gallery/portfolio',
  },
  {
    date: new Date(2020, 6),
    subtitle: '2020',
    title: 'SPOTLIGHT',
    src: '/images/uiux/Spotlight.png',
    to: '/gallery/spotlight',
  },
];

const Breakpoints2: GridBreakpoint[] = [
  {
    minWidth: 0,
    columnCount: 1,
  },
  {
    minWidth: 600,
    columnCount: 2,
  },
  {
    minWidth: 800,
    columnCount: 3,
  },
];

export const ArchitectureData: IGalleryEntry[] = [
  {
    date: new Date(2022, 5),
    subtitle: '2022',
    title: 'FOLD PAVILION',
    src: '/images/architecture/Fold_Pavilion.png',
    to: '/gallery/foldpavilion',
  },
  {
    date: new Date(2020, 11),
    subtitle: 'Drifting Landscapes',
    title: 'KINETIC BOARDWALK',
    src: '/images/architecture/Kinetic_Boardwalk.png',
    to: '/gallery/kineticboardwalk',
  },
  {
    date: new Date(2019, 4),
    subtitle: '2019',
    title: 'BASILISK TOWER',
    src: '/images/architecture/Basilisk_Tower.png',
    to: '/gallery/basilisktower',
  },
];

const Breakpoints3: GridBreakpoint[] = [
  {
    minWidth: 0,
    columnCount: 1,
  },
  {
    minWidth: 600,
    columnCount: 2,
  },
  {
    minWidth: 800,
    columnCount: 3,
  },
];

export const TabsData: ITabsData = [
  {
    label: 'VISUAL ARTS',
    data: VisualArtsData,
    breakpoints: Breakpoints1,
    gridType: GalleryGridArt as typeof GalleryGrid,
  },
  {
    label: 'UI / UX',
    data: UIUXData,
    breakpoints: Breakpoints2,
    gridType: GalleryGrid,
  },
  {
    label: 'ARCHITECTURE',
    data: ArchitectureData,
    breakpoints: Breakpoints3,
    gridType: GalleryGrid,
  },
];

export const SortsData: ISortsData = [
  {
    label: 'NEWEST',
    sort: (data) => sortByDate(data),
  },
  {
    label: 'OLDEST',
    sort: (data) => sortByDate(data, false),
  },
  {
    label: 'A - Z',
    sort: (data) => sortByName(data),
  },
  {
    label: 'Z - A',
    sort: (data) => sortByName(data, false),
  },
];
