import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
      text: string;
      text_weak: string;
      regular: string;
      dark: string;
      darker: string;
    };

    fonts: {
      bigger: string;
      big: string;
      medium: string;
      small: string;
      smaller: string;
      letterSpacing: string;
    };

    metrics: {
      widthScreen: number;
      heightScreen: number;
    };
  }
}
