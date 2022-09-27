import { FoldPavilionImages } from 'utility/ImportImages';

import {
  IImage,
  IGridsData,
  IPanelData,
} from '../../../components/ProjectGallery';
import { GridBreakpoint } from '../../../UI/components/layout/Grid';

export const PanelData: IPanelData = {
  title: 'FOLD PAVILION',
  subtitle: 'Isolated Reunion',
  body: ['Public pavilion designed for COVID-19 times.'],
  facts: [
    {
      label: 'TYPE',
      value: 'Public Amenetity',
    },
    {
      label: 'REGION',
      value: 'Vancouver, BC',
    },
    {
      label: 'SUPERVISOR',
      value: 'Salmon Khalil Araghi (ARC480)',
    },
    {
      label: 'COMPLETED',
      value: 'April 2022',
    },
  ],
};

const BREAKPOINTS_1: GridBreakpoint[] = [
  {
    minWidth: 0,
    columnCount: 1,
  },
];

const BREAKPOINTS_2: GridBreakpoint[] = [
  {
    minWidth: 0,
    columnCount: 2,
  },
];

const BREAKPOINTS_3: GridBreakpoint[] = [
  {
    minWidth: 0,
    columnCount: 2,
  },
  {
    minWidth: 800,
    columnCount: 3,
  },
];

/* =============================================================================
 * IMAGES
 * =============================================================================
 */

function getSrcSet(name: string) {
  return `
    ${FoldPavilionImages.get(`${name}320.jpg`)} 320w,
    ${FoldPavilionImages.get(`${name}640.jpg`)} 640w,
    ${FoldPavilionImages.get(`${name}960.jpg`)} 960w,
    ${FoldPavilionImages.get(`${name}1280.jpg`)} 1280w,
    ${FoldPavilionImages.get(`${name}1600.jpg`)} 1600w,
    ${FoldPavilionImages.get(`${name}1920.jpg`)} 1920w,
    ${FoldPavilionImages.get(`${name}2240.jpg`)} 2240w,
    ${FoldPavilionImages.get(`${name}2560.jpg`)} 2560w,
  `;
}

const IMAGES_1: IImage[] = [
  {
    src: FoldPavilionImages.get('1a_2560.jpg'),
    srcSet: getSrcSet('1a_'),
    caption: undefined,
  },
];

const IMAGES_2: IImage[] = [
  {
    src: FoldPavilionImages.get('2a_2560.jpg'),
    srcSet: getSrcSet('2a_'),
    caption: undefined,
  },
  {
    src: FoldPavilionImages.get('2b_2560.jpg'),
    srcSet: getSrcSet('2b_'),
    caption: undefined,
  },
  {
    src: FoldPavilionImages.get('3a_2560.jpg'),
    srcSet: getSrcSet('3a_'),
    caption: undefined,
  },
  {
    src: FoldPavilionImages.get('3b_2560.jpg'),
    srcSet: getSrcSet('3b_'),
    caption: undefined,
  },
  {
    src: FoldPavilionImages.get('3c_2560.jpg'),
    srcSet: getSrcSet('3c_'),
    caption: undefined,
  },
  {
    src: FoldPavilionImages.get('3d_2560.jpg'),
    srcSet: getSrcSet('3d_'),
    caption: undefined,
  },
];

const IMAGES_3: IImage[] = [
  {
    src: FoldPavilionImages.get('3a_2560.jpg'),
    srcSet: getSrcSet('4a_'),
    caption: undefined,
  },
  {
    src: FoldPavilionImages.get('3b_2560.jpg'),
    srcSet: getSrcSet('4b_'),
    caption: undefined,
  },
  {
    src: FoldPavilionImages.get('3c_2560.jpg'),
    srcSet: getSrcSet('4c_'),
    caption: undefined,
  },
];

export const GridsData: IGridsData = [
  {
    breakpoints: BREAKPOINTS_1,
    images: IMAGES_1,
  },
  {
    breakpoints: BREAKPOINTS_2,
    images: IMAGES_2,
  },
  {
    breakpoints: BREAKPOINTS_3,
    images: IMAGES_3,
  },
];
