import React from 'react';
import MainNavigator from './src/screens/main-navigator';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
export default App;
