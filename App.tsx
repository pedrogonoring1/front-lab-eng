import { Dimensions, StyleSheet, View } from 'react-native'
import { Routes } from './src/routes'

export const windowWidth = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height

const App = () => {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
})

export default App
