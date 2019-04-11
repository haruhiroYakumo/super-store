import React, { Component } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import Header from '../Common/Header';
import HeaderBlock from '../Common/HeaderBlock';
import WideItemButton from '../Common/WideItemButton';
import { systemMessages } from '../Common/systemMessages';

class BanksScreen extends Component {
  render() {
    const { containerStyle } = styles;

    return (
      <View style={containerStyle}>
        <Header title="Banking"/>
        {/* If we have no records, show this message */}
        {null || <HeaderBlock systemMessages={systemMessages.banksScreen}/>}
        {/* Forms navigation buttons */}
        <WideItemButton/>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignContent: 'center'
  }
};

export default withNavigation(BanksScreen);
