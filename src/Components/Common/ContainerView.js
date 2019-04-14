import React from 'react';
import { View } from 'react-native';

// General layout container
const ContainerView = ({ children }) => {
  return (
    <View style={styles.containerStyle}>
      {children}
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    margin: 15
  }
};

export default ContainerView;
