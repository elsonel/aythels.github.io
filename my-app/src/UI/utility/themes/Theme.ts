import { ThemeColor, ThemeColorInterface } from './ThemeColor';
import { ThemeFont, ThemeFontInterface } from './ThemeFont';
import { ThemeIcon, ThemeIconInterface } from './ThemeIcon';
import { ThemeMisc, ThemeMiscInterface } from './ThemeMisc';

export interface ThemeInterface
  extends ThemeFontInterface,
    ThemeColorInterface,
    ThemeIconInterface,
    ThemeMiscInterface {}

export const Theme: ThemeInterface = {
  ...ThemeFont,
  ...ThemeColor,
  ...ThemeIcon,
  ...ThemeMisc,
};
