import React from 'react';
import {View} from 'react-native';
import ExpoMaterialIcon from '../Common/ExpoMaterialIcon';

const IconsContainer = () => {
  return (
    <View style={styles.containerStyle}>
      <ExpoMaterialIcon/>
      <ExpoMaterialIcon/>
      <ExpoMaterialIcon/>
    </View>
  )
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: 15
  }
};

export default IconsContainer;
