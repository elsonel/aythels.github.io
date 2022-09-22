import { ISortsData, ITabsData } from '../../components/Gallery';
import { GalleryGrid, IGalleryEntry } from '../../components/GalleryGrid';
import {
  GalleryGridArt,
  IGalleryEntryArt,
} from '../../components/GalleryGridArt';
import { GridBreakpoint } from '../../UI/components/layout/Grid';
import { sortByDate, sortByName } from '../../utility/sort';
import Amethyst_City from '../../assets/gallery/visualarts/Amethyst_City.png';
import Corruption from '../../assets/gallery/visualarts/Corruption.png';
import Focus from '../../assets/gallery/visualarts/Focus.png';
import Memory from '../../assets/gallery/visualarts/Memory.png';
import Night_Skirmishes from '../../assets/gallery/visualarts/Night_Skirmishes.png';
import Reach from '../../assets/gallery/visualarts/Reach.png';
import Storm from '../../assets/gallery/visualarts/Storm.png';
import Portfolio from '../../assets/gallery/uiux/Portfolio.png';
import Spotlight from '../../assets/gallery/uiux/Spotlight.png';
import Basilisk_Tower from '../../assets/gallery/architecture/Basilisk_Tower.png';
import Fold_Pavilion from '../../assets/gallery/architecture/Fold_Pavilion.png';
import Kinetic_Boardwalk from '../../assets/gallery/architecture/Kinetic_Boardwalk.png';

// Sorting Data
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

// Visual Arts Grid Data
export const VisualArtsData: IGalleryEntryArt[] = [
  {
    date: new Date(2022, 4),
    subtitle: '2022',
    title: 'NIGHT SKIRMISHES',
    src: Night_Skirmishes,
    caption: 'Digital painting',
    width: 2040,
    height: 2600,
  },
  {
    date: new Date(2020, 5),
    subtitle: '2020',
    title: 'CORRUPTION',
    src: Corruption,
    caption: 'Photo manipulation',
    width: 2448,
    height: 3264,
  },
  {
    date: new Date(2019, 1),
    subtitle: '2019',
    title: 'MEMORY',
    src: Memory,
    caption: 'Watercolor',
    width: 1900,
    height: 2520,
  },
  {
    date: new Date(2018, 9),
    subtitle: '2018',
    title: 'FOCUS',
    src: Focus,
    caption: 'Watercolor',
    width: 2170,
    height: 3058,
  },
  {
    date: new Date(2018, 8),
    subtitle: '2018',
    title: 'STORM',
    src: Storm,
    caption: 'Acrylic on canvas',
    width: 2000,
    height: 2870,
  },
  {
    date: new Date(2018, 3),
    subtitle: '2017',
    title: 'REACH',
    src: Reach,
    caption: 'Photography',
    width: 2339,
    height: 2930,
  },
  {
    date: new Date(2018, 2),
    subtitle: '2018',
    title: 'AMETHYST CITY',
    src: Amethyst_City,
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

const VisualArtsGrids = SortsData.map((e, i) => (
  <GalleryGridArt
    key={'VisualArtsGrids' + i}
    data={e.sort(VisualArtsData) as IGalleryEntryArt[]}
    breakpoints={Breakpoints1}
  />
));

// UI UX Grid Data
export const UIUXData: IGalleryEntry[] = [
  {
    date: new Date(2020, 8),
    subtitle: '2020',
    title: 'PORTFOL.IO',
    src: Portfolio,
    to: '/gallery/portfolio',
  },
  {
    date: new Date(2020, 6),
    subtitle: '2020',
    title: 'SPOTLIGHT',
    src: Spotlight,
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

const UIUXGrids = SortsData.map((e, i) => (
  <GalleryGrid
    key={'UIUXGrids' + i}
    data={e.sort(UIUXData) as IGalleryEntry[]}
    breakpoints={Breakpoints2}
  />
));

// Architecture Grid Data
export const ArchitectureData: IGalleryEntry[] = [
  {
    date: new Date(2022, 5),
    subtitle: '2022',
    title: 'FOLD PAVILION',
    src: Fold_Pavilion,
    to: '/gallery/foldpavilion',
  },
  {
    date: new Date(2020, 11),
    subtitle: 'Drifting Landscapes',
    title: 'KINETIC BOARDWALK',
    src: Kinetic_Boardwalk,
    to: '/gallery/kineticboardwalk',
  },
  {
    date: new Date(2019, 4),
    subtitle: '2019',
    title: 'BASILISK TOWER',
    src: Basilisk_Tower,
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

const ArchitectureGrids = SortsData.map((e, i) => (
  <GalleryGrid
    key={'ArchitectureGrids' + i}
    data={e.sort(ArchitectureData) as IGalleryEntry[]}
    breakpoints={Breakpoints3}
  />
));

// TabsData
export const TabsData: ITabsData = [
  {
    label: 'VISUAL ARTS',
    grids: VisualArtsGrids,
  },
  {
    label: 'UI / UX',
    grids: UIUXGrids,
  },
  {
    label: 'ARCHITECTURE',
    grids: ArchitectureGrids,
  },
];
