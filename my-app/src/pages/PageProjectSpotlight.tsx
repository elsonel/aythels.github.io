import React from 'react';
import { ROUTES } from '../utilities/routes';
import { ProjectTemplate } from './ProjectTemplate';

const PROJECT_LANDING_IMAGE = '/images/examples/landscape.jpg';
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
    backRoute={BACK_ROUTE}
    forwardRoute={FORWARD_ROUTE}
    pageTitle={PAGE_TITLE}
  />
);
