import React, { useState } from 'react'
import { useWindowDimensions, View, Text, Pressable, Alert } from 'react-native'
import { makeStyles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../routes'
import { Button as RegisterButton } from '../../components/button'
import { Input } from '../../components/input'
import { Checkbox, Button, Menu, Portal, Modal } from 'react-native-paper'
import { color } from '../../themes'
import { userCreate } from '../../services'
import { api } from '../../services/api'
import axios from 'axios'

type registerScreenProp = StackNavigationProp<RootStackParamList>

export const Register: React.FC = () => {
  const navigation = useNavigation<registerScreenProp>()

  const { fontScale } = useWindowDimensions()
  const styles = makeStyles(fontScale)

  const [checked, setChecked] = useState(false)
  const [visibleMenu, setVisibleMenu] = useState(false)
  const [visibleTermModal, setVisibleTermModal] = useState(false)
  const [visibleRegistrationModal, setVisibleRegistrationModal] = useState(false)
  const [adoptionType, setAdoptionType] = useState('')
  const [isAdopter, setIsAdopter] = useState(false)

  const [name, setName] = useState('')
  const [cpfOrCnpj, setcpfOrCnpj] = useState('')
  const [cep, setCep] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  const selectOng = () => {
    setIsAdopter(false)
    setAdoptionType('Sou ONG')
    setVisibleMenu(!visibleMenu)
  }

  const selectAdopter = () => {
    setIsAdopter(true)
    setAdoptionType('Sou adotador')
    setVisibleMenu(!visibleMenu)
  }

  const register = async () => {
    if (!checked) return
    if (!name || !isAdopter || !cpfOrCnpj || !cep || !email || !password || !phone) return

    const data = {
      data: {
        name,
        adm: false,
        adopter: isAdopter,
        cpfOrCnpj,
        cep,
        email,
        password,
        phone,
      },
    }

    try {
      const user = await axios.post(`http://localhost:3003/user/create`, { data })
      console.log('ys', user)
    } catch (e) {
      console.log('catch')
      Alert
    }

    setVisibleRegistrationModal(!visibleRegistrationModal)
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

        <Input placeholder='Nome' onChange={setName} />
        <Input placeholder='Telefone ou celular' onChange={setPhone} />
        <Input placeholder='CNPJ/CPF' onChange={setcpfOrCnpj} />
        <Input placeholder='CEP' onChange={setCep} />
        <Input placeholder='E-mail' onChange={setEmail} />
        <Input placeholder='Senha' onChange={setPassword} password />

        <View style={styles.terms}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked)
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
          <RegisterButton text='Cadastrar' screen={() => register()} />

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
  )
}
