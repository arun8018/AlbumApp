import React from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';
class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }
  componentDidMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums: response.data}));
  }

  renderAlbumList() {
    return this.state.albums.map((album, i) => (
      <Text key={i}>{album.title}</Text>
    ));
  }
  render() {
    return <View>{this.renderAlbumList()}</View>;
  }
}

export default AlbumList;
