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
  header: number;
}

export interface ThemeMiscInterface {
  layer: LayerInterface;
  speed: SpeedInterface;
  size: SizeInterface;
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
    header: 44,
  },
};
