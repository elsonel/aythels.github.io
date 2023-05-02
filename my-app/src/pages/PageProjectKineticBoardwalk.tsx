import React from 'react';
import { ROUTES } from '../utilities/routes';
import { ProjectTemplate } from './ProjectTemplate';
import {
  ArchitectureImages,
  KineticBoardwalkImages,
} from '../utilities/ImportImages';

const PROJECT_LANDING_IMAGE = {
  src: ArchitectureImages.get('KineticBoardwalk2560.jpg'),
  srcSet: `
    ${ArchitectureImages.get('KineticBoardwalk320.jpg')} 320w,
    ${ArchitectureImages.get('KineticBoardwalk640.jpg')} 640w,
    ${ArchitectureImages.get('KineticBoardwalk960.jpg')} 960w,
    ${ArchitectureImages.get('KineticBoardwalk1280.jpg')} 1280w,
    ${ArchitectureImages.get('KineticBoardwalk1600.jpg')} 1600w,
    ${ArchitectureImages.get('KineticBoardwalk1920.jpg')} 1920w,
    ${ArchitectureImages.get('KineticBoardwalk2240.jpg')} 2240w,
    ${ArchitectureImages.get('KineticBoardwalk2560.jpg')} 2560w,
  `,
  alt: 'Kinetic Boardwalk Landing Image',
};
const PROJECT_TITLE = 'KINETIC BOARDWALK';
const PROJECT_SUBTITLE = 'Drifting Landscapes';

const PROJECT_FACTS = [
  {
    label: 'TYPE',
    value: 'Public Amenity / Mega-Infastructure',
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

const IMAGES = [
  {
    src: KineticBoardwalkImages.get('1a_2560.jpg'),
    srcSet: getSrcSet('1a_'),
    alt: 'RENDER',
  },
  {
    src: KineticBoardwalkImages.get('2a_2560.jpg'),
    srcSet: getSrcSet('2a_'),
    alt: 'ELEVATION',
  },
  {
    src: KineticBoardwalkImages.get('2b_2560.jpg'),
    srcSet: getSrcSet('2b_'),
    alt: 'ELEVATION SECTION',
  },
  {
    src: KineticBoardwalkImages.get('2c_2560.jpg'),
    srcSet: getSrcSet('2c_'),
    alt: 'ISOMETRIC',
  },
  {
    src: KineticBoardwalkImages.get('2d_2560.jpg'),
    srcSet: getSrcSet('2d_'),
    alt: 'SITE PLAN',
  },
  {
    src: KineticBoardwalkImages.get('2e_2560.jpg'),
    srcSet: getSrcSet('2e_'),
    alt: 'EXPLODED ISOMETRIC',
  },
  {
    src: KineticBoardwalkImages.get('2f_2560.jpg'),
    srcSet: getSrcSet('2f_'),
    alt: 'EXPLODED TILE ISOMETRIC',
  },
  {
    src: KineticBoardwalkImages.get('3a_2560.jpg'),
    srcSet: getSrcSet('3a_'),
    alt: 'COLORS OVERVIEW (ELEVATION)',
  },
  {
    src: KineticBoardwalkImages.get('3b_2560.jpg'),
    srcSet: getSrcSet('3b_'),
    alt: 'COLORS OVERVIEW (PLAN',
  },
  {
    src: KineticBoardwalkImages.get('3c_2560.jpg'),
    srcSet: getSrcSet('3c_'),
    alt: 'MATERIALS OVERVIEW',
  },
  {
    src: KineticBoardwalkImages.get('3d_2560.jpg'),
    srcSet: getSrcSet('3d_'),
    alt: 'TILE VARIATIONS',
  },
  {
    src: KineticBoardwalkImages.get('3e_2560.jpg'),
    srcSet: getSrcSet('3e_'),
    alt: 'TILE GROUP MECHANISM',
  },
  {
    src: KineticBoardwalkImages.get('3f_2560.jpg'),
    srcSet: getSrcSet('3f_'),
    alt: 'TILE MECHANISM',
  },
];

const PROJECT_IMAGES_DESKTOP = [
  [IMAGES[0]],
  [IMAGES[1], IMAGES[2], IMAGES[3]],
  [IMAGES[4], IMAGES[5], IMAGES[6]],
  [IMAGES[7], IMAGES[8], IMAGES[9]],
  [IMAGES[10], IMAGES[11], IMAGES[12]],
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
