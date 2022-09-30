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
  body: [
    <>
      <em>The Fold</em> is a public outdoor pavilion designed for use in a
      post-pandemic setting. Inspired by the form of trigonometry curves, it is
      comprised of several cells that can serve as gateways, barriers, and
      gathering spots for small groups or individuals.
    </>,
    'A gradual transition from complete isolation to subtle reunification between close friends and family marks the post-pandemic period. The Fold capitalizes on this reality with a layout that can accommodate multiple visiting parties while separating them from one another. This is accomplished without the use of harsh barriers such as rooms or solid walls which limit ventilation, and instead, features a floor plan with multiple entryways and exits to prioritize circulation. The curvilinear form and use of wooden materials also create an appearance that differs from the monotonous room encountered everyday during pandemic times.',
    'The fabrication process is meant to be cost-efficient, resourceful, and fast. The structure is divided up into major segments, each comprised of a grid of hollow rectangular wooded frames capped with plywood. Each frame is in turn made out of four planar lumber beams that can be robotically cut and assembled. Major segments can be prepared externally and moved onsite for quick assembly.',
  ],
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
    caption: 'Render 1/3',
  },
];

const IMAGES_2: IImage[] = [
  {
    src: FoldPavilionImages.get('2a_2560.jpg'),
    srcSet: getSrcSet('2a_'),
    caption: 'Render 2/3',
  },
  {
    src: FoldPavilionImages.get('2b_2560.jpg'),
    srcSet: getSrcSet('2b_'),
    caption: 'Render 3/3',
  },
  {
    src: FoldPavilionImages.get('3a_2560.jpg'),
    srcSet: getSrcSet('3a_'),
    caption: 'Plan',
  },
  {
    src: FoldPavilionImages.get('3b_2560.jpg'),
    srcSet: getSrcSet('3b_'),
    caption: 'Plan section',
  },
  {
    src: FoldPavilionImages.get('3c_2560.jpg'),
    srcSet: getSrcSet('3c_'),
    caption: 'Front elevation',
  },
  {
    src: FoldPavilionImages.get('3d_2560.jpg'),
    srcSet: getSrcSet('3d_'),
    caption: 'Side elevation and section',
  },
];

const IMAGES_3: IImage[] = [
  {
    src: FoldPavilionImages.get('3a_2560.jpg'),
    srcSet: getSrcSet('4a_'),
    caption: 'Use cases',
  },
  {
    src: FoldPavilionImages.get('3b_2560.jpg'),
    srcSet: getSrcSet('4b_'),
    caption: 'Fabrication process 1/2',
  },
  {
    src: FoldPavilionImages.get('3c_2560.jpg'),
    srcSet: getSrcSet('4c_'),
    caption: 'Fabrication process 2/2',
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
