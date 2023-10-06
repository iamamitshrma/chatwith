import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@rneui/themed';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import Navigation from './src/navigations/Navigation';
import 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider>
          <Navigation />
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
