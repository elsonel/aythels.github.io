import { KineticBoardwalkImages } from 'utilities/ImportImages';

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
    <>
      <em>The Kinetic Boardwalk</em> is an adaptive and programmable system of
      inflating tiles that span the coastline of Venice Beach. Acting as both a
      public amenity and functional infrastructure, the structure aims to
      address high tides and the crisis of rising water levels while also
      serving as an exhibitive walkway for pedestrians.
    </>,
    `Inspired by sand dunes and grassy hills, the Kinetic Boardwalk's form is made up of a modular system of "bumps" that can be mechanically controlled to individually rise or flatten at will. A variety of built environments with different use cases are created. The bump can be used as a deployable floodwall against high tides, a lookout point or rest area for pedestrians.`,
    `Each bump is made up of a grid of interlocking tiles layered over inflatables which are powered by motorized air pumps. The tiles rise at different elevations when the round inflatables hidden underneath are powered to create the appearance of a curved surface. Rubber flaps connect each tile length wise, hiding cracks and providing a water-tight seal.`,
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
    ${KineticBoardwalkImages.get(`${name}320.jpg`)} 320w,
    ${KineticBoardwalkImages.get(`${name}640.jpg`)} 640w,
    ${KineticBoardwalkImages.get(`${name}960.jpg`)} 960w,
    ${KineticBoardwalkImages.get(`${name}1280.jpg`)} 1280w,
    ${KineticBoardwalkImages.get(`${name}1600.jpg`)} 1600w,
    ${KineticBoardwalkImages.get(`${name}1920.jpg`)} 1920w,
    ${KineticBoardwalkImages.get(`${name}2240.jpg`)} 2240w,
    ${KineticBoardwalkImages.get(`${name}2560.jpg`)} 2560w,
  `;
}

const IMAGES_1: IImage[] = [
  {
    src: KineticBoardwalkImages.get('1a_2560.jpg'),
    srcSet: getSrcSet('1a_'),
    caption: 'Render',
  },
];

const IMAGES_2: IImage[] = [
  {
    src: KineticBoardwalkImages.get('2a_2560.jpg'),
    srcSet: getSrcSet('2a_'),
    caption: 'Elevation',
  },
  {
    src: KineticBoardwalkImages.get('2b_2560.jpg'),
    srcSet: getSrcSet('2b_'),
    caption: 'Elevation section',
  },
  {
    src: KineticBoardwalkImages.get('2c_2560.jpg'),
    srcSet: getSrcSet('2c_'),
    caption: 'Isometric',
  },
  {
    src: KineticBoardwalkImages.get('2d_2560.jpg'),
    srcSet: getSrcSet('2d_'),
    caption: 'Site plan',
  },
  {
    src: KineticBoardwalkImages.get('2e_2560.jpg'),
    srcSet: getSrcSet('2e_'),
    caption: 'Exploded isometric',
  },
  {
    src: KineticBoardwalkImages.get('2f_2560.jpg'),
    srcSet: getSrcSet('2f_'),
    caption: 'Exploded tile isometric',
  },
];

const IMAGES_3: IImage[] = [
  {
    src: KineticBoardwalkImages.get('3a_2560.jpg'),
    srcSet: getSrcSet('3a_'),
    caption: 'Colors overview in elevation',
  },
  {
    src: KineticBoardwalkImages.get('3b_2560.jpg'),
    srcSet: getSrcSet('3b_'),
    caption: 'Colors overview in plan',
  },
  {
    src: KineticBoardwalkImages.get('3c_2560.jpg'),
    srcSet: getSrcSet('3c_'),
    caption: 'Materials overview',
  },
  {
    src: KineticBoardwalkImages.get('3d_2560.jpg'),
    srcSet: getSrcSet('3d_'),
    caption: 'Tile variations',
  },
  {
    src: KineticBoardwalkImages.get('3e_2560.jpg'),
    srcSet: getSrcSet('3e_'),
    caption: 'Tile group mechanism',
  },
  {
    src: KineticBoardwalkImages.get('3f_2560.jpg'),
    srcSet: getSrcSet('3f_'),
    caption: 'Tile mechanism',
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
