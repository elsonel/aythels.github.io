import React from 'react';
import { ROUTES } from '../utilities/routes';
import { ProjectTemplate } from './ProjectTemplate';
import { SpotlightImages, UIUXImages } from '../utilities/ImportImages';

const PROJECT_LANDING_IMAGE = {
  src: UIUXImages.get('Spotlight2560.jpg'),
  srcSet: `
    ${UIUXImages.get('Spotlight320.jpg')} 320w,
    ${UIUXImages.get('Spotlight640.jpg')} 640w,
    ${UIUXImages.get('Spotlight960.jpg')} 960w,
    ${UIUXImages.get('Spotlight1280.jpg')} 1280w,
    ${UIUXImages.get('Spotlight1600.jpg')} 1600w,
    ${UIUXImages.get('Spotlight1920.jpg')} 1920w,
    ${UIUXImages.get('Spotlight2240.jpg')} 2240w,
    ${UIUXImages.get('Spotlight2560.jpg')} 2560w,
  `,
  alt: 'Spotlight Landing Image',
};
const PROJECT_TITLE = 'SPOTLIGHT';
const PROJECT_SUBTITLE = 'Digital Theater';
const PROJECT_PROTOTYPE_LINK =
  'https://xd.adobe.com/view/ad0d4816-e8bb-409d-ad17-8b38ba686876-f85e/?fullscreen';

const PROJECT_FACTS = [
  {
    label: 'TYPE',
    value: 'Media Streaming Platform Design',
  },
  {
    label: 'COLLABORATORS',
    value: 'Perry Wang, Xavier Woo',
  },
  {
    label: 'COMPLETED',
    value: 'June 2020',
  },
  {
    label: 'COMPETITION PLACEMENT',
    value: '2nd Place (985 Total Teams)',
  },
];

const PROJECT_PARAGRAPHS = [
  {
    title: undefined,
    body: `                  
      Spotlight is an entertainment streaming desktop platform that facilitates close interactions between friends and family experiencing media together. Combining cinema-associated visual motifs with social media features, Spotlight aims to replicate the experience of going to the movie theater with friends and family, which cannot be achieved during pandemic-related circumstances.
    `,
  },
  {
    title: undefined,
    body: `                  
      Modern entertainment platforms often lack opportunities for close collaborative interactions. Spotlight, however, caters specifically to small groups of friends and family with features such as instant messaging and real-time watch parties. While still differentiating itself from traditional livestreaming sites, Spotlight prioritizes interactions within the user's immediate social circle, thereby creating a more personalized and engaging entertainment experience.
    `,
  },
];

/* ========================================================================== */

function getSrcSet(name: string) {
  return `
    ${SpotlightImages.get(`${name}320.jpg`)} 320w,
    ${SpotlightImages.get(`${name}640.jpg`)} 640w,
    ${SpotlightImages.get(`${name}960.jpg`)} 960w,
    ${SpotlightImages.get(`${name}1280.jpg`)} 1280w,
    ${SpotlightImages.get(`${name}1600.jpg`)} 1600w,
    ${SpotlightImages.get(`${name}1920.jpg`)} 1920w,
    ${SpotlightImages.get(`${name}2240.jpg`)} 2240w,
    ${SpotlightImages.get(`${name}2560.jpg`)} 2560w,
  `;
}

const IMAGES = [
  {
    src: SpotlightImages.get('1a_2560.jpg'),
    srcSet: getSrcSet('1a_'),
    alt: 'TYPOGRAPHY AND COLORS',
  },
  {
    src: SpotlightImages.get('1b_2560.jpg'),
    srcSet: getSrcSet('1b_'),
    alt: 'REGISTRATION SCREEN',
  },
  {
    src: SpotlightImages.get('1c_2560.jpg'),
    srcSet: getSrcSet('1c_'),
    alt: 'THEATER SCREEN',
  },
  {
    src: SpotlightImages.get('2a_2560.jpg'),
    srcSet: getSrcSet('2a_'),
    alt: 'LANDING PAGE',
  },
  {
    src: SpotlightImages.get('2b_2560.jpg'),
    srcSet: getSrcSet('2b_'),
    alt: 'BROWSING PAGE',
  },
  {
    src: SpotlightImages.get('2c_2560.jpg'),
    srcSet: getSrcSet('2c_'),
    alt: 'OVERVIEW PAGE',
  },
];

const PROJECT_IMAGES_DESKTOP = [
  [IMAGES[0], IMAGES[1], IMAGES[2]],
  [IMAGES[3], IMAGES[4], IMAGES[5]],
];

const PROJECT_IMAGES_MOBILE = [
  [IMAGES[0], IMAGES[1], IMAGES[2]],
  [IMAGES[3], IMAGES[4], IMAGES[5]],
];

/* ========================================================================== */

const BACK_ROUTE = ROUTES.userInterface['portfol.io'];
const FORWARD_ROUTE = ROUTES.architecture['foldPavilion'];
const PAGE_TITLE = `ELSON LIANG | Spotlight`;

export const PageProjectSpotlight: React.FC = (): React.ReactElement => (
  <ProjectTemplate
    projectLandingImage={PROJECT_LANDING_IMAGE}
    projectTitle={PROJECT_TITLE}
    projectSubtitle={PROJECT_SUBTITLE}
    projectPrototypeLink={PROJECT_PROTOTYPE_LINK}
    projectFacts={PROJECT_FACTS}
    projectParagraphs={PROJECT_PARAGRAPHS}
    projectImagesDesktop={PROJECT_IMAGES_DESKTOP}
    projectImagesMobile={PROJECT_IMAGES_MOBILE}
    backRoute={BACK_ROUTE}
    forwardRoute={FORWARD_ROUTE}
    pageTitle={PAGE_TITLE}
  />
);
