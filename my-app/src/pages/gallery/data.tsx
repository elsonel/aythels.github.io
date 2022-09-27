import { ISortsData, ITabsData } from '../../components/Gallery';
import { GalleryGrid, IGalleryEntry } from '../../components/GalleryGrid';
import {
  GalleryGridArt,
  IGalleryEntryArt,
} from '../../components/GalleryGridArt';
import { GridBreakpoint } from '../../UI/components/layout/Grid';
import { sortByDate, sortByName } from 'utility/Sort';
import {
  VisualArtsImages,
  UIUXImages,
  ArchitectureImages,
} from 'utility/ImportImages';

/* =============================================================================
 * Sorting Data
 * =============================================================================
 */
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

/* =============================================================================
 * Visual Arts Data
 * =============================================================================
 */
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

export const VisualArtsData: IGalleryEntryArt[] = [
  {
    date: new Date(2022, 4),
    subtitle: '2022',
    title: 'NIGHT SKIRMISHES',
    src: VisualArtsImages.get('NightSkirmishes2560.jpg'),
    srcSet: `
      ${VisualArtsImages.get('NightSkirmishes320.jpg')} 320w,
      ${VisualArtsImages.get('NightSkirmishes640.jpg')} 640w,
      ${VisualArtsImages.get('NightSkirmishes960.jpg')} 960w,
      ${VisualArtsImages.get('NightSkirmishes1280.jpg')} 1280w,
      ${VisualArtsImages.get('NightSkirmishes1600.jpg')} 1600w,
      ${VisualArtsImages.get('NightSkirmishes1920.jpg')} 1920w,
      ${VisualArtsImages.get('NightSkirmishes2240.jpg')} 2240w,
      ${VisualArtsImages.get('NightSkirmishes2560.jpg')} 2560w,
    `,
    caption: 'Digital painting',
    width: 2040,
    height: 2600,
  },
  {
    date: new Date(2020, 5),
    subtitle: '2020',
    title: 'CORRUPTION',
    src: VisualArtsImages.get('Corruption2560.jpg'),
    srcSet: `
      ${VisualArtsImages.get('Corruption320.jpg')} 320w,
      ${VisualArtsImages.get('Corruption640.jpg')} 640w,
      ${VisualArtsImages.get('Corruption960.jpg')} 960w,
      ${VisualArtsImages.get('Corruption1280.jpg')} 1280w,
      ${VisualArtsImages.get('Corruption1600.jpg')} 1600w,
      ${VisualArtsImages.get('Corruption1920.jpg')} 1920w,
      ${VisualArtsImages.get('Corruption2240.jpg')} 2240w,
      ${VisualArtsImages.get('Corruption2560.jpg')} 2560w,
    `,
    caption: 'Photo manipulation',
    width: 2448,
    height: 3264,
  },
  {
    date: new Date(2019, 1),
    subtitle: '2019',
    title: 'MEMORY',
    src: VisualArtsImages.get('Memory2560.jpg'),
    srcSet: `
      ${VisualArtsImages.get('Memory320.jpg')} 320w,
      ${VisualArtsImages.get('Memory640.jpg')} 640w,
      ${VisualArtsImages.get('Memory960.jpg')} 960w,
      ${VisualArtsImages.get('Memory1280.jpg')} 1280w,
      ${VisualArtsImages.get('Memory1600.jpg')} 1600w,
      ${VisualArtsImages.get('Memory1920.jpg')} 1920w,
      ${VisualArtsImages.get('Memory2240.jpg')} 2240w,
      ${VisualArtsImages.get('Memory2560.jpg')} 2560w,
    `,
    caption: 'Watercolor',
    width: 1900,
    height: 2520,
  },
  {
    date: new Date(2018, 9),
    subtitle: '2018',
    title: 'FOCUS',
    src: VisualArtsImages.get('Focus2560.jpg'),
    srcSet: `
      ${VisualArtsImages.get('Focus320.jpg')} 320w,
      ${VisualArtsImages.get('Focus640.jpg')} 640w,
      ${VisualArtsImages.get('Focus960.jpg')} 960w,
      ${VisualArtsImages.get('Focus1280.jpg')} 1280w,
      ${VisualArtsImages.get('Focus1600.jpg')} 1600w,
      ${VisualArtsImages.get('Focus1920.jpg')} 1920w,
      ${VisualArtsImages.get('Focus2240.jpg')} 2240w,
      ${VisualArtsImages.get('Focus2560.jpg')} 2560w,
    `,
    caption: 'Watercolor',
    width: 2170,
    height: 3058,
  },
  {
    date: new Date(2018, 8),
    subtitle: '2018',
    title: 'STORM',
    src: VisualArtsImages.get('Storm2560.jpg'),
    srcSet: `
      ${VisualArtsImages.get('Storm320.jpg')} 320w,
      ${VisualArtsImages.get('Storm640.jpg')} 640w,
      ${VisualArtsImages.get('Storm960.jpg')} 960w,
      ${VisualArtsImages.get('Storm1280.jpg')} 1280w,
      ${VisualArtsImages.get('Storm1600.jpg')} 1600w,
      ${VisualArtsImages.get('Storm1920.jpg')} 1920w,
      ${VisualArtsImages.get('Storm2240.jpg')} 2240w,
      ${VisualArtsImages.get('Storm2560.jpg')} 2560w,
    `,
    caption: 'Acrylic on canvas',
    width: 2000,
    height: 2870,
  },
  {
    date: new Date(2018, 3),
    subtitle: '2017',
    title: 'REACH',
    src: VisualArtsImages.get('Reach2560.jpg'),
    srcSet: `
      ${VisualArtsImages.get('Reach320.jpg')} 320w,
      ${VisualArtsImages.get('Reach640.jpg')} 640w,
      ${VisualArtsImages.get('Reach960.jpg')} 960w,
      ${VisualArtsImages.get('Reach1280.jpg')} 1280w,
      ${VisualArtsImages.get('Reach1600.jpg')} 1600w,
      ${VisualArtsImages.get('Reach1920.jpg')} 1920w,
      ${VisualArtsImages.get('Reach2240.jpg')} 2240w,
      ${VisualArtsImages.get('Reach2560.jpg')} 2560w,
    `,
    caption: 'Photography',
    width: 2339,
    height: 2930,
  },
  {
    date: new Date(2018, 2),
    subtitle: '2018',
    title: 'AMETHYST CITY',
    src: VisualArtsImages.get('AmethystCity2560.jpg'),
    srcSet: `
      ${VisualArtsImages.get('AmethystCity320.jpg')} 320w,
      ${VisualArtsImages.get('AmethystCity640.jpg')} 640w,
      ${VisualArtsImages.get('AmethystCity960.jpg')} 960w,
      ${VisualArtsImages.get('AmethystCity1280.jpg')} 1280w,
      ${VisualArtsImages.get('AmethystCity1600.jpg')} 1600w,
      ${VisualArtsImages.get('AmethystCity1920.jpg')} 1920w,
      ${VisualArtsImages.get('AmethystCity2240.jpg')} 2240w,
      ${VisualArtsImages.get('AmethystCity2560.jpg')} 2560w,
    `,
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

/* =============================================================================
 * UI UX Data
 * =============================================================================
 */

const UIUXBreakpoints: GridBreakpoint[] = [
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

export const UIUXData: IGalleryEntry[] = [
  {
    date: new Date(2020, 8),
    subtitle: '2020',
    title: 'PORTFOL.IO',
    src: UIUXImages.get('Portfolio2560.jpg'),
    srcSet: `
      ${UIUXImages.get('Portfolio320.jpg')} 320w,
      ${UIUXImages.get('Portfolio640.jpg')} 640w,
      ${UIUXImages.get('Portfolio960.jpg')} 960w,
      ${UIUXImages.get('Portfolio1280.jpg')} 1280w,
      ${UIUXImages.get('Portfolio1600.jpg')} 1600w,
      ${UIUXImages.get('Portfolio1920.jpg')} 1920w,
      ${UIUXImages.get('Portfolio2240.jpg')} 2240w,
      ${UIUXImages.get('Portfolio2560.jpg')} 2560w,
    `,
    to: '/gallery/portfolio',
  },
  {
    date: new Date(2020, 6),
    subtitle: '2020',
    title: 'SPOTLIGHT',
    src: UIUXImages.get('Spotlight2560.jpg'),
    srcSet: `
      ${UIUXImages.get('Spotlight320.jpg')} 320w,
      ${UIUXImages.get('Spotlight640.jpg')} 640w,
      ${UIUXImages.get('Spotlight960.jpg')} 960w,
      ${UIUXImages.get('Spotlight1280.jpg')} 1280w,
      ${UIUXImages.get('Spotlight1600.jpg')} 1600w,
      ${UIUXImages.get('Spotlight1920.jpg')} 1920w,
      ${UIUXImages.get('Spotlight2240.jpg')} 2240w,
      ${UIUXImages.get('Spotlight2560.jpg')} 2560w,
    `,
    to: '/gallery/spotlight',
  },
];

const UIUXGrids = SortsData.map((e, i) => (
  <GalleryGrid
    key={'UIUXGrids' + i}
    data={e.sort(UIUXData) as IGalleryEntry[]}
    breakpoints={UIUXBreakpoints}
  />
));

/* =============================================================================
 * Architecture Data
 * =============================================================================
 */
const ArchitectureBreakpoints: GridBreakpoint[] = [
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
    subtitle: 'Isolated Reunion',
    title: 'FOLD PAVILION',
    src: ArchitectureImages.get('FoldPavilion2560.jpg'),
    srcSet: `
      ${ArchitectureImages.get('FoldPavilion320.jpg')} 320w,
      ${ArchitectureImages.get('FoldPavilion640.jpg')} 640w,
      ${ArchitectureImages.get('FoldPavilion960.jpg')} 960w,
      ${ArchitectureImages.get('FoldPavilion1280.jpg')} 1280w,
      ${ArchitectureImages.get('FoldPavilion1600.jpg')} 1600w,
      ${ArchitectureImages.get('FoldPavilion1920.jpg')} 1920w,
      ${ArchitectureImages.get('FoldPavilion2240.jpg')} 2240w,
      ${ArchitectureImages.get('FoldPavilion2560.jpg')} 2560w,
    `,
    to: '/gallery/foldpavilion',
  },
  {
    date: new Date(2020, 11),
    subtitle: 'Drifting Landscapes',
    title: 'KINETIC BOARDWALK',
    src: ArchitectureImages.get('KineticBoardwalk2560.jpg'),
    srcSet: `
      ${ArchitectureImages.get('KineticBoardwalk320.jpg')} 320w,
      ${ArchitectureImages.get('KineticBoardwalk640.jpg')} 640w,
      ${ArchitectureImages.get('KineticBoardwalk960.jpg')} 960w,
      ${ArchitectureImages.get('KineticBoardwalk1280.jpg')} 1280w,
      ${ArchitectureImages.get('KineticBoardwalk1600.jpg')} 1600w,
      ${ArchitectureImages.get('KineticBoardwalk1920.jpg')} 1920w,
      ${ArchitectureImages.get('KineticBoardwalk2240.jpg')} 2240w,
      ${ArchitectureImages.get('KineticBoardwalk2560.jpg')} 2560w,
    `,
    to: '/gallery/kineticboardwalk',
  },
  {
    date: new Date(2019, 4),
    subtitle: 'Twisting Spiral',
    title: 'BASILISK TOWER',
    src: ArchitectureImages.get('BasiliskTower2560.jpg'),
    srcSet: `
      ${ArchitectureImages.get('BasiliskTower320.jpg')} 320w,
      ${ArchitectureImages.get('BasiliskTower640.jpg')} 640w,
      ${ArchitectureImages.get('BasiliskTower960.jpg')} 960w,
      ${ArchitectureImages.get('BasiliskTower1280.jpg')} 1280w,
      ${ArchitectureImages.get('BasiliskTower1600.jpg')} 1600w,
      ${ArchitectureImages.get('BasiliskTower1920.jpg')} 1920w,
      ${ArchitectureImages.get('BasiliskTower2240.jpg')} 2240w,
      ${ArchitectureImages.get('BasiliskTower2560.jpg')} 2560w,
    `,
    to: '/gallery/basilisktower',
  },
];

const ArchitectureGrids = SortsData.map((e, i) => (
  <GalleryGrid
    key={'ArchitectureGrids' + i}
    data={e.sort(ArchitectureData) as IGalleryEntry[]}
    breakpoints={ArchitectureBreakpoints}
  />
));

/* =============================================================================
 * Tabs Data
 * =============================================================================
 */
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
