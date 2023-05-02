import React from 'react';
import { ROUTES } from '../utilities/routes';
import { ProjectTemplate } from './ProjectTemplate';
import {
  ArchitectureImages,
  FoldPavilionImages,
} from '../utilities/ImportImages';

const PROJECT_LANDING_IMAGE = {
  src: ArchitectureImages.get('FoldPavilion2560.jpg'),
  srcSet: `
    ${ArchitectureImages.get('FoldPavilion320.jpg')} 320w,
    ${ArchitectureImages.get('FoldPavilion640.jpg')} 640w,
    ${ArchitectureImages.get('FoldPavilion960.jpg')} 960w,
    ${ArchitectureImages.get('FoldPavilion1280.jpg')} 1280w,
    ${ArchitectureImages.get('FoldPavilion1600.jpg')} 1600w,
    ${ArchitectureImages.get('FoldPavilion1920.jpg')} 1920w,
    ${ArchitectureImages.get('FoldPavilion2240.jpg')} 2240w,
    ${ArchitectureImages.get('FoldPavilion2560.jpg')} 2560w,
  `,
  alt: `Fold Pavilion Landing Image`,
};
const PROJECT_TITLE = 'FOLD PAVILION';
const PROJECT_SUBTITLE = 'Isolated Reunion';

const PROJECT_FACTS = [
  {
    label: 'TYPE',
    value: 'Public Amenetity',
  },
  {
    label: 'REGION',
    value: 'Vancouver, BC',
  },
  {
    label: 'SUPERVISOR',
    value: 'Salmon Khalil Araghi (ARC480)',
  },
  {
    label: 'COMPLETED',
    value: 'April 2022',
  },
];

const PROJECT_PARAGRAPHS = [
  {
    title: undefined,
    body: `                  
      The Fold is a public outdoor pavilion designed for use in a post-pandemic setting. Inspired by the form of trigonometric curves, it is composed of several ribbon-like cells that can serve as gateways, barriers, or gathering spots for small groups or individuals.
    `,
  },
  {
    title: 'A Design That Promotes Safe & Subtle Reunification',
    body: `                  
        The post-pandemic period signifies a transition from complete isolation to subtle reunification. The Fold capitalizes on this reality with a layout that can accommodate multiple visiting parties while still separating them from one another. This is achieved without the use of harsh barriers such as walls or solid rooms that limit ventilation. Instead, the design features a floor plan with multiple entryways and exits that prioritize circulation. The curvilinear form and use of wooden materials also create an appearance that differs from the monotonous rooms encountered every day during the pandemic lockdown.
    `,
  },
  {
    title: 'Cost-Effective, Resourceful & Fast Construction',
    body: `                  
      The structure is divided into major segments, each composed of a grid of hollow rectangular wooden frames capped with plywood. Each frame is made out of four planar lumber beams that can be robotically cut and assembled. Major segments can be prepared offsite and moved onsite for quick assembly.
    `,
  },
];

/* ========================================================================== */

function getSrcSet(name: string) {
  return `
    ${FoldPavilionImages.get(`${name}320.jpg`)} 320w,
    ${FoldPavilionImages.get(`${name}640.jpg`)} 640w,
    ${FoldPavilionImages.get(`${name}960.jpg`)} 960w,
    ${FoldPavilionImages.get(`${name}1280.jpg`)} 1280w,
    ${FoldPavilionImages.get(`${name}1600.jpg`)} 1600w,
    ${FoldPavilionImages.get(`${name}1920.jpg`)} 1920w,
    ${FoldPavilionImages.get(`${name}2240.jpg`)} 2240w,
    ${FoldPavilionImages.get(`${name}2560.jpg`)} 2560w,
  `;
}

const IMAGES = [
  {
    src: FoldPavilionImages.get('1a_2560.jpg'),
    srcSet: getSrcSet('1a_'),
    alt: 'RENDER 1',
  },
  {
    src: FoldPavilionImages.get('2a_2560.jpg'),
    srcSet: getSrcSet('2a_'),
    alt: 'RENDER 2',
  },
  {
    src: FoldPavilionImages.get('2b_2560.jpg'),
    srcSet: getSrcSet('2b_'),
    alt: 'RENDER 3',
  },
  {
    src: FoldPavilionImages.get('3a_2560.jpg'),
    srcSet: getSrcSet('3a_'),
    alt: 'PLAN',
  },
  {
    src: FoldPavilionImages.get('3b_2560.jpg'),
    srcSet: getSrcSet('3b_'),
    alt: 'PLAN SECTION',
  },
  {
    src: FoldPavilionImages.get('3c_2560.jpg'),
    srcSet: getSrcSet('3c_'),
    alt: 'FRONT ELEVATION',
  },
  {
    src: FoldPavilionImages.get('3d_2560.jpg'),
    srcSet: getSrcSet('3d_'),
    alt: 'SIDE ELEVATION AND SECTION',
  },
  {
    src: FoldPavilionImages.get('4a_2560.jpg'),
    srcSet: getSrcSet('4a_'),
    alt: 'PAVILION USE CASES',
  },
  {
    src: FoldPavilionImages.get('4b_2560.jpg'),
    srcSet: getSrcSet('4b_'),
    alt: 'FORM FABRICATION PROCESS ',
  },
  {
    src: FoldPavilionImages.get('4c_2560.jpg'),
    srcSet: getSrcSet('4c_'),
    alt: 'FACADE FABRICATION PROCESS',
  },
];

const PROJECT_IMAGES_DESKTOP = [
  [IMAGES[0], IMAGES[1], IMAGES[2]],
  [IMAGES[3], IMAGES[4]],
  [IMAGES[5], IMAGES[6]],
  [IMAGES[7], IMAGES[8], IMAGES[9]],
];

const PROJECT_IMAGES_MOBILE = [
  [IMAGES[0], IMAGES[1]],
  [IMAGES[2], IMAGES[3]],
  [IMAGES[4], IMAGES[5]],
  [IMAGES[6], IMAGES[7]],
  [IMAGES[8], IMAGES[9]],
];

/* ========================================================================== */

const BACK_ROUTE = ROUTES.userInterface['spotlight'];
const FORWARD_ROUTE = ROUTES.architecture['kineticBoardwalk'];
const PAGE_TITLE = `ELSON LIANG | Fold Pavilion`;

export const PageProjectFoldPavilion: React.FC = (): React.ReactElement => (
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
