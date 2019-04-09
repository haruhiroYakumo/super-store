import React, { Component } from 'react';
import { Text, View } from 'react-native';
// Components
import HeaderBlock from './HeaderBlock/HeaderBlock';
import Header from '../Common/Header';

class MenuScreen extends Component {
  render() {
    return (
      <View>
        <HeaderBlock/>
        <Header title="Categories"/>
        <Text>Bla</Text>
      </View>
    );
  }
}

export default MenuScreen;
