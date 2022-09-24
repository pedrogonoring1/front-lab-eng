import React, { useState } from 'react';
import { Text } from '@rneui/themed';
import { Pressable, useWindowDimensions, View, Image } from 'react-native';
import { Modal, Portal, Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../routes';
import { Input } from '../../components/input';
import { makeStyles } from './styles';
import { Button as LoginButton } from '../../components/button';
import { api } from '../../services/api';

type DashboardAdotadorScreen = StackNavigationProp<RootStackParamList, 'DashboardAdotador'>;

export const DashboardAdotador: React.FC = () => {
    const navigation = useNavigation<DashboardAdotadorScreen>();

    const { fontScale } = useWindowDimensions();
    const styles = makeStyles(fontScale);

    // const [abrigos, setNomeAbrigo] = useState(Promise<any>);
    const [isSnackbarVisible, setIsSnackBarVisible] = useState(false);
    const [snackBarText, setSnackbarText] = useState('');
    const [abrigoConsulta, setAbrigoConsulta] = useState('');

    // const recuperarAbrigos = async () => {
    //     try {
    //         let abrigosRecuperados = await api.get('/ong');
    //         setNomeAbrigo(abrigosRecuperados.data);
    //     } catch (error) {
    //         return setSnackbarText('Nenhum abrigo recuperado');
    //     }
    // }

    return (
        <View style={styles.body}>
            <Snackbar
                visible={isSnackbarVisible}
                onDismiss={() => setIsSnackBarVisible(!isSnackbarVisible)}
                action={{
                label: 'Fechar',
                }}
                style={{ backgroundColor: 'red' }}
                wrapperStyle={{ zIndex: 1 }}>
                {snackBarText}
            </Snackbar>

            <View>
                <Text style={styles.title}>Abrigos</Text>
                <Input placeholder='Pesquisar' onChange={setAbrigoConsulta}/>
            </View>
        </View>
    );
}