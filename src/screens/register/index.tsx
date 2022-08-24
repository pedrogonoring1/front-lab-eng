import React, { useState } from 'react'
import { useWindowDimensions, View, Text, Pressable } from 'react-native'
import { makeStyles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../routes'
import { Button as RegisterButton } from '../../components/button'
import { Input } from '../../components/input'
import { Checkbox, Button, Menu, Portal, Modal } from 'react-native-paper'
import { color } from '../../themes'

type registerScreenProp = StackNavigationProp<RootStackParamList>

export const Register: React.FC = () => {
  const navigation = useNavigation<registerScreenProp>()

  const { fontScale } = useWindowDimensions()
  const styles = makeStyles(fontScale)

  const [checked, setChecked] = useState(false)
  const [visibleMenu, setVisibleMenu] = useState(false)
  const [visibleModal, setVisibleModal] = useState(false)
  const [adoptionType, setAdoptionType] = useState('')

  const selectOng = () => {
    setAdoptionType('Sou ONG')
    setVisibleMenu(!visibleMenu)
  }

  const selectAdopter = () => {
    setAdoptionType('Sou adotador')
    setVisibleMenu(!visibleMenu)
  }

  const register = () => {
    if (!checked) return

    console.log('Cadastrado')
  }

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

        <Input placeholder='Nome' />
        <Input placeholder='CNPJ/CPF' />
        <Input placeholder='Endereço completo' />
        <Input placeholder='CEP' />
        <Input placeholder='E-mail' />
        <Input placeholder='Senha' />

        <View style={styles.terms}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked)
            }}
          />

          <Text style={styles.termsText}>Eu li e aceito os </Text>

          <Pressable onPress={() => setVisibleModal(!visibleModal)}>
            <Text style={styles.linkText}>termos e condições.</Text>
          </Pressable>

          <Portal>
            <Modal
              visible={visibleModal}
              onDismiss={() => setVisibleModal(!visibleModal)}
              contentContainerStyle={styles.modalContainer}
            >
              <Text style={styles.modalTitle}>Termos e condições</Text>
              <Text style={styles.modalDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Text>
              <Pressable onPress={() => setVisibleModal(!visibleModal)} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Ok</Text>
              </Pressable>
            </Modal>
          </Portal>
        </View>
        <View style={styles.buttonContainer}>
          <RegisterButton text='Cadastrar' screen={() => register()} />
        </View>
      </View>
    </View>
  )
}
