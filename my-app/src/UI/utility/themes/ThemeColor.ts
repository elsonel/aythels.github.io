export interface ColorInterface {
  text: string;
  textHovered: string;
  textNeutral: string;
  outline: string;
  backgroundHighlight: string;
  background: string;
}

export interface ThemeColorInterface {
  color: ColorInterface;
}

export const ThemeColor: ThemeColorInterface = {
  color: {
    text: '#1a1a1a',
    textHovered: '#3d3d3d',
    textNeutral: '#a8a8a8',
    outline: 'lightgrey',
    backgroundHighlight: '#e6e6e6',
    background: '#ffffff',
  },
};
