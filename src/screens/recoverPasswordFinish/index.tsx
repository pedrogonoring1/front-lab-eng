import React, { useState } from 'react';
import { useWindowDimensions, View, Text, Pressable, Image } from 'react-native';
import { makeStyles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { Button as RegisterButton } from '../../components/button';
import { Input } from '../../components/input';
import { Button, Portal, Modal, Snackbar } from 'react-native-paper';
import { color } from '../../themes';
import { api } from '../../services/api';
import { RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';

type revocerPasswordFinishScreenProp = StackNavigationProp<RootStackParamList>;

export const RecoverPasswordFinish: React.FC = () => {
  const navigation = useNavigation<revocerPasswordFinishScreenProp>();

  const route = useRoute();
  const email = route.params;

  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  const [visibleModal, setVisibleModal] = useState(false);
  const [isSnackbarVisible, setIsSnackBarVisible] = useState(false);
  const [snackBarText, setSnackbarText] = useState('');

  const [codigo, setCodigo] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaRepeat, setSenhaRepat] = useState('');

  const data = {
    codigo,
    senha,
    senhaRepeat,
    email
  };

  const recoverPasswordFinish = async () => {
    if (!codigo || !senha || !senhaRepeat) {
      setIsSnackBarVisible(!isSnackbarVisible);
      setSnackbarText('Preencha todos os campos');
      return;
    }

    if(senha !== senhaRepeat) {
        setIsSnackBarVisible(!isSnackbarVisible);
        setSnackbarText('As senhas não são iguais', );
        return;
    }

    try {
        await api.put(`/user/reset-password/finish`, data);
        setVisibleModal(!visibleModal);
      } catch (e: any) {
        if (e.response.data) {
          setIsSnackBarVisible(!isSnackbarVisible);
  
          if (e.response.data.error.detail === ('Usuário não foi encontrado' || 'Senha incorreta'))
            return setSnackbarText('Dados inválidos');
  
          setSnackbarText(
            e.response.data.error.detail === 'Internal Server Error'
              ? 'Login não foi realizado'
              : e.response.data.error.detail
          );
        }
      }
  };

  return (
    <View style={styles.wrapper}>
      <Snackbar
        visible={isSnackbarVisible}
        onDismiss={() => setIsSnackBarVisible(!isSnackbarVisible)}
        action={{
          label: 'Fechar',
        }}
        style={{ backgroundColor: 'red' }}
        wrapperStyle={{ zIndex: 1 }}
      >
        {snackBarText}
      </Snackbar>

      <View style={styles.topContainer}>
        <Pressable style={[styles.returnButton, styles.elevation]} onPress={() => navigation.goBack()}>
          <Button labelStyle={{ color: color.lightWhite, fontSize: 30 }} icon='chevron-left' children />
        </Pressable>
      </View>


      <View style={styles.bottomContainer}>
        <Text style={styles.description}>Digite o código recebido por e-mail no campo abaixo e a nova senha.</Text>
        <Input placeholder='Código' onChange={setCodigo} />
        <Input placeholder='Nova senha' onChange={setSenha} password />
        <Input placeholder='Digite a senha novamente' onChange={setSenhaRepat} password />

        <View style={styles.buttonContainer}>
          <RegisterButton text='Salvar' onPress={() => recoverPasswordFinish()} />
 
          <Portal>
            <Modal
              visible={visibleModal}
              onDismiss={() => setVisibleModal(!visibleModal)}
              contentContainerStyle={styles.modalContainer}
            >
              <Text style={styles.modalTitle}>Sucesso!</Text>
              <Text style={styles.modalDescription}>
              Sua nova senha foi salva com sucesso. Pressione “Ok” para voltar a tela de login.
              </Text>
              <Pressable onPress={() => {setVisibleModal(!visibleModal); navigation.navigate('Login')}} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Ok</Text>
              </Pressable>
            </Modal>
          </Portal>
        </View>
      </View>
    </View>
  );
};
