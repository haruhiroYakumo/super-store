import React from 'react';
import { View } from 'react-native';
import ExpoMaterialIcon from '../Common/ExpoMaterialIcon';

import { navigationItems } from '../../ReactNavigation/navigationItems';

const IconsContainer = () => {

  // Render navigation icons method
  const renderNavigationItems = items =>
    items.map(
      item => <ExpoMaterialIcon
        key={item.iconId}
        iconColor={item.iconColor}
        iconName={item.iconName}
        iconText={item.iconText}
      />
    );

  return (
    <View style={styles.containerStyle}>
      {renderNavigationItems(navigationItems)}
    </View>
  );
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
