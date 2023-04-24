// Font families must be imported in .storybook/preview-head.html to be used
export interface FontInterface {
  family: string;
  weight: {
    light: number;
    regular: number;
    medium: number;
    semiBold: number;
    bold: number;
  };
  size: {
    tiny: string;
    small: string;
    default: string;
    large: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
  };
  wordSpacing: {
    default: string;
  };
  letterSpacing: {
    default: string;
    button: string;
  };
  lineHeight: {
    default: string;
  };
}

export interface ThemeFontInterface {
  font: {
    default: FontInterface;
    title: FontInterface;
    logo: FontInterface;
    mono: FontInterface;
  };
}

export const ThemeFont: ThemeFontInterface = {
  font: {
    default: {
      family: "'Manrope', sans-serif",
      weight: {
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
      },
      size: {
        tiny: '0.70rem',
        small: '0.86rem',
        default: '1rem',
        large: '1.1rem',
        h6: '1.2rem',
        h5: '1.3rem',
        h4: '1.4rem',
        h3: '1.55rem',
        h2: '1.75rem',
        h1: '2rem',
      },
      wordSpacing: {
        default: 'normal',
      },
      letterSpacing: {
        default: 'normal',
        button: '0.06rem',
      },
      lineHeight: {
        default: '1.4',
      },
    },
    title: {
      family: `'Viga', sans-serif`,
      weight: {
        light: 400,
        regular: 400,
        medium: 400,
        semiBold: 400,
        bold: 400,
      },
      size: {
        tiny: '0.65rem',
        small: '0.80rem',
        default: '1rem',
        large: '1.1rem',
        h6: '1.2rem',
        h5: '1.3rem',
        h4: '1.4rem',
        h3: '1.6rem',
        h2: '1.8rem',
        h1: '2rem',
      },
      wordSpacing: {
        default: '0.2rem',
      },
      letterSpacing: {
        default: 'normal',
        button: '0.08rem',
      },
      lineHeight: {
        default: '0.86',
      },
    },
    logo: {
      family: `'Montserrat', sans-serif`,
      weight: {
        light: 400,
        regular: 400,
        medium: 400,
        semiBold: 400,
        bold: 400,
      },
      size: {
        tiny: '0.65rem',
        small: '0.80rem',
        default: '1rem',
        large: '1.1rem',
        h6: '1.2rem',
        h5: '1.3rem',
        h4: '1.4rem',
        h3: '1.6rem',
        h2: '1.8rem',
        h1: '2rem',
      },
      wordSpacing: {
        default: '0.1rem',
      },
      letterSpacing: {
        default: 'normal',
        button: '0.08rem',
      },
      lineHeight: {
        default: '1.2',
      },
    },
    mono: {
      family: `'Roboto Mono', monospace`,
      weight: {
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
      },
      size: {
        tiny: '0.65rem',
        small: '0.80rem',
        default: '1rem',
        large: '1.1rem',
        h6: '1.2rem',
        h5: '1.3rem',
        h4: '1.4rem',
        h3: '1.6rem',
        h2: '1.8rem',
        h1: '2rem',
      },
      wordSpacing: {
        default: '-0.3rem',
      },
      letterSpacing: {
        default: 'normal',
        button: '0.08rem',
      },
      lineHeight: {
        default: 'normal',
      },
    },
  },
};