import React from 'react';
import { ROUTES } from '../utilities/routes';
import { ProjectTemplate } from './ProjectTemplate';
import {
  ArchitectureImages,
  BasiliskTowerImages,
} from '../utilities/ImportImages';

const PROJECT_LANDING_IMAGE = {
  src: ArchitectureImages.get('BasiliskTower2560.jpg'),
  srcSet: `
    ${ArchitectureImages.get('BasiliskTower320.jpg')} 320w,
    ${ArchitectureImages.get('BasiliskTower640.jpg')} 640w,
    ${ArchitectureImages.get('BasiliskTower960.jpg')} 960w,
    ${ArchitectureImages.get('BasiliskTower1280.jpg')} 1280w,
    ${ArchitectureImages.get('BasiliskTower1600.jpg')} 1600w,
    ${ArchitectureImages.get('BasiliskTower1920.jpg')} 1920w,
    ${ArchitectureImages.get('BasiliskTower2240.jpg')} 2240w,
    ${ArchitectureImages.get('BasiliskTower2560.jpg')} 2560w,
  `,
  alt: 'Basilisk Tower Landing Image',
};
const PROJECT_TITLE = 'BASILISK TOWER';
const PROJECT_SUBTITLE = 'Twisting Spiral';

const PROJECT_FACTS = [
  {
    label: 'TYPE',
    value: 'Skyscraper',
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
];

const PROJECT_PARAGRAPHS = [
  {
    title: undefined,
    body: `                  
      The Basilisk Tower is a skyscraper with a parametric form generated through twisting a unique mesh. The mesh is composed of a hexagonal base that gradually tapers into a triangular top.
    `,
  },
];

/* ========================================================================== */

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

const IMAGES = [
  {
    src: BasiliskTowerImages.get('1_2560.jpg'),
    srcSet: getSrcSet('1_'),
    alt: 'RENDER 1',
  },
  {
    src: BasiliskTowerImages.get('2_2560.jpg'),
    srcSet: getSrcSet('2_'),
    alt: 'RENDER 2',
  },
  {
    src: BasiliskTowerImages.get('3_2560.jpg'),
    srcSet: getSrcSet('3_'),
    alt: 'RENDER 3',
  },
  {
    src: BasiliskTowerImages.get('4_2560.jpg'),
    srcSet: getSrcSet('4_'),
    alt: 'ELEVATION',
  },
  {
    src: BasiliskTowerImages.get('5_2560.jpg'),
    srcSet: getSrcSet('5_'),
    alt: 'ISOMETRIC',
  },
  {
    src: BasiliskTowerImages.get('6_2560.jpg'),
    srcSet: getSrcSet('6_'),
    alt: 'PLAN',
  },
];

const PROJECT_IMAGES_DESKTOP = [
  [IMAGES[0], IMAGES[1], IMAGES[2]],
  [IMAGES[3], IMAGES[4], IMAGES[5]],
];

const PROJECT_IMAGES_MOBILE = [
  [IMAGES[0], IMAGES[1]],
  [IMAGES[2], IMAGES[3]],
  [IMAGES[4], IMAGES[5]],
];

/* ========================================================================== */

const BACK_ROUTE = ROUTES.architecture['kineticBoardwalk'];
const PAGE_TITLE = `ELSON LIANG | Fold Pavilion`;

export const PageProjectBasiliskTower: React.FC = (): React.ReactElement => (
  <ProjectTemplate
    projectLandingImage={PROJECT_LANDING_IMAGE}
    projectTitle={PROJECT_TITLE}
    projectSubtitle={PROJECT_SUBTITLE}
    projectPrototypeLink={undefined}
    projectFacts={PROJECT_FACTS}
    projectParagraphs={PROJECT_PARAGRAPHS}
    projectImagesDesktop={PROJECT_IMAGES_DESKTOP}
    projectImagesMobile={PROJECT_IMAGES_MOBILE}
    backRoute={BACK_ROUTE}
    forwardRoute={undefined}
    pageTitle={PAGE_TITLE}
  />
);
