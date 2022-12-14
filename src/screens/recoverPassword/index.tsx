import React, { useState } from 'react';
import { useWindowDimensions, View, Text, Pressable, Image } from 'react-native';
import { makeStyles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';
import { Button as RegisterButton } from '../../components/button';
import { Input } from '../../components/input';
import { Button, Portal, Modal, Snackbar } from 'react-native-paper';
import { color } from '../../themes';
import { api } from '../../services/api';

type revocerPasswordScreenProp = StackNavigationProp<RootStackParamList>;

export const RecoverPassword: React.FC = () => {
  const navigation = useNavigation<revocerPasswordScreenProp>();

  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  const [visibleModal, setVisibleModal] = useState(false);
  const [isSnackbarVisible, setIsSnackBarVisible] = useState(false);
  const [snackBarText, setSnackbarText] = useState('');

  const [email, setEmail] = useState('');

  const data = {
    email,
  };

  const recoverPassword = async () => {
    if (!email) {
      setIsSnackBarVisible(!isSnackbarVisible);
      setSnackbarText('Informe o e-mail');
      return;
    }

    try {
      const user = await api.put(`/user/reset-password`, data);
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

      <View style={styles.container}>
        <Image source={require('../../assets/Vector.png')} />
        <Text style={styles.title}>Dogs Adoption</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.description}>Digite seu e-mail cadastrado para receber um código para redefinir a senha.</Text>

        <Input placeholder='E-mail' onChange={setEmail} />

        <View style={styles.buttonContainer}>
          <RegisterButton text='Enviar' onPress={() => recoverPassword()} />
 
          <Portal>
            <Modal
              visible={visibleModal}
              onDismiss={() => setVisibleModal(!visibleModal)}
              contentContainerStyle={styles.modalContainer}
            >
              <Text style={styles.modalTitle}>Sucesso!</Text>
              <Text style={styles.modalDescription}>
              Um código de validação foi enviado para o seu e-mail de cadastro. Pressione “Ok” para continuar.
              </Text>
              <Pressable onPress={() => { setVisibleModal(!visibleModal); navigation.navigate('RecoverPasswordFinish', {email: email}) }} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Ok</Text>
              </Pressable>
            </Modal>
          </Portal>
        </View>
      </View>
    </View>
  );
};
