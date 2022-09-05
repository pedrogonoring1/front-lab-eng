import { StyleSheet } from 'react-native'
import { color } from '../../themes/color'

export const makeStyles = (fontScale: number) =>
  StyleSheet.create({
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 50 / fontScale,
      borderRadius: 30 / fontScale,
      marginBottom: 24 / fontScale,
      backgroundColor: color.purple,
    },
    buttonText: {
      fontSize: 20 / fontScale,
      lineHeight: 30 / fontScale,
      fontWeight: '500',
      letterSpacing: 0.6 / fontScale,
      color: 'white',
    },
  })
