import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text} from 'react-native';
//import Login from '../src/screens/Login';
//import Principal from '../src/screens/Principal';
//import Cadastro from '../src/screens/Cadastro';
//import Usuario from '../src/screens/Usuario';
//import Detalhes from '../src/screens/Detalhes';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View> 
        <Text> Teste </Text>
    </View>
    //<NavigationContainer independent={true}>
    //  <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
    //    <Stack.Screen name="Login" component={Login} />
    //    <Stack.Screen name="Principal" component={Principal} />
    //    <Stack.Screen name="Cadastro" component={Cadastro} />
    //    <Stack.Screen name="Usuario" component={Usuario} />
    //    <Stack.Screen name="Detalhes" component={Detalhes} />
    //  </Stack.Navigator>
    //</NavigationContainer>
  );
}
