import { StyleSheet } from "react-native";
import { color } from '../../themes/color'

export const makeStyles = (fontScale: number) =>
  StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#47456D',
        marginBottom: 30,
    },
    body: {
        backgroundColor: '#F2E9E0',
        height: '100%',
        alignItems: 'center',
    },
    logo:{
        marginTop: 110,
        marginBottom: 30,
    },
    inputs: {
        marginTop: 30,
        backgroundColor: 'white',
        width: 350,
        height: 50,
        borderRadius: 25,
    },
    loginButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginHorizontal: 27 / fontScale,
        marginTop: 70,
        width: 350
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#47456D',
        marginBottom: 30,
    }
  })