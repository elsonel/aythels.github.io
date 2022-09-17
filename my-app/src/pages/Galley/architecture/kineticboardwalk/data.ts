import img_0 from './assets/0.png';
import img_1a from './assets/1a.png';
import img_1b from './assets/1b.png';
import img_1c from './assets/1c.png';
import img_1d from './assets/1d.png';
import img_1e from './assets/1e.png';
import img_1f from './assets/1f.png';
import img_2a from './assets/2a.png';
import img_2b from './assets/2b.png';
import img_2c from './assets/2c.png';
import img_2d from './assets/2d.png';
import img_2e from './assets/2e.png';
import img_2f from './assets/2f.png';

import {
  Image,
  IGridsData,
  IPanelData,
} from '../../../../components/ProjectGallery';
import { GridBreakpoint } from '../../../../UI/components/layout/Grid';

export const PanelData: IPanelData = {
  title: 'Kinetic Boardwalk',
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

const IMAGES_1: Image[] = [
  {
    src: img_0,
    caption: undefined,
  },
];

const IMAGES_2: Image[] = [
  {
    src: img_1a,
    caption: undefined,
  },
  {
    src: img_1b,
    caption: undefined,
  },
  {
    src: img_1c,
    caption: undefined,
  },
  {
    src: img_1d,
    caption: undefined,
  },
  {
    src: img_1e,
    caption: undefined,
  },
  {
    src: img_1f,
    caption: undefined,
  },
];

const IMAGES_3: Image[] = [
  {
    src: img_2a,
    caption: undefined,
  },
  {
    src: img_2b,
    caption: undefined,
  },
  {
    src: img_2c,
    caption: undefined,
  },
  {
    src: img_2d,
    caption: undefined,
  },
  {
    src: img_2e,
    caption: undefined,
  },
  {
    src: img_2f,
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
