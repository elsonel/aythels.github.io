import { PortfolioImages } from 'utility/ImportImages';

import {
  IImage,
  IGridsData,
  IPanelData,
} from '../../../components/ProjectGallery';
import { GridBreakpoint } from '../../../UI/components/layout/Grid';

export const PanelData: IPanelData = {
  title: 'PORTFOL.IO',
  subtitle: '2020 College + Amazon Design Creative Jam',
  body: [
    'Entering a new professional field is daunting to the uninitiated, and the field of design is no exception. These uninitiated individuals, primarily consisting of high schoolers trying to discover their interests and career paths, may not possess the means to smoothly transition out of this phase, with limited knowledge on how to proceed.',
    'Our app, portfolio.io, seeks to address these issues gatekeeping young, prospective designers from developing, by incorporating the familiar essence of social media platforms in conjunction with various interactive self-learning tools. It allows users to discover projects for inspiration, professional designers and tutorials, hear of upcoming events, challenges and “circuits” - curated self-paced learning courses.',
    'Other functions such as our integrated photo editor serve as an alternative for new designers that cannot afford or are unfamiliar with industry specific tools, providing a free, beginner-friendly option for users to learn basic workflows and tools for design projects. ',
  ],
  facts: [
    {
      label: 'TYPE',
      value: 'UI/UX Design Competition Entry',
    },
    {
      label: 'PROTOTYPE',
      value: 'Link',
      to: `https://xd.adobe.com/view/ee0f999a-dad6-4945-b43d-27688c3bc47a-bb5c/screen/846bb621-8335-4de7-aae8-72f36b9f11b3?fullscreen`,
    },
    {
      label: 'COLLABORATORS',
      value: 'Perry Wang, Xavier Woo',
    },
    {
      label: 'COMPLETED',
      value: 'October 2020',
    },
    {
      label: 'PLACEMENT',
      value: 'Honorable Mention/Top 10 (Out of 419)',
    },
  ],
};

const BREAKPOINTS: GridBreakpoint[] = [
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
    ${PortfolioImages.get(`${name}320.jpg`)} 320w,
    ${PortfolioImages.get(`${name}640.jpg`)} 640w,
    ${PortfolioImages.get(`${name}960.jpg`)} 960w,
    ${PortfolioImages.get(`${name}1280.jpg`)} 1280w,
    ${PortfolioImages.get(`${name}1600.jpg`)} 1600w,
    ${PortfolioImages.get(`${name}1920.jpg`)} 1920w,
    ${PortfolioImages.get(`${name}2240.jpg`)} 2240w,
    ${PortfolioImages.get(`${name}2560.jpg`)} 2560w,
  `;
}

const IMAGES_1: IImage[] = [
  {
    src: PortfolioImages.get('1a_2560.jpg'),
    srcSet: getSrcSet('1a_'),
    caption: undefined,
  },
  {
    src: PortfolioImages.get('1a_2560.jpg'),
    srcSet: getSrcSet('1b_'),
    caption: undefined,
  },
  {
    src: PortfolioImages.get('1a_2560.jpg'),
    srcSet: getSrcSet('1c_'),
    caption: undefined,
  },
];

const IMAGES_2: IImage[] = [
  {
    src: PortfolioImages.get('2a_2560.jpg'),
    srcSet: getSrcSet('2a_'),
    caption: undefined,
  },
  {
    src: PortfolioImages.get('2a_2560.jpg'),
    srcSet: getSrcSet('2b_'),
    caption: undefined,
  },
  {
    src: PortfolioImages.get('2a_2560.jpg'),
    srcSet: getSrcSet('2c_'),
    caption: undefined,
  },
];

const IMAGES_3: IImage[] = [
  {
    src: PortfolioImages.get('3a_2560.jpg'),
    srcSet: getSrcSet('3a_'),
    caption: undefined,
  },
  {
    src: PortfolioImages.get('3b_2560.jpg'),
    srcSet: getSrcSet('3b_'),
    caption: undefined,
  },
  {
    src: PortfolioImages.get('3c_2560.jpg'),
    srcSet: getSrcSet('3c_'),
    caption: undefined,
  },
];

const IMAGES_4: IImage[] = [
  {
    src: PortfolioImages.get('3a_2560.jpg'),
    srcSet: getSrcSet('4a_'),
    caption: undefined,
  },
  {
    src: PortfolioImages.get('3b_2560.jpg'),
    srcSet: getSrcSet('4b_'),
    caption: undefined,
  },
  {
    src: PortfolioImages.get('3b_2560.jpg'),
    srcSet: getSrcSet('4c_'),
    caption: undefined,
  },
];

export const GridsData: IGridsData = [
  {
    breakpoints: BREAKPOINTS,
    images: [...IMAGES_1, ...IMAGES_2, ...IMAGES_3, ...IMAGES_4],
  },
];
