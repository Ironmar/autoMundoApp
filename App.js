import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import HomeView from './src/views/HomeView';
import ProductView from './src/views/ProductView';
import CarView from './src/views/CarView';
import store from './src/store/store';
import {theme} from './src/configs/theme';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="home" component={HomeView} />
            <Stack.Screen name="product" component={ProductView} />
            <Stack.Screen name="cart" component={CarView} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};
export default App;
