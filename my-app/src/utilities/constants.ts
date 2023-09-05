import { ProjectData } from '../UI/components/groups/ProjectsPage/helpers';
import { ROUTES, EXTERNAL_ROUTES } from './routes';

export const BIO_TEXT = `I'm a software developer with a passion for engineering resilient solutions that integrate well with sophisticated design and user experience.`;

export const PROJECT_DATA: ProjectData[] = [
  {
    group: 'DEVELOPMENT',
    name: 'SAVI FORECASTING',
    type: 'Web Application',
    year: '2022',
    description: `A web application for tracking personal assets, and the impact of major life events and financial scenarios on one's net worth over time.`,
    href: EXTERNAL_ROUTES.saviForecasting,
    isOpeningNewTab: true,
  },
  /*{
    group: 'DEVELOPMENT',
    name: 'CENTRO BUDGETING',
    type: 'Web Application',
    year: 2022,
    description: `A web application for tracking monetary transactions daily to aid in achieving personal and collaborative budgeting goals.`,
    href: 'https://web.getcentro.com/',
    isOpeningNewTab: true,
  },*/
  {
    group: 'DEVELOPMENT',
    name: 'RPG NODE BOARD',
    type: 'Web Application',
    year: '2021',
    description: `A web application for the collaborative creation, organization and sharing of lore for tabletop roleplaying games; storytelling and worldbuilding.`,
    href: 'https://github.com/elsonel/rpg-node-board',
    isOpeningNewTab: true,
  },
  {
    group: 'DESIGN',
    name: 'PORTFOL.IO',
    type: 'User Interface',
    year: '2020',
    description: `Concept for a tablet-optimized social media platform to teach aspiring designers basic design workflows, tools and trends, and for expanding their professional network.`,
    href: ROUTES.userInterface['portfol.io'],
    isOpeningNewTab: false,
  },
  {
    group: 'DESIGN',
    name: 'SPOTLIGHT',
    type: 'User Interface',
    year: '2020',
    description: `An entertainment streaming platform concept designed to facilitate close interactions between friends and family members experiencing media together.`,
    href: ROUTES.userInterface['spotlight'],
    isOpeningNewTab: false,
  },
  {
    group: 'ARCHIVE',
    name: 'FOLD PAVILION',
    type: 'Architecture',
    year: '2022',
    description: `A public outdoor pavilion concept with a parametric form inspired by compressed ribbons. Designed for a post-pandemic setting with both isolation and reunion in mind.`,
    href: ROUTES.architecture['foldPavilion'],
    isOpeningNewTab: false,
  },
  {
    group: 'ARCHIVE',
    name: 'KINETIC BOARDWALK',
    type: 'Architecture',
    year: '2021',
    description: `A concept for a waterfront mega-structure comprised of thousands of linked kinetic modular tiles. Serves as both a functional infrastructure against dynamic rising water levels, and as a pedestrian walkway.`,
    href: ROUTES.architecture['kineticBoardwalk'],
    isOpeningNewTab: false,
  },
  {
    group: 'ARCHIVE',
    name: 'BASILISK TOWER',
    type: 'Architecture',
    year: '2019',
    description: `A parametric skyscraper concept with a form generated by twisting geometry.`,
    href: ROUTES.architecture['basiliskTower'],
    isOpeningNewTab: false,
  },
  {
    group: 'ARCHIVE',
    name: 'VARIOUS ARTWORKS',
    type: 'Visual Arts',
    year: '20XX',
    description: `Collection of various 2D artworks in different mediums.`,
    href: ROUTES.visualarts,
    isOpeningNewTab: false,
  },
];
