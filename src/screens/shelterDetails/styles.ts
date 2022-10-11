import { StyleSheet } from 'react-native';
import { color } from '../../themes/color';

export const makeStyles = (fontScale: number) =>
  StyleSheet.create({
    title: {
      display: 'flex',
      alignSelf: 'center',
      fontSize: 20 / fontScale,
      fontWeight: 'bold',
      color: color.ofuscatedBlack,
      marginTop:8
    },
    titleNav: {
      display: 'flex',
      alignSelf: 'center',
      fontSize: 20 / fontScale,
      fontWeight: 'bold',
      color: color.ofuscatedBlack,
    },
    body: {
      width:'100%',
      height: '100%',
      backgroundColor: color.beige,
    },
    content:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:20,
      paddingHorizontal:40,
    },
    nav: {
      justifyContent:'space-between',
      flexDirection:'row',
      paddingHorizontal:15,
      paddingVertical:20,
    },
    imageBig: {
      width: 150,
      height: 150,
      borderRadius: 12,
    },
    text: {
      fontSize: 16,
      color:color.grey,
      marginTop:5,
      marginBottom:16
    },
    box: {
      paddingHorizontal:10,
      marginTop:10,
      flexWrap:'wrap',
      flexDirection:'row',
      justifyContent:'space-between'
    },
    item: {
      marginBottom:10,
      position:'relative',
      justifyContent:'center',
      alignItems:'center'
    },
    itemText: {
      fontSize: 16,
      color:color.lightWhite,
      fontWeight:'bold',
      textAlign:'center',
      position:'absolute',
      bottom: 12
    },
    image: {
      width: 80,
      height: 80,
      borderRadius:12,
    },
  });
