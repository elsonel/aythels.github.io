import { BasiliskTowerImages } from 'utility/ImportImages';

import {
  IImage,
  IGridsData,
  IPanelData,
} from '../../../components/ProjectGallery';
import { GridBreakpoint } from '../../../UI/components/layout/Grid';

export const PanelData: IPanelData = {
  title: 'BASILISK TOWER',
  subtitle: 'Twisting Spiral',
  body: [
    <>
      <em>The Basilisk Tower</em> is a parametric skyscraper. The structure's
      geometric form is created by twisting a custom mesh consisting of a
      hexagon base which tapers into a triangular top.
    </>,
  ],
  facts: [
    {
      label: 'TYPE',
      value: 'Parametric Skyscraper',
    },
    {
      label: 'REGION',
      value: 'Toronto, ON',
    },
    {
      label: 'SUPERVISOR',
      value: 'Nicholas Hoban (ARC280)',
    },
    {
      label: 'COMPLETED',
      value: 'April 2019',
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
    ${BasiliskTowerImages.get(`${name}320.jpg`)} 320w,
    ${BasiliskTowerImages.get(`${name}640.jpg`)} 640w,
    ${BasiliskTowerImages.get(`${name}960.jpg`)} 960w,
    ${BasiliskTowerImages.get(`${name}1280.jpg`)} 1280w,
    ${BasiliskTowerImages.get(`${name}1600.jpg`)} 1600w,
    ${BasiliskTowerImages.get(`${name}1920.jpg`)} 1920w,
    ${BasiliskTowerImages.get(`${name}2240.jpg`)} 2240w,
    ${BasiliskTowerImages.get(`${name}2560.jpg`)} 2560w,
  `;
}

const IMAGES: IImage[] = [
  {
    src: BasiliskTowerImages.get('1_2560.jpg'),
    srcSet: getSrcSet('1_'),
    caption: 'Render 1/3',
  },
  {
    src: BasiliskTowerImages.get('2_2560.jpg'),
    srcSet: getSrcSet('2_'),
    caption: 'Render 2/3',
  },
  {
    src: BasiliskTowerImages.get('3_2560.jpg'),
    srcSet: getSrcSet('3_'),
    caption: 'Render 3/3',
  },
  {
    src: BasiliskTowerImages.get('4_2560.jpg'),
    srcSet: getSrcSet('4_'),
    caption: 'Elevation',
  },
  {
    src: BasiliskTowerImages.get('5_2560.jpg'),
    srcSet: getSrcSet('5_'),
    caption: 'Isometric',
  },
  {
    src: BasiliskTowerImages.get('6_2560.jpg'),
    srcSet: getSrcSet('6_'),
    caption: 'Plan',
  },
];

export const GridsData: IGridsData = [
  {
    breakpoints: BREAKPOINTS,
    images: IMAGES,
  },
];
