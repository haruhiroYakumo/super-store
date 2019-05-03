import React from 'react';
import { TextInput } from 'react-native';

/**
 * Simple single-line text input with the support of
 * setting a 'defaultValue'
 * @param defaultValue
 * @param onChange
 * @returns {*}
 * @constructor
 */

const TextInputSimple = ({ defaultValue, input: { onChange } }) => {
  return (
    <TextInput
      defaultValue={defaultValue ? defaultValue : ''}
      style={styles.inputStyle}
      onChangeText={onChange}
    />
  );
};

const styles = {
  inputStyle: {
    height: 30,
    paddingLeft: 5,
    paddingRight: 5,
    lineHeight: 23,
    fontSize: 20,
    color: '#000',
    borderBottomColor: '#a00037',
    borderBottomWidth: 2
  }
};

export default TextInputSimple;
