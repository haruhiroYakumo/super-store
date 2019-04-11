import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// Medium-wide submit button with 'redux-form' submit method

const SubmitButton = ({ handleSubmit, buttonLabel }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <View>
      <TouchableOpacity style={buttonStyle} onPress={handleSubmit}>
        <Text style={textStyle}>{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#a00037',
    height: 40,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 40
  },
  textStyle: {
    alignSelf: 'center',
    color: '#a00037',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default SubmitButton;
