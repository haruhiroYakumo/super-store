import React from 'react';
import { Text, View } from 'react-native';

const HeaderBlock = () => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.fontStyle}>
        You have no records!
      </Text>
      <Text style={styles.fontStyle}>
        What information do you want to save now?
      </Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    maxHeight: 125,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fontStyle: {
    color: '#a00037'
  }
};

export default HeaderBlock;
