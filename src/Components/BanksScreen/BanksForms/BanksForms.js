import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Field, reduxForm } from 'redux-form';

// TEMP
const renderInput = ({ input: { onChange, ...restInput } }) => {
  return (
    <TextInput style={styles.inputStyle} onChangeText={onChange} {...restInput} />
  );
};

const BanksForms = props => {
  const submit = values => {
    console.log('Submitting form', values);
  };

  const { handleSubmit } = props;

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>Card number:</Text>
      <Field name="card-number" component={renderInput}/>
      <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmit(submit)}>
        <Text style={styles.textStyle}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    margin: 15
  },
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
  inputStyle: {
    height: 30,
    paddingLeft: 5,
    paddingRight: 5,
    lineHeight: 23,
    fontSize: 20,
    color: '#000',
    borderBottomColor: '#a00037',
    borderBottomWidth: 2
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingLeft: 5,
    color: '#a00037'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#a00037',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default reduxForm({
  form: 'credit-card'
})(BanksForms);
