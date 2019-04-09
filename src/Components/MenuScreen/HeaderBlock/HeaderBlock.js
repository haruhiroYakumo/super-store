import React from 'react';
import { Text, View } from 'react-native';

const HeaderBlock = () => {
  return (
    <View style={styles.headerBlockLayout}>
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
  headerBlockLayout: {
    flex: 1,
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fontStyle: {
    color: '#a00037'
  }
};

export default HeaderBlock;
