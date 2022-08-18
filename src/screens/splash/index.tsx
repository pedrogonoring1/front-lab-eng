import React from 'react'
import { Text } from '@rneui/themed'
import { Pressable, useWindowDimensions, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { makeStyles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'src/routes'
import { color } from '../../themes/color'

type splashScreenProp = StackNavigationProp<RootStackParamList, 'Splash'>

export const Splash: React.FC = () => {
  const navigation = useNavigation<splashScreenProp>()

  const { fontScale } = useWindowDimensions()
  const styles = makeStyles(fontScale)

  return (
    <LinearGradient
      style={styles.gradient}
      colors={[color.red.dark, color.orange.dark, color.yellow.dark]}
      end={{ x: 0.1, y: 0.9 }}
    >
      <View style={styles.topContainer} />

      <View style={styles.container}>
        <Text style={styles.title}>Opa!</Text>
        <Text style={styles.subtitle}>Bem vindo!</Text>
        <Text style={styles.description}>Something</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Pressable onPress={() => navigation.navigate('Splash')}>
          <Text style={styles.linkText}>Alguma coisa</Text>
        </Pressable>

        <View style={styles.horizontalRuleContainer}>
          <View style={styles.horizontalRule} />
          <Text style={styles.buttonText}>Ou</Text>
          <View style={styles.horizontalRule} />
        </View>

        <Pressable onPress={() => navigation.navigate('Splash')} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
      </View>
    </LinearGradient>
  )
}
