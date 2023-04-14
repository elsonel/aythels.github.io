import React from 'react';
import { ROUTES } from '../utility/routes';
import { ProjectTemplate } from './ProjectTemplate';

const PROJECT_LANDING_IMAGE = '/images/examples/landscape.jpg';
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
    backRoute={BACK_ROUTE}
    forwardRoute={FORWARD_ROUTE}
    pageTitle={PAGE_TITLE}
  />
);
