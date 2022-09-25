import { StyleSheet } from 'react-native';
import { color } from '../../themes/color';

export const makeStyles = (fontScale: number) =>
  StyleSheet.create({
    body: {
      display: 'flex',
      flex: 1,
      height: '100%',
      paddingTop: 400,
      paddingLeft: 60,
      backgroundColor: color.beige,
    }
  });
