import React from 'react';
import { ROUTES } from '../utilities/routes';
import { ProjectTemplate } from './ProjectTemplate';

const PROJECT_LANDING_IMAGE = '/images/examples/landscape.jpg';
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

const BACK_ROUTE = ROUTES.architecture['kineticBoardwalk'];
const PAGE_TITLE = `ELSON LIANG | Fold Pavilion`;

export const PageProjectBasiliskTower: React.FC = (): React.ReactElement => (
  <ProjectTemplate
    projectLandingImage={PROJECT_LANDING_IMAGE}
    projectTitle={PROJECT_TITLE}
    projectSubtitle={PROJECT_SUBTITLE}
    projectPrototypeLink={undefined}
    projectFacts={PROJECT_FACTS}
    projectParagraphs={PROJECT_PARAGRAPHS}
    backRoute={BACK_ROUTE}
    forwardRoute={undefined}
    pageTitle={PAGE_TITLE}
  />
);
