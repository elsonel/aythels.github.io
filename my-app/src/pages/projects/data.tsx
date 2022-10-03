import { GridBreakpoint } from '../../UI/components/layout/Grid';
import { UIUXImages } from 'utility/ImportImages';
import { IProjectEntry } from 'components/ProjectsGrid';

export const Breakpoints: GridBreakpoint[] = [
  {
    minWidth: 0,
    columnCount: 1,
  },
  {
    minWidth: 700,
    columnCount: 2,
  },
  {
    minWidth: 900,
    columnCount: 3,
  },
];

export const Data: IProjectEntry[] = [
  {
    date: new Date(2020, 8),
    subtitle: 'REST API',
    title: 'COVID-API',
    description:
      'REST API for retrieving, storing, and deleting Covid-19 statistics in CSV format.',
    githubLink: 'https://github.com/elsonel/CovidAPI',
    prototypeLink: 'https://covid-api-group24.herokuapp.com/',
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
  },
  {
    date: new Date(2020, 6),
    subtitle: 'Web Application',
    title: 'RPG NODE BOARD',
    description:
      'Full stack web application that facilitates the collaborative creation, organization and sharing of lore for tabletop roleplaying games; storytelling and worldbuilding.',
    githubLink: 'https://github.com/elsonel/rpg-node-board',
    prototypeLink: 'https://rpg-nodes.herokuapp.com/',
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
  },
  {
    date: new Date(2020, 6),
    subtitle: 'JavaScript Library',
    title: 'BUILDABLE.JS',
    description:
      'Vanilla JavaScript library used for creating dynamic interactable UI backboards for customizable workspaces (Photoshop etc.)',
    githubLink: 'https://github.com/elsonel/Buildable-js',
    prototypeLink: 'https://infinite-brook-99829.herokuapp.com/',
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
  },
];
