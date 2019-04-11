import React from 'react';
import { TextInput } from 'react-native';

// Textarea input component

const TextInputArea = ({ input: { onChange, ...restInput } }) => {
  return (
    <TextInput
      style={styles.inputStyleTextArea}
      onChangeText={onChange}
      {...restInput}
      multiline
    />
  );
};

const styles = {
  inputStyleTextArea: {
    height: 100,
    paddingLeft: 5,
    paddingRight: 5,
    lineHeight: 23,
    fontSize: 20,
    color: '#000',
    borderBottomColor: '#a00037',
    borderBottomWidth: 2
  }
};

export default TextInputArea;
