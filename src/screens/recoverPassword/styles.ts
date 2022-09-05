import { StyleSheet } from 'react-native'
import { color } from '../../themes/color'

export const makeStyles = (fontScale: number) =>
  StyleSheet.create({
    wrapper: {
      display: 'flex',
      flex: 1,
      height: '100%',
      backgroundColor: color.beige,
    },
    bottomContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      marginHorizontal: 27 / fontScale,
      flex: 0.4,
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginHorizontal: 27 / fontScale,
    },
    topContainer: {
      flex: 0.13,
      display: 'flex',
      marginHorizontal: 27 / fontScale,
      justifyContent: 'flex-end',
    },
    returnButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 10 / fontScale,
      backgroundColor: color.purple,
      width: 50 / fontScale,
      height: 50 / fontScale,
      borderRadius: 100 / fontScale,
    },
    elevation: {
      elevation: 20,
      shadowColor: '#52006A',
    },
    modalContainer: {
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-around',
      width: 350 / fontScale,
      height: 350 / fontScale,
      borderRadius: 30 / fontScale,
      backgroundColor: color.beige,
      paddingHorizontal: 30 / fontScale,
    },
    modalTitle: {
      color: color.purple,
      fontSize: 20 / fontScale,
      lineHeight: 24 / fontScale,
      fontWeight: '700',
      textAlign: 'center',
      marginTop: 15 / fontScale,
    },
    modalDescription: {
      color: color.purple,
      fontSize: 20 / fontScale,
      lineHeight: 24 / fontScale,
      fontWeight: '400',
      textAlign: 'center',
    },
    modalButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 150 / fontScale,
      height: 50 / fontScale,
      borderRadius: 30 / fontScale,
      marginBottom: 24 / fontScale,
      backgroundColor: color.purple,
    },
    modalButtonText: {
      fontSize: 20 / fontScale,
      lineHeight: 30 / fontScale,
      fontWeight: '500',
      letterSpacing: 0.6 / fontScale,
      color: 'white',
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flex: 0.27,
    },
    title: {
      marginTop: 20 / fontScale,
      color: color.purple,
      fontSize: 36 / fontScale,
      lineHeight: 43.2 / fontScale,
      fontWeight: '500',
      letterSpacing: -1 / fontScale,
    },
    description: {
      alignSelf: 'center',
      color: color.purple,
      fontSize: 20 / fontScale,
      lineHeight: 30 / fontScale,
      letterSpacing: 0.6 / fontScale,
      fontWeight: '500',
      textAlign: 'center',
    },
  })