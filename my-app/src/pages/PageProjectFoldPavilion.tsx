import React from 'react';
import { ROUTES } from '../utility/routes';
import { ProjectTemplate } from './ProjectTemplate';

const PROJECT_LANDING_IMAGE = '/images/examples/landscape.jpg';
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
    backRoute={BACK_ROUTE}
    forwardRoute={FORWARD_ROUTE}
    pageTitle={PAGE_TITLE}
  />
);
