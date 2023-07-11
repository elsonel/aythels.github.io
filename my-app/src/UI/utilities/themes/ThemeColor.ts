export interface ColorInterface {
  primary: string;
  text: string;
  textHovered: string;
  textNeutral: string;
  outline: string;
  backgroundHighlight: string;
  background: string;
  backgroundOppositeHighlight: string;
  backgroundOpposite: string;
  whiteBackdropDown: string;
  greyBackdropUp: string;
  greyBackdropLeft: string;
  greyBackdropRight: string;
  transparentWhite: string;
}

export interface ThemeColorInterface {
  color: ColorInterface;
}

export const ThemeColor: ThemeColorInterface = {
  color: {
    primary: '#ed5f13',
    text: '#1a1a1a',
    textHovered: '#6e6e6e',
    textNeutral: '#7d7d7d',
    outline: '#c9c9c9',
    backgroundHighlight: '#e6e6e6',
    background: '#ffffff',
    backgroundOppositeHighlight: '#4d4d4d',
    backgroundOpposite: '#000000',
    whiteBackdropDown: `
    linear-gradient(
      to bottom,
      hsl(0, 0%, 100%) 0%,
      hsla(0, 0%, 100%, 0.987) 8.1%,
      hsla(0, 0%, 100%, 0.951) 15.5%,
      hsla(0, 0%, 100%, 0.896) 22.5%,
      hsla(0, 0%, 100%, 0.825) 29%,
      hsla(0, 0%, 100%, 0.741) 35.3%,
      hsla(0, 0%, 100%, 0.648) 41.2%,
      hsla(0, 0%, 100%, 0.55) 47.1%,
      hsla(0, 0%, 100%, 0.45) 52.9%,
      hsla(0, 0%, 100%, 0.352) 58.8%,
      hsla(0, 0%, 100%, 0.259) 64.7%,
      hsla(0, 0%, 100%, 0.175) 71%,
      hsla(0, 0%, 100%, 0.104) 77.5%,
      hsla(0, 0%, 100%, 0.049) 84.5%,
      hsla(0, 0%, 100%, 0.013) 91.9%,
      hsla(0, 0%, 100%, 0) 100%
    )`,
    greyBackdropUp: `
    linear-gradient(
      to top,
      hsla(0, 0%, 0%, 0.51) 0%,
      hsla(0, 0%, 0%, 0.504) 8.1%,
      hsla(0, 0%, 0%, 0.485) 15.5%,
      hsla(0, 0%, 0%, 0.457) 22.5%,
      hsla(0, 0%, 0%, 0.421) 29%,
      hsla(0, 0%, 0%, 0.378) 35.3%,
      hsla(0, 0%, 0%, 0.33) 41.2%,
      hsla(0, 0%, 0%, 0.28) 47.1%,
      hsla(0, 0%, 0%, 0.23) 52.9%,
      hsla(0, 0%, 0%, 0.18) 58.8%,
      hsla(0, 0%, 0%, 0.132) 64.7%,
      hsla(0, 0%, 0%, 0.089) 71%,
      hsla(0, 0%, 0%, 0.053) 77.5%,
      hsla(0, 0%, 0%, 0.025) 84.5%,
      hsla(0, 0%, 0%, 0.006) 91.9%,
      hsla(0, 0%, 0%, 0) 100%
    )`,
    greyBackdropLeft: `
    linear-gradient(
      to left,
      hsla(0, 0%, 0%, 0.51) 0%,
      hsla(0, 0%, 0%, 0.504) 8.1%,
      hsla(0, 0%, 0%, 0.485) 15.5%,
      hsla(0, 0%, 0%, 0.457) 22.5%,
      hsla(0, 0%, 0%, 0.421) 29%,
      hsla(0, 0%, 0%, 0.378) 35.3%,
      hsla(0, 0%, 0%, 0.33) 41.2%,
      hsla(0, 0%, 0%, 0.28) 47.1%,
      hsla(0, 0%, 0%, 0.23) 52.9%,
      hsla(0, 0%, 0%, 0.18) 58.8%,
      hsla(0, 0%, 0%, 0.132) 64.7%,
      hsla(0, 0%, 0%, 0.089) 71%,
      hsla(0, 0%, 0%, 0.053) 77.5%,
      hsla(0, 0%, 0%, 0.025) 84.5%,
      hsla(0, 0%, 0%, 0.006) 91.9%,
      hsla(0, 0%, 0%, 0) 100%
    )`,
    greyBackdropRight: `
    linear-gradient(
      to right,
      hsla(0, 0%, 0%, 0.51) 0%,
      hsla(0, 0%, 0%, 0.504) 8.1%,
      hsla(0, 0%, 0%, 0.485) 15.5%,
      hsla(0, 0%, 0%, 0.457) 22.5%,
      hsla(0, 0%, 0%, 0.421) 29%,
      hsla(0, 0%, 0%, 0.378) 35.3%,
      hsla(0, 0%, 0%, 0.33) 41.2%,
      hsla(0, 0%, 0%, 0.28) 47.1%,
      hsla(0, 0%, 0%, 0.23) 52.9%,
      hsla(0, 0%, 0%, 0.18) 58.8%,
      hsla(0, 0%, 0%, 0.132) 64.7%,
      hsla(0, 0%, 0%, 0.089) 71%,
      hsla(0, 0%, 0%, 0.053) 77.5%,
      hsla(0, 0%, 0%, 0.025) 84.5%,
      hsla(0, 0%, 0%, 0.006) 91.9%,
      hsla(0, 0%, 0%, 0) 100%
    )`,
    transparentWhite: 'rgba(255, 255, 255, 0.9)',
  },
};
