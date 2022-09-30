import { PortfolioImages } from 'utility/ImportImages';

import {
  IImage,
  IGridsData,
  IPanelData,
} from '../../../components/ProjectGallery';
import { GridBreakpoint } from '../../../UI/components/layout/Grid';

export const PanelData: IPanelData = {
  title: 'PORTFOL.IO',
  subtitle: '2020 College + Amazon Creative Jam',
  body: [
    'Breaking into a new professional field is daunting for the uninitiated, and the field of design is no exception. These uninitiated individuals, primarily consisting of students and young adults, may lack resources and guidance to aid in discovering their interests and career paths.',
    <>
      <em>Portfolio.io</em> is a tablet-optimized application that seeks to
      address these issues holding back young, prospective designers from
      developing, by incorporating the familiar essence of social media
      platforms in conjunction with various interactive self-learning tools.
      Users can discover inspirational projects, follow professional designers,
      hear of upcoming events, and participate in challenges and "circuits" -
      curated self-paced learning courses.
    </>,
    `Included is also an integrated image editor which serves as a free alternative to industry-specific tools. New designers are hence provided with a beginner-friendly option for learning basic workflows and tools for design projects.`,
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
      value: 'Honorable Mention/Top 10 (Out of 419 Teams)',
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
    caption: 'Onboarding screen 1/3',
  },
  {
    src: PortfolioImages.get('1b_2560.jpg'),
    srcSet: getSrcSet('1b_'),
    caption: 'Onboarding screen 2/3',
  },
  {
    src: PortfolioImages.get('1c_2560.jpg'),
    srcSet: getSrcSet('1c_'),
    caption: 'Onboarding screen 3/3',
  },
];

const IMAGES_2: IImage[] = [
  {
    src: PortfolioImages.get('2a_2560.jpg'),
    srcSet: getSrcSet('2a_'),
    caption: 'Home screen',
  },
  {
    src: PortfolioImages.get('2b_2560.jpg'),
    srcSet: getSrcSet('2b_'),
    caption: 'Saved projects screen',
  },
  {
    src: PortfolioImages.get('2c_2560.jpg'),
    srcSet: getSrcSet('2c_'),
    caption: 'Profile screen',
  },
];

const IMAGES_3: IImage[] = [
  {
    src: PortfolioImages.get('3a_2560.jpg'),
    srcSet: getSrcSet('3a_'),
    caption: 'Course library screen',
  },
  {
    src: PortfolioImages.get('3b_2560.jpg'),
    srcSet: getSrcSet('3b_'),
    caption: 'Example course screen 1/2',
  },
  {
    src: PortfolioImages.get('3c_2560.jpg'),
    srcSet: getSrcSet('3c_'),
    caption: 'Example course screen 2/2',
  },
];

const IMAGES_4: IImage[] = [
  {
    src: PortfolioImages.get('4a_2560.jpg'),
    srcSet: getSrcSet('4a_'),
    caption: 'Image editor screen 1/3',
  },
  {
    src: PortfolioImages.get('4b_2560.jpg'),
    srcSet: getSrcSet('4b_'),
    caption: 'Image editor screen 2/3',
  },
  {
    src: PortfolioImages.get('4c_2560.jpg'),
    srcSet: getSrcSet('4c_'),
    caption: 'Image editor screen 3/3',
  },
];

export const GridsData: IGridsData = [
  {
    breakpoints: BREAKPOINTS,
    images: [...IMAGES_1, ...IMAGES_2, ...IMAGES_3, ...IMAGES_4],
  },
];
