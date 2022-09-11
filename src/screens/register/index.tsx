import React, { useState } from 'react';
import { useWindowDimensions, View, Text, Pressable } from 'react-native';
import { Checkbox, Button, Menu, Portal, Modal, Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../routes';
import { Button as RegisterButton } from '../../components/button';
import { Input } from '../../components/input';
import { makeStyles } from './styles';
import { color } from '../../themes';
import { api } from '../../services/api';

type registerScreenProp = StackNavigationProp<RootStackParamList>;

export const Register: React.FC = () => {
  const navigation = useNavigation<registerScreenProp>();

  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  const [checked, setChecked] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [visibleTermModal, setVisibleTermModal] = useState(false);
  const [visibleRegistrationModal, setVisibleRegistrationModal] = useState(false);
  const [isSnackbarVisible, setIsSnackBarVisible] = useState(false);
  const [snackBarText, setSnackbarText] = useState('');
  const [adoptionType, setAdoptionType] = useState('');

  const [isAdopter, setIsAdopter] = useState(true);
  const [name, setName] = useState('');
  const [cpfOrCnpj, setcpfOrCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const selectOng = () => {
    setIsAdopter(false);
    setAdoptionType('Sou ONG');
    setVisibleMenu(!visibleMenu);
  };

  const selectAdopter = () => {
    setIsAdopter(true);
    setAdoptionType('Sou adotador');
    setVisibleMenu(!visibleMenu);
  };

  const register = async () => {
    if (!name || !cpfOrCnpj || !cep || !email || !password || !phone) {
      setIsSnackBarVisible(!isSnackbarVisible);
      setSnackbarText('Preencha todos os campos');
      return;
    }

    if (!checked) {
      setIsSnackBarVisible(!isSnackbarVisible);
      setSnackbarText('Termos e condições não aceitos');
      return;
    }

    const data = {
      data: {
        name,
        adm: false,
        adopter: isAdopter,
        birthDate,
        cpfOrCnpj,
        cep,
        email,
        password,
        phone,
      },
    };

    try {
      await api.post(`/user/create`, data);
      setVisibleRegistrationModal(!visibleRegistrationModal);
    } catch (e: any) {
      if (e.response.data) {
        setIsSnackBarVisible(!isSnackbarVisible);
        setSnackbarText(
          e.response.data.error.detail === 'Internal Server Error'
            ? 'Cadastro não foi concluído'
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
        <Menu
          visible={visibleMenu}
          onDismiss={() => setVisibleMenu(!visibleMenu)}
          anchor={
            <Pressable style={styles.dropdown} onPress={() => setVisibleMenu(!visibleMenu)}>
              <Text style={styles.dropdownText}>{adoptionType ? adoptionType : 'Sou adotador'}</Text>
              <Button labelStyle={{ color: color.purple, fontSize: 30 }} icon='chevron-down' children />
            </Pressable>
          }
        >
          <Menu.Item contentStyle={{ width: '100%' }} onPress={() => selectAdopter()} title='Sou adotador' />
          <Menu.Item contentStyle={{ width: '100%' }} onPress={() => selectOng()} title='Sou ONG' />
        </Menu>

        <Input placeholder='Nome' onChange={setName} />
        <Input placeholder='Data de nascimento' onChange={setBirthDate} hide={!isAdopter} birthDate />
        <Input placeholder='Telefone ou celular' onChange={setPhone} phone />
        <Input
          placeholder={isAdopter ? 'CPF' : 'CNPJ'}
          onChange={setcpfOrCnpj}
          cpfOrCnpj={isAdopter ? 'CPF' : 'CNPJ'}
        />
        <Input placeholder='CEP' onChange={setCep} cep />
        <Input placeholder='E-mail' onChange={setEmail} />
        <Input placeholder='Senha' onChange={setPassword} password />

        <View style={styles.terms}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />

          <Text style={styles.termsText}>Eu li e aceito os </Text>

          <Pressable onPress={() => setVisibleTermModal(!visibleTermModal)}>
            <Text style={styles.linkText}>termos e condições.</Text>
          </Pressable>

          <Portal>
            <Modal
              visible={visibleTermModal}
              onDismiss={() => setVisibleTermModal(!visibleTermModal)}
              contentContainerStyle={styles.termModalContainer}
            >
              <Text style={styles.termModalTitle}>Termos e condições</Text>
              <Text style={styles.termModalDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Text>
              <Pressable onPress={() => setVisibleTermModal(!visibleTermModal)} style={styles.termModalButton}>
                <Text style={styles.termModalButtonText}>Ok</Text>
              </Pressable>
            </Modal>
          </Portal>
        </View>

        <View style={styles.buttonContainer}>
          <RegisterButton text='Cadastrar' onPress={() => register()} />

          <Portal>
            <Modal
              visible={visibleRegistrationModal}
              onDismiss={() => setVisibleRegistrationModal(!visibleRegistrationModal)}
              contentContainerStyle={styles.registrationModalContainer}
            >
              <Text style={styles.registrationModalTitle}>Sucesso!</Text>
              <Text style={styles.registrationModalDescription}>
                Agora é só aguardar. Entraremos em contato por email assim que seu cadastro for concluído.
              </Text>
              <Pressable
                onPress={() => setVisibleRegistrationModal(!visibleRegistrationModal)}
                style={styles.registrationModalButton}
              >
                <Text style={styles.registrationModalButtonText}>Ok</Text>
              </Pressable>
            </Modal>
          </Portal>
        </View>
      </View>
    </View>
  );
};
