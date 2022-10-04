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
      marginBottom: 30
    },
    body: {
      display: 'flex',
      flex: 1,
      height: '100%',
      backgroundColor: color.beige,
    },
    areaImageEdit: {
      flexDirection:'row',
      display: 'flex',
      alignSelf: 'center',
      marginBottom: 30
    },
    areaPading: {
      padding: 30,
    },
    picture: {
      width: 80,
      height: 80,
      borderRadius: 15,
    },
    pictureEdit: {
      width: 30,
      height: 30,
      marginLeft: 10,
      marginTop: 20,
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


    wrapper: {
      display: 'flex',
      flex: 1,
      height: '100%',
      backgroundColor: color.beige,
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginHorizontal: 27 / fontScale,
    },
    linkText: {
      color: color.purple,
      fontSize: 18 / fontScale,
      fontWeight: 'bold',
    },
    terms: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    termsText: {
      color: color.ofuscatedBlack,
      fontSize: 20 / fontScale,
      fontWeight: '400',
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
    dropdown: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      backgroundColor: color.lightWhite,
      height: 50 / fontScale,
      borderRadius: 30 / fontScale,
    },
    dropdownText: {
      display: 'flex',
      alignSelf: 'center',
      padding: 15 / fontScale,
      color: color.ofuscatedBlack,
      fontSize: 16 / fontScale,
      fontWeight: '500',
      letterSpacing: -0.2 / fontScale,
    },
    elevation: {
      elevation: 20,
      shadowColor: '#52006A',
    },
    termModalContainer: {
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-around',
      width: 350 / fontScale,
      height: 650 / fontScale,
      borderRadius: 30 / fontScale,
      backgroundColor: color.beige,
      paddingHorizontal: 30 / fontScale,
    },
    termModalTitle: {
      color: color.purple,
      fontSize: 20 / fontScale,
      lineHeight: 24 / fontScale,
      fontWeight: '700',
      textAlign: 'center',
      marginTop: 15 / fontScale,
    },
    termModalDescription: {
      color: color.purple,
      fontSize: 20 / fontScale,
      lineHeight: 24 / fontScale,
      fontWeight: '400',
    },
    termModalButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 150 / fontScale,
      height: 50 / fontScale,
      borderRadius: 30 / fontScale,
      marginBottom: 24 / fontScale,
      backgroundColor: color.purple,
    },
    termModalButtonText: {
      fontSize: 20 / fontScale,
      lineHeight: 30 / fontScale,
      fontWeight: '500',
      letterSpacing: 0.6 / fontScale,
      color: 'white',
    },
    registrationModalContainer: {
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
    registrationModalTitle: {
      color: color.purple,
      fontSize: 20 / fontScale,
      lineHeight: 24 / fontScale,
      fontWeight: '700',
      textAlign: 'center',
      marginTop: 15 / fontScale,
    },
    registrationModalDescription: {
      color: color.purple,
      fontSize: 20 / fontScale,
      lineHeight: 24 / fontScale,
      fontWeight: '400',
      textAlign: 'center',
    },
    registrationModalButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 150 / fontScale,
      height: 50 / fontScale,
      borderRadius: 30 / fontScale,
      marginBottom: 24 / fontScale,
      backgroundColor: color.purple,
    },
    registrationModalButtonText: {
      fontSize: 20 / fontScale,
      lineHeight: 30 / fontScale,
      fontWeight: '500',
      letterSpacing: 0.6 / fontScale,
      color: 'white',
    },
  });