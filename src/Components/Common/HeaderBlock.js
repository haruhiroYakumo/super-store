import React from 'react';
import { Text, View } from 'react-native';

const HeaderBlock = ({ systemMessages }) => {

  // Component to represent some various onscreen info, tips and hints
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.fontStyle}>
        {systemMessages.firstLine}
      </Text>
      <Text style={styles.fontStyle}>
        {systemMessages.secondLine}
      </Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    padding: 15,
    flex: 1,
    maxHeight: 125,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fontStyle: {
    color: '#d81b60',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 5
  }
};

export default HeaderBlock;
