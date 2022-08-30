export interface ColorInterface {
  text: string;
  textPassive1: string;
  textPassive2: string;
  textPassive3: string;
  textPassive4: string;
  background: string;
  highlight: string;
}

export interface ThemeColorInterface {
  color: ColorInterface;
}

export const ThemeColor: ThemeColorInterface = {
  color: {
    text: '#1a1a1a',
    textPassive1: '#3d3d3d',
    textPassive2: '#a8a8a8',
    textPassive3: 'lightgrey',
    textPassive4: '#e6e6e6',
    background: '#ffffff',
    highlight: '#C92C2C',
  },
};
