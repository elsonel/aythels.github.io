import { ThemeColor, ThemeColorInterface } from './ThemeColor';
import { ThemeFont, ThemeFontInterface } from './ThemeFont';
import { ThemeAsset, ThemeAssetInterface } from './ThemeAsset';
import { ThemeMisc, ThemeMiscInterface } from './ThemeMisc';

export interface ThemeInterface
  extends ThemeFontInterface,
    ThemeColorInterface,
    ThemeAssetInterface,
    ThemeMiscInterface {}

export const Theme: ThemeInterface = {
  ...ThemeFont,
  ...ThemeColor,
  ...ThemeAsset,
  ...ThemeMisc,
};
