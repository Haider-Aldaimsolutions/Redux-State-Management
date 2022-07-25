import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Screen1 from './screen1';
import configureStore from './Redux/store';
import { NavigationContainer } from '@react-navigation/native';
import Screen2 from './screen2';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  const store=configureStore();
  const Stack=createNativeStackNavigator();
  return (

<Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="screen1" component={Screen1} />
    <Stack.Screen name="screen2" component={Screen2} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:50,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
