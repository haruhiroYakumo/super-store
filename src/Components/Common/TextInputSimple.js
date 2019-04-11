import React from 'react';
import { TextInput } from 'react-native';

// Simple input component

const TextInputSimple = ({ input: { onChange, ...restInput } }) => {
  return (
    <TextInput style={styles.inputStyle} onChangeText={onChange} {...restInput} />
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
