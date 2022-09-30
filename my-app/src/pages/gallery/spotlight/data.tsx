import { SpotlightImages } from 'utility/ImportImages';

import {
  IImage,
  IGridsData,
  IPanelData,
} from '../../../components/ProjectGallery';
import { GridBreakpoint } from '../../../UI/components/layout/Grid';

export const PanelData: IPanelData = {
  title: 'SPOTLIGHT',
  subtitle: '2020 College + Amazon Creative Jam',
  body: [
    <>
      <em>Spotlight</em> is an entertainment streaming desktop platform that
      facilitates close interactions between friends and family experiencing
      media together. Combining cinema associated visual motifs with social
      media features, Spotlight aims to replicate the experience of going to the
      movie theatre with friends and family, which otherwise cannot be achieved
      during pandemic-related circumstances.
    </>,
    'Modern entertainment platforms often lack opportunities for close collaborative interactions. Spotlight, however, features instant messaging and real-time watch parties that cater to small groups of friends and family. It differs from streaming and social-networking platforms by prioritizing interactions within the user’s immediate social circle and the content they mutually enjoy.',
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
    caption: 'Typography and colors overview',
  },
  {
    src: SpotlightImages.get('1b_2560.jpg'),
    srcSet: getSrcSet('1b_'),
    caption: 'Registration screen',
  },
  {
    src: SpotlightImages.get('1c_2560.jpg'),
    srcSet: getSrcSet('1c_'),
    caption: 'Theatre screen',
  },
];

const IMAGES_2: IImage[] = [
  {
    src: SpotlightImages.get('2a_2560.jpg'),
    srcSet: getSrcSet('2a_'),
    caption: 'Landing page',
  },
  {
    src: SpotlightImages.get('2b_2560.jpg'),
    srcSet: getSrcSet('2b_'),
    caption: 'Show browsing page',
  },
  {
    src: SpotlightImages.get('2c_2560.jpg'),
    srcSet: getSrcSet('2c_'),
    caption: 'Show overview page',
  },
];

export const GridsData: IGridsData = [
  {
    breakpoints: BREAKPOINTS,
    images: [...IMAGES_1, ...IMAGES_2],
  },
];
