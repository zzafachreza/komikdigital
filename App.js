import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Screen/Splash';
import { StatusBar, LogBox } from 'react-native';
import { colors } from './utils';
import Home from './Screen/Home';
import Cek from './Screen/Cek';
import Menu5 from './Screen/Menu5';
import Menu1 from './Screen/Menu1';
import Menu2 from './Screen/Menu2';
import Menu3 from './Screen/Menu3';
import Menu4 from './Screen/Menu4';
import Materi2 from './Screen/Materi2';
import Materi1 from './Screen/Materi1';
import Evaluasi1 from './Screen/Evaluasi1';
import Evaluasi2 from './Screen/Evaluasi2';

const Stack = createStackNavigator();
export default function App() {

  LogBox.ignoreAllLogs();


  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Stack.Navigator initialRouteName={'Splash'}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cek"
          component={Cek}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Menu5"
          component={Menu5}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Menu4"
          component={Menu4}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Menu3"
          component={Menu3}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Menu2"
          component={Menu2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Menu1"
          component={Menu1}
          options={{
            headerShown: false,
          }}
        />

        {/* materi */}

        <Stack.Screen
          name="Materi2"
          component={Materi2}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Materi1"
          component={Materi1}
          options={{
            headerShown: false,
          }}
        />


        <Stack.Screen
          name="Evaluasi1"
          component={Evaluasi1}
          options={{
            headerShown: false,
          }}
        />



        <Stack.Screen
          name="Evaluasi2"
          component={Evaluasi2}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
