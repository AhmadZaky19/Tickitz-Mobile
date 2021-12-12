import React from 'react';
import MainStackNavigator from './src/navigation';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/stores/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <MainStackNavigator />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
