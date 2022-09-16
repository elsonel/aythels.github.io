import { GridBreakpoint } from '../../../../UI/components/layout/Grid';
import { GridDataInterface, IPanelDataInterface, Image } from './types';

export const PanelData: IPanelDataInterface = {
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
    src: '/images/gallery/architecture/kineticboardwalk/0.png',
    caption: undefined,
  },
];

const IMAGES_2: Image[] = [
  {
    src: '/images/gallery/architecture/kineticboardwalk/1a.png',
    caption: undefined,
  },
  {
    src: '/images/gallery/architecture/kineticboardwalk/1b.png',
    caption: undefined,
  },
  {
    src: '/images/gallery/architecture/kineticboardwalk/1c.png',
    caption: undefined,
  },
  {
    src: '/images/gallery/architecture/kineticboardwalk/1d.png',
    caption: undefined,
  },
  {
    src: '/images/gallery/architecture/kineticboardwalk/1e.png',
    caption: undefined,
  },
  {
    src: '/images/gallery/architecture/kineticboardwalk/1f.png',
    caption: undefined,
  },
];

const IMAGES_3: Image[] = [
  {
    src: '/images/gallery/architecture/kineticboardwalk/2a.png',
    caption: undefined,
  },
  {
    src: '/images/gallery/architecture/kineticboardwalk/2b.png',
    caption: undefined,
  },
  {
    src: '/images/gallery/architecture/kineticboardwalk/2c.png',
    caption: undefined,
  },
  {
    src: '/images/gallery/architecture/kineticboardwalk/2d.png',
    caption: undefined,
  },
  {
    src: '/images/gallery/architecture/kineticboardwalk/2e.png',
    caption: undefined,
  },
  {
    src: '/images/gallery/architecture/kineticboardwalk/2f.png',
    caption: undefined,
  },
];

export const GridData: GridDataInterface = [
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
