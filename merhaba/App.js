import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25}}>Merhaba Dünya</Text>
      <Text style={styles.content}>Hello World</Text>
      <Text style={styles.title}>Enes Taştan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title :{
    fontSize: 50,
  },
  content :{
    fontSize: 35,
  }
});
