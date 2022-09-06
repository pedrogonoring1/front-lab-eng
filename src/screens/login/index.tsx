import React from 'react'
import { Text } from '@rneui/themed'
import { Pressable, useWindowDimensions, View, Image, TextInput, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'src/routes'
import { makeStyles } from './styles'
import { Button as LoginButton } from '../../components/button'


type loginScreen = StackNavigationProp<RootStackParamList, 'Login'>

export const Login: React.FC = () => {
  const navigation = useNavigation<loginScreen>()

  const { fontScale } = useWindowDimensions()
  const styles = makeStyles(fontScale)

  return (
    <View style={styles.body}>
      <Image
        style={styles.logo}
        source={require('../../utils/images/Vector.png')}
      />

      <Text style={styles.title}>Dogs Adoption</Text>

      <View>
        <TextInput
          style={styles.inputs}
          placeholder="  Email"
        />

        <TextInput
          style={styles.inputs}
          placeholder="  Senha"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.loginButton}>
        <LoginButton text='Entrar'/>
        <Text style={styles.text}>Cadastrar</Text>
      </View>

      <View>
          <Text style={[styles.text, {marginTop: 160}]}>Esqueceu a senha?</Text>
      </View>
    </View>    
  )
}
