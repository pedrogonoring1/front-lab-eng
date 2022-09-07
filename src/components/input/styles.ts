import { StyleSheet } from 'react-native'
import { color } from '../../themes/color'

export const makeStyles = (fontScale: number) =>
  StyleSheet.create({
    input: {
      width: '100%',
      height: 55 / fontScale,
      borderRadius: 30 / fontScale,
      backgroundColor: color.lightWhite,
      padding: 15 / fontScale,
      color: color.ofuscatedBlack,
      fontSize: 16 / fontScale,
      lineHeight: 30 / fontScale,
      fontWeight: '500',
      letterSpacing: -0.2 / fontScale,
    },
  })
