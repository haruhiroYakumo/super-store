import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ExpoMaterialIcon = () => {
  return (
    <View style={styles.containerStyle}>
      <Ionicons name="md-business" size={65} color="#d81b60"/>
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
    // backgroundColor: 'red',
    alignItems: 'center',
    width: 70,
    height: 85
  },
  fontStyle: {
    fontWeight: 'bold',
    fontSize: 13
  }
};

export default ExpoMaterialIcon;
