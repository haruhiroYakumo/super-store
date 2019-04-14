import React from 'react';
import { Text, View } from 'react-native';

/**
 * Reusable header component. Props to pass:
 * { header } - label name
 * @param title
 * @return {*}
 */

const Header = ({ title }) => {
  return (
    <View style={styles.containerBorder}>
      <Text style={styles.headerStyle}>
        {title}
      </Text>
    </View>
  );
};

const styles = {
  containerBorder: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 4,
    height: 70,
    borderStyle: 'solid',
    borderBottomColor: '#d81b60',
    borderBottomWidth: 2
  },
  headerStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#d81b60'
  }
};

export default Header;
