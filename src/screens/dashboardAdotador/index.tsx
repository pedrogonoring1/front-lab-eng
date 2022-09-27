import React, { useEffect, useState } from 'react';
import { Text } from '@rneui/themed';
import { useWindowDimensions, View, Image, ActivityIndicator } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { Input } from '../../components/input';
import { makeStyles } from './styles';
import { api } from '../../services/api';
import { ScrollView } from 'react-native-gesture-handler';

type DashboardAdotadorScreen = StackNavigationProp<RootStackParamList, 'DashboardAdotador'>;

export const DashboardAdotador: React.FC = () => {
    const navigation = useNavigation<DashboardAdotadorScreen>();

    useEffect(() => {
        recuperarAbrigos();
    }, [])

    const { fontScale } = useWindowDimensions();
    const styles = makeStyles(fontScale);

    // const [abrigos, setNomeAbrigo] = useState(Promise<any>);
    const [isSnackbarVisible, setIsSnackBarVisible] = useState(false);
    const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
    const [snackBarText, setSnackbarText] = useState('');
    const [abrigoConsulta, setAbrigoConsulta] = useState(Object);
    const [nomeAbrigoConsulta, setNomeAbrigoConsulta] = useState('');

    const recuperarAbrigos = async () => {
        try {
            const abrigosRecuperados = await api.get('/user/recuperar-todas-ongs');
            setAbrigoConsulta(abrigosRecuperados.data.data);
        } catch (error) {
            return setSnackbarText('Nenhum abrigo recuperado');
        }
    }

    const recuperarAbrigosPesquisa = async (nome: any) => {
        try {
            setIsSpinnerVisible(true);
            setNomeAbrigoConsulta(nome);
            const abrigosRecuperados = await api.get(`/user/recuperar-todas-ongs-nome/${nomeAbrigoConsulta}`);
            setAbrigoConsulta(abrigosRecuperados.data.data);
            setIsSpinnerVisible(false);
            if(nomeAbrigoConsulta.length == 1){
                const abrigosRecuperados = await api.get('/user/recuperar-todas-ongs');
                setAbrigoConsulta(abrigosRecuperados.data.data);
            }
           
        } catch (error) {
            return setSnackbarText('Nenhum abrigo recuperado');
        }
    }

    return (
        <View style={styles.body}>
            <View style={styles.areaPading}>
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
                <Input placeholder='Pesquisar' onChange={recuperarAbrigosPesquisa}/>
            </View>
            <ScrollView>

            {isSpinnerVisible && (
            <ActivityIndicator
                style={{ height: 80 }}
                size="large"
                color="#47456D"
            />)}

            <View style={{marginBottom: 90}}>
                {Object.keys(abrigoConsulta).map((value, index) => {
                    return (
                        <View key={index} style={styles.viewListaOngs}>
                            <Image source={{uri: abrigoConsulta[index].picture}} style={styles.picture} />
                            <View style={styles.viewInfoOngs}>
                                <Text style={styles.textNomeOng}>{abrigoConsulta[index].name}</Text>
                            </View>
                        </View>
                    )
                })}
            </View>
            </ScrollView>
            </View>
        </View>
    );
}