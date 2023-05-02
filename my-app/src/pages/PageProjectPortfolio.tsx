import React from 'react';
import { ROUTES } from '../utilities/routes';
import { ProjectTemplate } from './ProjectTemplate';
import { PortfolioImages, UIUXImages } from '../utilities/ImportImages';

const PROJECT_LANDING_IMAGE = {
  src: UIUXImages.get('Portfolio2560.jpg'),
  srcSet: `
    ${UIUXImages.get('Portfolio320.jpg')} 320w,
    ${UIUXImages.get('Portfolio640.jpg')} 640w,
    ${UIUXImages.get('Portfolio960.jpg')} 960w,
    ${UIUXImages.get('Portfolio1280.jpg')} 1280w,
    ${UIUXImages.get('Portfolio1600.jpg')} 1600w,
    ${UIUXImages.get('Portfolio1920.jpg')} 1920w,
    ${UIUXImages.get('Portfolio2240.jpg')} 2240w,
    ${UIUXImages.get('Portfolio2560.jpg')} 2560w,
  `,
  alt: 'Portfol.io Landing Image',
};
const PROJECT_TITLE = 'PORTFOL.IO';
const PROJECT_SUBTITLE = 'Interactive Design Learning';
const PROJECT_PROTOTYPE_LINK =
  'https://xd.adobe.com/view/ee0f999a-dad6-4945-b43d-27688c3bc47a-bb5c/screen/846bb621-8335-4de7-aae8-72f36b9f11b3?fullscreen';

const PROJECT_FACTS = [
  {
    label: 'TYPE',
    value: 'Social Platform Design',
  },
  {
    label: 'COLLABORATORS',
    value: 'Perry Wang, Xavier Woo',
  },
  {
    label: 'COMPLETED',
    value: 'October 2020',
  },
  {
    label: 'COMPETITION PLACEMENT',
    value: 'Honoree/Top 15 (419 Total Teams)',
  },
];

const PROJECT_PARAGRAPHS = [
  {
    title: undefined,
    body: `                  
      Breaking into a new professional field can be an intimidating experience, especially for students and young adults who lack the necessary resources and guidance. This is particularly true in the field of design, where the abundance of different tools and techniques can be overwhelming. 
    `,
  },
  {
    title: undefined,
    body: `
      Portfol.io is a tablet-optimized application designed to help young, aspiring designers overcome the challenges they face in developing their design skills, knowledge, and professional network. The platform incorporates the familiar essence of social media platforms with various interactive self-learning tools, through a user-friendly and accessible interface.
    `,
  },
  {
    title: undefined,
    body: `                  
      Users can discover inspirational projects, follow professional designers, learn about upcoming events or trends, and participate in challenges and "circuits" - curated self-paced learning courses. The application also includes an integrated image editor, which serves as a free alternative to industry-specific tools, providing new designers with a beginner-friendly option for learning basic workflows and tools for design projects.
    `,
  },
];

/* ========================================================================== */

function getSrcSet(name: string) {
  return `
    ${PortfolioImages.get(`${name}320.jpg`)} 320w,
    ${PortfolioImages.get(`${name}640.jpg`)} 640w,
    ${PortfolioImages.get(`${name}960.jpg`)} 960w,
    ${PortfolioImages.get(`${name}1280.jpg`)} 1280w,
    ${PortfolioImages.get(`${name}1600.jpg`)} 1600w,
    ${PortfolioImages.get(`${name}1920.jpg`)} 1920w,
    ${PortfolioImages.get(`${name}2240.jpg`)} 2240w,
    ${PortfolioImages.get(`${name}2560.jpg`)} 2560w,
  `;
}

const IMAGES = [
  {
    src: PortfolioImages.get('1a_2560.jpg'),
    srcSet: getSrcSet('1a_'),
    alt: 'ONBOARDING SCREEN 1',
  },
  {
    src: PortfolioImages.get('1b_2560.jpg'),
    srcSet: getSrcSet('1b_'),
    alt: 'ONBOARDING SCREEN 2',
  },
  {
    src: PortfolioImages.get('1c_2560.jpg'),
    srcSet: getSrcSet('1c_'),
    alt: 'ONBOARDING SCREEN 3',
  },

  {
    src: PortfolioImages.get('2a_2560.jpg'),
    srcSet: getSrcSet('2a_'),
    alt: 'HOME SCREEN',
  },
  {
    src: PortfolioImages.get('2b_2560.jpg'),
    srcSet: getSrcSet('2b_'),
    alt: 'SAVED PROJECTS SCREEN',
  },
  {
    src: PortfolioImages.get('2c_2560.jpg'),
    srcSet: getSrcSet('2c_'),
    alt: 'PROFILE SCREEN',
  },

  {
    src: PortfolioImages.get('3a_2560.jpg'),
    srcSet: getSrcSet('3a_'),
    alt: 'COURSE LIBRARY SCREEN',
  },
  {
    src: PortfolioImages.get('3b_2560.jpg'),
    srcSet: getSrcSet('3b_'),
    alt: 'EXAMPLE COURSES SCREEN 1',
  },
  {
    src: PortfolioImages.get('3c_2560.jpg'),
    srcSet: getSrcSet('3c_'),
    alt: 'EXAMPLE COURSES SCREEN 2',
  },

  {
    src: PortfolioImages.get('4a_2560.jpg'),
    srcSet: getSrcSet('4a_'),
    alt: 'IMAGE EDITOR SCREEN 1',
  },
  {
    src: PortfolioImages.get('4b_2560.jpg'),
    srcSet: getSrcSet('4b_'),
    alt: 'IMAGE EDITOR SCREEN 2',
  },
  {
    src: PortfolioImages.get('4c_2560.jpg'),
    srcSet: getSrcSet('4c_'),
    alt: 'IMAGE EDITOR SCREEN 3',
  },
];

const PROJECT_IMAGES_DESKTOP = [
  [IMAGES[0], IMAGES[1], IMAGES[2]],
  [IMAGES[3], IMAGES[4], IMAGES[5]],
  [IMAGES[6], IMAGES[7], IMAGES[8]],
  [IMAGES[9], IMAGES[10], IMAGES[11]],
];

const PROJECT_IMAGES_MOBILE = [
  [IMAGES[0], IMAGES[1]],
  [IMAGES[2], IMAGES[3]],
  [IMAGES[4], IMAGES[5]],
  [IMAGES[6], IMAGES[7]],
  [IMAGES[8], IMAGES[9]],
  [IMAGES[10], IMAGES[11]],
];

/* ========================================================================== */

const BACK_ROUTE = ROUTES.projects;
const FORWARD_ROUTE = ROUTES.userInterface['spotlight'];
const PAGE_TITLE = `ELSON LIANG | Portfol.io`;

export const PageProjectPortfolio: React.FC = (): React.ReactElement => (
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
