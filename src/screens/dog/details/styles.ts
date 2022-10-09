import { StyleSheet } from 'react-native';
import { color } from '../../../themes/color';

export const makeStyles = (fontScale: number) =>
  StyleSheet.create({
    body: {
      display: 'flex',
      height: '100%',
      backgroundColor: color.beige,
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      marginHorizontal: 22 / fontScale,
      flex: 0.165,
    },
    topContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 27 / fontScale,
      flex: 0.4,
    },
    imgContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70 / fontScale,
      marginHorizontal: 27 / fontScale,
      flex: 1,
    },
    img: {
      justifyContent: 'center',
      width: 350 / fontScale,
    },
    bottomContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 27 / fontScale,
      flex: 0.4,
    },
    button: {
      justifyContent: 'flex-end',
      width: 350 / fontScale,
    },
    title: {
      display: 'flex',
      alignSelf: 'center',
      fontSize: 25 / fontScale,
      color: color.ofuscatedBlack,
    },
    subtitle: {
      display: 'flex',
      alignSelf: 'flex-start',
      paddingLeft: 35,
      fontSize: 15 / fontScale,
      fontWeight: 'bold',
      color: color.ofuscatedBlack,
    },
    text: {
      display: 'flex',
      alignSelf: 'flex-start',
      paddingLeft: 35,
      paddingRight: 35,
      fontSize: 15 / fontScale,
      color: color.ofuscatedBlack,
    },
    icon: {
      display: 'flex',
      alignSelf: 'flex-end',
      height: 24,
      width: 24,
      marginRight: 35
    },
    successModalContainer: {
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
    successModalTitle: {
      color: color.purple,
      fontSize: 20 / fontScale,
      lineHeight: 24 / fontScale,
      fontWeight: '700',
      textAlign: 'center',
      marginTop: 15 / fontScale,
    },
    successModalDescription: {
      color: color.purple,
      fontSize: 20 / fontScale,
      lineHeight: 24 / fontScale,
      fontWeight: '400',
      textAlign: 'center',
    },
    successModalButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 150 / fontScale,
      height: 50 / fontScale,
      borderRadius: 30 / fontScale,
      marginBottom: 24 / fontScale,
      backgroundColor: color.purple,
    },
    successModalButtonText: {
      fontSize: 20 / fontScale,
      lineHeight: 30 / fontScale,
      fontWeight: '500',
      letterSpacing: 0.6 / fontScale,
      color: 'white',
    },
  });
