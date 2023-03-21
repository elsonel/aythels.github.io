export interface LayerInterface {
  header: number;
  modal: number;
}

export interface SpeedInterface {
  instant: number;
  fast: number;
  normal: number;
  slow: number;
  loading: number;
  test: number;
}

export interface SizeInterface {
  headerHeight: number;
  padding: number;
  footerHeight: number;
}

export interface LinkInterface {
  linkedin: string;
  github: string;
  email: string;
  home: string;
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
    header: 9998,
    modal: 9999,
  },
  speed: {
    instant: 100,
    fast: 150,
    normal: 250,
    slow: 500,
    loading: 1000,
    test: 3000,
  },
  size: {
    headerHeight: 52,
    padding: 20,
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
  },
};
