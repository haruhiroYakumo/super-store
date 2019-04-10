import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import Header from '../Common/Header';
import HeaderBlock from '../MenuScreen/HeaderBlock/HeaderBlock';

class BanksScreen extends Component {
  render() {
    const { navigation } = this.props;
    const { buttonStyle, textStyle, containerStyle, iconStyle } = styles;

    return (
      <View style={containerStyle}>
        <Header title="Banking"/>
        {/* If we have no records, show this message */}
        <TouchableOpacity
          style={buttonStyle}
          onPress={() => navigation.navigate('BanksForms')}
        >
          <Text
            style={textStyle}
          >
            Save credit card number
          </Text>
          <Ionicons
            style={iconStyle}
            size={65}
            name="md-paper"
            color="#00897b"
          />
        </TouchableOpacity>
        {null || <HeaderBlock/>}
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignContent: 'center'
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#a00037',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 18
  },
  iconStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

export default withNavigation(BanksScreen);
