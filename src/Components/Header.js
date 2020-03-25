import React from 'react';
import {Text, View} from 'react-native';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {textStyle, viewStyle} = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.HeaderText}</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

export default Header;
