import { useWindowDimensions, StyleSheet } from 'react-native'
import { color } from '../../themes/color'

export const makeStyles = (fontScale: number) =>
  StyleSheet.create({
    gradient: {
      display: 'flex',
      flex: 1,
      height: '100%',
    },
    container: {
      marginHorizontal: 27 / fontScale,
      flex: 0.4,
    },
    bottomContainer: {
      flex: 0.3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: 27 / fontScale,
    },
    topContainer: {
      flex: 0.3,
    },
    title: {
      color: color.theme.white,
      fontSize: 42 / fontScale,
      marginBottom: 22 / fontScale,
      fontWeight: 'bold',
    },
    subtitle: {
      color: color.theme.white,
      fontSize: 24 / fontScale,
      marginBottom: 22 / fontScale,
    },
    description: {
      color: color.theme.white,
      fontSize: 18 / fontScale,
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '30%',
      height: '18%',
      borderRadius: 12 / fontScale,
      marginBottom: 27 / fontScale,
      backgroundColor: color.green.dark,
    },
    buttonText: {
      fontSize: 18 / fontScale,
      lineHeight: 23 / fontScale,
      fontWeight: 'bold',
      letterSpacing: 0.3 / fontScale,
      color: 'white',
    },
    linkText: {
      color: color.theme.white,
      fontSize: 18 / fontScale,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
    horizontalRule: {
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      marginBottom: 12 / fontScale,
      marginHorizontal: 12 / fontScale,
      width: '30%',
    },
    horizontalRuleContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
  })
