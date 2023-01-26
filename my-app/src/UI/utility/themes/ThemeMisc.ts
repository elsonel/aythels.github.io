export interface LayerInterface {
  header: number;
  modal: number;
}

export interface SpeedInterface {
  fast: number;
  normal: number;
  slow: number;
  loading: number;
  test: number;
}

export interface SizeInterface {
  headerHeight: number;
  footerHeight: number;
}

export interface LinkInterface {
  linkedin: string;
  github: string;
  email: string;
  home: string;
}

export interface ThemeMiscInterface {
  layer: LayerInterface;
  speed: SpeedInterface;
  size: SizeInterface;
  link: LinkInterface;
}

export const ThemeMisc: ThemeMiscInterface = {
  layer: {
    header: 9998,
    modal: 9999,
  },
  speed: {
    fast: 150,
    normal: 250,
    slow: 500,
    loading: 1000,
    test: 3000,
  },
  size: {
    headerHeight: 44,
    footerHeight: 64,
  },
  link: {
    linkedin: 'https://www.linkedin.com/in/elson-liang/',
    github: 'https://github.com/elsonel',
    email: 'mailto:elsonliangel@gmail.com',
    home: '/',
  },
};
