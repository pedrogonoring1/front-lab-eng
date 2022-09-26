import { StyleSheet } from 'react-native';
import { color } from '../../themes/color';

export const makeStyles = (fontScale: number) =>
  StyleSheet.create({
    title: {
      display: 'flex',
      alignSelf: 'center',
      fontSize: 20 / fontScale,
      fontWeight: 'bold',
      color: color.purple,
      marginTop: 10,
      marginBottom: 15
    },
    body: {
      display: 'flex',
      flex: 1,
      height: '100%',
      backgroundColor: color.beige,
    },
    areaPading: {
      padding: 30,
    },
    picture: {
      width: 80,
      height: 80,
      borderRadius: 15,
    },
    inputPesquisar: {
      marginTop: 15,
      marginBottom: 15,
    },
    viewListaOngs: {
      marginTop: 15,
      marginBottom: 20,
      flexDirection:'row'
    },
    viewInfoOngs: {
      paddingLeft: 10,
      paddingTop: 25,
    },
    textNomeOng: {
      fontWeight: 'bold',
      fontSize: 16
    },
    text: {
      display: 'flex',
      alignSelf: 'center',
      fontSize: 15 / fontScale,
      fontWeight: 'bold',
      color: '#47456D',
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
    bottomContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 27 / fontScale,
      flex: 0.4,
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
