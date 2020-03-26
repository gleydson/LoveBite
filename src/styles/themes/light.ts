import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export default {
  colors: {
    primary: '#25A84E',
    background: '#fff',
    text: '#000',
    text_weak: '#8F8F8F',
    regular: '#999',
    dark: '#555',
    darker: '#222',
  },
  fonts: {
    bigger: '51px',
    big: '30px',
    medium: '19px',
    small: '14px',
    smaller: '10px',
    letterSpacing: '2px',
  },
  metrics: {
    widthScreen: width,
    heightScreen: height,
  },
};
