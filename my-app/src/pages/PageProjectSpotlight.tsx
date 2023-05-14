import React from 'react';
import { ROUTES } from '../utilities/routes';
import { ProjectTemplate } from './ProjectTemplate';
import { SpotlightImages } from '../utilities/ImportImages';

const PROJECT_LANDING_IMAGE = {
  src: SpotlightImages.get('landing_1280.jpg'),
  srcSet: SpotlightImages.getSrcSet('landing'),
  alt: `Spotlight Landing Image`,
};
const PROJECT_LANDING_IMAGE_FIT = 'contain';
const PROJECT_LANDING_IMAGE_BACKGROUND_COLOR = '#251844';

/* ========================================================================== */

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

const IMAGES = [
  {
    src: SpotlightImages.get('1a_1280.jpg'),
    srcSet: SpotlightImages.getSrcSet('1a'),
    alt: 'Brand Typography & Colors',
  },
  {
    src: SpotlightImages.get('1b_1280.jpg'),
    srcSet: SpotlightImages.getSrcSet('1b'),
    alt: 'Registration Screen',
  },
  {
    src: SpotlightImages.get('1c_1280.jpg'),
    srcSet: SpotlightImages.getSrcSet('1c'),
    alt: 'Theater Screen',
  },
  {
    src: SpotlightImages.get('2a_1280.jpg'),
    srcSet: SpotlightImages.getSrcSet('2a'),
    alt: 'Landing Page',
  },
  {
    src: SpotlightImages.get('2b_1280.jpg'),
    srcSet: SpotlightImages.getSrcSet('2b'),
    alt: 'Media Browsing Page',
  },
  {
    src: SpotlightImages.get('2c_1280.jpg'),
    srcSet: SpotlightImages.getSrcSet('2c'),
    alt: 'Show Overview Page',
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
    projectLandingImageFit={PROJECT_LANDING_IMAGE_FIT}
    projectLandingBackgroundColor={PROJECT_LANDING_IMAGE_BACKGROUND_COLOR}
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
