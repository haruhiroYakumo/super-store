import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const ExpoMaterialIcon = ({ navigation, iconColor, iconName, iconText }) => {

  // Navigate to a certain screen method
  const navigateTo = () => {
    navigation.navigate(iconText);
  };

  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity onPress={navigateTo}>
        <Ionicons
          size={65}
          name={iconName}
          color={iconColor}
        />
        <Text style={styles.fontStyle}>
          {iconText}
        </Text>
      </TouchableOpacity>
    </View>
  );

};

const styles = {
  containerStyle: {
    margin: 15,
    marginRight: 15,
    marginLeft: 15,
    alignItems: 'center',
    width: 70,
    height: 85
  },
  fontStyle: {
    fontWeight: 'bold',
    fontSize: 13,
    alignSelf: 'center'
  }
};

export default withNavigation(ExpoMaterialIcon);
