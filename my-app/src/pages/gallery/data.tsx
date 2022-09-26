import { ISortsData, ITabsData } from '../../components/Gallery';
import { GalleryGrid, IGalleryEntry } from '../../components/GalleryGrid';
import {
  GalleryGridArt,
  IGalleryEntryArt,
} from '../../components/GalleryGridArt';
import { getSizes } from '../../UI/utility/scripts/ResponsiveImageGenerator';
import { GridBreakpoint } from '../../UI/components/layout/Grid';
import { sortByDate, sortByName } from 'utility/Sort';
import Portfolio from '../../assets/gallery/uiux/Portfolio.png';
import Spotlight from '../../assets/gallery/uiux/Spotlight.png';
import Basilisk_Tower from '../../assets/gallery/architecture/Basilisk_Tower.png';
import Fold_Pavilion from '../../assets/gallery/architecture/Fold_Pavilion.png';
import Kinetic_Boardwalk from '../../assets/gallery/architecture/Kinetic_Boardwalk.png';
import { VisualArtsImages } from 'utility/ImportImages';

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

const VisualArtsBreakpoints: GridBreakpoint[] = [
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

// Visual Arts Grid Data
export const VisualArtsData: IGalleryEntryArt[] = [
  {
    date: new Date(2022, 4),
    subtitle: '2022',
    title: 'NIGHT SKIRMISHES',
    src: VisualArtsImages['NightSkirmishes2560.jpg'],
    srcSet: `
      ${VisualArtsImages['NightSkirmishes320.jpg']} 320w,
      ${VisualArtsImages['NightSkirmishes640.jpg']} 640w,
      ${VisualArtsImages['NightSkirmishes960.jpg']} 960w,
      ${VisualArtsImages['NightSkirmishes1280.jpg']} 1280w,
      ${VisualArtsImages['NightSkirmishes1600.jpg']} 1600w,
      ${VisualArtsImages['NightSkirmishes1920.jpg']} 1920w,
      ${VisualArtsImages['NightSkirmishes2240.jpg']} 2240w,
      ${VisualArtsImages['NightSkirmishes2560.jpg']} 2560w,
    `,
    sizes: getSizes(VisualArtsBreakpoints),
    caption: 'Digital painting',
    width: 2040,
    height: 2600,
  },
  {
    date: new Date(2020, 5),
    subtitle: '2020',
    title: 'CORRUPTION',
    src: VisualArtsImages['Corruption2560.jpg'],
    srcSet: `
      ${VisualArtsImages['Corruption320.jpg']} 320w,
      ${VisualArtsImages['Corruption640.jpg']} 640w,
      ${VisualArtsImages['Corruption960.jpg']} 960w,
      ${VisualArtsImages['Corruption1280.jpg']} 1280w,
      ${VisualArtsImages['Corruption1600.jpg']} 1600w,
      ${VisualArtsImages['Corruption1920.jpg']} 1920w,
      ${VisualArtsImages['Corruption2240.jpg']} 2240w,
      ${VisualArtsImages['Corruption2560.jpg']} 2560w,
    `,
    sizes: getSizes(VisualArtsBreakpoints),
    caption: 'Photo manipulation',
    width: 2448,
    height: 3264,
  },
  {
    date: new Date(2019, 1),
    subtitle: '2019',
    title: 'MEMORY',
    src: VisualArtsImages['Memory2560.jpg'],
    srcSet: `
      ${VisualArtsImages['Memory320.jpg']} 320w,
      ${VisualArtsImages['Memory640.jpg']} 640w,
      ${VisualArtsImages['Memory960.jpg']} 960w,
      ${VisualArtsImages['Memory1280.jpg']} 1280w,
      ${VisualArtsImages['Memory1600.jpg']} 1600w,
      ${VisualArtsImages['Memory1920.jpg']} 1920w,
      ${VisualArtsImages['Memory2240.jpg']} 2240w,
      ${VisualArtsImages['Memory2560.jpg']} 2560w,
    `,
    sizes: getSizes(VisualArtsBreakpoints),
    caption: 'Watercolor',
    width: 1900,
    height: 2520,
  },
  {
    date: new Date(2018, 9),
    subtitle: '2018',
    title: 'FOCUS',
    src: VisualArtsImages['Focus2560.jpg'],
    srcSet: `
      ${VisualArtsImages['Focus320.jpg']} 320w,
      ${VisualArtsImages['Focus640.jpg']} 640w,
      ${VisualArtsImages['Focus960.jpg']} 960w,
      ${VisualArtsImages['Focus1280.jpg']} 1280w,
      ${VisualArtsImages['Focus1600.jpg']} 1600w,
      ${VisualArtsImages['Focus1920.jpg']} 1920w,
      ${VisualArtsImages['Focus2240.jpg']} 2240w,
      ${VisualArtsImages['Focus2560.jpg']} 2560w,
    `,
    sizes: getSizes(VisualArtsBreakpoints),
    caption: 'Watercolor',
    width: 2170,
    height: 3058,
  },
  {
    date: new Date(2018, 8),
    subtitle: '2018',
    title: 'STORM',
    src: VisualArtsImages['Storm2560.jpg'],
    srcSet: `
      ${VisualArtsImages['Storm320.jpg']} 320w,
      ${VisualArtsImages['Storm640.jpg']} 640w,
      ${VisualArtsImages['Storm960.jpg']} 960w,
      ${VisualArtsImages['Storm1280.jpg']} 1280w,
      ${VisualArtsImages['Storm1600.jpg']} 1600w,
      ${VisualArtsImages['Storm1920.jpg']} 1920w,
      ${VisualArtsImages['Storm2240.jpg']} 2240w,
      ${VisualArtsImages['Storm2560.jpg']} 2560w,
    `,
    sizes: getSizes(VisualArtsBreakpoints),
    caption: 'Acrylic on canvas',
    width: 2000,
    height: 2870,
  },
  {
    date: new Date(2018, 3),
    subtitle: '2017',
    title: 'REACH',
    src: VisualArtsImages['Reach2560.jpg'],
    srcSet: `
      ${VisualArtsImages['Reach320.jpg']} 320w,
      ${VisualArtsImages['Reach640.jpg']} 640w,
      ${VisualArtsImages['Reach960.jpg']} 960w,
      ${VisualArtsImages['Reach1280.jpg']} 1280w,
      ${VisualArtsImages['Reach1600.jpg']} 1600w,
      ${VisualArtsImages['Reach1920.jpg']} 1920w,
      ${VisualArtsImages['Reach2240.jpg']} 2240w,
      ${VisualArtsImages['Reach2560.jpg']} 2560w,
    `,
    sizes: getSizes(VisualArtsBreakpoints),
    caption: 'Photography',
    width: 2339,
    height: 2930,
  },
  {
    date: new Date(2018, 2),
    subtitle: '2018',
    title: 'AMETHYST CITY',
    src: VisualArtsImages['AmethystCity2560.jpg'],
    srcSet: `
      ${VisualArtsImages['AmethystCity320.jpg']} 320w,
      ${VisualArtsImages['AmethystCity640.jpg']} 640w,
      ${VisualArtsImages['AmethystCity960.jpg']} 960w,
      ${VisualArtsImages['AmethystCity1280.jpg']} 1280w,
      ${VisualArtsImages['AmethystCity1600.jpg']} 1600w,
      ${VisualArtsImages['AmethystCity1920.jpg']} 1920w,
      ${VisualArtsImages['AmethystCity2240.jpg']} 2240w,
      ${VisualArtsImages['AmethystCity2560.jpg']} 2560w,
    `,
    sizes: getSizes(VisualArtsBreakpoints),
    caption: 'Acrylic on canvas',
    width: 2900,
    height: 2360,
  },
];

const VisualArtsGrids = SortsData.map((e, i) => (
  <GalleryGridArt
    key={'VisualArtsGrids' + i}
    data={e.sort(VisualArtsData) as IGalleryEntryArt[]}
    breakpoints={VisualArtsBreakpoints}
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
