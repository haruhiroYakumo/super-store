import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const ExpoMaterialIcon = ({ navigation }) => {

  // In 'react-navigation' we need to pass down navigation
  // props to be able call 'navigation()' or 'push(methods)'

  // Navigate to a certain screen method
  const navigateTo = () => {
    navigation.navigate('Banks');
  };

  return (
    <View style={styles.containerStyle}>
      <Ionicons
        name="md-business"
        size={65}
        color="#d81b60"
        onPress={navigateTo}
      />
      <Text style={styles.fontStyle}>
        Button text
      </Text>
    </View>
  );

};

const styles = {
  containerStyle: {
    margin: 12,
    marginRight: 15,
    marginLeft: 15,
    alignItems: 'center',
    width: 70,
    height: 85
  },
  fontStyle: {
    fontWeight: 'bold',
    fontSize: 13
  }
};

export default withNavigation(ExpoMaterialIcon);
