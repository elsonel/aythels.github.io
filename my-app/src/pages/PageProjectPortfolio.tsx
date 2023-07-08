import React from 'react';
import { ROUTES } from '../utilities/routes';
import { ProjectTemplate } from './ProjectTemplate';
import { PortfolioImages } from '../utilities/ImportImages';

const PROJECT_LANDING_IMAGE = {
  src: PortfolioImages.get('landing_1280.png'),
  srcSet: PortfolioImages.getSrcSet('landing'),
  alt: 'Portfol.io Hero Image',
};
const PROJECT_LANDING_IMAGE_FIT = 'contain';
const PROJECT_LANDING_IMAGE_BACKGROUND_COLOR = '#350099';

/* ========================================================================== */

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
  {
    title: undefined,
    body: `
      This product concept and user interface design were made for the Adobe College + Amazon Creative Jam competition.
    `,
  },
];

/* ========================================================================== */

const IMAGES = [
  {
    src: PortfolioImages.get('1a_1280.png'),
    srcSet: PortfolioImages.getSrcSet('1a'),
    alt: 'Onboarding Page - 1',
  },
  {
    src: PortfolioImages.get('1b_1280.png'),
    srcSet: PortfolioImages.getSrcSet('1b'),
    alt: 'Onboarding Page - 2',
  },
  {
    src: PortfolioImages.get('1c_1280.png'),
    srcSet: PortfolioImages.getSrcSet('1c'),
    alt: 'Onboarding Page - 3',
  },
  {
    src: PortfolioImages.get('1d_1280.png'),
    srcSet: PortfolioImages.getSrcSet('1d'),
    alt: 'Onboarding Page - 4',
  },
  {
    src: PortfolioImages.get('2a_1280.png'),
    srcSet: PortfolioImages.getSrcSet('2a'),
    alt: 'Home Page',
  },
  {
    src: PortfolioImages.get('2b_1280.png'),
    srcSet: PortfolioImages.getSrcSet('2b'),
    alt: 'Course & Tutorial Page',
  },
  {
    src: PortfolioImages.get('2c_1280.png'),
    srcSet: PortfolioImages.getSrcSet('2c'),
    alt: 'Saved Projects Page',
  },
  {
    src: PortfolioImages.get('2d_1280.png'),
    srcSet: PortfolioImages.getSrcSet('2d'),
    alt: 'Profile Page',
  },
  {
    src: PortfolioImages.get('3a_1280.png'),
    srcSet: PortfolioImages.getSrcSet('3a'),
    alt: 'Course "Circuit" Introduction',
  },
  {
    src: PortfolioImages.get('3b_1280.png'),
    srcSet: PortfolioImages.getSrcSet('3b'),
    alt: 'Course "Circuit" Questionnaire 1',
  },
  {
    src: PortfolioImages.get('3c_1280.png'),
    srcSet: PortfolioImages.getSrcSet('3c'),
    alt: 'Course "Circuit" Questionnaire 2',
  },
  {
    src: PortfolioImages.get('4a_1280.png'),
    srcSet: PortfolioImages.getSrcSet('4a'),
    alt: 'Image Editor - 1',
  },
  {
    src: PortfolioImages.get('4b_1280.png'),
    srcSet: PortfolioImages.getSrcSet('4b'),
    alt: 'Image Editor - 2',
  },
  {
    src: PortfolioImages.get('4c_1280.png'),
    srcSet: PortfolioImages.getSrcSet('4c'),
    alt: 'Image Editor - 3',
  },
];

const PROJECT_IMAGES_DESKTOP = [
  [IMAGES[0], IMAGES[1], IMAGES[2], IMAGES[3]],
  [IMAGES[4], IMAGES[5], IMAGES[6], IMAGES[7]],
  [IMAGES[8], IMAGES[9], IMAGES[10]],
  [IMAGES[11], IMAGES[12], IMAGES[13]],
];

const PROJECT_IMAGES_MOBILE = [
  [IMAGES[0], IMAGES[1]],
  [IMAGES[2], IMAGES[3]],
  [IMAGES[4], IMAGES[5]],
  [IMAGES[6], IMAGES[7]],
  [IMAGES[8], IMAGES[9]],
  [IMAGES[10], IMAGES[11]],
  [IMAGES[12], IMAGES[13]],
];

/* ========================================================================== */

const BACK_ROUTE = ROUTES.projects;
const FORWARD_ROUTE = ROUTES.userInterface['spotlight'];
const PAGE_TITLE = `ELSON LIANG | Portfol.io`;

export const PageProjectPortfolio: React.FC = (): React.ReactElement => (
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
