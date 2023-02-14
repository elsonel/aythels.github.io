import 'styled-components';
import { ThemeInterface } from '../UI/utility/themes/Theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeInterface {}
}
