import {View, Text} from 'react-native';
import React from 'react';
import StackNavigation from './src/navigations/StackNavigation';
import {WishlistProvider} from './src/screens/WishlistContext';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <WishlistProvider>
        <StackNavigation />
      </WishlistProvider>
    </PaperProvider>
  );
};

export default App;
