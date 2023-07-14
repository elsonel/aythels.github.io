import React from 'react';
import { ROUTES } from '../utilities/routes';
import { ProjectTemplate } from './ProjectTemplate';
import { KineticBoardwalkImages } from '../utilities/ImportImages';

const PROJECT_LANDING_IMAGE = {
  src: KineticBoardwalkImages.get('1a_1280.png'),
  srcSet: KineticBoardwalkImages.getSrcSet('1a'),
  alt: 'Kinetic Boardwalk Hero Image',
};
const PROJECT_LANDING_IMAGE_FIT = 'cover';

/* ========================================================================== */

const PROJECT_TITLE = 'KINETIC BOARDWALK';
const PROJECT_SUBTITLE = 'Drifting Landscapes';

const PROJECT_FACTS = [
  {
    label: 'TYPE',
    value: 'Public Amenity / Infastructure',
  },
  {
    label: 'REGION',
    value: 'Los Angeles, California',
  },
  {
    label: 'SUPERVISOR',
    value: 'Nathan Bishop (ARC380)',
  },
  {
    label: 'COLLABORATORS',
    value: 'Omar Abdellatif',
  },
  {
    label: 'COMPLETED',
    value: 'December 2020',
  },
];

const PROJECT_PARAGRAPHS = [
  {
    title: undefined,
    body: `                  
      The Kinetic Boardwalk is an adaptive and programmable system
      of inflating tiles that span the coastline of Venice Beach.
      Acting as both a public amenity and functional
      infrastructure, the structure aims to address high tides and
      rising water levels while substituting as an exhibitive
      pedestrian walkway.
    `,
  },
  {
    title: `Coastal Infrastructure Inspired by Natural Topology`,
    body: `                  
      Inspired by sand dunes and grass hills, the Kinetic Boardwalk's form is made up of a modular system of "bumps" that can be mechanically controlled to individually rise or flatten at will, creating a variety of built environments with different use cases. The bumps can be used as deployable floodwalls against high tides, lookout points, or rest areas for pedestrians.
    `,
  },
  {
    title: `A Modular & Mechanized System`,
    body: `                  
      Each bump is made up of a grid of interlocking tiles layered over large round inflatables that are powered by motorized air pumps. The tiles rise to different elevations when the inflatables hidden underneath are powered, creating the appearance of a curved surface. Rubber flaps connect each tile lengthwise, hiding cracks, and providing a water-tight seal.
    `,
  },
];

/* ========================================================================== */

const IMAGES = [
  {
    src: KineticBoardwalkImages.get('1a_1280.png'),
    srcSet: KineticBoardwalkImages.getSrcSet('1a'),
    alt: 'Render',
  },
  {
    src: KineticBoardwalkImages.get('2a_1280.png'),
    srcSet: KineticBoardwalkImages.getSrcSet('2a'),
    alt: 'Elevation',
  },
  {
    src: KineticBoardwalkImages.get('2b_1280.png'),
    srcSet: KineticBoardwalkImages.getSrcSet('2b'),
    alt: 'Elevation Section',
  },
  {
    src: KineticBoardwalkImages.get('2c_1280.png'),
    srcSet: KineticBoardwalkImages.getSrcSet('2c'),
    alt: 'Isometric',
  },
  {
    src: KineticBoardwalkImages.get('2d_1280.png'),
    srcSet: KineticBoardwalkImages.getSrcSet('2d'),
    alt: 'Site Plan',
  },
  {
    src: KineticBoardwalkImages.get('2e_1280.png'),
    srcSet: KineticBoardwalkImages.getSrcSet('2e'),
    alt: 'Exploded Isometric (Overview)',
  },
  {
    src: KineticBoardwalkImages.get('2f_1280.png'),
    srcSet: KineticBoardwalkImages.getSrcSet('2f'),
    alt: 'Exploded Isometric (Tile)',
  },
  {
    src: KineticBoardwalkImages.get('3a_1280.png'),
    srcSet: KineticBoardwalkImages.getSrcSet('3a'),
    alt: 'Colors Overview (Plan)',
  },
  {
    src: KineticBoardwalkImages.get('3b_1280.png'),
    srcSet: KineticBoardwalkImages.getSrcSet('3b'),
    alt: 'Colors Overview (Elevation)',
  },
  {
    src: KineticBoardwalkImages.get('3c_1280.png'),
    srcSet: KineticBoardwalkImages.getSrcSet('3c'),
    alt: 'Tile Variations',
  },
  {
    src: KineticBoardwalkImages.get('3d_1280.png'),
    srcSet: KineticBoardwalkImages.getSrcSet('3d'),
    alt: 'Materials Overview',
  },
  {
    src: KineticBoardwalkImages.get('3e_1280.png'),
    srcSet: KineticBoardwalkImages.getSrcSet('3e'),
    alt: 'Tile Joint Mechanism 1',
  },
  {
    src: KineticBoardwalkImages.get('3f_1280.png'),
    srcSet: KineticBoardwalkImages.getSrcSet('3f'),
    alt: 'Tile Joint Mechanism 2',
  },
];

const PROJECT_IMAGES_DESKTOP = [
  [IMAGES[0]],
  [IMAGES[1], IMAGES[2], IMAGES[3]],
  [IMAGES[4], IMAGES[5], IMAGES[6]],
  [IMAGES[7], IMAGES[8]],
  [IMAGES[9], IMAGES[10]],
  [IMAGES[11], IMAGES[12]],
];

const PROJECT_IMAGES_MOBILE = [
  [IMAGES[0]],
  [IMAGES[1], IMAGES[2]],
  [IMAGES[3], IMAGES[4]],
  [IMAGES[5], IMAGES[6]],
  [IMAGES[7], IMAGES[8]],
  [IMAGES[9], IMAGES[10]],
  [IMAGES[11], IMAGES[12]],
];

/* ========================================================================== */

const BACK_ROUTE = ROUTES.architecture['foldPavilion'];
const FORWARD_ROUTE = ROUTES.architecture['basiliskTower'];
const PAGE_TITLE = `ELSON LIANG | Kinetic Boardwalk`;

export const PageProjectKineticBoardwalk: React.FC = (): React.ReactElement => (
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
