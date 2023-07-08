import { GridBreakpoint } from '../../UI/components/layout/Grid';

interface IProjectEntry {
  date: Date;
  subtitle: string;
  title: string;
  description: string;
  githubLink: string;
  prototypeLink: string;
  src: string;
  srcSet: string;
}

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
    prototypeLink:
      'https://covid-api-group24.herokuapp.com/daily_reports/dailyreport0000?start_date=2020-06-06&end_date=2020-06-07&countries=US&format=json',
    src: '',
    srcSet: `

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
    src: '',
    srcSet: ``,
  },
  {
    date: new Date(2020, 6),
    subtitle: 'JavaScript Library',
    title: 'BUILDABLE.JS',
    description:
      'Vanilla JavaScript library used for creating dynamic interactable UI backboards for customizable workspaces (Photoshop etc.)',
    githubLink: 'https://github.com/elsonel/Buildable-js',
    prototypeLink: 'https://infinite-brook-99829.herokuapp.com/',
    src: '',
    srcSet: ``,
  },
];
