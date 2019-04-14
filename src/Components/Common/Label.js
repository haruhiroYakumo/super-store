import React from 'react';
import { Text, View } from 'react-native';

// Reusable label component
const Label = ({ label }) => {
  const { labelStyle } = styles;

  return (
    <View>
      <Text style={labelStyle}>{label}</Text>
    </View>
  );
};

const styles = {
  labelStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 15,
    paddingLeft: 5,
    color: '#a00037'
  }
};

export default Label;
