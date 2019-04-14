import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

/**
 * Reusable button with navigation. Props:
 * { label } - button label;
 * { navigateTo } - navigation destination;
 * { iconName } - icon;
 * { iconColor } - icon color;
 * @param navigation
 * @param label
 * @param navigateTo
 * @param IconColor
 * @param iconName
 * @return {*}
 */

const WideItemButton = ({ navigation, label, navigateTo, iconName, iconColor }) => {
  const { buttonStyle, textStyle, iconStyle } = styles;

  return (
    <View>
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => navigation.navigate(navigateTo)}
      >
        <Text
          style={textStyle}
        >
          {label}
        </Text>
        <Ionicons
          style={iconStyle}
          size={65}
          name={iconName}
          color={iconColor}
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
