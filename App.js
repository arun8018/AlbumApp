import React from 'react';
import {View} from 'react-native';
import Header from './src/Components/Header';
import AlbumList from './src/Components/AlbumList';
const App = () => {
  return (
    <View>
      <Header HeaderText={'Albums'} />
      <AlbumList />
    </View>
  );
};

export default App;
