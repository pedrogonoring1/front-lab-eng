import React, { useState } from 'react';
import { Text } from 'react-native';
import { Pressable, useWindowDimensions, View, Image, ScrollView } from 'react-native';
import { Modal, Portal, Snackbar, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../../routes';
import { Input } from '../../../components/input';
import { makeStyles } from './styles';
import { Button } from '../../../components/button';
import { CardImg } from '../../../components/cardImg';
import { api } from '../../../services/api';


type dogDetailsScreen = StackNavigationProp<RootStackParamList, 'DogDetails'>;

export const DogDetails: React.FC = () => {
  const navigation = useNavigation<dogDetailsScreen>();

  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);

  const [visibleSuccessModal, setVisibleSuccessModal] = useState(false);
  const [isSnackbarVisible, setIsSnackBarVisible] = useState(false);
  const [snackBarText, setSnackbarText] = useState('');

  return (
    <ScrollView style={styles.body}>
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

      <View style={styles.imgContainer}>
        <View style={styles.img}>
          <CardImg />
        </View>
        <View>
          <Title style={styles.title}>Totó</Title>
        </View>
      </View>

      <View>        
        <Image style={styles.icon} source={require('../../../assets/icons/edit.png')} />
        <Title style={styles.subtitle}>Sexo: macho</Title>
        <Title style={styles.subtitle}>Idade: 2 anos</Title>
        <Title style={styles.subtitle}>Tamanho: M</Title>
        <Title style={styles.subtitle}>História:</Title>
        <Title style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</Title>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.button}>
          <Button text='Adotar' />

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
    </ScrollView>
  );
};
