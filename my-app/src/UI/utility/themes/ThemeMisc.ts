export interface LayerInterface {
  header: number;
  modal: number;
}

export interface SpeedInterface {
  fast: string;
  normal: string;
  slow: string;
  loading: string;
  test: string;
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
    fast: '0.15s',
    normal: '0.25s',
    slow: '0.4s',
    loading: '1s',
    test: '3s',
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
