import React from 'react';
import {View} from 'react-native';
import axios from 'axios';
import AlbumDetails from '../Components/AlbumDetails';
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
    return this.state.albums.map(album => (
      <AlbumDetails key={album.title} data={album}></AlbumDetails>
    ));
  }
  render() {
    return <View>{this.renderAlbumList()}</View>;
  }
}

export default AlbumList;
