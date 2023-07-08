import React from 'react';
import { ROUTES } from '../utilities/routes';
import { ProjectTemplate } from './ProjectTemplate';
import { BasiliskTowerImages } from '../utilities/ImportImages';

const PROJECT_LANDING_IMAGE = {
  src: BasiliskTowerImages.get('1a_1280.png'),
  srcSet: BasiliskTowerImages.getSrcSet('1a'),
  alt: 'Basilisk Tower Hero Image',
};
const PROJECT_LANDING_IMAGE_FIT = 'cover';

/* ========================================================================== */

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

const IMAGES = [
  {
    src: BasiliskTowerImages.get('1a_1280.png'),
    srcSet: BasiliskTowerImages.getSrcSet('1a'),
    alt: 'Render 1',
  },
  {
    src: BasiliskTowerImages.get('1b_1280.png'),
    srcSet: BasiliskTowerImages.getSrcSet('1b'),
    alt: 'Render 2',
  },
  {
    src: BasiliskTowerImages.get('1c_1280.png'),
    srcSet: BasiliskTowerImages.getSrcSet('1c'),
    alt: 'Render 3',
  },
  {
    src: BasiliskTowerImages.get('2a_1280.png'),
    srcSet: BasiliskTowerImages.getSrcSet('2a'),
    alt: 'Elevation',
  },
  {
    src: BasiliskTowerImages.get('2b_1280.png'),
    srcSet: BasiliskTowerImages.getSrcSet('2b'),
    alt: 'Isometric',
  },
  {
    src: BasiliskTowerImages.get('2c_1280.png'),
    srcSet: BasiliskTowerImages.getSrcSet('2c'),
    alt: 'Plan',
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
const FORWARD_ROUTE = undefined;
const PAGE_TITLE = `ELSON LIANG | Basilisk Tower`;

export const PageProjectBasiliskTower: React.FC = (): React.ReactElement => (
  <ProjectTemplate
    projectLandingImage={PROJECT_LANDING_IMAGE}
    projectLandingImageFit={PROJECT_LANDING_IMAGE_FIT}
    projectLandingBackgroundColor={undefined}
    projectTitle={PROJECT_TITLE}
    projectSubtitle={PROJECT_SUBTITLE}
    projectPrototypeLink={undefined}
    projectFacts={PROJECT_FACTS}
    projectParagraphs={PROJECT_PARAGRAPHS}
    projectImagesDesktop={PROJECT_IMAGES_DESKTOP}
    projectImagesMobile={PROJECT_IMAGES_MOBILE}
    backRoute={BACK_ROUTE}
    forwardRoute={FORWARD_ROUTE}
    pageTitle={PAGE_TITLE}
  />
);
