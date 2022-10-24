import "@emotion/react";
import { theme } from "../styles/theme";
declare module "@emotion/react" {
  type ThemeType = typeof theme;
  interface Theme extends ThemeType {}
}
