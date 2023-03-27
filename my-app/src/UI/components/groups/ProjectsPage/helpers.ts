export type ProjectData = {
  description: string;
  group: string;
  name: string;
  type: string;
  year: number;
  href: string;
  isOpeningNewTab: boolean;
  onClick?: () => void;
};

export const EXAMPLE_DATA: ProjectData[] = [
  {
    group: 'DEVELOPMENT',
    name: 'CENTRO FORECASTING',
    type: 'Web Application',
    year: 2022,
    description: `Lorem ipsum dolor sit amet. Eos dolorem iure ea architecto similique aut dignissimos repudiandae.`,
    href: 'https://www.google.ca',
    isOpeningNewTab: true,
  },
  {
    group: 'DEVELOPMENT',
    name: 'CENTRO BUDGETING',
    type: 'Web Application',
    year: 2022,
    description: `Sed reprehenderit quas est saepe rerum ut impedit autem est rerum similique ut rerum ipsum sed sunt ducimus. 
      `,
    href: 'https://www.google.ca',
    isOpeningNewTab: true,
  },
  {
    group: 'DEVELOPMENT',
    name: 'RPG NODE BOARD',
    type: 'Web Application',
    year: 2021,
    description: `Et porro numquam est molestias quia ea quia culpa ea minima magnam ea distinctio placeat.
      `,
    href: 'https://www.google.ca',
    isOpeningNewTab: true,
  },
  {
    group: 'DESIGN',
    name: 'PORTFOL.IO',
    type: 'User Interface',
    year: 2020,
    description: `Cum veritatis voluptatibus non maiores galisum vel nihil sunt eum error eaque non itaque nisi.
      `,
    href: '/',
    isOpeningNewTab: false,
  },
  {
    group: 'DESIGN',
    name: 'SPOTLIGHT',
    type: 'User Interface',
    year: 2020,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      `,
    href: '/',
    isOpeningNewTab: false,
  },
  {
    group: 'ARCHIVE',
    name: 'FOLD PAVILION',
    type: 'Architecture',
    year: 2022,
    description: `Aut ullam sequi vel omnis quia eum doloribus repudiandae ut labore pariatur`,
    href: '/',
    isOpeningNewTab: false,
  },
  {
    group: 'ARCHIVE',
    name: 'KINETIC BOARDWALK',
    type: 'Architecture',
    year: 2020,
    description: `Et voluptatem accusantium cum vero velit sed repudiandae. `,
    href: '/',
    isOpeningNewTab: false,
  },
  {
    group: 'ARCHIVE',
    name: 'BASILISK TOWER',
    type: 'Architecture',
    year: 2019,
    description: `Est nemo soluta est cumque saepe est beatae aspernatur et deserunt laudantium sed ullam explicabo.
      `,
    href: '/',
    isOpeningNewTab: false,
  },
];
