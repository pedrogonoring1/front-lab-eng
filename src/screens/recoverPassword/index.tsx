import React, { useState } from 'react'
import { useWindowDimensions, View, Text, Pressable, Image } from 'react-native'
import { makeStyles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../routes'
import { Button as RegisterButton } from '../../components/button'
import { Input } from '../../components/input'
import { Button, Portal, Modal } from 'react-native-paper'
import { color } from '../../themes'

type revocerPasswordScreenProp = StackNavigationProp<RootStackParamList>

export const RecoverPassword: React.FC = () => {
  const navigation = useNavigation<revocerPasswordScreenProp>()

  const { fontScale } = useWindowDimensions()
  const styles = makeStyles(fontScale)

  const [visibleModal, setVisibleModal] = useState(false)

  return (
    <View style={styles.wrapper}>
      <View style={styles.topContainer}>
        <Pressable style={[styles.returnButton, styles.elevation]}>
          <Button
            labelStyle={{ color: color.lightWhite, fontSize: 30 }}
            icon='chevron-left'
            buttonColor='transparent'
            children
          />
        </Pressable>
      </View>

      <View style={styles.container}>
        <Image source={require('../../utils/images/Vector.png')} />
        <Text style={styles.title}>Dogs Adoption</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.description}>Digite seu e-mail cadastrado para receber uma nova senha.</Text>

        <Input placeholder='Email' />

        <View style={styles.buttonContainer}>
          <RegisterButton text='Enviar' screen={() => setVisibleModal(!visibleModal)} />

          <Portal>
            <Modal
              visible={visibleModal}
              onDismiss={() => setVisibleModal(!visibleModal)}
              contentContainerStyle={styles.modalContainer}
            >
              <Text style={styles.modalTitle}>Sucesso!</Text>
              <Text style={styles.modalDescription}>
                A nova senha foi enviada para o seu e-mail. Você pode redefiní-la acessando o seu perfil após fazer
                login.
              </Text>
              <Pressable onPress={() => setVisibleModal(!visibleModal)} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Ok</Text>
              </Pressable>
            </Modal>
          </Portal>
        </View>
      </View>
    </View>
  )
}
