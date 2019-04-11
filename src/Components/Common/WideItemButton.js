import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

const WideItemButton = ({ navigation }) => {
  const { buttonStyle, textStyle, iconStyle } = styles;

  return (
    <View>
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
          name="md-card"
          color="#d81b60"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 18,
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
    marginTop: 18,
    marginBottom: 8
  },
  iconStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

export default withNavigation(WideItemButton);
