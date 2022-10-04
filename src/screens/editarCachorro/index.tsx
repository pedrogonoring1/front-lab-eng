import React, { useEffect, useState } from 'react';
import { Text } from '@rneui/themed';
import { useWindowDimensions, View, Image, ActivityIndicator, Pressable } from 'react-native';
import { Button, Menu, Modal, Portal, Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { Input } from '../../components/input';
import { makeStyles } from './styles';
import { api } from '../../services/api';
import { ScrollView } from 'react-native-gesture-handler';
import { Button as LoginButton } from '../../components/button';
import { color } from '@rneui/base';

type EditarCachorroScreen = StackNavigationProp<RootStackParamList, 'EditarCachorro'>;

export const EditarCachorro: React.FC = () => {
    const navigation = useNavigation<EditarCachorroScreen>();

    const urlImageEdit = 'https://cdn-icons-png.flaticon.com/512/84/84380.png'

    useEffect(() => {
        recuperarCachorro();
    }, [])

    const { fontScale } = useWindowDimensions();
    const styles = makeStyles(fontScale);

    const [visibleMenu, setVisibleMenu] = useState(false);
    const [visibleMenuPorte, setVisibleMenuPorte] = useState(false);
    const [visibleSuccessModal, setVisibleSuccessModal] = useState(false);
    const [visibleEditPictureModal, setVisibleEditPictureModal] = useState(false);
    const [isSnackbarVisible, setIsSnackBarVisible] = useState(false);
    const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
    const [snackBarText, setSnackbarText] = useState('');
    const [cachorroConsulta, setCachorroConsulta] = useState(Object);
    const [nomeCachorro, setNomeCachorro] = useState('');
    const [sexoCachorro, setSexoCachorro] = useState('');
    const [idadeCachorro, setIdadeCachorro] = useState('');
    const [porteCachorro, setPorteCachorro] = useState('');
    const [historiaCachorro, setHistoriaCachorro] = useState('');
    const [fotoCachorro, setFotoCachorro] = useState('');
    const [sexoType, setSexoType] = useState('');
    const [porteType, setPorteType] = useState('');

    const recuperarCachorro = async () => {
        try {
            const cachorroRecuperado = await api.get(`/dog/recuperar/${"6338872abdae1dfbefec0628"}`);
            setCachorroConsulta(cachorroRecuperado.data.data[0]);
            setNomeCachorro(cachorroConsulta.name)
            setSexoCachorro(cachorroConsulta.gender)
            setIdadeCachorro(cachorroConsulta.age)
            setPorteCachorro(cachorroConsulta.size)
            setHistoriaCachorro(cachorroConsulta.history)
            setFotoCachorro(cachorroConsulta.picture)
        } catch (error) {
            return setSnackbarText('Nenhum cachorro recuperado');
        }
    }

    const editarCachorro = async () => {
        try {
            await api.put(`/dog/editar`, data);
        } catch (error) {
            return setSnackbarText('Nenhum cachorro editado');
        }
    }

    const selectSexoFemininoCachorro = () => {
        setSexoCachorro('F')
        setSexoType('F')
        setVisibleMenu(!visibleMenu);
    };

    const selectSexoMasculinoCachorro = () => {
        setSexoCachorro('M')
        setSexoType('M')
        setVisibleMenu(!visibleMenu);
    };

    const selectPortePequenoCachorro = () => {
        setPorteCachorro('P')
        setPorteType('P')
        setVisibleMenuPorte(!visibleMenuPorte);
    };

    const selectPorteMedioCachorro = () => {
        setPorteCachorro('M')
        setPorteType('M')
        setVisibleMenuPorte(!visibleMenuPorte);
    };

    const selectPorteGrandeCachorro = () => {
        setPorteCachorro('G')
        setPorteType('G')
        setVisibleMenuPorte(!visibleMenuPorte);
    };

    const data = {
        cachorroConsulta
    }

    const atualizarCachorroConsulta = async () => {
        cachorroConsulta.name = nomeCachorro;
        cachorroConsulta.gender = sexoCachorro;
        cachorroConsulta.age = idadeCachorro;
        cachorroConsulta.size = porteCachorro;
        cachorroConsulta.history = historiaCachorro;
        cachorroConsulta.picture = fotoCachorro;
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
                <Text style={styles.title}>Editar</Text>
            </View>

            <ScrollView>
                <View style={{marginBottom: 90}}>
                    <View style={styles.areaImageEdit}>
                        <Image source={{uri: fotoCachorro}} style={styles.picture} />
                        <Pressable onPress={() => { setVisibleEditPictureModal(!visibleEditPictureModal); }} >
                            <Image source={{uri: urlImageEdit}} style={styles.pictureEdit} />
                        </Pressable> 
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Text>Nome:</Text>
                        <Input placeholder='Nome' onChange={setNomeCachorro} valueText={nomeCachorro}/>
                        <Text style={{ marginTop: 10, marginBottom: 3 }}>Sexo:</Text>

                        <Menu
                            visible={visibleMenu}
                            onDismiss={() => setVisibleMenu(!visibleMenu)}
                            anchor={
                                <Pressable style={styles.dropdown} onPress={() => setVisibleMenu(!visibleMenu)}>
                                    <Text style={styles.dropdownText}>{sexoType ? sexoType : sexoCachorro}</Text>
                                    <Button labelStyle={{ color: color.purple, fontSize: 30 }} icon='chevron-down' children />
                                </Pressable>
                            }
                            >
                            <Menu.Item contentStyle={{ width: '100%' }} onPress={() => selectSexoFemininoCachorro()} title='F' />
                            <Menu.Item contentStyle={{ width: '100%' }} onPress={() => selectSexoMasculinoCachorro()} title='M' />
                        </Menu>

                        <Text style={{ marginTop: 10, marginBottom: 3 }}>Idade:</Text>
                        <Input placeholder='Idade' onChange={setIdadeCachorro} valueText={idadeCachorro+''}/>
                        <Text style={{ marginTop: 10, marginBottom: 3 }}>Porte:</Text>

                        <Menu
                            visible={visibleMenuPorte}
                            onDismiss={() => setVisibleMenuPorte(!visibleMenuPorte)}
                            anchor={
                                <Pressable style={styles.dropdown} onPress={() => setVisibleMenuPorte(!visibleMenuPorte)}>
                                    <Text style={styles.dropdownText}>{porteType ? porteType : porteCachorro}</Text>
                                    <Button labelStyle={{ color: color.purple, fontSize: 30 }} icon='chevron-down' children />
                                </Pressable>
                            }
                            >
                            <Menu.Item contentStyle={{ width: '100%' }} onPress={() => selectPortePequenoCachorro()} title='F' />
                            <Menu.Item contentStyle={{ width: '100%' }} onPress={() => selectPorteMedioCachorro()} title='M' />
                            <Menu.Item contentStyle={{ width: '100%' }} onPress={() => selectPorteGrandeCachorro()} title='G' />
                        </Menu>

                        <Text style={{ marginTop: 10, marginBottom: 3 }}>HIstória:</Text>
                        <Input placeholder='Historia' onChange={setHistoriaCachorro} valueText={historiaCachorro}/>
                    </View>

                    <LoginButton onPress={() => { setVisibleSuccessModal(!visibleSuccessModal); atualizarCachorroConsulta(); editarCachorro()}} text='Salvar' />

                </View>
            </ScrollView>
            </View>

            <Portal>
            <Modal
              visible={visibleSuccessModal}
              onDismiss={() => setVisibleSuccessModal(!visibleSuccessModal)}
              contentContainerStyle={styles.successModalContainer}
            >
              <Text style={styles.successModalTitle}>Sucesso!</Text>
              <Text style={styles.successModalDescription}>Cachorro Editado.</Text>
              <Pressable onPress={() => { setVisibleSuccessModal(!visibleSuccessModal); }} style={styles.successModalButton}>
                <Text style={styles.successModalButtonText}>Voltar</Text>
              </Pressable>
            </Modal>
          </Portal>

          <Portal>
            <Modal
              visible={visibleEditPictureModal}
              onDismiss={() => setVisibleSuccessModal(!visibleEditPictureModal)}
              contentContainerStyle={styles.successModalContainer}>

              <Text style={styles.successModalTitle}>Editar Foto</Text>
              <Image source={{uri: fotoCachorro}} style={styles.picture} />
              <Text style={styles.successModalDescription}>Informe a nova URL da foto</Text>
              
              <Input placeholder='url' onChange={setFotoCachorro} valueText={fotoCachorro}/>

              <Pressable onPress={() => { setVisibleEditPictureModal(!visibleEditPictureModal); }} style={styles.successModalButton}>
                <Text style={styles.successModalButtonText}>Voltar</Text>
              </Pressable>
            </Modal>
          </Portal>
          
        </View>
    );
}