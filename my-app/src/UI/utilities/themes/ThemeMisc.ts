export interface LayerInterface {
  header: number;
  landing: number;
  modal: number;
}

export interface SpeedInterface {
  instant: number;
  fast: number;
  normal: number;
  normalSlow: number;
  slow: number;
  loading: number;
  stagger: number;
}

export interface SizeInterface {
  headerHeight: number;
  padding: number;
  paddingVertical: number;
  frameMinHeight: number;
  footerHeight: number;
}

export interface LinkInterface {
  linkedin: string;
  github: string;
  email: string;
  home: string;
  storybook: string;
}

export interface BreakpointInterface {
  header: number;
}

export interface ThemeMiscInterface {
  layer: LayerInterface;
  speed: SpeedInterface;
  size: SizeInterface;
  link: LinkInterface;
  breakpoint: BreakpointInterface;
}

export const ThemeMisc: ThemeMiscInterface = {
  layer: {
    header: 997,
    landing: 998,
    modal: 999,
  },
  speed: {
    instant: 50,
    fast: 150,
    normal: 250,
    normalSlow: 350,
    slow: 600,
    loading: 500,
    stagger: 150,
  },
  size: {
    headerHeight: 52,
    padding: 20,
    paddingVertical: 30,
    frameMinHeight: 176,
    footerHeight: 64,
  },
  breakpoint: {
    header: 800,
  },
  link: {
    linkedin: 'https://www.linkedin.com/in/elson-liang/',
    github: 'https://github.com/elsonel',
    email: 'mailto:elsonliangel@gmail.com',
    home: '/',
    storybook: '/storybook',
  },
};
