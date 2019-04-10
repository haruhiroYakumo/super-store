import React, { Component } from 'react';
import { View } from 'react-native';
// Components
import HeaderBlock from './HeaderBlock/HeaderBlock';
import Header from '../Common/Header';
import IconsContainer from './IconsContainer';

class MenuScreen extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        {/* Header text/info block */}
        <HeaderBlock/>
        {/* Header title */}
        <Header title="Categories"/>
        <IconsContainer/>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1
  }
};

export default MenuScreen;
