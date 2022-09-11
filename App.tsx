import { Dimensions, StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/themes';
import { Routes } from './src/routes';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Routes />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
});

export default App;
