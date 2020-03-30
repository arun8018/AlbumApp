import React from 'react';
import {View} from 'react-native';
import Header from './src/Components/Header';
import AlbumList from './src/Components/AlbumList';
const App = () => {
  //style={{flex: 1}}  for smooth scrolling
  return (
    <View style={{flex: 1}}>
      <Header HeaderText={'Albums'} />
      <AlbumList />
    </View>
  );
};

export default App;
