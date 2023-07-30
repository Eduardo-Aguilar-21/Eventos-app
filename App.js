import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { Cuenta } from './screens/Cuenta';
import { Redirigir } from './screens/Login/Redirigir';
import { CustomBottomTabBar } from './CustomBottomTabBar';
import { Home } from './screens/Home';

export default function App() {

  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState(null);

  const ListarUser = async () => {
    const rolValue = await AsyncStorage.getItem('rol');
    setUser(rolValue);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Cuenta' component={Cuenta} />
        <Stack.Screen name='Redirigir' component={Redirigir} />
        <Stack.Screen
          name="Inicio"
          component={CustomBottomTabBar}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Menu"
          component={Home}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
