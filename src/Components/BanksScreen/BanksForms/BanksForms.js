import React from 'react';
import { Text, View } from 'react-native';
import { Field, reduxForm } from 'redux-form';

import TextInputSimple from '../../Common/TextInputSimple';
import TextInputArea from '../../Common/TextInoutArea';
import SubmitButton from '../../Common/SubmitButton';

const BanksForms = props => {
  const submitForm = values => {
    console.log('Submitting form', values);
  };

  const { handleSubmit } = props;
  const { containerStyle, labelStyle } = styles;

  return (
    <View style={containerStyle}>
      {/* Two field form. TODO refactor in field with label */}
      <Text style={labelStyle}>Card number:</Text>
      <Field name="card-number" component={TextInputSimple}/>
      <Text style={labelStyle}>Card info:</Text>
      <Field name="card-info" component={TextInputArea}/>
      {/* Submit button component */}
      <SubmitButton buttonLabel="Submit" handleSubmit={handleSubmit(submitForm)}/>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    margin: 15
  },

  labelStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 15,
    paddingLeft: 5,
    color: '#a00037'
  }

};

export default reduxForm({
  form: 'credit-card'
})(BanksForms);
