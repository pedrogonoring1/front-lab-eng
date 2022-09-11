import { DefaultTheme } from 'react-native-paper';
import { color } from './color';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: color.purple,
  },
};
