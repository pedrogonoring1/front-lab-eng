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

type loginScreen = StackNavigationProp<RootStackParamList, 'Login'>;

export const Login: React.FC = () => {
  const navigation = useNavigation<loginScreen>();

  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  const [visibleSuccessModal, setVisibleSuccessModal] = useState(false);
  const [isSnackbarVisible, setIsSnackBarVisible] = useState(false);
  const [snackBarText, setSnackbarText] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    if (!email || !password) {
      setIsSnackBarVisible(!isSnackbarVisible);
      setSnackbarText('Preencha todos os campos');
      return;
    }

    const data = {
      email,
      password,
    };

    try {
      await api.post(`/user/login`, data);
      setVisibleSuccessModal(!visibleSuccessModal);
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
    <View style={styles.body}>
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
        <Image style={styles.logo} source={require('../../assets/Vector.png')} />

        <Text style={styles.title}>Dogs Adoption</Text>
      </View>

      <View style={styles.container}>
        <Input placeholder='Email' onChange={setEmail} />
        <Input placeholder='Senha' onChange={setPassword} password />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.loginButton}>
          <LoginButton onPress={() => login()} text='Entrar' />

          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={styles.text}>Cadastrar</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('RecoverPassword')}>
            <Text style={[styles.text, { marginTop: 160 }]}>Esqueceu a senha?</Text>
          </Pressable>

          <Portal>
            <Modal
              visible={visibleSuccessModal}
              onDismiss={() => setVisibleSuccessModal(!visibleSuccessModal)}
              contentContainerStyle={styles.successModalContainer}
            >
              <Text style={styles.successModalTitle}>Sucesso!</Text>
              <Text style={styles.successModalDescription}>Login realizado com sucesso.</Text>
              <Pressable onPress={() => setVisibleSuccessModal(!visibleSuccessModal)} style={styles.successModalButton}>
                <Text style={styles.successModalButtonText}>Ok</Text>
              </Pressable>
            </Modal>
          </Portal>
        </View>
      </View>
    </View>
  );
};
