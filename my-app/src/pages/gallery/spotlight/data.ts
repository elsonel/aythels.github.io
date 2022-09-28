import { SpotlightImages } from 'utility/ImportImages';

import {
  IImage,
  IGridsData,
  IPanelData,
} from '../../../components/ProjectGallery';
import { GridBreakpoint } from '../../../UI/components/layout/Grid';

export const PanelData: IPanelData = {
  title: 'SPOTLIGHT',
  subtitle: '2020 College + Amazon Design Creative Jam',
  body: [
    'Spotlight is a family friendly media streaming and social platform. It’s ease of navigation, multitude of media options and collaborative and communication system makes it ideal for all ages.',
    'Media platforms like Netflix lack opportunities for collaborative interactions. Spotlight features social communication and real-time screenings catering to small groups of family and friends. It differs from streaming and mass social-networking platforms by prioritizing interactions within the user’s immediate social circle. To virtually substitute the experience of being in a movie theater with friends and family, Spotlight uses cinema associated visual motifs and mechanics like tickets and invitations.',
    'Navigation is designed to be linear, seamless and intuitive through the use of tailored transitions to aid casuals in accessing both trends and specific interests. For those discovering new content, media pages are informative without being overwhelming.',
    'The visual design uses whimsical imagery and minimal colors with bright accents to appear friendly, playful and reactive to the target audience.',
  ],
  facts: [
    {
      label: 'TYPE',
      value: 'UI/UX Design Competition Entry',
    },
    {
      label: 'PROTOTYPE',
      value: 'Link',
      to: `https://xd.adobe.com/view/ad0d4816-e8bb-409d-ad17-8b38ba686876-f85e/?fullscreen`,
    },
    {
      label: 'COLLABORATORS',
      value: 'Perry Wang, Xavier Woo',
    },
    {
      label: 'COMPLETED',
      value: 'June 2020',
    },
    {
      label: 'PLACEMENT',
      value: '2nd Place (Out of 985 Teams)',
    },
  ],
};

const BREAKPOINTS: GridBreakpoint[] = [
  {
    minWidth: 0,
    columnCount: 1,
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
    ${SpotlightImages.get(`${name}320.jpg`)} 320w,
    ${SpotlightImages.get(`${name}640.jpg`)} 640w,
    ${SpotlightImages.get(`${name}960.jpg`)} 960w,
    ${SpotlightImages.get(`${name}1280.jpg`)} 1280w,
    ${SpotlightImages.get(`${name}1600.jpg`)} 1600w,
    ${SpotlightImages.get(`${name}1920.jpg`)} 1920w,
    ${SpotlightImages.get(`${name}2240.jpg`)} 2240w,
    ${SpotlightImages.get(`${name}2560.jpg`)} 2560w,
  `;
}

const IMAGES_1: IImage[] = [
  {
    src: SpotlightImages.get('1a_2560.jpg'),
    srcSet: getSrcSet('1a_'),
    caption: undefined,
  },
  {
    src: SpotlightImages.get('1b_2560.jpg'),
    srcSet: getSrcSet('1b_'),
    caption: undefined,
  },
  {
    src: SpotlightImages.get('1c_2560.jpg'),
    srcSet: getSrcSet('1c_'),
    caption: undefined,
  },
];

const IMAGES_2: IImage[] = [
  {
    src: SpotlightImages.get('2a_2560.jpg'),
    srcSet: getSrcSet('2a_'),
    caption: undefined,
  },
  {
    src: SpotlightImages.get('2b_2560.jpg'),
    srcSet: getSrcSet('2b_'),
    caption: undefined,
  },
  {
    src: SpotlightImages.get('2c_2560.jpg'),
    srcSet: getSrcSet('2c_'),
    caption: undefined,
  },
];

export const GridsData: IGridsData = [
  {
    breakpoints: BREAKPOINTS,
    images: [...IMAGES_1, ...IMAGES_2],
  },
];
