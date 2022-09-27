import { KineticBoardwalkImages } from 'utility/ImportImages';

import {
  IImage,
  IGridsData,
  IPanelData,
} from '../../../components/ProjectGallery';
import { GridBreakpoint } from '../../../UI/components/layout/Grid';

export const PanelData: IPanelData = {
  title: 'KINETIC BOARDWALK',
  subtitle: 'Drifting Landscapes',
  body: [
    'The Kinetic Boardwalk is a programmable system of inflating tiles spanning the coast of Venice Beach. This project addresses the California flood crisis in both an infrastructural and public-friendly manner; a series of embedded inflatables create a variety of built environments including a  deployable floodwall in case of high tides. Each form the boardwalk takes provides a different function and user experience. The Kinetic Boardwalk is a reactive system that responds to an environmental concern in a more adaptable way.',
    'The boardwalk is a layered system consisting of a motorized air pump which powers a deployable inflatable. The inflation pushes onto a modernized grid of “brick” which act as the surface platform. A closer look at the individual bricks reveals a pair of rotating pins which mechanize the surface “breakage” or extrusion. This gives the illusion of a flexible boardwalk with the benefits of a solid material. Rubber flaps are used to create seals where the surface would be broken, providing a water tight system.',
  ],
  facts: [
    {
      label: 'TYPE',
      value: 'Public Mega-Infastructure',
    },
    {
      label: 'REGION',
      value: 'Venice, Los Angeles',
    },
    {
      label: 'SUPERVISOR',
      value: 'Nathan Bishop (ARC380)',
    },
    {
      label: 'COLLABORATORS',
      value: 'Elson Liang, Omar Abdellatif',
    },
    {
      label: 'COMPLETED',
      value: 'December 2020',
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
  {
    minWidth: 800,
    columnCount: 3,
  },
];

const BREAKPOINTS_3: GridBreakpoint[] = [
  {
    minWidth: 0,
    columnCount: 2,
  },
];

/* =============================================================================
 * IMAGES
 * =============================================================================
 */

function getSrcSet(name: string) {
  return `
    ${KineticBoardwalkImages[`${name}320.jpg`]} 320w,
    ${KineticBoardwalkImages[`${name}640.jpg`]} 640w,
    ${KineticBoardwalkImages[`${name}960.jpg`]} 960w,
    ${KineticBoardwalkImages[`${name}1280.jpg`]} 1280w,
    ${KineticBoardwalkImages[`${name}1600.jpg`]} 1600w,
    ${KineticBoardwalkImages[`${name}1920.jpg`]} 1920w,
    ${KineticBoardwalkImages[`${name}2240.jpg`]} 2240w,
    ${KineticBoardwalkImages[`${name}2560.jpg`]} 2560w,
  `;
}

const IMAGES_1: IImage[] = [
  {
    src: KineticBoardwalkImages['1a2560.jpg'],
    srcSet: getSrcSet('1a'),
    caption: undefined,
  },
];

const IMAGES_2: IImage[] = [
  {
    src: KineticBoardwalkImages['2a2560.jpg'],
    srcSet: getSrcSet('2a'),
    caption: undefined,
  },
  {
    src: KineticBoardwalkImages['2b2560.jpg'],
    srcSet: getSrcSet('2b'),
    caption: undefined,
  },
  {
    src: KineticBoardwalkImages['2c2560.jpg'],
    srcSet: getSrcSet('2c'),
    caption: undefined,
  },
  {
    src: KineticBoardwalkImages['2d2560.jpg'],
    srcSet: getSrcSet('2d'),
    caption: undefined,
  },
  {
    src: KineticBoardwalkImages['2e2560.jpg'],
    srcSet: getSrcSet('2e'),
    caption: undefined,
  },
  {
    src: KineticBoardwalkImages['2f2560.jpg'],
    srcSet: getSrcSet('2f'),
    caption: undefined,
  },
];

const IMAGES_3: IImage[] = [
  {
    src: KineticBoardwalkImages['3a2560.jpg'],
    srcSet: getSrcSet('3a'),
    caption: undefined,
  },
  {
    src: KineticBoardwalkImages['3b2560.jpg'],
    srcSet: getSrcSet('3b'),
    caption: undefined,
  },
  {
    src: KineticBoardwalkImages['3c2560.jpg'],
    srcSet: getSrcSet('3c'),
    caption: undefined,
  },
  {
    src: KineticBoardwalkImages['3d2560.jpg'],
    srcSet: getSrcSet('3d'),
    caption: undefined,
  },
  {
    src: KineticBoardwalkImages['3e2560.jpg'],
    srcSet: getSrcSet('3e'),
    caption: undefined,
  },
  {
    src: KineticBoardwalkImages['3f2560.jpg'],
    srcSet: getSrcSet('3f'),
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
