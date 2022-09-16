import { GridBreakpoint } from '../../../../UI/components/layout/Grid';

export interface Image {
  src: string;
  caption?: string;
}

export interface Grid {
  breakpoints: GridBreakpoint[];
  images: Image[];
}

export type GridDataInterface = Grid[];

export interface Fact {
  label: string;
  value: string;
  to?: string;
}

export interface IPanelDataInterface {
  title: string;
  subtitle: string;
  body: string[];
  facts: Fact[];
}
