import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import TextInputSimple from '../../Common/TextInputSimple';
import TextInputArea from '../../Common/TextInoutArea';
import SubmitButton from '../../Common/SubmitButton';
import { postCard } from '../../../Redux/actions';

class BanksForms extends Component {

  /**
   * Submit the credit card form
   * @param values
   * @return *
   */
  submitForm = values => {
    this.props.sendCardData(values);
  };

  render() {

    const { handleSubmit } = this.props;
    const { containerStyle, labelStyle } = styles;

    return (
      <View style={containerStyle}>
        {/* Two field form. TODO refactor in field with label */}
        <Text style={labelStyle}>Card number:</Text>
        <Field name="number" component={TextInputSimple}/>
        <Text style={labelStyle}>Card info:</Text>
        <Field name="info" component={TextInputArea}/>
        {/* Submit button component */}
        <SubmitButton buttonLabel="Submit" handleSubmit={handleSubmit(this.submitForm)}/>
      </View>
    );
  }
}

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

const mapDispatchToProps = dispatch => ({
  sendCardData: data => dispatch(postCard(data))
});

BanksForms = reduxForm({
  form: 'credit-card'
})(BanksForms);

BanksForms = connect(null, mapDispatchToProps)(BanksForms);

export default BanksForms;
