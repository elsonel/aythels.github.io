export interface FontInterface {
  family: string;
  weight: {
    light1: number;
    light2: number;
    regular: number;
    medium: number;
    bold1: number;
    bold2: number;
  };
  size: {
    default: string;
    tiny: string;
    small: string;
    large: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
  };
  spacing: {
    default: string;
    button: string;
  };
  wordSpacing: {
    default: string;
  };
}

export interface ThemeFontInterface {
  font: FontInterface;
}

export const ThemeFont: ThemeFontInterface = {
  font: {
    family: "'Manrope', sans-serif",
    weight: {
      light1: 200,
      light2: 300,
      regular: 400,
      medium: 500,
      bold1: 600,
      bold2: 700,
    },
    size: {
      tiny: '0.62rem',
      small: '0.80rem',
      default: '0.94rem',
      large: '1.1rem',
      h6: '1.2rem',
      h5: '1.3rem',
      h4: '1.4rem',
      h3: '1.55rem',
      h2: '1.75rem',
      h1: '2rem',
    },
    spacing: {
      default: 'normal',
      button: '0.08rem',
    },
    wordSpacing: {
      default: '0.08rem',
    },
  },
};
